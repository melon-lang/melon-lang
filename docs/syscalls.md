# Native Functions

The bridge between melon programs and Siri Shortcuts actions.

This page is aligned with the current implementation in:

1. `src/syscall.ts` (melon function to syscall id mapping and argument validation)
2. `shortcut/melon.cherri` (runtime dispatch that executes the native action)

## How Syscalls Work

1. A melon program calls a function that maps to a syscall.
2. The VM yields with `status = "syscall"` and emits the syscall id and serialized args.
3. `shortcut/melon.cherri` dispatches on syscall id and runs the corresponding Shortcuts action.
4. Any output is serialized back to the VM as text.
5. The VM resumes execution.

## Core Built-ins

| melon function | Syscall ID |
|---|---|
| `syscall(...)` | `is.melon.syscall` |
| `print(...)` | `is.workflow.actions.showresult` |
| `input(prompt?)` | `is.workflow.actions.prompt` |
| `exit(value?)` | `is.workflow.actions.stop` |

## UI / Notifications

| melon function | Syscall ID |
|---|---|
| `alert(message, title?)` | `is.workflow.actions.alert` |
| `confirm(message, title?)` | `is.workflow.actions.confirm` |
| `notify(body, title?)` | `is.workflow.actions.notification` |
| `speak(text)` | `is.workflow.actions.speaktext` |

## Clipboard

| melon function | Syscall ID |
|---|---|
| `getClipboard()` | `is.workflow.actions.getclipboard` |
| `setClipboard(value)` | `is.workflow.actions.setclipboard` |

## Sharing

| melon function | Syscall ID |
|---|---|
| `share(value)` | `is.workflow.actions.share` |
| `airdrop(value)` | `is.workflow.actions.airdrop` |
| `findEmail(filter)` | `is.workflow.actions.findemail` |
| `findMessage(filter)` | `is.workflow.actions.findmessage` |
| `findConversation(filter)` | `is.workflow.actions.findconversation` |

## Device Settings

| melon function | Syscall ID |
|---|---|
| `setBrightness(value)` | `is.workflow.actions.setbrightness` |
| `setVolume(value)` | `is.workflow.actions.setvolume` |
| `darkMode()` | `is.workflow.actions.darkmode` |
| `lightMode()` | `is.workflow.actions.lightmode` |
| `toggleAppearance()` | `is.workflow.actions.toggleappearance` |
| `setNightShift(value)` | `is.workflow.actions.setnightshift` |
| `setTrueTone(value)` | `is.workflow.actions.settruetone` |
| `toggleNightShift()` | `is.workflow.actions.togglenightshift` |
| `toggleTrueTone()` | `is.workflow.actions.toggletruetone` |
| `setBluetooth(value)` | `is.workflow.actions.setbluetooth` |
| `setCellularData(value)` | `is.workflow.actions.setcellulardata` |
| `setWifi(value)` | `is.workflow.actions.setwifi` |
| `toggleBluetooth()` | `is.workflow.actions.togglebluetooth` |
| `toggleCellularData()` | `is.workflow.actions.togglecellulardata` |
| `toggleWifi()` | `is.workflow.actions.togglewifi` |
| `getFocusMode()` | `is.workflow.actions.getfocusmode` |
| `toggleDND()` | `is.workflow.actions.togglednd` |
| `DNDOff()` | `is.workflow.actions.dndoff` |
| `DNDOn()` | `is.workflow.actions.dndon` |
| `setWallpaper(value)` | `is.workflow.actions.setwallpaper` |
| `setStageManager(enabled, recentApps?)` | `is.workflow.actions.setstagemanager` |
| `toggleStageManager(enabled?, recentApps?)` | `is.workflow.actions.togglestagemanager` |
| `getWallpaper()` | `is.workflow.actions.getwallpaper` |
| `getAllWallpapers()` | `is.workflow.actions.getallwallpapers` |

## Device Hardware

| melon function | Syscall ID |
|---|---|
| `vibrate()` | `is.workflow.actions.vibrate` |
| `lockScreen()` | `is.workflow.actions.lock` |
| `reboot()` | `is.workflow.actions.reboot` |
| `shutdown()` | `is.workflow.actions.shutdown` |
| `setAirplaneMode(value)` | `is.workflow.actions.setairplanemode` |
| `toggleAirplaneMode()` | `is.workflow.actions.toggleairplanemode` |
| `connectedToCharger()` | `is.workflow.actions.connectedtocharger` |
| `isCharging()` | `is.workflow.actions.ischarging` |
| `getOnScreenContent()` | `is.workflow.actions.getonscreencontent` |
| `getOrientation()` | `is.workflow.actions.getorientation` |
| `getBatteryLevel()` | `is.workflow.actions.getbatterylevel` |
| `getDeviceDetail(detail)` | `is.workflow.actions.getdevicedetail` |

## Web / Network

| melon function | Syscall ID |
|---|---|
| `downloadURL(url)` | `is.workflow.actions.downloadurl` |
| `openURL(url)` | `is.workflow.actions.openurl` |
| `getWebContents(url)` | `is.workflow.actions.getwebpagecontents` |
| `getArticle(url)` | `is.workflow.actions.getarticle` |
| `searchGiphy(query)` | `is.workflow.actions.searchgiphy` |
| `expandURL(url)` | `is.workflow.actions.expandurl` |
| `getCurrentURL()` | `is.workflow.actions.getcurrenturl` |
| `showWebpage(url)` | `is.workflow.actions.showwebpage` |
| `isOnline()` | `is.workflow.actions.isonline` |
| `connectToServer(host)` | `is.workflow.actions.connecttoserver` |
| `getRSS(count, feed)` | `is.workflow.actions.getrss` |
| `getRSSFeeds(filter)` | `is.workflow.actions.getrssfeeds` |
| `addToReadingList(url)` | `is.workflow.actions.addtoreadinglist` |
| `runJavaScriptOnWebpage(code)` | `is.workflow.actions.runjavascriptonwebpage` |
| `searchWeb(query, engine)` | `is.workflow.actions.searchweb` |
| `getURLDetail(url, detail)` | `is.workflow.actions.geturldetail` |
| `getURLHeaders(url)` | `is.workflow.actions.geturlheaders` |
| `getURLs(text)` | `is.workflow.actions.geturls` |
| `openXCallbackURL(url)` | `is.workflow.actions.openxcallbackurl` |
| `getWebPageDetail(page, detail)` | `is.workflow.actions.getwebpagedetail` |

## Media

| melon function | Syscall ID |
|---|---|
| `searchAppStore(query)` | `is.workflow.actions.searchappstore` |
| `showIniTunes(item)` | `is.workflow.actions.showinitunes` |
| `takeScreenshot()` | `is.workflow.actions.takescreenshot` |
| `playSound(sound)` | `is.workflow.actions.playsound` |
| `recordAudio()` | `is.workflow.actions.recordaudio` |
| `getPodcasts()` | `is.workflow.actions.getpodcasts` |
| `searchPodcasts(query)` | `is.workflow.actions.searchpodcasts` |
| `playPodcast(item)` | `is.workflow.actions.playpodcast` |
| `startShazam()` | `is.workflow.actions.startshazam` |
| `takePhoto()` | `is.workflow.actions.takephoto` |
| `takeVideo()` | `is.workflow.actions.takevideo` |
| `trimVideo(video)` | `is.workflow.actions.trimvideo` |
| `searchVoiceMemos(query)` | `is.workflow.actions.searchvoicememos` |
| `stripMediaMetadata(media)` | `is.workflow.actions.stripmediametadata` |
| `encodeAudio(audio)` | `is.workflow.actions.encodeaudio` |
| `encodeVideo(video)` | `is.workflow.actions.encodevideo` |

## Contacts

| melon function | Syscall ID |
|---|---|
| `getContacts(filter)` | `is.workflow.actions.getcontacts` |
| `selectContact(multiple?)` | `is.workflow.actions.selectcontact` |
| `selectEmailAddress()` | `is.workflow.actions.selectemailaddress` |
| `call(contact)` | `is.workflow.actions.call` |
| `getEmails(contact)` | `is.workflow.actions.getemails` |
| `getPhoneNumbers(contact)` | `is.workflow.actions.getphonenumbers` |
| `selectPhoneNumber()` | `is.workflow.actions.selectphonenumber` |
| `emailAddress(text)` | `is.workflow.actions.emailaddress` |
| `phoneNumber(text)` | `is.workflow.actions.phonenumber` |
| `getContactDetail(contact, detail)` | `is.workflow.actions.getcontactdetail` |

## Text

| melon function | Syscall ID |
|---|---|
| `define(word)` | `is.workflow.actions.define` |
| `getEmojiName(emoji)` | `is.workflow.actions.getemojiname` |
| `getTextFromImage(image)` | `is.workflow.actions.gettextfromimage` |
| `transcribeText(audio)` | `is.workflow.actions.transcribetext` |
| `getRichTextFromMarkdown(markdown)` | `is.workflow.actions.getrichtextfrommarkdown` |
| `makeHTML(text)` | `is.workflow.actions.makehtml` |
| `makeMarkdown(text)` | `is.workflow.actions.makemarkdown` |
| `getRichTextFromHTML(html)` | `is.workflow.actions.getrichtextfromhtml` |
| `lowercase(text)` | `is.workflow.actions.lowercase` |
| `uppercase(text)` | `is.workflow.actions.uppercase` |

## Files

| melon function | Syscall ID |
|---|---|
| `saveFile(path, content)` | `is.workflow.actions.documentpicker.save` |
| `getFile(path)` | `is.workflow.actions.documentpicker.open` |
| `appendFile(path, content)` | `is.workflow.actions.appendtofile` |

## Control

| melon function | Syscall ID |
|---|---|
| `wait(seconds)` | `is.workflow.actions.delay` |

## Shortcuts

| melon function | Syscall ID |
|---|---|
| `runShortcut(name, input?)` | `is.workflow.actions.runworkflow` |

## Crypto

| melon function | Syscall ID |
|---|---|
| `hash(value, algorithm?)` | `is.workflow.actions.hash` |
| `base64Encode(value)` | `is.workflow.actions.base64encode` |
| `base64Decode(value)` | `is.workflow.actions.base64decode` |

## Location / Weather

| melon function | Syscall ID |
|---|---|
| `getCurrentLocation()` | `is.workflow.actions.getcurrentlocation` |
| `getCurrentWeather(location?)` | `is.workflow.actions.weather.currentconditions` |

## Notes

1. `src/syscall.ts` is the source of truth for function names, syscall ids, argument types, and default values.
2. `shortcut/melon.cherri` must include matching syscall id dispatch blocks and argument counts.
3. Most syscall outputs are returned as text and may require conversion in melon (`number(...)`, parsing, etc.).
