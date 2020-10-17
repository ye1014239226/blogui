<template>
    <div id="app">
        <div class="img1">
            <div id="context">
                <div class="img2"></div>
                <div id="login">
                    <div id="book">
                        <div class="img3"></div>
                        <div id="boke">博客</div>
                    </div>
                    <div id="line"></div>
                    <div id="text">注册</div>
                    <div id="user">
                        <div class="input">
                            <img src="../assets/login_user.png" style="width:15px;height:16px;margin-right: 26px;margin-left: 11px;margin-top: 2px">
                            <input class="i-input" type="text" placeholder="请输入用户名" v-model="registForm.account">
                        </div>
                    </div>
                    <div id="pwd">
                        <div class="input">
                            <img src="../assets/login_pwd.png" style="width:15px;height:16px;margin-right: 26px;margin-left: 11px;margin-top: 2px">
                            <input class="i-input" type="password" placeholder="请输入密码" v-model="registForm.password">
                        </div>
                    </div>
                    <div class="btn_regist">
                        <button id="btn" @click="regist">立即注册</button>
                    </div>
                    <div class="item">
                        <span>已有账号</span>
                        <button id="btn_login" @click="login">立即登录</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                msg:"登录界面",
                registForm:{
                    account:'',
                    password:'',
                }
            }
        },
        methods:{
            login(){
                this.$router.push({name:'login'})
            },
            regist(){
                let _this=this;
                this.$axios.post('/api/user/register',{
                    account:_this.registForm.account,
                    password:_this.registForm.password,
                }).then(res=>{
                    if(res.data.code===200){
                        alert("注册成功");
                        this.$router.push({
                            name:'login'
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .img1{
        background-size: 100% 100%;
        background: url('../assets/login_back.png') center center no-repeat;
        height: 100%;
        position: fixed;
        width: 100%;

    }
    #context{
        width: 1000px;
        height: 540px;
        position: absolute;
        left: 460px;
        top: 270px;
        display: flex;
    }
    .img2{

        background: url('../assets/login_left.png') center center no-repeat;
        height: 500px;
        width: 540px;
    }
    #login{
        width: 500px;
        height: 540px;
        background-color: #FFFFFF;
        position:relative;
    }
    #book{
        display: flex;
        position: absolute;
        right:198px ;
        top:69px;
        width: 106px;
        height: 38px;
    }
    #boke{
        text-align: center;
        width: 57px;
        height: 28px;
        font-family: Source Han Sans CN;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 22px;
        letter-spacing: 1px;
        color: #333333;
        margin-top: 8px;
        margin-left: 16px;
    }
    .img3{

        background: url('../assets/book.png') center center no-repeat;
        height: 38px;
        width: 32px;
    }
    #line{
        position: absolute;
        right:70px ;
        top:162px;
        width: 360px;
        height: 1px;
        background-color: #dddddd;
        border: solid 1px #000000;
    }
    #user{
        position: absolute;
        right:70px ;
        top:231px;
        width: 360px;
        height: 40px;
        background-color: #ffffff;
        border-radius: 4px;
        border: solid 1px #cccccc;
    }
    .input{
        display: flex;
        margin-top: 10px;
    }
    #pwd{
        position: absolute;
        right:70px ;
        top:296px;
        width: 360px;
        height: 40px;
        background-color: #ffffff;
        border-radius: 4px;
        border: solid 1px #cccccc;
    }
    .i-input{
        border: 0;
        outline: none;

    }
    .btn_regist{
        position: absolute;
        right:70px ;
        top:362px;
        width: 360px;
        height: 40px;
        background-color: #6d98f9;
        box-shadow: 0px 1px 6px 0px
        rgba(109, 152, 249, 0.5);
        border-radius: 4px;
        text-align: center;
    }
    #btn{
        width: 120px;
        height: 20px;
        font-family: Microsoft YaHei UI;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 22px;
        letter-spacing: 2px;
        color: #ffffff;
        background-color: rgba(109, 152, 249, 0.5);
        border: 0px;
        margin-top: 5px;
    }
    #text{
        position: absolute;
        right:392px ;
        top:190px;

    }
    .item{
        position: absolute;
        right:186px ;
        top:421px;
    }
    #btn_login{
        border: 0px;
        background-color: #FFFFFF;
        color: #6d98f9;
    }

</style>