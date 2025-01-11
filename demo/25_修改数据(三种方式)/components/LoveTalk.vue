<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>

</template>

<script lang="ts" setup name="LoveTalk">
import {reactive} from "vue";
import axios from "axios";
import {nanoid} from "nanoid";
import {useTalkStore} from "@/store/loveTalk.ts";

const talkStore = useTalkStore();


// const talkList = reactive([
//   {id:"asdfgh01",title:"hello world"},
//   {id:"asdfgh02",title:"hello C++"},
//   {id:"asdfgh03",title:"hello Java"}
// ])

// async function getLoveTalk() {
//   // 下面这行写法:连续解构赋值 + 重命名
//   const {data: {content: title}} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
//   const obj = {
//     id: nanoid(),
//     title
//   }
//   talkStore.talkList.unshift(obj);
// }

function getLoveTalk() {
  talkStore.getATalk()
}

</script>


<style scoped>

.talk {
  background: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

</style>
