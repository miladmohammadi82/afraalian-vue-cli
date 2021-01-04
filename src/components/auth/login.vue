<template>
    <main class="client-page">
        <div class="d-flex align-items-center">
            <div class="container">
                <div class="justify-content-center anime fade-in-y fast forgot row">
                    <div class="box-input-auth p-3 rounded col-9 col-sm-7 col-md-5 col-lg-4">
                        <div class="">
                            <form action="">
                                <div class="input-fild-box form-group">
                                    <label for="">نام کاربری</label>
                                    <input type="text" class="mt-2 form-control" placeholder="نام کاربری" name="" id="">
                                </div>
                                <div class="input-fild-box form-group">
                                    <label for="">رمز عبور</label>
                                    <input type="text" class="mt-2 form-control" placeholder="رمز عبور" name="" id="">
                                </div>
                                <ul class="remember">
                                    <li>
                                        <input id="remember" type="checkbox">
                                        <label for="remember">مرا به خواطر بسپار</label>
                                    </li>
                                </ul>
                                <div class="input-fild-box form-group">
                                    <button class="btn btn-success w-100">ورود</button>
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
export default {

}
</script>

<style>

</style>