<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />
      </div>
    </div>
  </div>
</template>
<script>
import SingleProject from '@/components/SingleProject.vue'
export default {
  name: 'Home',
  components: { SingleProject },
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/todos')
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err))
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((item) => {
        return item.id !== id
      })
    },
    handleComplete(id) {
      let p = this.projects.find((item) => {
        return item.id === id
      })
      p.complete = !p.complete
    }
  }
}
</script>
