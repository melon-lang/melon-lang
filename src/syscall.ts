import { InvalidType, SycallArgumentNumberMismatch } from "./error";
import {Value, StringValue, NumberValue, BooleanValue, HostRefValue, LocationRefValue, ImageRefValue, AudioRefValue, VideoRefValue, FileRefValue} from './value'

type HostRefConstructor = new (value: string) => HostRefValue;
type ParamType = 'string' | 'number' | 'any' | 'host_ref';
type ReturnType = 'string' | 'number' | 'boolean' | HostRefConstructor;

interface SyscallParam {
    type: ParamType;
    optional?: boolean;
    default?: Value;
}

interface SyscallDefinition {
    syscallId: string;
    preprocessor: (args: Value[], lineNumber: number) => Value[];
    returnType: ReturnType;
}

function defineSyscall(name: string, syscallId: string, params: SyscallParam[], returnType: ReturnType = 'string'): SyscallDefinition {
    const requiredCount = params.filter(p => !p.optional).length;
    return {
        syscallId,
        returnType,
        preprocessor: (args: Value[], lineNumber: number): Value[] => {
            if (args.length < requiredCount || args.length > params.length)
                throw new SycallArgumentNumberMismatch(lineNumber, name, requiredCount, args.length);
            return params.flatMap((param, i) => {
                if (i < args.length) {
                    const arg = args[i];
                    switch (param.type) {
                        case 'string':
                            if (!(arg instanceof StringValue))
                                throw new InvalidType(lineNumber, StringValue.typeName, arg.typeName, `Argument ${i + 1} of ${name} must be a string.`);
                            return [arg];
                        case 'number':
                            if (!(arg instanceof NumberValue))
                                throw new InvalidType(lineNumber, NumberValue.typeName, arg.typeName, `Argument ${i + 1} of ${name} must be a number.`);
                            return [arg];
                        case 'any':
                            return [arg];
                        case 'host_ref':
                            if (!(arg instanceof HostRefValue))
                                throw new InvalidType(lineNumber, HostRefValue.typeName, arg.typeName, `Argument ${i + 1} of ${name} must be a host reference.`);
                            return [arg];
                    }
                }
                return param.default !== undefined ? [param.default] : [];
            });
        }
    };
}

const syscallDefinitions: Record<string, SyscallDefinition> = {
    'syscall': {
        syscallId: 'is.melon.syscall',
        returnType: 'string',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length < 2)
                throw new SycallArgumentNumberMismatch(lineNumber, 'syscall', 2, args.length);

            if (!(args[0] instanceof StringValue))
                throw new InvalidType(lineNumber, StringValue.typeName, args[0].typeName, 'First argument of syscall (syscall id) must be a string');

            return args;
        },
    },
    'print': {
        syscallId: 'is.workflow.actions.showresult',
        returnType: 'string',
        preprocessor: (args: Value[], lineNumber: number) => {
            return [new StringValue(args.map(arg => arg.str).join(' '))];
        }
    },
    'input': defineSyscall('input', 'is.workflow.actions.prompt', [
        { type: 'string', optional: true }
    ]),
    'exit': {
        syscallId: 'is.workflow.actions.stop',
        returnType: 'string',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length > 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'exit', 1, args.length);
            else if (args.length === 1)
                return [new StringValue(args[0].str)];
            else
                return [new StringValue("")];
        }
    },

    // --- UI / Notifications ---

    'alert': defineSyscall('alert', 'is.workflow.actions.alert', [
        { type: 'string' },
        { type: 'string', optional: true, default: new StringValue('') }
    ]),
    'confirm': defineSyscall('confirm', 'is.workflow.actions.confirm', [
        { type: 'string' },
        { type: 'string', optional: true, default: new StringValue('') }
    ]),
    'notify': defineSyscall('notify', 'is.workflow.actions.notification', [
        { type: 'string' },
        { type: 'string', optional: true, default: new StringValue('') }
    ]),
    'speak': defineSyscall('speak', 'is.workflow.actions.speaktext', [
        { type: 'string' }
    ]),

    // --- Clipboard ---

    'getClipboard': defineSyscall('getClipboard', 'is.workflow.actions.getclipboard', []),
    'setClipboard': defineSyscall('setClipboard', 'is.workflow.actions.setclipboard', [
        { type: 'any' }
    ]),

    // --- Sharing ---

    'share': defineSyscall('share', 'is.workflow.actions.share', [
        { type: 'any' }
    ]),
    'airdrop': defineSyscall('airdrop', 'is.workflow.actions.airdrop', [
        { type: 'any' }
    ]),
    'findEmail': defineSyscall('findEmail', 'is.workflow.actions.findemail', [
        { type: 'string' }
    ]),
    'findMessage': defineSyscall('findMessage', 'is.workflow.actions.findmessage', [
        { type: 'string' }
    ]),
    'findConversation': defineSyscall('findConversation', 'is.workflow.actions.findconversation', [
        { type: 'string' }
    ]),

    // --- Device Settings ---

    'setBrightness': defineSyscall('setBrightness', 'is.workflow.actions.setbrightness', [
        { type: 'number' }
    ]),
    'setVolume': defineSyscall('setVolume', 'is.workflow.actions.setvolume', [
        { type: 'number' }
    ]),
    'darkMode': defineSyscall('darkMode', 'is.workflow.actions.darkmode', []),
    'lightMode': defineSyscall('lightMode', 'is.workflow.actions.lightmode', []),
    'toggleAppearance': defineSyscall('toggleAppearance', 'is.workflow.actions.toggleappearance', []),
    'setNightShift': defineSyscall('setNightShift', 'is.workflow.actions.setnightshift', [
        { type: 'any' }
    ]),
    'setTrueTone': defineSyscall('setTrueTone', 'is.workflow.actions.settruetone', [
        { type: 'any' }
    ]),
    'toggleNightShift': defineSyscall('toggleNightShift', 'is.workflow.actions.togglenightshift', []),
    'toggleTrueTone': defineSyscall('toggleTrueTone', 'is.workflow.actions.toggletruetone', []),
    'setBluetooth': defineSyscall('setBluetooth', 'is.workflow.actions.setbluetooth', [
        { type: 'any' }
    ]),
    'setCellularData': defineSyscall('setCellularData', 'is.workflow.actions.setcellulardata', [
        { type: 'any' }
    ]),
    'setWifi': defineSyscall('setWifi', 'is.workflow.actions.setwifi', [
        { type: 'any' }
    ]),
    'toggleBluetooth': defineSyscall('toggleBluetooth', 'is.workflow.actions.togglebluetooth', []),
    'toggleCellularData': defineSyscall('toggleCellularData', 'is.workflow.actions.togglecellulardata', []),
    'toggleWifi': defineSyscall('toggleWifi', 'is.workflow.actions.togglewifi', []),
    'getFocusMode': defineSyscall('getFocusMode', 'is.workflow.actions.getfocusmode', []),
    'toggleDND': defineSyscall('toggleDND', 'is.workflow.actions.togglednd', []),
    'DNDOff': defineSyscall('DNDOff', 'is.workflow.actions.dndoff', []),
    'DNDOn': defineSyscall('DNDOn', 'is.workflow.actions.dndon', []),
    'setWallpaper': defineSyscall('setWallpaper', 'is.workflow.actions.setwallpaper', [
        { type: 'any' }
    ]),
    'setStageManager': defineSyscall('setStageManager', 'is.workflow.actions.setstagemanager', [
        { type: 'any' },
        { type: 'any', optional: true, default: new StringValue('true') }
    ]),
    'toggleStageManager': defineSyscall('toggleStageManager', 'is.workflow.actions.togglestagemanager', [
        { type: 'any', optional: true, default: new StringValue('true') },
        { type: 'any', optional: true, default: new StringValue('true') }
    ]),
    'getWallpaper': defineSyscall('getWallpaper', 'is.workflow.actions.getwallpaper', [], ImageRefValue),
    'getAllWallpapers': defineSyscall('getAllWallpapers', 'is.workflow.actions.getallwallpapers', []),

    // --- Device Hardware ---

    'vibrate': defineSyscall('vibrate', 'is.workflow.actions.vibrate', []),
    'lockScreen': defineSyscall('lockScreen', 'is.workflow.actions.lock', []),
    'reboot': defineSyscall('reboot', 'is.workflow.actions.reboot', []),
    'shutdown': defineSyscall('shutdown', 'is.workflow.actions.shutdown', []),
    'setAirplaneMode': defineSyscall('setAirplaneMode', 'is.workflow.actions.setairplanemode', [
        { type: 'any' }
    ]),
    'toggleAirplaneMode': defineSyscall('toggleAirplaneMode', 'is.workflow.actions.toggleairplanemode', []),
    'connectedToCharger': defineSyscall('connectedToCharger', 'is.workflow.actions.connectedtocharger', [], 'boolean'),
    'isCharging': defineSyscall('isCharging', 'is.workflow.actions.ischarging', [], 'boolean'),
    'getOnScreenContent': defineSyscall('getOnScreenContent', 'is.workflow.actions.getonscreencontent', [], ImageRefValue),
    'getOrientation': defineSyscall('getOrientation', 'is.workflow.actions.getorientation', []),
    'getBatteryLevel': defineSyscall('getBatteryLevel', 'is.workflow.actions.getbatterylevel', [], 'number'),
    'getDeviceDetail': defineSyscall('getDeviceDetail', 'is.workflow.actions.getdevicedetail', [
        { type: 'string' }
    ]),

    // --- Web / Network ---

    'downloadURL': defineSyscall('downloadURL', 'is.workflow.actions.downloadurl', [
        { type: 'string' }
    ], FileRefValue),
    'openURL': defineSyscall('openURL', 'is.workflow.actions.openurl', [
        { type: 'string' }
    ]),
    'getWebContents': defineSyscall('getWebContents', 'is.workflow.actions.getwebpagecontents', [
        { type: 'string' }
    ]),
    'getArticle': defineSyscall('getArticle', 'is.workflow.actions.getarticle', [
        { type: 'string' }
    ]),
    'searchGiphy': defineSyscall('searchGiphy', 'is.workflow.actions.searchgiphy', [
        { type: 'string' }
    ], ImageRefValue),
    'expandURL': defineSyscall('expandURL', 'is.workflow.actions.expandurl', [
        { type: 'string' }
    ]),
    'getCurrentURL': defineSyscall('getCurrentURL', 'is.workflow.actions.getcurrenturl', []),
    'showWebpage': defineSyscall('showWebpage', 'is.workflow.actions.showwebpage', [
        { type: 'string' }
    ]),
    'isOnline': defineSyscall('isOnline', 'is.workflow.actions.isonline', [], 'boolean'),
    'connectToServer': defineSyscall('connectToServer', 'is.workflow.actions.connecttoserver', [
        { type: 'string' }
    ]),
    'getRSS': defineSyscall('getRSS', 'is.workflow.actions.getrss', [
        { type: 'number' },
        { type: 'string' }
    ]),
    'getRSSFeeds': defineSyscall('getRSSFeeds', 'is.workflow.actions.getrssfeeds', [
        { type: 'string' }
    ]),
    'addToReadingList': defineSyscall('addToReadingList', 'is.workflow.actions.addtoreadinglist', [
        { type: 'string' }
    ]),
    'runJavaScriptOnWebpage': defineSyscall('runJavaScriptOnWebpage', 'is.workflow.actions.runjavascriptonwebpage', [
        { type: 'string' }
    ]),
    'searchWeb': defineSyscall('searchWeb', 'is.workflow.actions.searchweb', [
        { type: 'string' },
        { type: 'string' }
    ]),
    'getURLDetail': defineSyscall('getURLDetail', 'is.workflow.actions.geturldetail', [
        { type: 'string' },
        { type: 'string' }
    ]),
    'getURLHeaders': defineSyscall('getURLHeaders', 'is.workflow.actions.geturlheaders', [
        { type: 'string' }
    ]),
    'getURLs': defineSyscall('getURLs', 'is.workflow.actions.geturls', [
        { type: 'string' }
    ]),
    'openXCallbackURL': defineSyscall('openXCallbackURL', 'is.workflow.actions.openxcallbackurl', [
        { type: 'string' }
    ]),
    'getWebPageDetail': defineSyscall('getWebPageDetail', 'is.workflow.actions.getwebpagedetail', [
        { type: 'any' },
        { type: 'string' }
    ]),

    // --- Media ---

    'searchAppStore': defineSyscall('searchAppStore', 'is.workflow.actions.searchappstore', [
        { type: 'string' }
    ]),
    'showIniTunes': defineSyscall('showIniTunes', 'is.workflow.actions.showinitunes', [
        { type: 'any' }
    ]),
    'takeScreenshot': defineSyscall('takeScreenshot', 'is.workflow.actions.takescreenshot', [], ImageRefValue),
    'playSound': defineSyscall('playSound', 'is.workflow.actions.playsound', [
        { type: 'host_ref' }
    ]),
    'recordAudio': defineSyscall('recordAudio', 'is.workflow.actions.recordaudio', [], AudioRefValue),
    'getPodcasts': defineSyscall('getPodcasts', 'is.workflow.actions.getpodcasts', []),
    'searchPodcasts': defineSyscall('searchPodcasts', 'is.workflow.actions.searchpodcasts', [
        { type: 'string' }
    ]),
    'playPodcast': defineSyscall('playPodcast', 'is.workflow.actions.playpodcast', [
        { type: 'any' }
    ]),
    'startShazam': defineSyscall('startShazam', 'is.workflow.actions.startshazam', []),
    'takePhoto': defineSyscall('takePhoto', 'is.workflow.actions.takephoto', [], ImageRefValue),
    'takeVideo': defineSyscall('takeVideo', 'is.workflow.actions.takevideo', [], VideoRefValue),
    'trimVideo': defineSyscall('trimVideo', 'is.workflow.actions.trimvideo', [
        { type: 'host_ref' }
    ], VideoRefValue),
    'searchVoiceMemos': defineSyscall('searchVoiceMemos', 'is.workflow.actions.searchvoicememos', [
        { type: 'string' }
    ], AudioRefValue),
    'stripMediaMetadata': defineSyscall('stripMediaMetadata', 'is.workflow.actions.stripmediametadata', [
        { type: 'host_ref' }
    ], HostRefValue),
    'encodeAudio': defineSyscall('encodeAudio', 'is.workflow.actions.encodeaudio', [
        { type: 'host_ref' }
    ], AudioRefValue),
    'encodeVideo': defineSyscall('encodeVideo', 'is.workflow.actions.encodevideo', [
        { type: 'host_ref' }
    ], VideoRefValue),

    // --- Contacts ---

    'getContacts': defineSyscall('getContacts', 'is.workflow.actions.getcontacts', [
        { type: 'any' }
    ]),
    'selectContact': defineSyscall('selectContact', 'is.workflow.actions.selectcontact', [
        { type: 'any', optional: true, default: new StringValue('false') }
    ]),
    'selectEmailAddress': defineSyscall('selectEmailAddress', 'is.workflow.actions.selectemailaddress', []),
    'call': defineSyscall('call', 'is.workflow.actions.call', [
        { type: 'any' }
    ]),
    'getEmails': defineSyscall('getEmails', 'is.workflow.actions.getemails', [
        { type: 'string' }
    ]),
    'getPhoneNumbers': defineSyscall('getPhoneNumbers', 'is.workflow.actions.getphonenumbers', [
        { type: 'any' }
    ]),
    'selectPhoneNumber': defineSyscall('selectPhoneNumber', 'is.workflow.actions.selectphonenumber', []),
    'emailAddress': defineSyscall('emailAddress', 'is.workflow.actions.emailaddress', [
        { type: 'string' }
    ]),
    'phoneNumber': defineSyscall('phoneNumber', 'is.workflow.actions.phonenumber', [
        { type: 'string' }
    ]),
    'getContactDetail': defineSyscall('getContactDetail', 'is.workflow.actions.getcontactdetail', [
        { type: 'any' },
        { type: 'string' }
    ]),

    // --- Text ---

    'define': defineSyscall('define', 'is.workflow.actions.define', [
        { type: 'string' }
    ]),
    'getEmojiName': defineSyscall('getEmojiName', 'is.workflow.actions.getemojiname', [
        { type: 'string' }
    ]),
    'getTextFromImage': defineSyscall('getTextFromImage', 'is.workflow.actions.gettextfromimage', [
        { type: 'host_ref' }
    ]),
    'transcribeText': defineSyscall('transcribeText', 'is.workflow.actions.transcribetext', [
        { type: 'host_ref' }
    ]),
    'getRichTextFromMarkdown': defineSyscall('getRichTextFromMarkdown', 'is.workflow.actions.getrichtextfrommarkdown', [
        { type: 'string' }
    ]),
    'makeHTML': defineSyscall('makeHTML', 'is.workflow.actions.makehtml', [
        { type: 'string' }
    ]),
    'makeMarkdown': defineSyscall('makeMarkdown', 'is.workflow.actions.makemarkdown', [
        { type: 'string' }
    ]),
    'getRichTextFromHTML': defineSyscall('getRichTextFromHTML', 'is.workflow.actions.getrichtextfromhtml', [
        { type: 'string' }
    ]),
    'lowercase': defineSyscall('lowercase', 'is.workflow.actions.lowercase', [
        { type: 'string' }
    ]),
    'uppercase': defineSyscall('uppercase', 'is.workflow.actions.uppercase', [
        { type: 'string' }
    ]),

    // --- Files ---

    'saveFile': defineSyscall('saveFile', 'is.workflow.actions.documentpicker.save', [
        { type: 'any' },
        { type: 'any' }
    ]),
    'getFile': defineSyscall('getFile', 'is.workflow.actions.documentpicker.open', [
        { type: 'string' }
    ], FileRefValue),
    'appendFile': defineSyscall('appendFile', 'is.workflow.actions.appendtofile', [
        { type: 'any' },
        { type: 'any' }
    ]),

    // --- Control ---

    'wait': defineSyscall('wait', 'is.workflow.actions.delay', [
        { type: 'number' }
    ]),

    // --- Shortcuts ---

    'runShortcut': defineSyscall('runShortcut', 'is.workflow.actions.runworkflow', [
        { type: 'string' },
        { type: 'string', optional: true, default: new StringValue('') }
    ]),

    // --- Crypto ---

    'hash': defineSyscall('hash', 'is.workflow.actions.hash', [
        { type: 'any' },
        { type: 'string', optional: true, default: new StringValue('MD5') }
    ]),

    'base64Encode': defineSyscall('base64Encode', 'is.workflow.actions.base64encode', [
        { type: 'any' }
    ]),
    'base64Decode': defineSyscall('base64Decode', 'is.workflow.actions.base64decode', [
        { type: 'string' }
    ]),

    // --- Location / Weather ---

    'getCurrentLocation': defineSyscall('getCurrentLocation', 'is.workflow.actions.getcurrentlocation', [], LocationRefValue),
    'getCurrentWeather': defineSyscall('getCurrentWeather', 'is.workflow.actions.weather.currentconditions', [
        { type: 'any', optional: true, default: new StringValue('Current Location') }
    ]),
}

const syscallReturnTypeById: Record<string, ReturnType> = Object.fromEntries(
    Object.values(syscallDefinitions).map((definition) => [definition.syscallId, definition.returnType])
) as Record<string, ReturnType>;


export function coerceSyscallReturnValue(syscallId: string, rawValue: string): Value {
    const returnType = syscallReturnTypeById[syscallId] || 'string';

    if (typeof returnType === 'function')
        return new returnType(rawValue);

    if (returnType === 'boolean') {
        const normalized = rawValue.trim().toLowerCase();
        if (normalized === 'true' || normalized === '1' || normalized === 'yes')
            return new BooleanValue(true);
        if (normalized === 'false' || normalized === '0' || normalized === 'no')
            return new BooleanValue(false);
        return new StringValue(rawValue);
    }

    if (returnType === 'number') {
        const normalized = rawValue.trim();
        const parsed = Number(normalized);
        if (normalized !== '' && Number.isFinite(parsed))
            return new NumberValue(parsed);
        return new StringValue(rawValue);
    }

    return new StringValue(rawValue);
}

export default syscallDefinitions;
