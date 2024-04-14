import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          launches: {
            keyArgs: false,
            merge(existing = {}, incoming) {
              const doc = existing?.docs ? existing?.docs : [];
              return { ...incoming, docs: [...doc, ...incoming?.docs] };
            }
          }
        }
      }
    }
  })
});
