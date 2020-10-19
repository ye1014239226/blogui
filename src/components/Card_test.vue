<template>
    <div>
        <div class="context">
            <el-card class="box-card">
                <div v-for="i in list[0].body.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="i" class="text item">
                    <div id="box-card">
                        <div class="card_head" @click="gotoMessage(i.uid)">
                            <span class="head_card">{{i.title}}</span>
                        </div>
                        <div v-if="!i.thumbnail">
                            <div class="title_1" @click="gotoMessage(i.uid)">
                                <span class="title">{{i.content}}</span>
                            </div>
                        </div>
                        <div v-else>
                            <div class="card_title" @click="gotoMessage(i.uid)">
                                <img :src="require('../assets/'+i.thumbnail)"  class="card_img">
                                <div class="title_2">
                                    <span class="title1">{{i.content}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="manger">
                            <div class="manger1">
                                <div class="left">
                                    <i class="el-icon-user"></i>
                                    <span style="margin-left: 5px;width: 100px">{{i.name}}</span>
                                    <i class="el-icon-time" style="margin-left: 12px"></i>
                                    <span style="margin-left: 5px">{{i.create_date}}</span>
                                </div>
                                <div>
                                    <el-button type="primary" class="icon_btn"><i class="el-icon-view" style="color: black;font-size: 20px;margin-right: 5px"></i></el-button>
                                    <span style="margin-left: 5px">{{i.view_num}}</span>
                                    <el-button type="primary" class="icon_btn"><i class="el-icon-chat-dot-square" style="color: black;font-size: 20px;margin-right: 5px"></i></el-button>
                                    <span style="margin-left: 5px">{{i.comment_num}}</span>
                                    <el-button type="primary" class="icon_btn" @click="like(i.uid,i)" ><i class="el-icon-star-off" style="color: red;font-size: 20px;margin-right: 5px"></i></el-button>
                                    <span style="margin-left:5px;margin-right: 5px">{{i.like_num}}</span>
                                </div>
                            </div>
                        </div>
                        <div id="line"></div>
                    </div>
                </div>
            </el-card>
        </div>
        <div class="block">
            <el-pagination
                    layout="prev, pager, next"
                    @current-change="current_change"
                    :current-page.sync="currentPage"
                    :page-size="4"
                    :total="list[0].body.length">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card_test",
        props:{list:Array},
        inject:['reload'],
        data(){
            return{
                currentPage:1,
                pagesize:4,
                islike:'true',
                accountid:localStorage.getItem('userid'),
                likenum:0,
            }
        },
        methods:{
            current_change(currentPage){
                this.currentPage = currentPage
            },
            gotoMessage(id){
                /* console.log('当前点击的id' + id);*/
                this.$router.push({
                    path:'/Message',
                    query:{
                        uid:id,
                    }
                })
            },
            like(id,message){
                console.log(message.create_date)
                this.$axios.post('/api/article/likearticle?articleId='+id+'&accountId='+this.accountid).then(res=>{
                    this.likenum=res.data.body;
                    console.log(res.data)
                    this.$axios.post('/api/article/modifyarticle',{
                        accountId: message.account_id,
                        commentNum: message.comment_num,
                        content: message.content,
                        createDate: message.create_date,
                        isDeleted:  false,
                        likeNum: this.likenum,
                        thumbnail:  message.thumbnail,
                        title:  message.title,
                        uid:  message.uid,
                        viewNum:  message.view_num,
                    }).then(res=>{
                        console.log(res.data)
                    })
                    this.reload()
                })
            },
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
        height: 150px;
        padding-top: 2px;
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
    }
    .title_1{
        margin-top: 5px;
        height: 70px;
    }
    .card_title{
        display: flex;
    }
    .manger{
        margin-top: 20px;
        height: 40px;
    }
    .manger1{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .card_img{
        float: left;
        width: 160px;
        height: 100px;
    }
    .title_2{
        width:calc(100% - 160px);;
    }
    .title{
        width: 810px;
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
        overflow: hidden;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
    .block{
        text-align: center;
    }
</style>