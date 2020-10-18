<router-view></router-view>
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
                    <div id="user">
                        <div class="input">
                            <img src="../assets/login_user.png" style="width:15px;height:16px;margin-right: 26px;margin-left: 11px;margin-top: 2px">
                            <input class="i-input" type="text" placeholder="请输入用户名" v-model="loginForm.username">
                        </div>
                    </div>
                    <div id="pwd">
                        <div class="input">
                            <img src="../assets/login_pwd.png" style="width:15px;height:16px;margin-right: 26px;margin-left: 11px;margin-top: 2px">
                            <input class="i-input" type="password" placeholder="请输入密码" v-model="loginForm.password">
                        </div>
                    </div>
                    <div id="item">
                        <div style="margin: 10px;">
                            <input style="position: absolute;left: 10px;width: 20px;height: 20px;" type="checkbox" name="jizhu" title="" lay-skin="primary" v-model="loginForm.remember">
                            <span id="remember_pwd">记录密码</span>
                            <button id="regist" @click="regist">注册</button>
                            <span style="position: absolute;left: 305px;color: aqua">|</span>
                            <button id="forget">忘记密码</button>
                        </div>
                    </div>
                    <div class="btn_login">
                        <button id="btn" @click="login()">登录</button>
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
                loginForm:{
                    username:'',
                    password:'',
                },
                checked:true,
            }
        },
        methods:{
            regist(){
                this.$router.push({name:'regist'})
            },
            login(){
                let _this=this;
                let self=this;
                if(self.checked==true){
                    console.log("checked==true");
                    self.setCookie(self.loginForm.username,self.loginForm.password,7);
                }else{
                    console.log("清空Cookie");
                    self.clearCookie();
                }
                this.$axios.post('/api/user/login',{
                    account:_this.loginForm.username,
                    password:_this.loginForm.password
                }).then(res=>{
                    if(res.data.code===200){
                        this.$axios.post('/api/user/finduserbyaccount?account='+_this.loginForm.username).then(user_res=>{
                            console.log(user_res.data);
                            localStorage.setItem('userid',user_res.data.body.uid);
                            alert('登陆成功')
                            this.$router.push(
                                {name:'Home'}
                            )
                        })
                    }
                    else{
                        alert(res.data.message)
                    }
                }).catch(
                )
                console.log(this.loginForm.username)
            },
            //设置cookie
            setCookie(c_name, c_pwd, exdays) {
                var exdate = new Date(); //获取时间
                exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
                window.document.cookie = "account" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
                window.document.cookie = "password" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
            },
            //读取cookie
            getCookie: function() {
                if (document.cookie.length > 0) {
                    var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
                    for (var i = 0; i < arr.length; i++) {
                        var arr2 = arr[i].split('='); //再次切割
                        //判断查找相对应的值
                        if (arr2[0] == 'userName') {
                            this.loginForm.username = arr2[1]; //保存到保存数据的地方
                        } else if (arr2[0] == 'userPwd') {
                            this.loginForm.password = arr2[1];
                        }
                    }
                }
            },
            //清除cookie
            clearCookie: function() {
                this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
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
        position:absolute;
        top:50%;
        left:50%;
        margin-left: -500px;
        margin-top: -270px;
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
        top:205px;
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
        top:270px;
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
    #item{
        position: absolute;
        right:354px ;
        top:325px;
        width: 80px;
    }
    #remember_pwd{
        width: 56px;
        height: 16px;
        font-family: Microsoft YaHei UI;
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 22px;
        letter-spacing: 1px;
        color: #666666;
        position: absolute;
        left: 40px;
    }
    #regist{
        position: absolute;
        left: 270px;
        border: 0;
        background-color: #ffffff;
        color: aqua;
        margin-top: 2px;
    }
    #forget{
        position: absolute;
        left: 310px;
        border: 0;
        background-color: #ffffff;
        color: aqua;
        margin-top: 2px;
    }
    .btn_login{
        position: absolute;
        right:70px ;
        top:381px;
        width: 360px;
        height: 40px;
        background-color: #6d98f9;
        box-shadow: 0px 1px 6px 0px
        rgba(109, 152, 249, 0.5);
        border-radius: 4px;
        text-align: center;
    }
    #btn{
        width: 80px;
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

</style>