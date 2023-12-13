<template>
  <input v-model="user.name" placeholder="bi isim giriniz" type="text" class="form">
  <p>{{ user.name }}</p>
  <div class="">
    <ul>
      <li v-for="user in todos">{{ user.title }}</li>
    </ul>
    <br>
    <hr>
    <br>
    <h1> karakter sayısı 20den küçük olanlar </h1>
    <br>

    <ul v-for="user in todos">
      <li v-if="user.title.length<25">{{ user.title }}=>{{ user.title.length }}</li>
    </ul>
    <br>
    <hr>
    <br>
    <br>
    <button :style="{background:'green'}" @click="counter++">arttır</button>
    <h1>{{ counter }}</h1>
    <button :style="{background:'red'}" @click="counter--">azalt</button>
    <pre>
      {{ log }}
    </pre>
    <hr>
    <br>

  </div>
</template>
<script setup lang="ts">


import {onMounted, reactive, ref} from "vue";

const user = reactive({
  name:""
})

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const todos = reactive<Todo[]>([]);
onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/todos").then((r) => r.json()).then((todosData: Todo[]) => {
    todos.push(...todosData);
  });
}); </script>

<script lang="ts">
export default {
  data() {
    return {
      counter: 0,
      log: 0
    }
  },

  watch: {
    counter(newValue, oldValue) {
      this.log = `oldValue=>${oldValue} --- newValue=>${newValue}`;
    }
  }
}
</script>


<style>
.red {
  background-color: red;
}

.green {
  background-color: green;
}

.form{
  border: 1px solid black;
  margin-top: 10px;
  text-align: center;
}
</style>