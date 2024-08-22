<template>
  <form @submit.prevent="handleSubmit">
    <label for="text" typeof="text">Title :</label>
    <input v-model="title" type="text" required />
    <label>Details :</label>
    <textarea v-model="details"></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  methods: {
    data() {
      return {
        title: '',
        details: ''
      }
    },
    handleSubmit() {}
  }
}
</script>

<style></style>
