import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { Express } from 'express';

const graphqlConfig = (app: Express) => {
  // schema
  const schema = buildSchema(`
    type Query {
        message: String
        type: String
    }
`);

  // Root resolver
  const root = {
    message: () => 'Welcome!',
    type: () => 'graphql',
  };

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
