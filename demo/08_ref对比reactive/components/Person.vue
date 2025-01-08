<template>
  <div class="person">
   <div class="class">
     <h2>一辆{{car.brand}}车,价格{{car.price}}万</h2>
     <button @click="changePrice">修改汽车的价格</button>
     <button @click="changeCar">修改汽车</button>
   </div>

    <div class="class02">
      <h2>一辆{{lorry.brand}}卡车,价格{{lorry.price}}万</h2>
      <button @click="changeLorry">修改卡车</button>
    </div>


    <ul>
      <li v-for="g in games" :key="g.id">{{g.name}}</li>
    </ul>

    <button @click="changeFirstGame">修改</button>




  </div>
</template>



<script setup lang="ts" name="person">

import {reactive, ref} from "vue";

const car = reactive({
  brand:'奔驰',
  price:100
})

const lorry = ref({
  brand:'雅迪',
  price:20
})

const games = ref([
  {id:'asdfgh01',name:'王者荣耀'},
  {id:'asdfgh02',name:'火影忍者'},
  {id:'asdfgh03',name:'三国志'}
])



function changePrice(){
  car.price+=10
}

function changeFirstGame(){
  games.value[0].name = '流星蝴蝶剑'
}

function changeCar(){
  // 只能更改reactive创建的响应式对象
  Object.assign(car,{brand:'兰博基尼',price:300})
}

function changeLorry(){
  lorry.value={brand: "奔驰",price:100}
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
