import { InvalidType, SycallArgumentNumberMismatch } from "./error";
import {Value, StringValue, NumberValue} from './value'

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
    'input': {
        syscallId: 'is.workflow.actions.prompt',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length > 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'input', 1, args.length);

            if (args.length === 1 && !(args[0] instanceof StringValue))
                throw new InvalidType(lineNumber, StringValue.typeName, args[0].typeName, 'First argument of input must be a string.');

            return args;
        }
    },
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

    'alert': {
        syscallId: 'is.workflow.actions.alert',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length < 1 || args.length > 2)
                throw new SycallArgumentNumberMismatch(lineNumber, 'alert', 1, args.length);
            return [new StringValue(args[0].str), new StringValue(args[1]?.str ?? '')];
        }
    },
    'confirm': {
        syscallId: 'is.workflow.actions.confirm',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length < 1 || args.length > 2)
                throw new SycallArgumentNumberMismatch(lineNumber, 'confirm', 1, args.length);
            return [new StringValue(args[0].str), new StringValue(args[1]?.str ?? '')];
        }
    },
    'notify': {
        syscallId: 'is.workflow.actions.notification',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length < 1 || args.length > 2)
                throw new SycallArgumentNumberMismatch(lineNumber, 'notify', 1, args.length);
            return [new StringValue(args[0].str), new StringValue(args[1]?.str ?? '')];
        }
    },
    'speak': {
        syscallId: 'is.workflow.actions.speaktext',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'speak', 1, args.length);
            return [new StringValue(args[0].str)];
        }
    },

    // --- Clipboard ---

    'getClipboard': {
        syscallId: 'is.workflow.actions.getclipboard',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 0)
                throw new SycallArgumentNumberMismatch(lineNumber, 'getClipboard', 0, args.length);
            return [];
        }
    },
    'setClipboard': {
        syscallId: 'is.workflow.actions.setclipboard',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'setClipboard', 1, args.length);
            return [new StringValue(args[0].str)];
        }
    },

    // --- Sharing ---

    'share': {
        syscallId: 'is.workflow.actions.share',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'share', 1, args.length);
            return [new StringValue(args[0].str)];
        }
    },

    // --- Device Settings ---

    'setBrightness': {
        syscallId: 'is.workflow.actions.setbrightness',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'setBrightness', 1, args.length);
            if (!(args[0] instanceof NumberValue))
                throw new InvalidType(lineNumber, NumberValue.typeName, args[0].typeName, 'First argument of setBrightness must be a number (0 to 1).');
            return [args[0]];
        }
    },
    'setVolume': {
        syscallId: 'is.workflow.actions.setvolume',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'setVolume', 1, args.length);
            if (!(args[0] instanceof NumberValue))
                throw new InvalidType(lineNumber, NumberValue.typeName, args[0].typeName, 'First argument of setVolume must be a number (0 to 1).');
            return [args[0]];
        }
    },
    'darkMode': {
        syscallId: 'is.workflow.actions.darkmode',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 0)
                throw new SycallArgumentNumberMismatch(lineNumber, 'darkMode', 0, args.length);
            return [];
        }
    },
    'lightMode': {
        syscallId: 'is.workflow.actions.lightmode',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 0)
                throw new SycallArgumentNumberMismatch(lineNumber, 'lightMode', 0, args.length);
            return [];
        }
    },

    // --- Device Hardware ---

    'vibrate': {
        syscallId: 'is.workflow.actions.vibrate',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 0)
                throw new SycallArgumentNumberMismatch(lineNumber, 'vibrate', 0, args.length);
            return [];
        }
    },
    'lockScreen': {
        syscallId: 'is.workflow.actions.lock',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 0)
                throw new SycallArgumentNumberMismatch(lineNumber, 'lockScreen', 0, args.length);
            return [];
        }
    },
    'getBatteryLevel': {
        syscallId: 'is.workflow.actions.getbatterylevel',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 0)
                throw new SycallArgumentNumberMismatch(lineNumber, 'getBatteryLevel', 0, args.length);
            return [];
        }
    },
    'getDeviceDetail': {
        syscallId: 'is.workflow.actions.getdevicedetail',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'getDeviceDetail', 1, args.length);
            if (!(args[0] instanceof StringValue))
                throw new InvalidType(lineNumber, StringValue.typeName, args[0].typeName, 'First argument of getDeviceDetail must be a string.');
            return [args[0]];
        }
    },

    // --- Web / Network ---

    'downloadURL': {
        syscallId: 'is.workflow.actions.downloadurl',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'downloadURL', 1, args.length);
            if (!(args[0] instanceof StringValue))
                throw new InvalidType(lineNumber, StringValue.typeName, args[0].typeName, 'First argument of downloadURL must be a string.');
            return [args[0]];
        }
    },
    'openURL': {
        syscallId: 'is.workflow.actions.openurl',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'openURL', 1, args.length);
            if (!(args[0] instanceof StringValue))
                throw new InvalidType(lineNumber, StringValue.typeName, args[0].typeName, 'First argument of openURL must be a string.');
            return [args[0]];
        }
    },
    'getWebContents': {
        syscallId: 'is.workflow.actions.getwebpagecontents',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'getWebContents', 1, args.length);
            if (!(args[0] instanceof StringValue))
                throw new InvalidType(lineNumber, StringValue.typeName, args[0].typeName, 'First argument of getWebContents must be a string.');
            return [args[0]];
        }
    },

    // --- Files ---

    'saveFile': {
        syscallId: 'is.workflow.actions.documentpicker.save',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 2)
                throw new SycallArgumentNumberMismatch(lineNumber, 'saveFile', 2, args.length);
            return [new StringValue(args[0].str), new StringValue(args[1].str)];
        }
    },
    'getFile': {
        syscallId: 'is.workflow.actions.documentpicker.open',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'getFile', 1, args.length);
            if (!(args[0] instanceof StringValue))
                throw new InvalidType(lineNumber, StringValue.typeName, args[0].typeName, 'First argument of getFile must be a string.');
            return [args[0]];
        }
    },
    'appendFile': {
        syscallId: 'is.workflow.actions.appendtofile',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 2)
                throw new SycallArgumentNumberMismatch(lineNumber, 'appendFile', 2, args.length);
            return [new StringValue(args[0].str), new StringValue(args[1].str)];
        }
    },

    // --- Control ---

    'wait': {
        syscallId: 'is.workflow.actions.delay',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'wait', 1, args.length);
            if (!(args[0] instanceof NumberValue))
                throw new InvalidType(lineNumber, NumberValue.typeName, args[0].typeName, 'First argument of wait must be a number.');
            return [args[0]];
        }
    },

    // --- Shortcuts ---

    'runShortcut': {
        syscallId: 'is.workflow.actions.runworkflow',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length < 1 || args.length > 2)
                throw new SycallArgumentNumberMismatch(lineNumber, 'runShortcut', 1, args.length);
            return [new StringValue(args[0].str), new StringValue(args[1]?.str ?? '')];
        }
    },

    // --- Crypto ---

    'hash': {
        syscallId: 'is.workflow.actions.hash',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length < 1 || args.length > 2)
                throw new SycallArgumentNumberMismatch(lineNumber, 'hash', 1, args.length);
            return [new StringValue(args[0].str), new StringValue(args[1]?.str ?? 'MD5')];
        }
    },

    // --- Location / Weather ---

    'getCurrentLocation': {
        syscallId: 'is.workflow.actions.getcurrentlocation',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length !== 0)
                throw new SycallArgumentNumberMismatch(lineNumber, 'getCurrentLocation', 0, args.length);
            return [];
        }
    },
    'getCurrentWeather': {
        syscallId: 'is.workflow.actions.weather.currentconditions',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length > 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'getCurrentWeather', 1, args.length);
            return [new StringValue(args[0]?.str ?? 'Current Location')];
        }
    },
}
