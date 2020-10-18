<template>
    <div>
        <Compile_head v-if="info!=''" :info="info"></Compile_head>
        <div style="height: 20px"></div>
        <div class="context">
            <div>
                <input class="input_title" type="text" :placeholder="info.title" v-model="info.title">
                <div style="width:850px;height:1px;background-color:#dde4eb;margin-top:10px"></div>
                <div style="height: 10px"></div>
                <el-input
                        class="input_context"
                        type="textarea"
                        :rows="35"
                        :placeholder="info.content"
                        v-model="info.content">
                </el-input>
            </div>

        </div>
    </div>
</template>

<script>
    import Compile_head from "@/components/Compile_head";
    export default {
        components: {Compile_head},
        name: "Compile",
        data(){
            return{
                uid:this.$route.query.uid,
                info:[],
            }
        },
        created(){
          this.getData()
        },
        methods:{
            getData(){
                this.$axios.post('/api/article/findarticle?uid='+this.uid).then(res=>{
                    this.info=res.data.body
                    console.log(this.info)
                })
            }
        }
    }
</script>

<style scoped>
    .context{
        display: flex;
        width: 930px;
        height:800px;
        margin-left: auto;
        margin-right: auto;
        background-color: #FFFFFF;
        box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.16);
        border-radius: 4px;
        padding-left: 60px;
        padding-top: 40px;
    }
    .input_title{
        height: 25px;
        width: 100%;
        font-family: Microsoft YaHei UI;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 22px;
        letter-spacing: 2px;
        color: #333333;
        border: 0;
    }
    .input_context{
        font-family: Microsoft YaHei UI;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        letter-spacing: 1px;
        color: #666666;
        border: 0;
    }

</style>