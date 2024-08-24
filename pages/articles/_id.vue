<template>
  <div>
    <h1>Article Details</h1>
    <p>Article ID: {{ id }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    return {
      id: params.id,
    };
  },
};
</script>

<style scoped>
/* Ваши стили для страницы */
</style>