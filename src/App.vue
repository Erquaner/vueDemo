<template>
  <div id="app">
    <div class="link-wrapper">
      <router-link to="/front" tag="div" class="font-page">前台页面</router-link>
      <router-link to="/end" tag="div" class="end-page">后台页面</router-link>
    </div>
    <router-view class="view-wrapper"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    user-style: none;
  }
  .link-wrapper {
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ccaaee;
  }
  .font-page, .end-page {
    width: 100px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: lime;
    text-align: center;
    border-radius: 4px;
    margin-right: 20px;
    cursor: pointer;
  }
</style>
