<template>
  <FilterNavVue @filterChange="current = $event" :current="current" />
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />
      </div>
    </div>
  </div>
  <p class="minoo">minoo zarpoosh :)) => <a href="https://github.com/Zarpoosh/TodoList-VueJs">source of code</a></p>
</template>
<script>
import SingleProject from '@/components/SingleProject.vue'
import FilterNavVue from '@/components/FilterNav.vue'
export default {
  name: 'Home',
  components: { SingleProject, FilterNavVue },
  data() {
    return {
      projects: [],
      current: 'all'
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
  },
  computed: {
    filteredProjects() {
      if (this.current === 'completed') {
        return this.projects.filter((item) => item.complete)
      } else if (this.current === 'ongoing') {
        return this.projects.filter((item) => !item.complete)
      } else {
        return this.projects
      }
    }
  }
}
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.minoo{
  color:#797979;
  text-align: center;
  text-transform: uppercase;
}
</style>
