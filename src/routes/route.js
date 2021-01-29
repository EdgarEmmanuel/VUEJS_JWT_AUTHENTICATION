import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Home from '../components/Home.vue';

const routes = [
  {
    path:"/",
    name:"loginPage",
    component:Login
  },
  {
    path:"/home",
    name:"homePage",
    component:Home,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem("token")===null || 
      localStorage.getItem("token")===undefined){
        next({name :"loginPage"});
     }else{
      next();
     }
    }
  }
]

var Router =  new VueRouter({
  mode: 'history',
  routes
});


export default Router;