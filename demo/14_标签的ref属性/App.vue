<template>
 <div class="app">
   <h2 ref="title2">你好</h2>
   <button @click="showLog">测试</button>
   <Person ref="ren"></Person>
 </div>
</template>

<script lang="ts" setup name="App">

import Person from './components/Person.vue'
import {ref} from "vue";

const title2 = ref()
const ren = ref()

function showLog() {
  console.log(title2.value)
  console.log(ren.value)
}


</script>

<style scoped>
button{
  margin-bottom: 20px;
}

</style>
