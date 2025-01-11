<template>
<div class="person">

???
</div>

</template>

<script setup lang="ts" name="person">
import {type PersonInter,type Persons} from "@/types";
// const person:PersonInter ={id:'asdfgh01',name:'张三',age:60}

// const personList:Array<PersonInter> = [
//   {id:'asdfgh01',name:"lisi",age:60},
//   {id:'asdfgh02',name:"zhansan",age:25},
//   {id:'asdfgh03',name:"wangwu",age:45},
// ]

const personList:Persons = [
  {id:'asdfgh01',name:"lisi",age:60},
  {id:'asdfgh02',name:"zhansan",age:25},
  {id:'asdfgh03',name:"wangwu",age:45},
]

</script>



<style scoped>

.person {
  background: skyblue;
  border: 1px solid black;
  border-radius: 15px;
  padding: 10px;
}

button {
  margin-right: 20px;
}

li {
  font-size: 20px;
}
</style>
