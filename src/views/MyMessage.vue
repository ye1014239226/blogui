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
                        <input style="border: 0px;margin-left: 10px;margin-top: 8px" placeholder="搜索">
                        <el-button type="primary" class="icon_btn"><i class="el-icon-search" style="color: black"></i></el-button>
                    </div>
                    <div id="icon_item">
                        <el-button type="primary" class="icon_btn1"><i class="el-icon-circle-plus" style="color: blue"></i></el-button>
                        <el-button type="primary" class="icon_btn1"><i class="el-icon-message-solid" style="color: black"></i></el-button>
                        <el-button type="primary" class="icon_btn1"><i class="el-icon-setting" style="color: black"></i></el-button>
                    </div>
                    <div id="icon_user">
                        <el-button type="primary" class="icon_btn1"><i class="el-icon-user-solid" style="color: blue"></i></el-button>
                        <span>{{username}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div style="margin: 20px"></div>
        <div class="context">
            <el-card class="box-card">
                <div v-for="i in manger" :key="i" class="text item">
                    <div id="box-card">
                        <div class="card_head">
                            <span class="head_card">{{i.head}}</span>
                        </div>
                        <div v-if="i.url==''">
                            <div class="title_1">
                                <span class="title">{{i.title}}</span>
                            </div>
                        </div>
                        <div v-else>
                            <div class="card_title">
                                <img src="../assets/book.png"  class="card_img">
                                <div class="title_2">
                                    <span class="title1">{{i.title}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="manger">
                            <i class="el-icon-user"></i>
                            <span style="margin-left: 5px">{{i.author}}</span>
                            <i class="el-icon-time" style="margin-left: 12px"></i>
                            <span style="margin-left: 5px">{{i.time}}</span>
                            <el-button type="primary" class="icon_btn" style="margin-left: 450px"><i class="el-icon-view" style="color: black"></i></el-button>
                            <span>{{i.watch}}</span>
                            <el-button type="primary" class="icon_btn"><i class="el-icon-chat-dot-square" style="color: black"></i></el-button>
                            <span>{{i.comment}}</span>
                            <el-button type="primary" class="icon_btn"><i class="el-icon-star-off" style="color: black"></i></el-button>
                            <span >{{i.like}}</span>
                        </div>
                        <div id="line"></div>
                    </div>
                </div>
            </el-card>
        </div>
        <div class="block">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyMessage",
        data(){
            return{
                username:'yeyeye',
                manger:[{
                    head:'面向对象、构造函数、原型与原型链',
                    title:'如果要我总结一下学习前端以来我遇到了哪些瓶颈，那么面向对象一定是第一个毫不犹豫想到的。尽管我现在对于面向\n' +
                        '对象有了一些的了解，但是当初的那种似懂非懂的痛苦，依然历历在目。为了帮助大家能够更加直观的学习和了解面向\n' +
                        '对象，我会用尽量简单易懂的描述来展示面向对象的相关知识。如果要我总结一下学习前端以来我遇到了哪些瓶颈，那么面向对象一定是第一个毫不犹豫想到的。尽管我现在对于面向对象有了一些的了解，但是当初的那种似懂非懂的痛苦，依然历历在目。',
                    url:'1',
                    author:'我不是大神',
                    time:'2019-12-14',
                    watch:500,
                    comment:166,
                    like:241,
                },{
                    head:'Oracle创建数据库(数据库表空间)、表和用户',
                    title:'11111111111111111111111',
                    url:'1',
                    author:'我不是大神',
                    time:'2019-12-14',
                    watch:500,
                    comment:166,
                    like:241,
                },{
                    head:'面向对象、构造函数、原型与原型链',
                    title:'如果要我总结一下学习前端以来我遇到了哪些瓶颈，那么面向对象一定是第一个毫不犹豫想到的。尽管我现在对于面向对象有了一些的了解，但是当初的那种似懂非懂的痛苦，依然历历在目。为了帮助大家能够更加直观的学习和了解面向对象，我会用尽量简单易懂的描述来展示面向对象的相关知识。如果要我总结一下学习前端以来我遇到了哪些瓶颈，那么面向对象一定是第一个毫不犹豫想到的。尽管我现在对于面向对象有了一些的了解，但是当初的那种似懂非懂的痛苦，依然历历在目。为了帮助大家能够更加直观的学习和了解面向对象，我会用尽量简单易懂的描述来展示面向对象的相关知识。',
                    url:'',
                    author:'我不是大神',
                    time:'2019-12-14',
                    watch:500,
                    comment:166,
                    like:241,
                }],
                total:0,
                pageNum:1,
                pageSize:4,
                currentPage:1,
            }
        },
        methods:{
            handleSizeChange(val){
                this.pageSize = val
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
        width: 28px;
        height: 28px;
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