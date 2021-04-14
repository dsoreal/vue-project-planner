<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <singleProject :project="project" @delete="handleDelete" />
      </div>
    </div>
    <div v-else>
      <p>loading chek list...</p>
    </div>
  </div>
</template>

<script>
import singleProject from '../components/singleProject.vue'

export default {
  name: 'Home',
  components: { singleProject },
    data() {
      return {
        projects: []
      }
    },
  mounted() {
    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then(data => this.projects = data)
    .catch(err => alert(err.message))
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id
      })
    }
  }
}
</script>
