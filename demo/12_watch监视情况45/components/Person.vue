<template>
<div class="person">
<h2>姓名:{{person.name}}</h2>
  <h2>年龄:{{person.age}}</h2>
  <h2>汽车:{{person.car.c1}},{{person.car.c2}}</h2>
  <button @click="changeName">修改名字</button>
  <button @click="changeAge">修改年龄</button>
  <button @click="changeC1">修改第一台车</button>
  <button @click="changeC2">修改第二台车</button>
  <button @click="changeCar">修改整辆车</button>

</div>

</template>

<script setup lang="ts" name="person">

import {reactive, watch} from "vue";

const person = reactive({
  name:'fireshine',
  age:18,
  car:{
    c1:'奔驰',
    c2:'宝马'
  }
})

function changeName(){
  person.name +='~'
}

function changeAge(){
  person.age+=1
}

function changeCar(){
  person.car = {
    c1:'雅迪',
    c2:'爱玛'
  }

}

function changeC1(){
  person.car.c1 ='奥迪'

}

function changeC2(){
  person.car.c2 = '法拉利'
}

// watch(()=>{
//   return person.name
// },(newValue,oldValue) => {
//   console.log('person.name变化了',newValue,oldValue)
// })

// 监视基本类型只能用函数式
// watch(()=> person.name,(newValue,oldValue) => {
//   console.log('person.name变化了',newValue,oldValue)
// })

// 只能监视car里面的属性，监视不到car的地址
// watch(person.car,(newValue,oldValue) => {
//   console.log('person.car',newValue,oldValue)
// })

// 只能监视car的地址值，监视不到car的属性
// watch(()=>person.car,(newValue,oldValue) => {
//   console.log('person.car',newValue,oldValue)
// })

watch(()=>person.car,(newValue,oldValue) => {
  console.log('person.car',newValue,oldValue)
},{deep:true})

watch([()=>person.name, ()=>person.age], (newValue,oldValue) => {
  console.log('person.name and person.age',newValue,oldValue)})

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
