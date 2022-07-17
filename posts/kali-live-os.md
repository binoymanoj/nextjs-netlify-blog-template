---
title: 'Installing kali-linux on USB drive(Live OS)'
date: 'July 17, 2022'
excerpt: 'How to install Kali-Linux on pendrive/liveOS with persistence.'
cover_image: '/images/posts/kali-linux.jpg'
---

# Installing Kali-Linux on Windows Subsystem for Linux.
___
___

## Prerequisites :

* Windows 10/11.
* If you are using windows 10, the Build should be 19041 or higher. ( search for "winver" in search bar ) or
  ( to check version, go to setting -> about -> OS build )
* Enable virtualization in bios. ( search for tutorial in youtube )

This article will cover how to install Kali-Linux on Windows 10 and 11.
___

## Steps to install WSL2 :

Follow these instructions step-by-step 

Open powershell (run as administrator).

```powershell
wsl --install -d kali-linux
```
Once it is done, set wsl version to 2.

```powershell
wsl --set-default-version 2
```
After setting this up, restart your computer.

Now go to microsoft store and download "kali-linux" application.

Open the application and follow the instructions.

Set username and password.

After completing setup, run the following commands.
>For updating and upgrade all packages.

```bash
sudo apt update && sudo apt upgrade -y
```
Now you can install any kali-linux application in the command line (Gui applications are also supported)

For installing most common kali-linux applications.

```bash
sudo apt install kali-linux-large -y
```

It will install all the applications that are available in the kali-linux-large package.

___

## Conclusion :

This article covered how to install and run WSL2 on Windows 10 and 11. If you have any questions, feel free to contact me. I will try to answer your questions.






