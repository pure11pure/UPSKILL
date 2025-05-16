<script>
export default {
  data() {
    return {
      name: 'pure_jps',
      status: 'active',
      tasks: [
        { id: 1, title: 'Task 1' },
        { id: 2, title: 'Task 2' },
        { id: 3, title: 'Task 3' },
      ],
      link: 'https://google.com',
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending';
      } else if (this.status === 'pending') {
        this.status = 'inactive';
      } else {
        this.status = 'active';
      }
    }
  }
};
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h3>Task:</h3>
  <ul>
    <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
  </ul>

  <!-- <a v-bind:href="link">CLick for google</a> -->
  <a :href="link">CLick for google</a>

  <!-- <button v-on:click="toggleStatus">Toggle Status</button> -->
  <button @click="toggleStatus">Toggle Status</button>







</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
