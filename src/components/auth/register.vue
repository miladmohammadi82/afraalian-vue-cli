<template>
<main class="client-page">
  <div class="d-flex align-items-center">
      <div class="container">
        <div class="justify-content-center anime fade-in-y fast forgot row">
            <div class="box-input-auth p-3 rounded col-9 col-sm-7 col-md-5 col-lg-4">
                <div class="">
                    <form action="" method="post">
                        <div class="input-fild-box form-group">
                            <label for="">نام</label>
                            <input type="text" v-model="form.name" class="mt-2 form-control" placeholder="نام" name="name" id="">
                            <small class="text-danger" v-if="errors.name">{{ errors.name[0] }}</small>
                        </div>
                        <div class="input-fild-box form-group">
                            <label for="">ایمیل</label>
                            <input type="email" v-model="form.email" class="mt-2 form-control" placeholder="ایمیل" name="email" id="">                            
                            <small class="text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
                        </div>
                        <div class="input-fild-box form-group">
                            <label for="">تلفن همراه</label>
                            <input type="text" v-model="form.phone" class="mt-2 form-control" placeholder="نام کاربری" name="phone" id="">
                            <small class="text-danger" v-if="errors.phone">{{ errors.phone[0] }}</small>
                        </div>
                        <div class="input-fild-box form-group">
                            <label for="">رمز عبور</label>
                            <input type="password" v-model="form.password" class="mt-2 form-control" placeholder="رمز عبور" name="password" id="">
                            <ul>
                                <li class="text-danger" v-if="errors.password">
                                    <small class="text-danger">{{ errors.password[0] }}</small>
                                </li>
                                <li class="text-danger" v-if="errors.password">
                                    <small class="text-danger">{{ errors.password[1] }}</small>
                                </li>
                            </ul>
                        </div>
                        <div class="input-fild-box form-group">
                            <label for="">تکرار رمز عبور</label>
                            <input type="password"  v-model="form.password_confirmation" class="mt-2 form-control" placeholder="تکرار رمز عبور" name="password_confirmation" id="">
                            <small class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</small>
                        </div>
                        <div class="input-fild-box form-group">
                            <button @click.prevent="register" class="btn btn-success w-100">ورود</button>
                        </div>

                        <ul class="login-link">
                            <li><a href="#"><i class="fas fa-user"></i>&nbsp;وارد شوید</a></li>
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
import Csrf from '../../apis/Csrf'
export default {
    data(){
        return{
            form: {
                name: "",
                email: "",
                phone: "",
                password: "",
                password_confirmation: ""
            },
            errors: []
        }
    },
    methods: {
        register(){
            Csrf.getCookie().then( ()=> {
                User.register(this.form)
                .then(()=> {
                    this.$router.push("/login")
                })
                .catch(error => {
                    if (error.response.status === 422){
                        this.errors = error.response.data.errors
                    }
                })
            })

        }
    }
}
</script>

<style>

</style>