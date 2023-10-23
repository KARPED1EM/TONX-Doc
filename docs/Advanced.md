---
lang: en-US
title: Advanced
---

# Advanced

## HotKeys

| Hotkeys                                            | To                                       | Access                 |
| -------------------------------------------------- | ---------------------------------------- | ---------------------- |
| <kbd>F11</kbd>                                     | change resolution                        | mod                    |
| <kbd>Alt</kbd> + <kbd>Enter</kbd>                  | switch to full-screen                    | pc                     |
| <kbd>F5</kbd> + <kbd>T</kbd>                       | reload custom translation                | mod                    |
| <kbd>F5</kbd> + <kbd>X</kbd>                       | output custom transation                 | mod                    |
| <kbd>Ctrl</kbd> + <kbd>F1</kbd>                    | output log file to desktop               | mod                    |
| <kbd>Alt</kbd> + <kbd>C</kbd>                      | copy current game options                | mod                    |
| <kbd>F10</kbd>                                     | pop up root directory of game            | mod                    |
| <kbd>Ctrl</kbd>+<kbd>Right Click</kbd>             | kill the selected player                 | host & meeting         |
| <kbd>Shift</kbd> + <kbd>C</kbd> + <kbd>Enter</kbd> | show chat bubble                         | host & in game         |
| <kbd>Shift</kbd> + <kbd>L</kbd> + <kbd>Enter</kbd> | force end game                           | host & in game         |
| <kbd>Shift</kbd> + <kbd>M</kbd> + <kbd>Enter</kbd> | force start / end meeting                | host & in game         |
| <kbd>Shift</kbd>                                   | start game now                           | host & start countdown |
| <kbd>C</kbd>                                       | reset start countdown                    | host & start countdown |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd>+ <kbd>N</kbd>   | show description of current game options | host                   |
| <kbd>Ctrl</kbd>+ <kbd>N</kbd>                      | show current game options                | host                   |
| <kbd>Ctrl</kbd>+ <kbd>Delete</kbd>                 | reset to default TOHE options            | host & lobby           |
| <kbd>Shift</kbd> + <kbd>E</kbd> + <kbd>Enter</kbd> | suicide                                  | host & in game         |
| <kbd>Shift</kbd> + <kbd>D</kbd> + <kbd>Enter</kbd> | open all doors (airship)                 | host & debug & in game |
| <kbd>Shift</kbd> + <kbd>K</kbd> + <kbd>Enter</kbd> | set your kill cooldown to 0              | host & debug & in game |
| <kbd>Shift</kbd> + <kbd>T</kbd> + <kbd>Enter</kbd> | done all your tasks                      | host & debug & in game |
| <kbd>Y</kbd>                                       | rpc sync options for all client          | host & debug & in game |
| <kbd>G</kbd>                                       | show intros                              | host & debug & in game |
| <kbd>=</kbd>                                       | switch task show                         | host & debug & in game |
| <kbd>I</kbd>                                       | get present coordinate                   | host & debug & in game |

## Chat Command

| Command           | To                              | Access    |
| ----------------- | ------------------------------- | --------- |
| /dump             | output log file to desktop      | mod       |
| /v                | check all player's mod version  | mod       |
| /win              | last win players                | everybody |
| /l                | last game result                | everybody |
| /rn [name]        | set your name                   | host      |
| /hn [text]        | hide lobby code                 | host      |
| /level [level]    | set your game level             | host      |
| /n                | show current game options       | everybody |
| /n r              | show all enabled roles          | everybody |
| /r                | show all enabled roles          | everybody |
| /r [role]         | show role description           | everybody |
| /dis [crew/imp]   | [crew/imp] disconncted          | host      |
| /h                | show command list               | everybody |
| /m                | show your role description      | everybody |
| /t [temp]         | show template text              | mod       |
| /mw [seconds]     | set message wait time           | host      |
| /s [text]         | send host message               | host      |
| /exe [player id]  | exile player                    | host      |
| /kill [player id] | kill player                     | host      |
| /color [color]    | set your color                  | everybody |
| /qt               | exit this lobby forever         | everybody |
| /xf               | fix when name cover msg content | everybody |
| /id               | show all player's id            | host      |
| /end              | force end game                  | host      |
| /hy               | force start / end meeting       | host      |

## Welcome & onMeeting auto messages

Open the root directory of game，find `..\Among Us\TOHE_DATA\template.txt` file.

You can see that there are `welcome`, `OnMeeting` and other words in the file, where `welcome` is the message that will be sent when other players enter your lobby, and `OnMeeting` is the message that will be sent when each meeting starts. Where `\n` means newline. While we fully allow you to modify these files as you please, please try not to modify the format of this file to avoid game errors.

## Ban list & baned words & baned name

Open the root directory of game: `..\Among Us\TOHE_DATA\`

there are four files:

- BanList.txt  -  banned players（friendcode）
- BanWords.txt  -  banned words
- DenyName.txt  -  banned name
- template.txt  -  message template（[above](#Welcome & onMeeting auto messages)）
