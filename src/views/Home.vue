<template>
  <div class="home">
    <filterNav @filterChange="current = $event" :current="current" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <singleProject :project="project" @delete="handleDelete" @complete="handleComplete" />
      </div>
    </div>
    <div v-else>
      <p>loading chek list...</p>
    </div>
  </div>
</template>

<script>
import singleProject from '../components/singleProject.vue'
import filterNav from '../components/filterNav.vue'

export default {
  name: 'Home',
  components: { singleProject, filterNav },
    data() {
      return {
        projects: [],
        current: 'all'
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
    },
    handleComplete(id) {
      let p = this.projects.find(project => {
        return project.id === id
      })
      p.complete = !p.complete
    }
  },
  computed: {
    filteredProjects() {
      if (this.current === 'completed') {
        return this.projects.filter(project => project.complete)
      } 
      if (this.current === 'notCompleted') {
        return this.projects.filter(project => !project.complete)
      } else {return this.projects}
    }
  }
}
</script>
