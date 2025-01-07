<template>
<div class="person">
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <button @click="changeName">修改名字</button>
  <button @click="changeAge">修改年龄</button>
  <button @click="showTel">查看联系方式</button>

</div>
</template>

<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Person",
  beforeCreate() {
    console.log("beforeCreate")
  },
  setup(){

    console.log("setup")
    // 数据
    let name = "person";
    let age = 18;
    const tel = '13302689217'

    //方法
    function changeName(){
      name = 'zhang-san'
    }

    function changeAge(){
      age +=1
    }

    function showTel(){
      alert(tel)
    }

    // setup的返回值也可以是一个渲染函数
    return ()=>'hello world'
  }
}
</script>


<style scoped>

.person {
  background: skyblue;
  border: 1px solid black;
  border-radius: 15px;
  padding: 10px;
}

button{
  margin-right: 20px;
}
</style>
