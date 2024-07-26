#!/bin/bash

# Install global npm packages (only if not already installed)
if ! command -v pm2 &> /dev/null
then
    npm install -g pm2
fi

# Change to the app directory
cd /var/www/html/node_api/
sudo rm -rf *

# Install project-specific dependencies
npm install
sudo rm -rf package-lock.json
exit 0
