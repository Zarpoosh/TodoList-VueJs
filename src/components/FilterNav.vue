<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{ active: current === 'all' }">View All</button>
    <button @click="updateFilter('completed')" :class="{ active: current === 'completed' }">
      Completed
    </button>
    <button @click="updateFilter('ongoing')" :class="{ active: current === 'ongoing' }">
      Ongoing
    </button>
  </nav>
</template>

<script>
export default {
  props: ['current'],
  methods: {
    updateFilter(by) {
      this.$emit('filterChange', by)
    }
  }
}
</script>

<style>
.filter-nav button.active {
  color: #fff;
}
</style>
