const envUrl = {
  development: 'http://localhost:4000',
  production: ''
};

export const baseUrl = envUrl[process.env.NODE_ENV || 'development'];
