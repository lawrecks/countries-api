/* eslint-disable no-undef */
import express from 'express';
import morgan from 'morgan';
import config, { initConfig, graphqlConfig } from './config';

const app = express();
const host = config.HOST;
const port = config.PORT || 3033;
const apiVersion = config.API_VERSION || 'v1';
app.use(morgan('dev'));
graphqlConfig(app);
initConfig(app);

app.listen(port, () => {
  console.info(`Graphql server started at ${host}:${port}/graphql/`);
  console.info(`Express server started at ${host}:${port}/api/${apiVersion}/`);
});

export default app;
