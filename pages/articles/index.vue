<template>
  <div>
    <h1>Articles</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <nuxt-link :to="`/articles/${article.id}`">
          {{ article.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  async asyncData({ app }) {
    const { data } = await app.apolloProvider.defaultClient.query({
      query: gql`
        query {
          articles {
            id
            title
          }
        }
      `
    })
    return { articles: data.articles }
  }
}
</script>
