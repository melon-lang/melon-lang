# Cherri Action Coverage

Generated from `shortcut/cherri-docs/standard/*.md` and current wrappers in `src/syscall.ts` plus dispatch in `shortcut/melon.cherri`.

## Coverage Summary

- Documented callable names: **404**
- Implemented via melon wrappers: **29**
- Not yet implemented: **375**
- Coverage: **7.2%**

## Implemented Wrappers

| Melon wrapper | Syscall id | Cherri action call | In docs |
|---|---|---|---|
| print | is.workflow.actions.showresult | show | yes |
| input | is.workflow.actions.prompt | prompt | yes |
| exit | is.workflow.actions.stop | output | yes |
| alert | is.workflow.actions.alert | alert | yes |
| confirm | is.workflow.actions.confirm | confirm | yes |
| notify | is.workflow.actions.notification | showNotification | yes |
| speak | is.workflow.actions.speaktext | speak | yes |
| getClipboard | is.workflow.actions.getclipboard | getClipboard | yes |
| setClipboard | is.workflow.actions.setclipboard | setClipboard | yes |
| share | is.workflow.actions.share | share | yes |
| setBrightness | is.workflow.actions.setbrightness | setBrightness | yes |
| setVolume | is.workflow.actions.setvolume | setVolume | yes |
| darkMode | is.workflow.actions.darkmode | darkMode | yes |
| lightMode | is.workflow.actions.lightmode | lightMode | yes |
| vibrate | is.workflow.actions.vibrate | vibrate | yes |
| lockScreen | is.workflow.actions.lock | lockScreen | yes |
| getBatteryLevel | is.workflow.actions.getbatterylevel | getBatteryLevel | yes |
| getDeviceDetail | is.workflow.actions.getdevicedetail | getDeviceDetail | yes |
| downloadURL | is.workflow.actions.downloadurl | downloadURL | yes |
| openURL | is.workflow.actions.openurl | openURL | yes |
| getWebContents | is.workflow.actions.getwebpagecontents | getWebpageContents | yes |
| saveFile | is.workflow.actions.documentpicker.save | saveFile | yes |
| getFile | is.workflow.actions.documentpicker.open | getFile | yes |
| appendFile | is.workflow.actions.appendtofile | appendToFile | yes |
| wait | is.workflow.actions.delay | wait | yes |
| runShortcut | is.workflow.actions.runworkflow | run | yes |
| hash | is.workflow.actions.hash | hash | yes |
| getCurrentLocation | is.workflow.actions.getcurrentlocation | getCurrentLocation | yes |
| getCurrentWeather | is.workflow.actions.weather.currentconditions | getCurrentWeather | yes |

## Documented And Implemented (by Cherri action name)

- alert
- appendToFile
- confirm
- darkMode
- downloadURL
- getBatteryLevel
- getClipboard
- getCurrentLocation
- getCurrentWeather
- getDeviceDetail
- getFile
- getWebpageContents
- hash
- lightMode
- lockScreen
- openURL
- output
- prompt
- run
- saveFile
- setBrightness
- setClipboard
- setVolume
- share
- show
- showNotification
- speak
- vibrate
- wait

## Documented But Not Yet Implemented

- addCalendar
- addQuickReminder
- addToBooks
- addToGIF
- addToMusic
- addToPlaylist
- addToReadingList
- addWeatherLocation
- adjustDate
- adjustTextTone
- airdrop
- alternatingCase
- appendNote
- askChatGPT
- askCloudLLM
- askDeviceLLM
- askLLM
- base64Decode
- base64Encode
- calculate
- call
- capitalize
- capitalizeAll
- ceil
- chooseFromList
- chooseFromVCard
- clearUpNext
- combineImages
- comment
- connectedToCharger
- connectToServer
- containsText
- contentGraph
- convertImage
- convertMeasurement
- convertToJPEG
- convertToUSDZ
- correctSpelling
- count
- createAlarm
- createAlbum
- createFolder
- createShortcutLink
- cropImage
- currentDate
- customImageMask
- customImageOverlay
- date
- define
- deleteAlarm
- deleteFiles
- deletePhotos
- detectLanguage
- dismissSiri
- displaySleep
- DNDOff
- DNDOn
- document.body.append
- document.body.appendChild
- editEvent
- emailAddress
- embedFile
- encodeAudio
- encodeVideo
- expandURL
- extractArchive
- extractImageText
- facetimeCall
- fileRequest
- fileSize
- filterContacts
- filterFiles
- findConversation
- findEmail
- findMessage
- flipImage
- floor
- formatDate
- formatNumber
- formatTime
- formatTimestamp
- formRequest
- generateImage
- generateKeyPoints
- generateList
- generateProofread
- generateRewrite
- generateSummary
- generateTable
- getAddresses
- getAlarms
- getAllWallpapers
- getApps
- getArticle
- getArticleDetail
- getCellularDetail
- getContactDetail
- getContacts
- getCurrentSong
- getCurrentURL
- getDates
- getDictionary
- getEmails
- getEmojiName
- getEventDetail
- getExternalIP
- getFileDetail
- getFileFromFolder
- getFileLink
- getFirstItem
- getFocusMode
- getFolderContents
- getGifs
- getHalfwayPoint
- getHolidayDate
- getImageDetail
- getImageFrames
- getImages
- getKeys
- getLastImport
- getLastItem
- getLatestBursts
- getLatestLivePhotos
- getLatestPhotos
- getLatestScreenshots
- getLatestVideos
- getListItem
- getListItems
- getLocalIP
- getLocationDetail
- getMapsLink
- getMatchGroup
- getMatchGroups
- getMusicDetail
- getName
- getNumbers
- getObjectOfClass
- getOnScreenContent
- getOrientation
- getParentDirectory
- getPDFText
- getPhoneNumbers
- getPlaylistSongs
- getPodcastDetail
- getPodcasts
- getRandomItem
- getRichTextFromHTML
- getRichTextFromMarkdown
- getRSS
- getRSSFeeds
- getSelectedFiles
- getShazamDetail
- getShortcutDetail
- getShortcuts
- getText
- getTextFromImage
- getURLDetail
- getURLHeaders
- getURLs
- getValue
- getValues
- getWallpaper
- getWeatherDetail
- getWeatherForecast
- getWebPageDetail
- getWifiDetail
- getWindows
- hideAllApps
- hideApp
- isCharging
- isOnline
- joinText
- jsonRequest
- killAllApps
- killApp
- labelFile
- list
- listen
- lowercase
- magnifierDescribe
- magnifierPointAndSpeak
- magnifierReader
- makeArchive
- makeDiskImage
- makeGIF
- makeHTML
- makeImageFromPDFPage
- makeImageFromRichText
- makeMarkdown
- makePDF
- makeQRCode
- makeShortcut
- makeSizedDiskImage
- makeSpokenAudio
- makeVideoFromGIF
- markup
- maskImage
- matchText
- measurement
- moveWindow
- mustOutput
- newContact
- nothing
- number
- openApp
- openCustomXCallbackURL
- openFile
- openInMaps
- openNote
- openRemindersList
- openShortcut
- openXCallbackURL
- optimizePDF
- outputOrClipboard
- overlayImage
- pause
- phoneNumber
- play
- playLater
- playMusic
- playNext
- playPodcast
- playSound
- prependToFile
- print
- quicklook
- quitAllApps
- quitApp
- randomNumber
- reboot
- recordAudio
- removeBackground
- removeContactDetail
- removeEvents
- removeFromAlbum
- removeReminders
- removeWeatherLocation
- rename
- renameAlbum
- replaceText
- resizeImage
- resizeImageByLongestEdge
- resizeImageByPercent
- resizeWindow
- reveal
- rotateMedia
- round
- runAppleScript
- runJavaScriptOnWebpage
- runJS
- runJSAutomation
- runSelf
- runShellScript
- runSSHScript
- saveFilePrompt
- savePhoto
- search
- searchAppStore
- searchGiphy
- searchPasswords
- searchPhotos
- searchPodcasts
- searchShortcuts
- searchVoiceMemos
- searchWeb
- seek
- selectContact
- selectEmailAddress
- selectFile
- selectFolder
- selectMusic
- selectPhoneNumber
- selectPhotos
- sendEmail
- sendMessage
- setAirdropReceiving
- setAirplaneMode
- setAutoAnswerCalls
- setBackgroundSound
- setBackgroundSounds
- setBackgroundSoundsVolume
- setBluetooth
- setCellularData
- setClassicInvert
- setClosedCaptionsSDH
- setColorFilters
- setFocusMode
- setLEDFlash
- setLeftRightBalance
- setLiveCaptions
- setMediaBackgroundSounds
- setMetadata
- setMonoAudio
- setName
- setNightShift
- setReduceMotion
- setReduceTransparency
- setSmartInvert
- setSoundRecognition
- setStageManager
- setSwitchControl
- setTextSize
- setTrueTone
- setValue
- setVoiceControl
- setWallpaper
- setWhitePoint
- setWifi
- setZoom
- showInCalendar
- showIniTunes
- showQuickNote
- showWebpage
- shutdown
- skipBack
- skipFwd
- sleep
- splitApps
- splitPDF
- splitText
- startScreensaver
- startShazam
- startTimer
- statistic
- stop
- streetAddress
- stripImageMetadata
- stripMediaMetadata
- takeInteractiveScreenshot
- takePhoto
- takeScreenshot
- takeVideo
- titleCase
- toggleAirplaneMode
- toggleAlarm
- toggleAppearance
- toggleAutoAnswerCalls
- toggleBackgroundSounds
- toggleBluetooth
- toggleCellularData
- toggleClassicInvert
- toggleClosedCaptionsSDH
- toggleColorFilters
- toggleDND
- toggleFocusMode
- toggleLEDFlash
- toggleLeftRightBalance
- toggleLiveCaptions
- toggleMediaBackgroundSounds
- toggleMonoAudio
- toggleNightShift
- togglePlayPause
- toggleReduceMotion
- toggleReduceTransparency
- toggleSmartInvert
- toggleStageManager
- toggleSwitchControl
- toggleTrueTone
- toggleVoiceControl
- toggleWhitePoint
- toggleWifi
- toggleZoom
- transcribeText
- translate
- trimVideo
- trimWhitespace
- turnOffAlarm
- turnOnAlarm
- typeOf
- updateContact
- uppercase
- url
- urlDecode
- urlEncode
- waitToReturn

## Notes

- This report treats callable signatures in standard docs as candidate wrap targets.
- Some entries are helpers/utilities, not direct Shortcut action wrappers.
- Matching is done by Cherri call name used in dispatch.
