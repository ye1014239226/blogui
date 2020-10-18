<template>
    <div>
        <div class="head">
            <img src="../assets/book1.png" id="head_img">
            <div style="width: 1px;height: 42px;background-color: #b4bcc4;margin-left: 10px;margin-top: 8px"></div>
            <el-button type="text" id="head_btn" @click="gotoHome">首页</el-button>
            <el-button type="text" id="head_btn1" @click="gotoHome">> 文章详细</el-button>
            <span class="head_span">> 编辑</span>
            <el-button id="btn_delete">取消发布</el-button>
            <el-button id="btn_change" @click="save">发布</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Compile_head",
        props:{info:Array},
        methods:{
            gotoHome(){
                this.$router.go(-1);
            },
            save(){
                console.log(this.info);
                this.$axios.post('/api/article/modifyarticle',{
                    accountId: this.info.accountId,
                    commentNum: this.info.commentNum,
                    content: this.info.content,
                    createDate: this.info.createDate,
                    isDeleted: this.info.isDeleted,
                    likeNum: this.info.likeNum,
                    thumbnail: this.info.thumbnail,
                    title: this.info.title,
                    uid: this.info.uid,
                    viewNum: this.info.viewNum
                }).then(res=>{
                    console.log(res.data)
                    alert(res.data.message)
                })
            }
        }
    }
</script>

<style scoped>
    .head{
        height: 60px;
        background-color: #ffffff;
        box-shadow: 0px 0px 6px 0px
        rgba(0, 0, 0, 0.1);
        display: flex;
    }
    #head_img{
        width: 22px;
        height: 27px;
        margin-left: 28px;
        margin-top: 15px;
    }
    #head_btn,#head_btn1{
        margin-left: 10px;
        font-family: Microsoft YaHei UI;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 22px;
        letter-spacing: 1px;
        color: #333333;
    }
    .head_span{
        margin-top: 18px;
        margin-left: 6px;
        width: 160px;
        font-family: Microsoft YaHei UI;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 22px;
        letter-spacing: 1px;
        color: #333333;
    }
    #btn_delete{
        margin-left: calc(100% - 400px);
    }
    #btn_delete,#btn_change{
        margin-top: 15px;
        width: 70px;
        height: 32px;
        background-color: #ffffff;
        border-radius: 4px;
        border: solid 1px #6d98f9;
    }
</style>