<template>
    <div style="display: flex">
        <span >标签</span>
        <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag.uid)">
            {{tag.content}}
        </el-tag>
        <div v-if=isauthor>
            <input
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
            />
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tag",
        inject:['reload'],
        props:{dynamicTags:Array,isauthor:Boolean,uid:Number},
        data(){
            return{
                inputVisible: false,
                inputValue: ''
            }
        },
        methods:{
            handleClose(index){
                this.$axios.post('/api/label/deleteLabel?uid='+index).then(res=>{
                    console.log(res.data)
                })
                this.reload();
            },
            showInput() {
                this.inputVisible = true;
               /* this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus(_ );
                })*/
              /* this.$axios.post('/api/label/addLabel',{
                   articleId: this.uid,
                   content: this.inputValue,
               }).then(res=>{
                   console.log(res.data)
               })**/

            },
            handleInputConfirm() {
                this.$axios.post('/api/label/addLabel',{
                    articleId: this.uid,
                    content: this.inputValue,
                }).then(res=>{
                    console.log(res.data)
                })
                this.inputVisible = false;
                this.inputVisible='';
                this.reload();
            }

        }
    }
</script>

<style scoped>
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
</style>