<template>
  <div id="menu_left" v-if="checkPage">
    <ul>
      <li v-for="item in items" :key="item.id">
        <router-link :to="item.url">{{ item.text }}</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    name: 'menu_left',
    data(){
      return{
        items: [
          { id: 1, url: '/login', text: 'Fun1' },
          { id: 2, url: '/index', text: 'Fun2' }
        ]
      }
    },
    computed: {
      checkPage() {
        if (this.$route.name == 'login') {
          return false
        }
        return true
      }
    }
  }
</script>

<style>
  #menu_left{
    width: 200px;
  }
</style>
