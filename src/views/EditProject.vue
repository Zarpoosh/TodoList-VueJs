<template>
  <form>
    <label typeof="text">Title :</label>
    <input v-model="title" type="text" required />
    <label>Details :</label>
    <textarea v-model="details"></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      title: '',
      details: '',
      url: 'http://localhost:3000/todos/' + this.id
    }
  },
  mounted() {
    fetch(this.url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        this.title = data.title
        this.details = data.details
      })
      .catch((err) => console.log(err.message))
  }
}
</script>

<style></style>
