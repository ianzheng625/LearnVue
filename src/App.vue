<template>
  <div id="app">
    <menu-left></menu-left>
    <router-view></router-view>
  </div>
</template>

<script>

import MenuLeft from './components/menu/menu.vue'

  export default {
    name: 'app',
    components: {
      'menu-left': MenuLeft,
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
  }
  .btn{
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    padding: 10px 15px;
    text-align: center;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    -ms-transition: all 0.3s;
    transition: all 0.3s;
    -webkit-box-shadow: 0.7px 2px 4px 1px #ccc;
    box-shadow: 0.7px 2px 4px 1px #ccc;
    border-radius: 4px;
    border: none;
    font-weight: lighter;
  }
  .btn--blue{
    color: #fff;
    background-color: #5e5e7d;
    font-size: 16px;
    line-height: 1em;
  }
  .btn--pink{
    color: #fff;
    background-color: #ff5f5f;
    font-size: 16px;
    line-height: 1em;
  }
  .btn--blue:hover {
    color: #5e5e7d;
    background-color: #fff;
  }
  .btn--pink:hover {
    color: #ff5f5f;
    background-color: #fff;
  }
  .c-content{
    background-color: #ecf1f5;
    width: calc(100% - 250px);
    float: right;
    position: relative;
    min-height: 100vh;
  }
</style>
