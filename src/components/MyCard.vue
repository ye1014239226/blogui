<template>
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
</template>

<script>
    export default {
        name: "MyCard",
        props:{manger:Array}
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


    .icon_btn{
        width: 20px;
        height: 26px;
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
</style>