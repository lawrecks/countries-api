/* eslint-disable no-undef */
import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import config, { expressConfig, graphqlConfig } from './config';

const app = express();
const host = config.HOST;
const port = config.PORT || 3033;
const apiVersion = config.API_VERSION || 'v1';

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

graphqlConfig(app);
expressConfig(app);

app.listen(port, () => {
  console.info(`Graphql server started at ${host}:${port}/graphql/`);
  console.info(`Express server started at ${host}:${port}/api/${apiVersion}/`);
});

export default app;
