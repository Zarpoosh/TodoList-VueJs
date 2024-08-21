<template>
  <div class="project">
    <div class="actions">
      <h3 @click="ShowDetail">{{ project.title }}</h3>
      <div class="details">
        <p>{{ project.detail }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
  data() {
    return {
      showdetails: false
    }
  },
  methods: {
    ShowDetail() {
      this.showdetails = !this.showdetails
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
</style>
