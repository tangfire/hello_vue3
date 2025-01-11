<template>
<div class="count">

<h2 class="sum123">当前求和为{{sum}}</h2>
  <h3>欢迎来到:{{school}},坐落于:{{address}}</h3>
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
import {storeToRefs} from "pinia";

const countStore = useCountStore();
// storeToRefs只会关注store中的数据，不会对方法进行ref包裹
const {sum,school,address} = storeToRefs(countStore);
const n = ref(1)


function add() {

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
