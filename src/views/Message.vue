<template>
    <div>
        <Head v-if="uid!=''" :uid="uid" :isauthor="isauthor"></Head>
        <div>
            <div class="context">
                <div class="context1">
                    <div class="head">
                        <span id="context_span">{{message.title}}</span>
                        <el-button v-if="iscollect" @click="collect">已收藏</el-button>
                        <el-button v-else  @click="collect">未收藏</el-button>
                    </div>
                    <div style="width: 1000px;height: 1px;background-color: #dde4eb;margin-top: 15px"></div>
                    <Tag :dynamicTags="dynamicTags" :isauthor="isauthor" :uid="uid" class="tag"></Tag>
                    <div id="text">
                        <span>{{message.content}}</span>
                    </div>
                    <div>
                        <el-upload
                                class="upload-demo"
                                :action="action"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                multiple
                                :limit="3"
                                :on-exceed="handleExceed"
                                :file-list="fileList1">
                            <el-button size="small" type="primary"  v-if=isauthor @click="upload">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip"  v-if=isauthor>只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </div>
                    <text_item v-if="message!=null" :message="message"></text_item>
                    <Comment v-if="info!=''" :info="info" :isauthor="isauthor"></Comment>
                    <div class="comment_input">
                        <div>
                            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                        </div>
                        <el-input
                                type="textarea"
                                :rows="4"
                                placeholder="请输入内容"
                                v-model="textarea">
                        </el-input>
                    </div>
                    <div class="comment_btn">
                        <el-button type="text" id="comment_btn" @click="comment">发送</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Head from "@/components/Head";
    import Tag from "@/components/Tag";
    import text_item from "@/components/text_item";
    import Comment from "@/components/Comment";
    export default {
        components: {Head,Tag,text_item,Comment},
        inject:['reload'],
        name: "Message",
        data(){
            return{
                uid:0,
                message:[],
                title:"1-js基础教程",
                islike:false,
                dynamicTags:[],
                inputVisible: false,
                inputValue: '',
                text:'',
                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                fileList1:[],
                info:[],
                textarea: '',
                accountid:localStorage.getItem('userid'),
                iscollect:false,
                isauthor:false,
                time:'',
                action:''
            }
        },
        watch:{
          $route:'getParams'
        },
        created(){
          this.getParams()
            this.getTime()
        },
        methods:{
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            getParams(){
                this.uid = this.$route.query.uid
                this.action="/api/enclosure/upload?articleId="+this.uid
                console.log('action',this.action)
                console.log('getParams',this.uid)
                this.$axios.post('/api/article/findartbyid1?uid='+this.$route.query.uid).then(res=>{
                        this.message=res.data.body[0]
                        console.log(this.message)
                }).catch(
                )
                this.$axios.post('/api/article/iscollectarticle?articleId='+this.uid+'&accountId='+this.accountid).then(res=>{
                    console.log(res.data)
                    this.iscollect=res.data
                })
                this.$axios.post('/api/article/ismyarticle?articleId='+this.uid+'&accountId='+this.accountid).then(res=>{
                    this.isauthor=res.data
                })
                this.$axios.post('/api/comment/findAllCommentid?articleId='+this.uid).then(res=>{
                    console.log(res.data.body)
                    this.info=res.data.body
                })
                this.$axios.post('/api/label/findarticlesbyuser?aricleId='+this.uid).then(res=>{
                    console.log(res.data.body)
                    this.dynamicTags=res.data.body
                })
                this.$axios.post('/api/enclosure/findarticlesbyuser?articleId='+this.uid).then(res=>{
                    console.log("文件")
                    console.log(res.data)
                    this.fileList1=res.data.body
                    console.log(this.fileList1)
                })
            },
            collect(){
                let _this=this
                this.$axios.post('api/article/collectarticle?articleId='+_this.uid+'&accountId='+ _this.accountid).then(res=>{
                    console.log(res.data)
                })
                this.reload()
            },
            comment(){
                this.$axios.post('api/comment/addComment',{
                    accountId: this.accountid,
                    articleId: this.$route.query.uid,
                    commentNum: 0,
                    content: this.textarea,
                    createDate: this.time,
                    likeNum: 0,
                    uid: 0
                }).then(res=>{
                    console.log(res.data.message)
                })
                this.reload()
            },
            getTime(){
                var _this = this;
                let yy = new Date().getFullYear();
                let mm = new Date().getMonth()+1;
                let dd = new Date().getDate();
                let hh = new Date().getHours();
                let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
                let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
                _this.time = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
                console.log(this.time)
            },
            upload(){

            }
        },
    }
</script>

<style scoped>
    .context{
        margin-left:auto;
        margin-top: 10px;
        margin-right: auto;
        width: 1000px;
        height: auto;
        background-color: #ffffff;
        box-shadow: 0px 0px 6px 0px
        rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        overflow:hidden;
    }
    .context1{
        margin-left: 20px;
        margin-top: 20px;
    }
    .head{
        display: flex;
    }
    #context_span{
        margin-top: 5px;
        height: 22px;
        margin-right: 10px;
        font-family: Microsoft YaHei UI;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 22px;
        letter-spacing: 0px;
        color: #333333;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    .tag{
        margin-top: 20px;
    }
    #text{
        margin-top: 20px;
        width: 900px;
        height: auto;
    }
    .upload-demo{
        margin-top: 20px;
    }
    .comment_input{
        display: flex;
        margin-left: 20px;
    }
    .comment_btn{
        margin-left:60px;
        margin-top: 10px;
        background-color: #6d98f9;
        border-radius: 4px;
        width: 70px;
        height: 32px;
        text-align: center;
    }
    #comment_btn{
        font-family: Microsoft YaHei UI;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 1px;
        color: #ffffff;

    }


</style>