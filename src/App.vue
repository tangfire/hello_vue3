<template>
  <div class="container-fluid wraper">
    <h1 class="title">Vue3 组件间通信</h1>
    <hr>
    <div class="row">
      <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3 sidebar">
        <!-- 导航区 -->
        <router-link active-class="active" class="list-group-item" to="/props">1. props</router-link>
        <router-link active-class="active" class="list-group-item" to="/event">2. 自定义事件</router-link>
        <router-link active-class="active" class="list-group-item" to="/mitt">3. mitt</router-link>
        <router-link active-class="active" class="list-group-item" to="/model">4. v-model</router-link>
        <router-link active-class="active" class="list-group-item" to="/attrs">5. $attrs</router-link>
        <router-link active-class="active" class="list-group-item" to="/ref-parent">6. <span class="small">$refs、$parent</span></router-link>
        <router-link active-class="active" class="list-group-item" to="/provide-inject">7. provide、inject</router-link>
        <router-link active-class="active" class="list-group-item" to="/pinia">8. pinia</router-link>
        <router-link active-class="active" class="list-group-item" to="/slot">9. slot</router-link>
        <router-link active-class="active" class="list-group-item" to="/slot01">9.1. slot默认插槽</router-link>
        <router-link active-class="active" class="list-group-item" to="/slot02">9.2. slot具名插槽</router-link>
        <router-link active-class="active" class="list-group-item" to="/slot03">9.3. slot作用域插槽</router-link>
      </div>
      <div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
        <div class="panel-body">
          <!-- 占位一个展示区 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="App">
</script>

<style>
.wraper .title {
  padding: 20px;
  text-align: center;
  min-width: 610px;
}

.wraper .small {
  font-size: 15px;
}

.wraper .list-group-item {
  padding: 15px;
  margin: 5px 0;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  transition: background-color 0.3s;
  display: block; /* 让每个项占满一行 */
}

.wraper .list-group-item:hover {
  background-color: #e2e6ea;
}

.wraper .row {
  display: flex; /* Flexbox 布局 */
}

.wraper .sidebar {
  display: flex;
  flex-direction: column; /* 竖直排列 */
  padding: 0; /* 去掉内边距 */
}

.wraper .panel-body {
  padding: 20px; /* 右侧内容区内边距 */
}
</style>
