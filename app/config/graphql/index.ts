import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { Express } from 'express';
import typeDefs from './schema';
import resolvers from './resolvers';
import { rateLimiter, verifyToken } from '../../api/graphql/middlewares';

const graphqlConfig = (app: Express) => {
  // schema
  const schema = buildSchema(typeDefs);
  // Root resolver
  const root = resolvers;

  app.use(rateLimiter);
  app.use(verifyToken);

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      rootValue: root,
      graphiql: true,
    }),
  );
};

export default graphqlConfig;
