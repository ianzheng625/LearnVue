<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
      }
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  body{
      background-color: #ffcc3b;
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
    font-size: 20px;
    line-height: 1em;
  }
  .btn--blue:hover {
    color: #5e5e7d;
    background-color: #fff;
  }
</style>
