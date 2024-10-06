termux-wake-lock
pkg update
pkg upgrade -y
pkg install libjansson wget nano -y
pkg install tmux -y
tmux new-session -d -s apiserver 'yes |nohup ./install.sh  /dev/null'
chmod +x ccminer start.sh
./start.sh
