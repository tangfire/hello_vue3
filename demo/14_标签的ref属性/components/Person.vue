<template>
<div class="person">

 <h1>中国</h1>
  <h2 ref="title2">北京</h2>
  <h3>尚硅谷</h3>
  <button @click="showLog">点我输出h2这个元素</button>

</div>

</template>

<script setup lang="ts" name="person">
import {ref} from "vue";

const title2 = ref()

const a = ref()
const b = ref()
const c = ref()

function showLog() {
  console.log(title2.value)
}

defineExpose({a,b,c})
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
