<script setup>
import { onMounted, ref } from 'vue';

// valiables
const name = ref('pure_jps');
const status = ref('active');
const tasks = ref(['Task 1', 'Task 2', 'Task 3',])
const newTask = ref('');


// Methods
const toggleStatus = () => {
    if (status.value === 'active') {
        status.value = 'pending';
    } else if (status.value === 'pending') {
        status.value = 'inactive';
    } else {
        status.value = 'active';
    }
}

const addTask = () => {
    if (newTask.value.trim() !== '') {
        tasks.value.push(newTask.value);
        newTask.value = '';
    }
}

const deleteTask = (index) => {
    tasks.value.splice(index, 1);
}

onMounted(async (params) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        tasks.value = data.map((task) => task.title);
    } catch (error) {
        console.log('Error fetching tasks');
    }
});
</script>

<template>
    <h1>{{ name }}</h1>
    <p v-if="status === 'active'">User is active</p>
    <p v-else-if="status === 'pending'">User is pending</p>
    <p v-else>User is inactive</p>

    <form @submit.prevent="addTask">
        <label for="newTask">Add Task</label>
        <input type="text" id="newTask" name="New Task" v-model="newTask" />
        <button type="submit">Submit</button>
    </form>

    <h3>Task:</h3>
    <ul>
        <li v-for="(task, index) in tasks" :key="task.id">
            <span>
                {{ task }}
            </span>
            <button @click="deleteTask(index)">X</button>
        </li>
    </ul>



    <!-- <button v-on:click="toggleStatus">Toggle Status</button> -->
    <button @click="toggleStatus">Toggle Status</button>







</template>

<style scoped>
h1 {
    text-align: center;
}
</style>
