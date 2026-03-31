# Syscall Reference

Syscalls are the bridge between melon programs and Siri Shortcuts actions. When a melon program calls a syscall function, the VM pauses, serializes the call into the VM state, and the host Siri Shortcut executes the corresponding Shortcuts action. The result (if any) is serialized back and pushed onto the VM stack as a string.

## How Syscalls Work

1. A melon program calls a syscall function (e.g. `alert("Hello")`).
2. The melon VM halts with `status = "syscall"` and includes a `syscall` object in the state containing `name` (the syscall ID) and `args` (the argument list).
3. The host Siri Shortcut inspects `syscall.name` and dispatches to the matching `if` block.
4. The Shortcuts action runs. If it produces a return value, it is stored in `syscall_out`.
5. `syscall_out` is base64-encoded and passed back in the next VM resume URL.
6. The VM resumes and the return value is pushed onto the stack.

---

## Built-in Syscalls (original)

| melon function | Syscall ID | Shortcuts action | Returns |
|---|---|---|---|
| `print(value, ...)` | `is.workflow.actions.showresult` | Show Result | no |
| `input(prompt?)` | `is.workflow.actions.prompt` | Ask for Input | string |
| `exit(value?)` | `is.workflow.actions.stop` | Stop and Output | no |

---

## New Syscalls

### UI / Notifications

| melon function | Syscall ID | Shortcuts action | Returns |
|---|---|---|---|
| `alert(message, title?)` | `is.workflow.actions.alert` | Show Alert | no |
| `confirm(message, title?)` | `is.workflow.actions.confirm` | Show Alert (with cancel) | no |
| `notify(body, title?)` | `is.workflow.actions.notification` | Show Notification | no |
| `speak(text)` | `is.workflow.actions.speaktext` | Speak Text | no |

**Usage examples:**
```melon
alert("Something went wrong!", "Error");
confirm("Are you sure?");
notify("Download complete", "melon");
speak("Hello from melon!");
```

---

### Clipboard

| melon function | Syscall ID | Shortcuts action | Returns |
|---|---|---|---|
| `getClipboard()` | `is.workflow.actions.getclipboard` | Get Clipboard | string |
| `setClipboard(value)` | `is.workflow.actions.setclipboard` | Set Clipboard | no |

**Usage examples:**
```melon
let clip = getClipboard();
print("Clipboard:", clip);

setClipboard("copied by melon");
```

---

### Sharing

| melon function | Syscall ID | Shortcuts action | Returns |
|---|---|---|---|
| `share(value)` | `is.workflow.actions.share` | Share | no |

**Usage examples:**
```melon
share("Check this out!");
```

---

### Device Settings

| melon function | Syscall ID | Shortcuts action | Returns |
|---|---|---|---|
| `setBrightness(value)` | `is.workflow.actions.setbrightness` | Set Brightness | no |
| `setVolume(value)` | `is.workflow.actions.setvolume` | Set Volume | no |
| `darkMode()` | `is.workflow.actions.darkmode` | Set Appearance Dark | no |
| `lightMode()` | `is.workflow.actions.lightmode` | Set Appearance Light | no |

`value` for brightness and volume is a float between `0` and `1`.

**Usage examples:**
```melon
setBrightness(0.5);
setVolume(0.8);
darkMode();
```

---

### Device Hardware

| melon function | Syscall ID | Shortcuts action | Returns |
|---|---|---|---|
| `vibrate()` | `is.workflow.actions.vibrate` | Vibrate Device | no |
| `lockScreen()` | `is.workflow.actions.lock` | Lock Screen | no |
| `getBatteryLevel()` | `is.workflow.actions.getbatterylevel` | Get Battery Level | string (number) |
| `getDeviceDetail(detail)` | `is.workflow.actions.getdevicedetail` | Get Device Detail | string |

Valid values for `detail` in `getDeviceDetail`:
- `"Device Name"`, `"Device Hostname"`, `"Device Model"`, `"Device Is Watch"`
- `"System Version"`, `"Screen Width"`, `"Screen Height"`
- `"Current Volume"`, `"Current Brightness"`, `"Current Appearance"`

**Usage examples:**
```melon
vibrate();
lockScreen();
let battery = getBatteryLevel();
print("Battery:", battery);
let model = getDeviceDetail("Device Model");
print("Device:", model);
```

---

### Web / Network

| melon function | Syscall ID | Shortcuts action | Returns |
|---|---|---|---|
| `downloadURL(url)` | `is.workflow.actions.downloadurl` | Get Contents of URL | string |
| `openURL(url)` | `is.workflow.actions.openurl` | Open URL | no |
| `getWebContents(url)` | `is.workflow.actions.getwebpagecontents` | Get Webpage Contents | string |

**Usage examples:**
```melon
let html = downloadURL("https://example.com/api/data");
print(html);

openURL("https://melon-lang.github.io/melon-lang");

let page = getWebContents("https://example.com");
print(page);
```

---

### Files

| melon function | Syscall ID | Shortcuts action | Returns |
|---|---|---|---|
| `saveFile(path, content)` | `is.workflow.actions.documentpicker.save` | Save File | no |
| `getFile(path)` | `is.workflow.actions.documentpicker.open` | Get File | string |
| `appendFile(path, content)` | `is.workflow.actions.appendtofile` | Append to File | no |

Paths are relative to the Shortcuts folder on the device.

**Usage examples:**
```melon
saveFile("notes.txt", "Hello from melon!");
let content = getFile("notes.txt");
print(content);
appendFile("notes.txt", "\nAnother line");
```

---

### Control

| melon function | Syscall ID | Shortcuts action | Returns |
|---|---|---|---|
| `wait(seconds)` | `is.workflow.actions.delay` | Wait | no |

**Usage examples:**
```melon
print("Waiting 3 seconds...");
wait(3);
print("Done!");
```

---

### Shortcuts

| melon function | Syscall ID | Shortcuts action | Returns |
|---|---|---|---|
| `runShortcut(name, input?)` | `is.workflow.actions.runworkflow` | Run Shortcut | string |

**Usage examples:**
```melon
let result = runShortcut("My Automation", "some input");
print("Shortcut returned:", result);
```

---

### Cryptography

| melon function | Syscall ID | Shortcuts action | Returns |
|---|---|---|---|
| `hash(input, type?)` | `is.workflow.actions.hash` | Hash | string |

Valid values for `type`: `"MD5"` (default), `"SHA1"`, `"SHA256"`, `"SHA512"`.

**Usage examples:**
```melon
let md5 = hash("hello world");
let sha256 = hash("hello world", "SHA256");
print(sha256);
```

---

### Location / Weather

| melon function | Syscall ID | Shortcuts action | Returns |
|---|---|---|---|
| `getCurrentLocation()` | `is.workflow.actions.getcurrentlocation` | Get Current Location | string |
| `getCurrentWeather(location?)` | `is.workflow.actions.weather.currentconditions` | Get Current Weather | string |

If `location` is omitted, `getCurrentWeather` uses the current device location.

**Usage examples:**
```melon
let loc = getCurrentLocation();
print("You are at:", loc);

let weather = getCurrentWeather();
print("Weather:", weather);

let nyWeather = getCurrentWeather("New York, NY");
print(nyWeather);
```

---

## Implementation Notes

- All arguments sent to the Shortcuts side are serialized as strings. Shortcuts coerces them to the required type (number, float, etc.) as needed.
- Return values from Shortcuts actions are retrieved via `getText()` and returned to the VM as strings. If the VM needs a number, use melon's `number()` native.
- The `syscall()` built-in allows calling any arbitrary Shortcuts action ID directly: `syscall("is.workflow.actions.someaction", arg1, arg2)`.
- New syscalls required adding `#include 'actions/device'` and `#include 'actions/location'` to `shortcut/main.cherri`.

## Files Changed

| File | Change |
|---|---|
| `src/syscall.ts` | Added 26 new syscall entries across 9 categories |
| `shortcut/main.cherri` | Added 2 new `#include` directives + 26 new syscall `if` blocks |
