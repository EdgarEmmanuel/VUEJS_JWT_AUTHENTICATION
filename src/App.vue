<template>
  <div id="app">
   
   <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding:10px 10px;
  margin-top: 60px;
}

#app{
	width:100%;
	height:100%;
	margin:0px;
	font-family: 'Work Sans', sans-serif;
}

#app{
	background-image:url('https://www.darksky.org/wp-content/uploads/2015/01/Thank-You-slide-2-scaled.jpg');
	background-size: cover;
	display: flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	color: #fff;
}
</style>
