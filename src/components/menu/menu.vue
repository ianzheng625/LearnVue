<template>
  <div id="navMenu" v-if="checkPage">
    <div class="menu_left">
      <div class='menu_user'>
        <div class="menu__logo">
          <img v-bind:src="user.logo.imgPath" v-bind:alt="user.logo.title">
        </div>
      </div>
      <ul>
        <li v-for="item in items" :key="item.id">
          <router-link :to="item.url">{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'navMenu',
    data(){
      return{
        items: [
          { id: 1, url: '/index', text: 'Fun1' },
          { id: 2, url: '/aaa', text: 'Fun2' }
        ],
        user: {
          logo: {
            imgPath: '../../assets/img/logo.jpg',
            title: 'logo'
          },
          name: 'Ian Zheng',
          location: {
            name: 'China',
            imgPath: ''
          }
        }
      }
    },
    computed: {
      checkPage() {
        if (this.$route.name == 'login') {
          return false
        }
        return true
      }
    },

  }
</script>

<style>
  .menu_left{
    position: fixed;
    height: 100vh;
    left: 0;
    width: 250px;
    background-color: #fff;
    overflow: auto;
    z-index: 10;
    box-shadow: 0px 0px 17px 7px #d4dde4;
  }
  .menu_user{
    width: 100%;
  }
  .menu_left ul li a{
    font-size: 15px;
    color: #707070;
    line-height: 28px;
    display: block;
    padding: 10px 10px 10px 30px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
    border-left: 3px solid #fff;
  }
  .menu_left ul li a:hover{
    color: #eb4158;
    background-color: #f2f7fb;
    box-shadow: inset 0px 0px 12px 4px #e6ebef;
    border-left: 3px solid #eb4158;
  }
  .menu_left ul li a.router-link-active{
    color: #eb4158;
    border-left: 3px solid #eb4158;
  }
</style>
