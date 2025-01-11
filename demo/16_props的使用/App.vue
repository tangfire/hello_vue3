<template>
 <div class="app">
   <h2 a="1+1" :b="1+1" c="x" :d="x" ref="qwe"></h2>
   <Person e="hello world" :list="personList"></Person>
 </div>
</template>

<script lang="ts" setup name="App">

import Person from './components/Person.vue'
import {type Persons} from "@/types";
import {reactive, ref} from "vue";

const x = 9

const qwe = ref()

const personList = reactive<Persons>([
  {id:'asdfgh01',name:"lisi",age:60},
  {id:'asdfgh02',name:"zhansan",age:25},
  {id:'asdfgh03',name:"wangwu",age:45},
])

console.log(personList)

</script>



<style scoped>


</style>
