#!/bin/bash


# cd /var/www/html/node_api/
# sudo pm2 ecosystem
# pm2 start index.js --name user_api
cd /var/www/html/node_api/
sudo pm2 start index.js --name user_api_index

#pm2 start index.js --name user_api --node-args="--inspect"

sudo pm2 save     # saves the running processes
 # if not saved, pm2 will forget
# the running apps on next boot


