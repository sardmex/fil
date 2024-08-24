<template>
    <div>
      <h1>{{ article.title }}</h1>
      <p>{{ article.content }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { gql } from '@apollo/client/core';
  import { useApollo, useRoute } from '#app';
  
  const article = ref(null);
  const route = useRoute();
  
  const query = gql`
    query GetArticle($id: ID!) {
      article(id: $id) {
        id
        title
        content
      }
    }
  `;
  
  onMounted(async () => {
    const { apollo } = useApollo();
    const { data } = await apollo.query({ query, variables: { id: route.params.id } });
    article.value = data.article;
  });
  </script>
  