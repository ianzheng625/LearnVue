<template>
  <div id="login">
    <div id="crystal-wrapper"></div>
    <div class="c-login__content">
      <h2>Hello World!</h2>
      <div class="btn btn--pink" @click="jumpTo()"> Let`s Go!</div>
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
  #login{
    position: relative;
    height: 100vh;
    background-color: #ecf1f5;
  }
  .c-login__content{
    width: 60%;
    background-color: white;
    padding: 30px;
    border-radius: 25px;
    max-width: 400px;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    box-shadow:0px 1px 17px 2px #e6e6e6;
  }
  .c-login__content h2{
    margin-bottom: 40px;
    font-size: 40px;
    font-weight: normal;
  }

</style>
