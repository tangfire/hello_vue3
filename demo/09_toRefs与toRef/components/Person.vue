<template>


<div class="person">
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{person.age}},{{nl}}</h2>
  <button @click="changeName">修改名字</button>
  <button @click="changeAge">修改年龄</button>
</div>

</template>



<script setup lang="ts" name="person">

import {reactive, toRefs,toRef} from "vue";

const person = reactive({
  name:'张三',
  age:18
})


const {name,age} = toRefs(person)

// toRefs与toRef功能一致，但toRefs可以批量转换。
const nl = toRef(person,'age')

function changeName(){
  name.value +='~'
}

function changeAge(){
  age.value +=1

}
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

li{
  font-size: 20px;
}
</style>
