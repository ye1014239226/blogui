<template>
    <div>
        <div class="head">
            <div class="head1">
                <div id="head_left">
                    <div class="img1"></div>
                    <span id="boke">博客</span>
                </div>
                <div id="head_right">
                    <div id="search">
                        <input style="border: 0px;margin-left: 10px;margin-top: 8px" placeholder="搜索" v-model="search_title">
                        <el-button type="primary" class="icon_btn" @click="title_search"><i class="el-icon-search" style="color: black"></i></el-button>
                    </div>
                    <div id="icon_item">
                        <el-button type="primary" class="icon_btn1" @click="add"><i class="el-icon-circle-plus" style="color: blue;font-size: 20px"></i></el-button>
                        <el-button type="primary" class="icon_btn1"><i class="el-icon-message-solid" style="color: black;font-size: 20px"></i></el-button>
                        <el-button type="primary" class="icon_btn1"><i class="el-icon-setting" style="color: black;font-size: 20px"></i></el-button>
                    </div>
                    <div id="icon_user">
                        <el-button type="primary" class="icon_btn1"><i class="el-icon-user-solid" style="color: blue;font-size: 20px"></i></el-button>
                        <span>{{user.name}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div style="margin: 20px"></div>
        <div class="context">
            <MyCard v-if="list!=null" :list="list"></MyCard>
        </div>
    </div>
</template>

<script>
    import MyCard from "@/components/MyCard";
    export default {
        name: "MyMessage",
        components: {MyCard},
        data(){
            return{
                search_title:'',
                username:'yeyeye',
                manger:{},
                total:0,
                pageNum:1,
                pageSize:4,
                currentPage:1,
                user:{},
                list:[],
                userid:localStorage.getItem('userid')
            }
        },
        created() {
            this.getData();
        },
        methods:{
            getData(){
                this.$axios.post('/api/article/findartbyuserid222?uid='+this.userid).then(res=>{
                    this.list=res.data.body;
                    console.log(this.list)
                }).catch(function(){
                })
                this.$axios.post('/api/user/finduser?uid='+this.userid).then(res=>{
                    this.user=res.data.body
                    console.log(res.data.body)
                })
            },
            add(){
                this.$router.push({name:'Add'})
            },
            title_search(){
                console.log(this.search_title)
                this.$axios.post('/api/article/finduserbytitle111?title='+this.search_title+'&name='+this.user.account).then(res=>{
                    this.list=res.data.body;
                    console.log(this.list)
                }).catch(function(){
                })
            }
        }
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        width:  890px;
    }
    #box-card{
        position:relative;
        height: 150px;
    }
    #line{
        width: 810px;
        height: 1px;
        background-color: #dde4eb;
        opacity: 0.5;
    }
    .head{
        height: 56px;
        background-color: #ffffff;
        box-shadow: 0px 1px 6px 0px
        rgba(0, 0, 0, 0.1);
    }
    .head1{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #head_left{
        display: flex;
        margin-top: 10px;
    }
    #head_right{
        display: flex;
        margin-top: 10px;
    }

    .img1{
        background: url('../assets/book1.png') center center no-repeat;
        height: 27px;
        width: 22px;
        margin-right: 10px;
    }
    #boke{
        width: 60px;
        height: 20px;
        font-family: Source Han Sans CN;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 22px;
        letter-spacing: 1px;
        color: #333333;
    }
    #search{
        width: 240px;
        height: 32px;
        background-color: #ffffff;
        border-radius: 4px;
        border: solid 1px #cccccc;
    }
    .icon_btn{
        width: 20px;
        height: 26px;
        background-color: #FFFFFF;
        border: 0px
    }
    .icon_btn1{
        background-color: #FFFFFF;
        border: 0px
    }
    .context{
        margin-right: auto;
        margin-left: auto;
        width: 890px;
        height: 800px;
        background-color: #ffffff;
        box-shadow: 0px 0px 6px 0px
        rgba(0, 0, 0, 0.1);
        border-radius: 4px;
    }
    #icon_item{
        margin-left: 10px;
    }
    .card_head{
        font-size: 20px;
        position: absolute;
        top:5px
    }
    .title_1{
        position: absolute;
        top:30px;
        height: 70px;
    }
    .card_title{
        display: flex;
    }
    .manger{
        position: absolute;
        top: 150px;
    }
    .card_img{
        float: left;
        width: 160px;
        height: 100px;
        position: absolute;
        top:30px;
    }
    .title_2{
        position: absolute;
        top:30px;
        left: 180px;
    }
    .title{
        width: 810px;
        height: 90px;
        font-family: Microsoft YaHei UI;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 1px;
        color: #888888;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
    .title1{
        width: calc(100% - 50px);
        height: 90px;
        font-family: Microsoft YaHei UI;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 1px;
        color: #888888;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
    .head_card{
        width: 317px;
        height: 22px;
        font-family: Microsoft YaHei UI;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 22px;
        letter-spacing: 2px;
        color: #333333;
        margin-bottom: 15px;
    }
    .block{
        text-align: center;
    }
</style>