#!/bin/bash

# Check if the Node.js application is running with PM2
# if pm2 id user_api &> /dev/null; then
#     # Stop the running Node.js application with PM2
#     pm2 stop user_api
#     echo "Node.js application stopped."
# else
#     echo "Node.js application is not currently running."
#

cd /var/www/html/node_api/

#!/bin/bash

# Stop the PM2-managed application if it is running
if pm2 id 0 &> /dev/null; then
    pm2 stop 0
    echo "Application stopped."
else
    echo "Application is not currently running."
fi



