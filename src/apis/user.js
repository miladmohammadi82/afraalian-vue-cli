import Api from './api'

export default{
    register(form){
        return Api.post('/register', form)
    }
}