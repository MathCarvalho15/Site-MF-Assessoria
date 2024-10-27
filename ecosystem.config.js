module.exports = {
  apps: [{
    script: 'index.js',
    watch: '.',
    env_production: {
      NODE_ENV: 'production'
    }
  }, {
    script: 'C:/Users/carva/OneDrive/DESKTOP-MATHEUS/Documentos/Mf Regulatorio/app/service-worker/index.js',
    watch: ['C:/Users/carva/OneDrive/DESKTOP-MATHEUS/Documentos/Mf Regulatorio/app/service-worker']
  }
  ],

  deploy: {
    production: {
      user: 'jsdura_nemezys2k',
      host: '26m21v25m13d',
      ref: 'origin/main',
      repo: 'https://github.com/MathCarvalho15/Site-MF-Assessoria.git',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
