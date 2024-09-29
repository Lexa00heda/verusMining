#!/bin/bash
apt update
apt install python3-pip -y
pip install selenium
wget https://github.com/mozilla/geckodriver/releases/download/v0.35.0/geckodriver-v0.35.0-linux64.tar.gz
apt-get install tar -y
sudo tar -xvf geckodriver-v0.35.0-linux64.tar.gz
sudo mv geckodriver /usr/local/bin/
chmod +x /usr/local/bin/geckodriver
wget https://raw.githubusercontent.com/Lexa00heda/verusMining/refs/heads/main/sele.py
pip3 install pyotp
sudo apt-get update
sudo apt-get install android-sdk -y
wget https://developer.samsung.com/remotetestlab/webclient/assets/linux/rdb.zip
unzip rdb.zip
./rdb
