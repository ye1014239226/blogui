<template>
    <div>
        <Head></Head>
        <div>
            <div class="context">
                <div class="context1">
                    <div class="head">
                        <span id="context_span">{{message.title}}</span>
                        <el-button v-if="islike">已收藏</el-button>
                        <el-button v-else>未收藏</el-button>
                    </div>
                    <div style="width: 1000px;height: 1px;background-color: #dde4eb;margin-top: 15px"></div>
                    <Tag :dynamicTags="dynamicTags" class="tag"></Tag>
                    <div id="text">
                        <span>{{message.content}}</span>
                    </div>
                    <div>
                        <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                multiple
                                :limit="3"
                                :on-exceed="handleExceed"
                                :file-list="fileList">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </div>
                    <text_item v-if="message!=null" :message="message"></text_item>
                    <Comment :info="info"></Comment>
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
                        <el-button type="text" id="comment_btn">发送</el-button>
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
        name: "Message",
        data(){
            return{
                uid:'',
                message:[],
                title:"1-js基础教程",
                islike:false,
                dynamicTags: ['标签一', '标签二', '标签三'],
                inputVisible: false,
                inputValue: '',
                text:'JavaScript是Web的编程语言。所有现代的HTML页面都使用JavaScript。JavaScript 非常容易学。本教程将教你学习从初级到\n' +
                    '高级JavaScript知识。JavaScript是Web的编程语言。所有现代的HTML页面都使用JavaScript。JavaScript 非常容易学。本教程将教你学习从初级到\n' +
                    '高级JavaScript知识。JavaScript是Web的编程语言。所有现代的HTML页面都使用JavaScript。JavaScript 非常容易学。本教程将教你学习从初级到\n' +
                    '高级JavaScript知识。',
                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                info:[{
                    avator:'',
                    author:'李雷',
                    time:'14:25',
                    text:'文章写的非常好，内容详细易懂，对初学者有很大的帮助，感谢作者~',
                    like:256,
                    comment:0,
                    reply:[{
                        username:'路人甲',
                        reply_text:'同意你的观点，作者大大很棒'
                    },{
                        username:'路人乙',
                        reply_text:'同意你的观点，作者大大很棒'
                    },{
                        username:'路人丙',
                        reply_text:'同意你的观点，作者大大很棒'
                    }]
                },{
                    avator:'',
                    author:'李雷',
                    time:'14:25',
                    text:'文章写的非常好，内容详细易懂，对初学者有很大的帮助，感谢作者~',
                    like:222,
                    comment:10,
                    reply:[{
                        username:'路人甲',
                        reply_text:'同意你的观点，作者大大很棒'
                    }]
                }],
                textarea: '',
            }
        },
        watch:{
          $route:'getParams'
        },
        created(){
          this.getParams()
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
                console.log('getParams',this.uid)
                this.$axios.post('/api/article/findbyuid?uid='+this.$route.query.uid).then(res=>{
                        this.message=res.data.body[0]
                        console.log(this.message)
                }).catch(
                )
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