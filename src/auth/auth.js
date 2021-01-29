export default class Auth  {

    static storeData(data){
        this.removeToken();
        localStorage.setItem("token",data.token);
    }

    static isLogged(){
        if(localStorage.getItem("token")){
             return true;
        }else return false;
    }

    static removeToken(){
        localStorage.removeItem("token");
    }

    static logout(){
        this.removeToken();
    }

}