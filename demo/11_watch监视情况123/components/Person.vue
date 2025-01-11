<template>
  <div class="person">
    <h2>watch监视情况一:监视[ref]定义的[基本类型]数据</h2>
    <h2>当前求和为:{{ sum }}</h2>
    <button @click="changeSum">点击+1</button>
    <hr>
    <h2>watch监视情况二:监视[ref]定义的[对象类型]数据</h2>

    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>

    <hr>
    <h2>watch监视情况三:监视[reactive]定义的[对象类型]数据</h2>
    <h2>姓名:{{ car.brand }}</h2>
    <h2>年龄:{{ car.price }}</h2>
    <button @click="changeBrand">修改品牌</button>
    <button @click="changePrice">修改价格</button>
    <button @click="changeCar">修改整辆车</button>

    <hr>
    <h2>测试:{{obj.a.b.c}}</h2>
    <button @click="test">修改obj.a.b.c</button>

  </div>


</template>

<script setup lang="ts" name="person">

import {reactive, ref, watch} from 'vue'

const sum = ref(0)

function changeSum() {
  sum.value += 1
}

// 调用 stopWatch()：
// 在回调函数内部，你可以直接使用 stopWatch()，因为 stopWatch 变量依然在当前作用域内。
// 这是 JavaScript 闭包的一个特性：当你在一个函数内定义的函数（即回调）能够访问外部作用域中的变量（如 stopWatch）。
const stopWatch = watch(sum, (newValue, oldValue) => {
  console.log('sum变化了', newValue, oldValue)
  if (newValue >= 10) {
    stopWatch()
  }

})

const person = ref({
  name: '张三',
  age: 18
})

function changeName() {
  person.value.name += '~'
}

function changeAge() {
  person.value.age += 1
}

function changePerson() {
  person.value = {name: 'li-si', age: 90}
}

// 若修改的是ref定义的对象中的属性，newValue 和 oldValue 都是新值，因为它们是同一个对象。
//
// 若修改整个ref定义的对象，newValue 是新值， oldValue 是旧值，因为不是同一个对象了。

// watch(person, (newValue, oldValue) => {
//   console.log('person变化了', newValue, oldValue)
// }, {deep: true})

watch(person, (val) => {
  console.log('person变化了', val)
}, {deep: true})





const car = reactive({
  brand:'奔驰',
  price:5,
})

function changeCar() {
  Object.assign(car,{brand:'奥迪',price:25})
}

function changePrice() {
car.price += 5

}

function changeBrand(){
car.brand +='~'
}

// watch监视情况三:监视[reactive]定义的[对象类型]数据,默认开启深度监视
watch(car, (newValue, oldValue) => {
  console.log('car变化了', newValue, oldValue)
})

const obj = reactive({
  a:{
    b:{
      c:666
    }
  }
})

function test() {
  obj.a.b.c = 888
}

watch(obj, (newValue, oldValue) => {
  console.log('obj变化了', newValue, oldValue)
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
