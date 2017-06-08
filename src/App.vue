<template>
  <div id="app" class="container">
    <router-view></router-view>
    <div class="alert alert-info align-self-bottom">
      &copy; 2017, Laxis Technologies.
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app{
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444;
}
button, input, textarea{
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444;
}
.container{
  padding: 30px;
  word-wrap: break-word;
}
button{
  cursor: pointer;
}
</style>
