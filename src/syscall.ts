import { InvalidType, SycallArgumentNumberMismatch } from "./error";
import {Value, StringValue, NumberValue} from './value'

type ParamType = 'string' | 'number' | 'any';

interface SyscallParam {
    type: ParamType;
    optional?: boolean;
    default?: Value;
}

function defineSyscall(name: string, syscallId: string, params: SyscallParam[]) {
    const requiredCount = params.filter(p => !p.optional).length;
    return {
        syscallId,
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
                            return [new StringValue(arg.str)];
                    }
                }
                return param.default !== undefined ? [param.default] : [];
            });
        }
    };
}

export default {
    'syscall': {
        syscallId: 'is.melon.syscall',
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
        preprocessor: (args: Value[], lineNumber: number) => {
            return [new StringValue(args.map(arg => arg.str).join(' '))];
        }
    },
    'input': defineSyscall('input', 'is.workflow.actions.prompt', [
        { type: 'string', optional: true }
    ]),
    'exit': {
        syscallId: 'is.workflow.actions.stop',
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

    // --- Device Settings ---

    'setBrightness': defineSyscall('setBrightness', 'is.workflow.actions.setbrightness', [
        { type: 'number' }
    ]),
    'setVolume': defineSyscall('setVolume', 'is.workflow.actions.setvolume', [
        { type: 'number' }
    ]),
    'darkMode': defineSyscall('darkMode', 'is.workflow.actions.darkmode', []),
    'lightMode': defineSyscall('lightMode', 'is.workflow.actions.lightmode', []),

    // --- Device Hardware ---

    'vibrate': defineSyscall('vibrate', 'is.workflow.actions.vibrate', []),
    'lockScreen': defineSyscall('lockScreen', 'is.workflow.actions.lock', []),
    'getBatteryLevel': defineSyscall('getBatteryLevel', 'is.workflow.actions.getbatterylevel', []),
    'getDeviceDetail': defineSyscall('getDeviceDetail', 'is.workflow.actions.getdevicedetail', [
        { type: 'string' }
    ]),

    // --- Web / Network ---

    'downloadURL': defineSyscall('downloadURL', 'is.workflow.actions.downloadurl', [
        { type: 'string' }
    ]),
    'openURL': defineSyscall('openURL', 'is.workflow.actions.openurl', [
        { type: 'string' }
    ]),
    'getWebContents': defineSyscall('getWebContents', 'is.workflow.actions.getwebpagecontents', [
        { type: 'string' }
    ]),

    // --- Files ---

    'saveFile': defineSyscall('saveFile', 'is.workflow.actions.documentpicker.save', [
        { type: 'any' },
        { type: 'any' }
    ]),
    'getFile': defineSyscall('getFile', 'is.workflow.actions.documentpicker.open', [
        { type: 'string' }
    ]),
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

    // --- Location / Weather ---

    'getCurrentLocation': defineSyscall('getCurrentLocation', 'is.workflow.actions.getcurrentlocation', []),
    'getCurrentWeather': defineSyscall('getCurrentWeather', 'is.workflow.actions.weather.currentconditions', [
        { type: 'string', optional: true, default: new StringValue('Current Location') }
    ]),
}
