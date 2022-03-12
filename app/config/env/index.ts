/* eslint-disable @typescript-eslint/no-explicit-any */
import rootPath from 'app-root-path';
import development from './development';
import test from './test';

interface Environment {
  rootPath?: rootPath;
  PORT?: string;
  NODE_ENV?: string;
  HOST?: string;
  API_VERSION?: string;
  JWT_SECRET: string;
}

const { APP_PORT: PORT, NODE_ENV } = process.env;

// Define required environmental variables
const requiredEnvs = ['JWT_SECRET'];

// Throw error if required variable is not defined
for (const item of requiredEnvs) {
  if (!process.env[item]) {
    throw new Error(`${item} is not set in the environmental variables`);
  }
}

// Set current environmental variables based on the current environment
const currentEnv: any = {
  development,
  test,
}[NODE_ENV || 'development'];

const envs: Environment = {
  rootPath,
  PORT,
  NODE_ENV,
  ...currentEnv,
};

export default envs;
