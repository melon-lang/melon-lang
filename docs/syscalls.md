# Standard Library

Built-in functions for interacting with your device and the system.

These functions let you access device features, interact with the user, and integrate with system services. Think of them as the "standard library" that comes with melon.

> **Note:** These functions bridge melon to Siri Shortcuts actions. Under the hood, melon yields to the Shortcuts runtime to execute these operations.

## Display & Input

Output text to the user and ask for input.

| Function | Description |
|---|---|
| `print(value)` | Display text on screen |
| `input(prompt?)` | Ask user for text input |
| `alert(message, title?)` | Show an alert dialog |
| `confirm(message, title?)` | Ask user yes/no question |
| `exit(value?)` | Stop execution |

## Notifications & Audio

Show notifications and play/record sounds.

| Function | Description |
|---|---|
| `notify(body, title?)` | Send a notification |
| `speak(text)` | Read text aloud |
| `playSound(sound)` | Play an audio file |
| `recordAudio()` | Record audio from the mic |
| `vibrate()` | Make the device vibrate |

## Clipboard

Copy and paste operations.

| Function | Description |
|---|---|
| `getClipboard()` | Get text from clipboard |
| `setClipboard(value)` | Copy text to clipboard |

## Sharing

Share data with other apps and people.

| Function | Description |
|---|---|
| `share(value)` | Share content (opens share sheet) |
| `airdrop(value)` | Send via AirDrop |
| `findEmail(filter)` | Find email addresses |
| `findMessage(filter)` | Find SMS messages |
| `findConversation(filter)` | Find conversations |

## Display Settings

Control screen brightness, appearance, and display modes.

| Function | Description |
|---|---|
| `setBrightness(value)` | Set screen brightness (0-1) |
| `darkMode()` | Switch to dark mode |
| `lightMode()` | Switch to light mode |
| `toggleAppearance()` | Toggle between dark/light |
| `setNightShift(value)` | Enable/disable Night Shift |
| `toggleNightShift()` | Toggle Night Shift |
| `setTrueTone(value)` | Enable/disable True Tone |
| `toggleTrueTone()` | Toggle True Tone |
| `setWallpaper(value)` | Change wallpaper |
| `getWallpaper()` | Get current wallpaper |
| `getAllWallpapers()` | List all wallpapers |

## Connectivity

Control wireless connections and check network status.

| Function | Description |
|---|---|
| `setBluetooth(value)` | Enable/disable Bluetooth |
| `setCellularData(value)` | Enable/disable cellular |
| `setWifi(value)` | Enable/disable Wi-Fi |
| `toggleBluetooth()` | Toggle Bluetooth |
| `toggleCellularData()` | Toggle cellular data |
| `toggleWifi()` | Toggle Wi-Fi |
| `setAirplaneMode(value)` | Enable/disable Airplane Mode |
| `toggleAirplaneMode()` | Toggle Airplane Mode |
| `isOnline()` | Check if connected to internet |
| `connectToServer(host)` | Connect to server |

## Device Info

Check battery, orientation, and other device details.

| Function | Description |
|---|---|
| `isCharging()` | Is device plugged in? |
| `connectedToCharger()` | Is charger connected? |
| `getBatteryLevel()` | Get battery percentage (0-1) |
| `getOrientation()` | Get device orientation |
| `getOnScreenContent()` | Get current screen content |
| `getDeviceDetail(detail)` | Get specific device info |

## Focus & Do Not Disturb

Manage Focus Mode and notifications.

| Function | Description |
|---|---|
| `getFocusMode()` | Get active Focus Mode |
| `toggleDND()` | Toggle Do Not Disturb |
| `DNDOn()` | Turn on Do Not Disturb |
| `DNDOff()` | Turn off Do Not Disturb |

## Power & System

Lock, reboot, and shutdown device.

| Function | Description |
|---|---|
| `lockScreen()` | Lock the device |
| `reboot()` | Restart the device |
| `shutdown()` | Shut down the device |
| `setStageManager(enabled, recentApps?)` | Configure Stage Manager |
| `toggleStageManager(enabled?, recentApps?)` | Toggle Stage Manager |

## Web & Internet

Download and interact with web content.

| Function | Description |
|---|---|
| `downloadURL(url)` | Download file from URL |
| `openURL(url)` | Open URL in browser |
| `getWebContents(url)` | Get HTML content of page |
| `getArticle(url)` | Extract article content |
| `showWebpage(url)` | Display webpage inline |
| `expandURL(url)` | Expand shortened URL |
| `getCurrentURL()` | Get current browser URL |
| `searchWeb(query, engine)` | Search the web |
| `getURLDetail(url, detail)` | Get URL metadata |
| `getURLHeaders(url)` | Get HTTP headers |
| `getURLs(text)` | Extract URLs from text |
| `openXCallbackURL(url)` | Call URL scheme |
| `getWebPageDetail(page, detail)` | Get page details |
| `searchGiphy(query)` | Search GIFs |
| `getRSS(count, feed)` | Get RSS feed items |
| `getRSSFeeds(filter)` | List RSS feeds |
| `addToReadingList(url)` | Save to Reading List |
| `runJavaScriptOnWebpage(code)` | Execute JavaScript on page |

## Media

Take photos/videos and manage media files.

| Function | Description |
|---|---|
| `takeScreenshot()` | Capture screenshot |
| `takePhoto()` | Take a photo |
| `takeVideo()` | Record a video |
| `trimVideo(video)` | Trim video file |
| `stripMediaMetadata(media)` | Remove metadata from file |
| `encodeAudio(audio)` | Encode audio file |
| `encodeVideo(video)` | Encode video file |
| `searchVoiceMemos(query)` | Find voice memos |

## Music & Podcasts

Search and manage music and podcast content.

| Function | Description |
|---|---|
| `searchAppStore(query)` | Search App Store |
| `showIniTunes(item)` | Open iTunes/Music |
| `getPodcasts()` | Get subscribed podcasts |
| `searchPodcasts(query)` | Search for podcasts |
| `playPodcast(item)` | Play podcast episode |
| `startShazam()` | Identify song with Shazam |

## Contacts

Access contacts and phone/email info.

| Function | Description |
|---|---|
| `getContacts(filter)` | Get contacts matching filter |
| `selectContact(multiple?)` | Let user pick contact(s) |
| `getEmails(contact)` | Get emails from contact |
| `getPhoneNumbers(contact)` | Get phone numbers from contact |
| `selectEmailAddress()` | Let user pick email |
| `selectPhoneNumber()` | Let user pick phone number |
| `emailAddress(text)` | Parse email from text |
| `phoneNumber(text)` | Parse phone number from text |
| `getContactDetail(contact, detail)` | Get contact's detail |
| `call(contact)` | Initiate a call |

## Text Processing

Convert and process text data.

| Function | Description |
|---|---|
| `define(word)` | Get word definition |
| `getEmojiName(emoji)` | Get emoji description |
| `getTextFromImage(image)` | OCR - extract text from image |
| `transcribeText(audio)` | Convert speech to text |
| `getRichTextFromMarkdown(markdown)` | Convert Markdown to rich text |
| `getRichTextFromHTML(html)` | Convert HTML to rich text |
| `makeHTML(text)` | Convert text to HTML |
| `makeMarkdown(text)` | Convert text to Markdown |
| `lowercase(text)` | Convert to lowercase |
| `uppercase(text)` | Convert to uppercase |

## Files

Read and write files.

| Function | Description |
|---|---|
| `saveFile(path, content)` | Save content to file |
| `getFile(path)` | Read file content |
| `appendFile(path, content)` | Append to file |

## Encryption & Encoding

Hash and encode data.

| Function | Description |
|---|---|
| `hash(value, algorithm?)` | Hash text (MD5, SHA1, SHA256, etc.) |
| `base64Encode(value)` | Encode to Base64 |
| `base64Decode(value)` | Decode from Base64 |

## Location & Weather

Get location and weather information.

| Function | Description |
|---|---|
| `getCurrentLocation()` | Get current GPS location |
| `getCurrentWeather(location?)` | Get weather forecast |

## Shortcuts

Run and interact with Siri Shortcuts.

| Function | Description |
|---|---|
| `runShortcut(name, input?)` | Run another shortcut |
| `wait(seconds)` | Pause execution |

## Advanced: Syscall IDs

Melon functions map to Siri Shortcuts actions via syscall IDs. This is mostly internal, but useful for debugging.

| Function | Syscall ID |
|---|---|
| `print(...)` | `is.workflow.actions.showresult` |
| `input(prompt?)` | `is.workflow.actions.prompt` |
| `exit(value?)` | `is.workflow.actions.stop` |
| `alert(message, title?)` | `is.workflow.actions.alert` |
| `confirm(message, title?)` | `is.workflow.actions.confirm` |
| `notify(body, title?)` | `is.workflow.actions.notification` |
| `speak(text)` | `is.workflow.actions.speaktext` |
| `getClipboard()` | `is.workflow.actions.getclipboard` |
| `setClipboard(value)` | `is.workflow.actions.setclipboard` |
| `share(value)` | `is.workflow.actions.share` |
| `airdrop(value)` | `is.workflow.actions.airdrop` |
| `findEmail(filter)` | `is.workflow.actions.findemail` |
| `findMessage(filter)` | `is.workflow.actions.findmessage` |
| `findConversation(filter)` | `is.workflow.actions.findconversation` |
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
| `saveFile(path, content)` | `is.workflow.actions.documentpicker.save` |
| `getFile(path)` | `is.workflow.actions.documentpicker.open` |
| `appendFile(path, content)` | `is.workflow.actions.appendtofile` |
| `wait(seconds)` | `is.workflow.actions.delay` |
| `runShortcut(name, input?)` | `is.workflow.actions.runworkflow` |
| `hash(value, algorithm?)` | `is.workflow.actions.hash` |
| `base64Encode(value)` | `is.workflow.actions.base64encode` |
| `base64Decode(value)` | `is.workflow.actions.base64decode` |
| `getCurrentLocation()` | `is.workflow.actions.getcurrentlocation` |
| `getCurrentWeather(location?)` | `is.workflow.actions.weather.currentconditions` |
