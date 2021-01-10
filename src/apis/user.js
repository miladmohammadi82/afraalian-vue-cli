import Api from './api'
import Csrf from './Csrf'

export default{
    register(form){
        return Api.post('/register', form)
    },

    async login(form){
        await Csrf.getCookie();
        return Api.post("/login", form) 
    },

    async logout(){
        await Csrf.getCookie();
        return Api.post('/logout')
    }
}