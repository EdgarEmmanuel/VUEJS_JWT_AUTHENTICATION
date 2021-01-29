<template>
  <div class="Login">
    <section id="login" >
      <form>
        <h2>Login</h2>
        <div class="info" v-bind:class="good">
          <p>{{ alert.message }}</p>
        </div>
        <input type="text" v-model="login.login" placeholder="Username" />
        <input type="password" v-model="login.password" placeholder="Password" />
        <button v-on:click="onSubmit">Log in</button>
      </form>
    </section>
  </div>
</template>

<script>
import axios from '../http/http';
import Auth from '../auth/auth';
export default {
  name: 'Login',
  data() {
    return {
          alert: {
            message: ""
          },
          login: {
            login: "",
            password: ""
          },
          shake: false,
          good: "",
          fake: {
            login: "vincent",
            password: "admin"
          }
      };
  },
	computed: {
	
	},
	methods: {

		async PostsendData(email,password){
			return await axios.post("http://127.0.0.1:8000/api/signin",
			{
				"password": password,
				"email": email
			});
		},

		onSubmit (event) {
			event.preventDefault();
			if(this.login.login==="" || this.login.password===""){
				this.alert.message = "TOUS LES CHAMPS SONT OBLIGATOIRES";
			}else{
				this.alert.message = "";

				//do the request
				this.PostsendData(this.login.login,this.login.password)
				.then((data)=>{
					//console.log(data);
					if(!data.data.success){
						this.alert.message=data.data.message;
					}else{
						//store the token 
						Auth.storeData(data.data);

						//redirect to the home page
						this.$router.push("/home");
					}
				})
				.catch(()=>{
					this.alert.message = "VEUILLEZ REESSAYER PLUS TARD";
				})
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Login{
  width:50%;
}

section{
	background-color: rgba(0, 0, 0, 0.72);
	width:100%;
  max-width:100%;
	min-height:25%;
	display:flex;
	flex-direction:column;
	margin-left:auto;
	margin-right:auto;
}

form{
	display:flex;
	flex-direction:column;
	padding: 15px; 
}

h2{
	font-family: 'Archivo Black', sans-serif;
	color:#e0dada;
	margin-left:auto;
	margin-right:auto;
}

.info{
	width:100%;
	padding: 1em 5px;
	text-align:center;
	min-height:45px;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
}

.info.error{
	border:1px solid #A90E00;
	background-color:#ff3c41;
	color:#A90E00;
}

.info p{
	margin:auto;
	padding:5px;
}

.info.good{
	border:1px solid #416d50;
	background-color: #47cf73;
	color:#416d50;
}

input{
	height:35px;
	padding: 5px 5px;
	margin: 10px 0px;
	background-color:#e0dada;
	border:none;
}

button{
	height:40px;
	padding: 5px 5px;
	margin: 10px 0px;
	font-weight:bold;
	background-color:#be5256;
	border:none;
	color:#e0dada;
	cursor:pointer;
	font-size:16px;
}

button:hover{
	background-color:#711f1b;
}

@-webkit-keyframes shake{
	from, to{
		-webkit-transform: translate3d(0, 0, 0);
		transform:translate3d(0,0,0);
	}
	10%,30%,50%,70%,90%{
		-webkit-transform: translate3d(-10px, 0, 0);
		transform:translate3d(-10px,0,0);
	}
	20%,40%,60%,80%{
		-webkit-transform: translate3d(10px, 0, 0);
		transform:translate(10px,0,0);
	}
}

.shake{
	animation-name: shake;
	animation-duration:1s;
	/*animation-fill-mode: both;*/
}

@media screen and (max-width: 780px) {
	section{
		width:90%;
	}
}


</style>
