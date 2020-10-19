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
                        <el-button type="primary" class="icon_btn1" @click="add"><i class="el-icon-circle-plus" style="color: blue;font-size:20px"></i></el-button>
                        <el-button type="primary" class="icon_btn1"><i class="el-icon-message-solid" style="color: black;font-size:20px"></i></el-button>
                        <el-button type="primary" class="icon_btn1"><i class="el-icon-setting" style="color: black;font-size:20px"></i></el-button>
                    </div>
                    <div id="icon_user">
                        <el-button type="primary" class="icon_btn1" @click="gotomy"><i class="el-icon-user-solid" style="color: blue;font-size:20px"></i></el-button>
                        <span>{{user.account}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div style="margin: 20px"></div>
        <Card_test v-if="list!=null" :list="list"></Card_test>
    </div>
</template>

<script>
    import Card_test from "@/components/Card_test";
    export default {
        components: {Card_test},
        name: "Home",
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
                list:[{}],
                userid:localStorage.getItem('userid')
            }
        },
        created() {
            this.getData();
        },
        methods:{
            getData(){
                this.$axios.post('/api/article/findAlluser1').then(res=>{
                    this.manger=res.data;
                    console.log(this.manger.body[0].isDeleted)
                    for(const i in this.manger){
                                this.$set(this.list[0],i,this.manger[i])
                    }
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
               this.$axios.post('/api/article/findtitleandcomment1?title='+this.search_title).then(res=>{
                    this.manger=res.data;
                    for(const i in this.manger){
                        this.$set(this.list[0],i,this.manger[i])
                    }
                    console.log(this.manger)
                }).catch(function(){
                })
            },
            gotomy(){
                this.$router.push({name:'MyMessage'})
            }
        }
    }
</script>

<style scoped>
    .head{
        height: 56px;
        background-color: #ffffff;
        box-shadow: 0px 1px 6px 0px
        rgba(0, 0, 0, 0.1);
    }
    .head1{
        width: 900px;
        margin-left: auto;
        margin-right: auto;
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
        background-color: #FFFFFF;
        border: 0px
    }
    .icon_btn1{
        background-color: #FFFFFF;
        border: 0px
    }
</style>