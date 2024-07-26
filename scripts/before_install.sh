#!/bin/bash
#install node.js and pm2 globally
sudo apt-get update
sudo curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&sudo apt-get install -y nodejs
sudo apt install npm -y
sudo npm install pm2 -g
pm2 update