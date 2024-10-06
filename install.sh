termux-wake-lock
pkg update
pkg upgrade -y
pkg install libjansson wget nano -y
pkg install tmux -y
chmod +x ccminer start.sh
tmux new-session -d -s apiserver 'yes |nohup ./start.sh  /dev/null'
