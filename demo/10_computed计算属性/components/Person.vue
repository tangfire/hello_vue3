<template>
<div class="person">
  姓: <input type="text" v-model="firstName"> <br>
  名: <input type="text" v-model="lastName"> <br>
  全名: <span>{{ fullName }}</span>
  <button @click="changeFullName">修改全名</button>

</div>

</template>

<script setup lang="ts" name="person">
import {ref,computed} from "vue";

const firstName = ref("zhang");
const lastName = ref("san");

// 这么定义的fullName是一个计算属性，且是只读的
// const fullName = computed(() => {
//   return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) +'-' +  lastName.value;
// });

// 这么定义的fullName是一个计算属性，可读可写
const fullName = computed({
  get(){
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) +'-' +  lastName.value;
  },
  set(val){
    const [str1,str2] = val.split("-");
    firstName.value = str1;
    lastName.value = str2;
    console.log('set')
  }
})

function changeFullName(){
  fullName.value = 'hello-world';
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
