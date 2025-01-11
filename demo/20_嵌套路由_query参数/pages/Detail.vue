<template>
<ul class="news-list">
<!--  <li>编号:{{route.query.id}}</li>-->
<!--  <li>标题:{{route.query.title}}</li>-->
<!--  <li>内容:{{route.query.content}}</li>-->
  <li>编号:{{query.id}}</li>
  <li>标题:{{query.title}}</li>
  <li>内容:{{query.content}}</li>
</ul>
</template>


<script setup lang="ts" name="Detail">
import {useRoute} from 'vue-router'
import {toRefs} from "vue";

const route = useRoute()

const {query} = toRefs(route)




</script>


<style scoped>
li{
  list-style: none;
}

</style>
