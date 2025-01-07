<template>
<div class="person">
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <button @click="changeName">修改名字</button>
  <button @click="changeAge">修改年龄</button>
  <button @click="showTel">查看联系方式</button>

  <hr>
  <h2>测试1:{{a}}</h2>
  <h2>测试2:{{c}}</h2>
  <button @click="b">测试</button>


</div>
</template>

<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Person",
  beforeCreate() {
    console.log("beforeCreate")
  },
  data(){
    return{
      a:100,
      c:this.name // vue2里面能用vue3
    }
  },
  methods:{
    b(){
      console.log("b")
    }

  },
  setup(){

    console.log("setup")
    // 数据
    let name = "person";
    let age = 18;
    const tel = '13302689217'
    // let x = a  vue3里面不能用vue2
    // let x = this.a  vue3里面不能用vue2,setup里面用不了this

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

    return {name,age,changeName,changeAge,showTel}
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
