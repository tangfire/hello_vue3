<template>
  <div class="person">
   <div class="class">
     <h2>一辆{{car.brand}}车,价格{{car.price}}万</h2>
     <button @click="changePrice">修改汽车的价格</button>
   </div>

    <ul>
      <li v-for="g in games" :key="g.id">{{g.name}}</li>
    </ul>

    <button @click="changeFirstGame">修改</button>

    <hr>

    <h2>测试:{{obj.a.b.c}}</h2>

    <button @click="changeObj">测试</button>


  </div>
</template>



<script setup lang="ts" name="person">

import {reactive} from "vue";

const car = reactive({
  brand:'奔驰',
  price:100
})

const games = reactive([
  {id:'asdfgh01',name:'王者荣耀'},
  {id:'asdfgh02',name:'火影忍者'},
  {id:'asdfgh03',name:'三国志'}
])

const obj = reactive({
  a:{
    b:{
      c:666
    }
  }
})

function changePrice(){
  car.price+=10
}

function changeFirstGame(){
  games[0].name = '流星蝴蝶剑'
}

function changeObj(){
  obj.a.b.c=60;
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
