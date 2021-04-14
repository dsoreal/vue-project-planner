<template>
    <form @submit.prevent="handleUpdate">
      <label>Title:</label>
      <input type="text" v-model="title" requried>
      <label>Details</label>
      <input type="text" requried>
      <textarea required v-model="details"></textarea>
      <button>Update Project</button>
    </form>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            title: '',
            details: '',
            uri: 'http://localhost:3000/projects/' + this.id
        }
    },
    methods: {
        handleUpdate() {
            let project = {
                title: this.title,
                details: this.details
            }

            fetch(this.uri , {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(project)
            }).then(() => { this.$router.push('/')
            }).catch((err) => console.log(err))
        }
    },
    mounted() {
        fetch(this.uri).then(res => res.json()).then(data => {
            this.title = data.title
            this.details = data.details
        })
    }
}
</script>

<style>

</style>