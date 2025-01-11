<template>
<div class="person">
<ul>
  <li v-for="p in list" :key="p.id">
    {{p.name}} -- {{p.age}}
  </li>

</ul>
</div>

</template>

<script setup lang="ts" name="person">

import {defineProps,withDefaults} from 'vue'
import {type Persons} from "@/types"

// 只接受e
// defineProps(['e'])

// 接收list,同时将props保存起来
// const x = defineProps(['list'])
// console.log(x.list)

// 接收list + 限制类型
// defineProps<{list:Persons}>()

// 接收list + 限制类型 + 限制必要性 + 指定默认值
withDefaults(defineProps<{list?:Persons}>(),{
  list:()=> [{id:'asdfgh09',name:'kansf',age:19}]
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
