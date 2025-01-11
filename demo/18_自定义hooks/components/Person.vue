<template>
  <div>
    <h2>当前求和为：{{sum}},放大10倍后,{{bigSum}}</h2>
    <button @click="increment">点我+1</button>
    <button @click="decrement">点我-1</button>
  </div>

  <hr>
  <div>
    <img v-for="(u,index) in dogList" :key="index" :src="u">
    <br>
    <button @click="getDog">再来一只狗</button>
  </div>


</template>


<script setup lang="ts" name="Person">
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'

const {sum,increment,decrement,bigSum} = useSum()
const {dogList,getDog} = useDog()
</script>


<style>
img{
  height:100px;
  margin-right: 10px;
}

button{
  margin-right: 10px;
}
</style>
