import { GraphQLClient } from 'graphql-request';

const API_URL = process.env.REACT_APP_GRAPHCMS_API_URL || "";
const API_KEY = process.env.REACT_APP_GRAPHCMS_API_KEY;

export const graphql: GraphQLClient = new GraphQLClient(API_URL, {
  headers: {
    authorization: `Bearer ${API_KEY}`,
  },
})