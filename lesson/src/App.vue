<template>
  <div>
    {{ person }}
  </div>
</template>

<script setup lang="ts">

import {reactive} from "vue";

interface user {
  name: string
  age: number
  gender: "male" | "female"
}


const person = reactive<user>({
  name: "yunus",
  age: 16,
  gender: "male"
})

</script>