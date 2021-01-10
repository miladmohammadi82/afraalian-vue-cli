<template>
    <main class="client-page">
        <div class="d-flex align-items-center">
            <div class="container">
                <div class="justify-content-center anime fade-in-y fast forgot row">
                    <div class="box-input-auth p-3 rounded col-9 col-sm-7 col-md-5 col-lg-4">
                        <div class="">
                            <form action="">
                                <div class="input-fild-box form-group">
                                    <label for="">ایمیل</label>
                                    <input v-model="form.email" type="email" class="mt-2 form-control" placeholder="ایمیل" name="email" id="">
                                    <ul class="text-danger">
                                        <li v-if="errors.email">
                                            <small>{{ errors.email[0] }}</small>
                                        </li>
                                    </ul>
                                </div>
                                <div class="input-fild-box form-group">
                                    <label for="">رمز عبور</label>
                                    <input v-model="form.password" type="password" class="mt-2 form-control" placeholder="رمز عبور" name="password" id="">
                                    <ul class="text-danger">
                                        <li v-if="errors.password">
                                            <small>{{ errors.password[0] }}</small>
                                        </li>
                                    </ul>
                                </div>
                                <ul class="remember">
                                    <li>
                                        <input id="remember" type="checkbox">
                                        <label for="remember">مرا به خواطر بسپار</label>
                                    </li>
                                </ul>
                                <div class="input-fild-box form-group">
                                    <button @click.prevent="login" class="btn btn-success w-100">ورود</button>
                                </div>

                                <ul class="login-link">
                                    <li><a href="#"><i class="fas fa-user-plus"></i>&nbsp;ثبت نام کنید</a></li>
                                    <li ><a href="#"><i class="fas fa-lock"></i>&nbsp;رمز عبور خودم را فراموش کرده ام!</a></li>
                                </ul>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import User from '../../apis/user'
export default {
    data(){
        return{
            form: {
                email: "",
                password: ""
            },
            errors: []
        }
    },
    methods: {
        login(){
            User.login(this.form)
            .then(()=>{
                localStorage.setItem("auth", "true");
                this.$router.push('/')

            })
            .catch( error => {
                if(error.response.status === 422){
                    this.errors = error.response.data.errors
                }
            })
        }
    }
}
</script>

<style>

</style>