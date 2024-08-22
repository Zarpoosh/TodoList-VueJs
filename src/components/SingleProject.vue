<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="showdetails = !showdetails">{{ project.title }}</h3>
      <div class="icons">
        <router-link :to="{name:'EditProject' , params:{id:project.id}}">
          <span class="material-icons"> edit </span>
        </router-link>
        <span @click="deleteProject" class="material-icons"> delete </span>
        <span class="material-icons" @click="changeComplete"> check </span>
      </div>
      <div class="details" v-if="showdetails">
        <p>{{ project.detail }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { compile } from 'vue'

export default {
  props: ['project'],
  data() {
    return {
      showdetails: false,
      url: 'http://localhost:3000/todos/' + this.project.id
    }
  },
  methods: {
    deleteProject() {
      fetch(this.url, { method: 'DELETE' })
        .then(() => this.$emit('delete', this.project.id))
        .catch((err) => console.log(err.message))
    },
    changeComplete() {
      fetch(this.url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ complete: !this.project.complete })
      })
        .then(() => this.$emit('complete', this.project.complete))
        .catch((err) => console.log(err.message))
    }
  }
}
</script>

<style>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
.complete {
  border-left: 4px solid #00ce89;
}
</style>
