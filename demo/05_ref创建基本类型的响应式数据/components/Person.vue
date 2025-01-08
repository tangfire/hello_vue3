<template>
  <div class="person">
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>


  </div>
</template>

<!--<script lang="ts">-->
<!--export default {-->
<!--  // eslint-disable-next-line vue/multi-word-component-names-->
<!--  name: "Person",-->


<!--}-->
<!--</script>-->

<script setup lang="ts" name="person">

// 数据
import {ref} from "vue";

const name = ref("person");
const age = ref(18);
const tel = '13302689217'
// let x = a  vue3里面不能用vue2
// let x = this.a  vue3里面不能用vue2,setup里面用不了this

//方法
function changeName() {
  name.value = 'zhang-san'
}

function changeAge() {
  age.value += 1
}

function showTel() {
  alert(tel)
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
</style>
