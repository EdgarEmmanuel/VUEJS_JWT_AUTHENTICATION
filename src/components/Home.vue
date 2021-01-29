<template>
    <div class="home">
        <img src="https://visme.co/blog/wp-content/uploads/2020/02/header-1200.gif" 
        alt="" />
        <button v-on:click="logout">LOGOUT</button>
    </div>
</template>

<script>
import Auth from '../auth/auth';
export default {
    name:"Home",
    methods:{
        logout(){
            Auth.logout();
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>

.home{
    display:block;
}

.home img{
    width:15rem;
}

.home button{
    padding:10px 10px;
    color:black;
    background: white;
    border:1px solid black;
    border-radius:10px;
    cursor:pointer;
    font-weight:bold;
}


.home button:hover{
    color:white;
    background: black;
}

</style>