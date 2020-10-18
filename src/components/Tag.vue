<template>
    <div style="display: flex">
        <span >标签</span>
        <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)"
        class="tag">
            {{tag}}
        </el-tag>
    </div>
</template>

<script>
    export default {
        name: "Tag",
        props:{dynamicTags:Array},
        data(){
            return{
            }
        },
        methods:{
            handleClose(tag){
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },
            click(){
                console.log(this.dynamicTags)
            }

        }
    }
</script>

<style scoped>
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .tag{
        margin-left: 20px;
    }
</style>