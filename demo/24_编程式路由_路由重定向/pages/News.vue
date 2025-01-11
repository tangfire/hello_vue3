<template>
  <div class="news">
    <ul>
      <li v-for="news in newsList" :key="news.id">

        <button @click="showNewsDetail(news)">查看新闻</button>
        <RouterLink :to="{
  name: 'detail123',
  params: {
    id: news.id,
    title: news.title,
    content: news.content,
  }
}">
          {{ news.title }}
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
import {RouterView, RouterLink,useRouter} from "vue-router";

const newsList = reactive([
  {id: 'asdfgh01', title: '很好的抗癌食物', content: '西蓝花'},
  {id: 'asdfgh02', title: '如何一夜暴富', content: '学IT'},
  {id: 'asdfgh03', title: '万万没想到', content: '明天星期一'},
  {id: 'asdfgh04', title: '很好的消息', content: '马上过年了'},

])

const router = useRouter()

interface NewsInter {
  id:string,
  title:string,
  content:string
}

function showNewsDetail(news:NewsInter) {
  // router.replace({})
  router.push({
    name: 'detail123',
    params: {
      id: news.id,
      title: news.title,
      content: news.content,
    }
  })
}

</script>


<style scoped>

.news {
  width: 250px;
  height: 100px;
}

.news li::marker {
  color: darkgreen;
}

li{
  margin-bottom: 5px;
}


.news-content {
  display: block;
  width: 250px;
  height: 200px;
  border: 1px solid black;
  margin-left: 100px;
  margin-top: 10px;

}

</style>
