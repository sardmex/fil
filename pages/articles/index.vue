<template>
    <div>
      <h1>Статьи</h1>
      <ul>
        <li v-for="article in articles" :key="article.id">
          <nuxt-link :to="`/articles/${article.id}`">{{ article.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { gql } from '@apollo/client/core';
  import { useApollo } from '#app';
  
  const articles = ref([]);
  
  const query = gql`
    query GetArticles {
      articles {
        id
        title
      }
    }
  `;
  import apollo from "@/apollo/asrp-media";

  import {QUERY_ARTICLES} from "@/apollo/asrp-media/queries";

const {data: {articles: {Articles}}} = await apollo.query({
        query: QUERY_ARTICLES
      });
      
  onMounted(async () => {
    const { apollo } = useApollo();
    const { data } = await apollo.query({ query });
    articles.value = data.articles;
  });
  </script>
  