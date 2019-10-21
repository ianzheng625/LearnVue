<template>
  <div id="navMenu" v-if="checkPage">
    <div class="menu_left">
      <div class='menu_user'>
        <div class="menu_logo">
          <img :src="user.logo.imgPath" :alt="user.logo.title">
        </div>
        <div class="menu_name">{{ user.name }}</div>
        <div class="menu_location">
          <span>{{ user.location.name }}</span>
          <img :src="user.location.imgPath" :alt="user.location.name">
        </div>
      </div>
      <ul>
        <li v-for="item in items" :key="item.id">
          <router-link :to="item.url"><i :class="item.icon"></i><span>{{ item.text }}</span></router-link>
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
          { id: 1, url: '/index', text: 'Fun1', icon: 'fa fa-forward' },
          { id: 2, url: '/aaa', text: 'Fun2', icon: 'fa fa-forward' }
        ],
        user: {
          logo: {
            imgPath: 'img/logo.jpg',
            title: 'logo'
          },
          name: 'Ian Zheng',
          location: {
            name: 'China',
            imgPath: 'img/China-Flag.png'
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
    padding: 70px 0;
    background: linear-gradient(to bottom left , #c2d6e6, #ef5267);
    height: 308px;
  }
  .menu_logo{
    margin: 0px auto 20px;
    width: 100px;
    height: 100px;
    border-radius: 50% 50%;
    overflow: hidden;
  }
  .menu_logo img{
    display: block;
    width: 100%;
  }
  .menu_name, .menu_location{
    text-align: center;
    color: white;
    line-height: 1.5em;
  }
  .menu_location span{
    vertical-align: middle;
  }
  .menu_location img{
    display: inline-block;
    width: 19px;
    vertical-align: middle;
    margin-left: 5px;
  }
  .menu_left ul{
    overflow: auto;
    height: calc(100vh - 308px);
  }
  .menu_left ul::-webkit-scrollbar{
    width: 3px;
  }
  .menu_left ul::-webkit-scrollbar-thumb{
    border-radius: 5px;
    background: #d894a6;
  }
  .menu_left ul::-webkit-scrollbar-track{
    border-radius: 0;
    background: #d9e1e8;
  }
  .menu_left ul li a{
    font-size: 15px;
    color: #707070;
    line-height: 28px;
    display: block;
    padding: 10px 10px 10px 16px;
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
  .menu_left ul li a i{
    margin-right: 10px;
  }
</style>
