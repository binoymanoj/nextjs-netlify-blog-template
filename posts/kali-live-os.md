---
title: 'Installing kali-linux on USB drive'
date: 'July 18, 2022'
excerpt: 'How to install Kali-Linux on a pendrive with persistence and run live on any system .'
cover_image: '/images/posts/kali-on-usb.jpg'
---

# Installing Kali-Linux on USB drive 
___
___

## Prerequisites:

* USB drive minimum of 16GB ( I recommend a 32GB drive ).
* Laptop or PC with minimum of 4GB RAM.
* Download the live-boot iso file. [Kali-Linux iso file](https://www.kali.org/)
* Rufus.
___

## What is Kali-Linux?
Kali-Linux is a Linux distribution that is designed to be a lightweight and easy to use.
It is a free and open source operating system that is designed to be used for ethical purposes.
___

## Why live-boot?
One of the fastest method, for getting up and running with Kali Linux is to run it “live” from a USB drive. This method has several advantages:

  * It’s non-destructive - it makes no changes to the system’s hard drive or installed OS, and to go back to normal operations, you simply remove the Kali Live USB drive and restart the system.
  * It’s portable - you can carry Kali Linux in your pocket and have it running in minutes on an available system
  * It’s potentially persistent - so the data you collect is saved even if you remove the USB drive.

___

## How to install Kali-Linux live-boot?

<u>**Step 1 :**</u> Downloading iso file.
    
Download the live-boot version of Kali-Linux 64-bit iso file from their official website.
<u> [Download Kali-Linux live-boot](https://www.kali.org/get-kali/#kali-live) </u>

<u>**Step 2 :**</u> Booting the Kali-Linux iso file on your USB drive with persistence storage.

Download a bootloader rufus.<br/>
[click here to download rufus.](https://rufus.ie/en/)

Plug-in your USB drive into your laptop or PC. And format your USB drive.

Now open the rufus application.

Select your USB drive and iso file from downloads.<br/>
Select the persistence option to the maximum level.
Then click "Start".

It will start the booting iso file into your USB drive.

After completing successfully, remove your USB drive.

<u>**Step 3 :**</u> Using Kali-linux live-boot.

Plug-in your USB drive into your laptop or PC, in which you want to use kali-linux.

And turn on your laptop or PC.

When screen turns on keep on pressing the "F12" key. ( key may differ in different laptops or PCs )

It will open the boot menu.

You can see the usbdrive in which you have installed Kali-Linux.

Select that usbdrive and select the option "kali-linux with persistence" option. 

It will start the kali-linux with persistence.

___

## Conclusion :

In this article we have covered how to install Kali-Linux live-boot with persistence.

If you have any questions, feel free to contact me. I will try to answer your questions.







