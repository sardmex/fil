import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const client = new ApolloClient({
    uri: 'https://asrp.media/public-graphql',
    cache: new InMemoryCache(),
  });
  // const client = ...

client
.query({
  query: gql`
    query GetLocations {
      locations {
        id
        name
        description
        photo
      }
    }
  `,
})
.then((result) => console.log(result));