termux-wake-lock
pkg update
pkg upgrade -y
pkg install libjansson wget nano -y
# pkg install tmux -y
device_model="short-$(getprop ro.product.model)" && sed -i "s|\"user\": \".*\"|\"user\": \"3PcaKzYUJ37qRipD6Pg6DtJzp9yEJuA3Za.$device_model\"|" config.json
chmod +x ccminer start.sh
# tmux new-session -d -s apiserver 'yes |nohup ./start.sh  /dev/null ./logFile 2>&1'
nohup watch 'yes |./start.sh'  /dev/null ./logFile 2>&1 &
