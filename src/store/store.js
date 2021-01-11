import { createStore } from 'vuex'


const store = createStore({
    state () {
        return{
            isLoggedIn: false,
        }
    },
    getters: {
        duble: (state) => {
            return state.isLoggedIn = !!localStorage.getItem("auth")
        }
    }
});


export default store;