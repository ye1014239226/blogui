<template>
    <div>
        <div class="head">
            <img src="../assets/book1.png" id="head_img">
            <div style="width: 1px;height: 42px;background-color: #b4bcc4;margin-left: 10px;margin-top: 8px"></div>
            <el-button type="text" id="head_btn" @click="gotoHome">首页</el-button>
            <span id="head_span">> 文章详细</span>
                <el-button id="btn_delete" v-if=isauthor @click="del">删除</el-button>
                <el-button id="btn_change" v-if=isauthor @click="compile">编辑</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Head",
        props:{uid:String,isauthor:Boolean},
        data(){
            return{
                isA:false,
            }
        },
        methods:{
            gotoHome(){
                this.$router.go(-1);
            },
            compile(){
                this.$router.push({
                    name:'Compile',
                    query:{
                        uid:this.uid,
                    }
                })
            },
            del(){
                console.log(this.uid)
                console.log("是否为当前用户"+this.isauthor)
              this.$axios.post('/api/article/deletearticle?uid='+this.uid).then(res=>{
                    console.log(res.data)
                    alert("删除成功")
                    this.$router.go(-1)
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
    #head_btn{

        margin-left: 10px;
        font-family: Microsoft YaHei UI;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 22px;
        letter-spacing: 1px;
        color: #333333;
    }
    #head_span{
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