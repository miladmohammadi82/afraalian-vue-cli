import Api from './api'


export default{
    getCookie(){
        return Api.get('/csrf-cookie')
    }   
}
