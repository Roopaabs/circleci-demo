// ecosystem.config.js
module.exports = {
    apps: [
      {
        name: 'user_api_index',
        script: 'index.js',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  