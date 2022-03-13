import { combineResolvers } from 'graphql-resolvers';
import lookUpCountry from '../controllers';
import { verifyAuth } from '../middlewares';

const getCountry = combineResolvers(verifyAuth, lookUpCountry);

export default getCountry;
