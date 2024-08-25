import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const apolloClient = new ApolloClient({
    uri: 'https://example.com/graphql', // замените на ваш GraphQL endpoint
    cache: new InMemoryCache(),
  });

  nuxtApp.provide('apollo', apolloClient);
});
