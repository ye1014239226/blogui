<template>
    <div>
        <div class="title">
            <span id="title_text">评论区 ({{}})</span>
            <el-button type="text" id="title_btn">展开全部</el-button>
        </div>
        <div>
            <el-card class="box-card">
                <div v-for="i in info" :key="i" class="text item">
                    <div id="box-card">
                        <div class="card_head">
                            <div>
                                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                            </div>
                            <span class="head_card">{{i.account}}</span>
                            <span class="head_card">{{i.create_time}}</span>
                        </div>
                        <div class="title_1">
                                <span class="title">{{i.content}}</span>
                        </div>
                        <div class="reply" >
                            <div style="margin-left: 15px">
                                <el-button type="text" id="reply_btn" @click="getreply(i.uid)">查看评论</el-button>
                            </div>
                            <div v-for="j in reply" :key="j" class="text item">
                                <div v-if="j.comment_id===i.uid">
                                        <span id="reply_span">{{j.name}}: {{j.content}}</span>
                                </div>
                             </div>
                        </div>
                        <div>
                            <div class="comment_icon">
                                <el-button type="primary" class="icon_btn" ><i class="el-icon-star-off" style="color: black"></i></el-button>
                                <span>{{i.like}}</span>
                                <el-button type="primary" class="icon_btn"><i class="el-icon-chat-dot-square" style="color: black"></i></el-button>
                                <span>{{i.comment}}</span>
                                <el-button type="primary" class="icon_btn1"><i class="el-icon-edit-outline" style="color: black"></i>回复</el-button>
                                <el-button type="primary" class="icon_btn1"><i class="el-icon-delete" style="color: black"></i>删除</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Comment",
        props:{info:Array},
        data(){
            return{
                reply:[]
            }
        },
        methods:{
          getreply(index){
              this.$axios.post('/api/reply/findAllReplyid?commentId='+index).then(res=>{
                  console.log(res.data)
                  this.reply=res.data.body
              })
          }
        }
    }
</script>

<style scoped>
    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #f6f6f6;

    }
    #title_text{
        margin-left: 10px;
        font-family: Microsoft YaHei UI;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 22px;
        letter-spacing: 0px;
        color: #333333;
    }
    #title_btn{
        margin-right: 10px;

    }
    .card_head{
        display: flex;
    }
    .head_card{
        margin-left: 5px;
        font-family: Microsoft YaHei UI;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 52px;
        letter-spacing: 1px;
        color: #666666;
    }
    .title{
        margin-left: 40px;
        background-color: #FFFFFF;
        font-family: Microsoft YaHei UI;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 1px;
        color: #333333;
    }
    .reply{
        background-color: #f6f6f6;
        border-radius: 4px;
        padding-top: 5px;
        margin-left: 60px;
        margin-top: 10px;
    }
    #reply_span{
        font-family: Microsoft YaHei UI;
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;

        letter-spacing: 1px;
        color: #333333;
        margin-left: 15px;
    }
    .comment_icon{
        margin-left: 60px;
    }
    .icon_btn{
        background-color: #FFFFFF;
        border: 0;
    }
    .icon_btn1{
        background-color: #FFFFFF;
        border: 0;
        padding-right: 5px;
        color: #000;
    }

</style>