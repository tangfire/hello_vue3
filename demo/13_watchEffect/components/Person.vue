<template>
<div class="person">

  <h2>需求:当水温达到60度，或水位达到80cm时，给服务器发送请求</h2>
  <h2>当前水温:{{temp}}度</h2>
  <h2>当前水位:{{height}}cm</h2>
  <button @click="changeTemp">水温+10</button>
  <button @click="changeHeight">水位+10</button>


</div>

</template>

<script setup lang="ts" name="person">

import {ref, watch, watchEffect} from "vue";

const temp = ref(10)
const height = ref(0)

function changeTemp() {
  temp.value +=10
}

function changeHeight() {
  height.value +=10
}

// watch([temp,height],(val)=>{
//   const [newValue,newHeight] = val
//   if (newValue >= 60 || newHeight >= 80) {
//     console.log('给服务器发送请求')
//   }
// })

watchEffect(()=>{
  if (temp.value >= 60 || height.value >= 80) {
    console.log('给服务器发送请求')
  }
})

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
