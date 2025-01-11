<template>
  <div class="news">
    <ul>
      <li v-for="news in newsList" :key="news.id">

<!--        第一种写法-->
<!--        <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{news.title}}</RouterLink>-->

<!--        第二种写法，只能name-->
<RouterLink :to="{
  name: 'detail123',
  params: {
    id: news.id,
    title: news.title,
    content: news.content,
  }
}">
  {{news.title}}
  </RouterLink>

      </li>
    </ul>

    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>


<script setup lang="ts" name="News">
import {reactive} from "vue";
import {RouterView,RouterLink} from "vue-router";

const newsList = reactive([
  {id:'asdfgh01',title:'很好的抗癌食物',content:'西蓝花'},
  {id:'asdfgh02',title:'如何一夜暴富',content:'学IT'},
  {id:'asdfgh03',title:'万万没想到',content:'明天星期一'},
  {id:'asdfgh04',title:'很好的消息',content:'马上过年了'},

])

</script>



<style scoped>

.news{
  width: 200px;
  height: 100px;
}

.news li::marker {
  color: darkgreen;
}


.news-content{
  display: block;
  width: 250px;
  height: 200px;
  border: 1px solid black;
  margin-left: 100px;
  margin-top: 10px;

}

</style>
