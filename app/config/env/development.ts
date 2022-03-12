import 'dotenv/config';

export default {
  HOST: process.env.APP_HOST,
  API_VERSION: process.env.API_VERSION,
  JWT_SECRET: process.env.JWT_SECRET,
};
