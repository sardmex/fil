<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  async asyncData({ app, params }) {
    const { data } = await app.apolloProvider.defaultClient.query({
      query: gql`
        query($id: ID!) {
          article(id: $id) {
            title
            content
          }
        }
      `,
      variables: { id: params.id }
    })
    return { article: data.article }
  }
}
</script>
