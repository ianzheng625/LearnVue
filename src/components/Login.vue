<template>
  <div id="login">
    <div class="c-login__content">
      <h2>Hello Little Square!</h2>
      <div class="btn btn--blue" @click="jumpTo()"> Let`s Go!</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    methods: {
      jumpTo() {
        this.$router.push({ name: 'index'});
      }
    },
  }
</script>

<style>
  .c-login__content{
    width: 60%;
    margin: 20% auto;
    background-color: white;
    padding: 30px;
    border-radius: 40px;
    max-width: 400px;
    text-align: center;
  }
  .c-login__content h2{
    margin-bottom: 40px
  }

</style>
