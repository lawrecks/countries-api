import rootPath from 'app-root-path';
import development from './development';
import test from './test';

const { APP_PORT: PORT, NODE_ENV } = process.env;

interface Environment {
  rootPath?: rootPath;
  PORT?: string;
  NODE_ENV?: string;
  HOST?: string;
  API_VERSION?: string;
}

const currentEnv = {
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
