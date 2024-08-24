<template>
    <div>
      <h1>Articles</h1>
      <ul>
        <li v-for="article in articles" :key="article.id">
          <NuxtLink :to="`/articles/${article.id}`">{{ article.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        articles: [
          { id: 1, title: "Article 1" },
          { id: 2, title: "Article 2" },
        ],
      };
    },
  };
  </script>
  