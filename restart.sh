pm2 delete 0
(cd minecraft-threejs && git pull)
pm2 start minecraft-threejs/server/server.js
pm2 log