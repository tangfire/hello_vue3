<template>
<div class="count">

<h2 class="sum123">当前求和为{{countStore.sum}}</h2>
  <h3>欢迎来到:{{countStore.school}},坐落于:{{countStore.address}}</h3>
  <select v-model.number="n">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <button @click="add">加</button>
  <button @click="minus">减</button>
</div>

</template>


<script lang="ts" setup name="Count">
import {ref} from "vue";
import {useCountStore} from "@/store/count.ts";

const countStore = useCountStore();
const n = ref(1)
// console.log(countStore)
// console.log(countStore.sum)
// console.log(countStore.$state.sum)

function add() {
  // 第一种方法
  // countStore.sum +=n.value

  // 第二种方法
  // countStore.$patch({
  //   sum:888,
  //   school: '尚硅谷',
  //   address: '北京'
  // })

  // 第三种方法
  countStore.increment(n.value)


}


function minus() {
  countStore.sum -=n.value
}

</script>


<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  width: 300px;
}

.sum123 {
  margin-bottom: 10px;
}

select,button{
  margin: 0 5px;
  height: 25px;
}


</style>
