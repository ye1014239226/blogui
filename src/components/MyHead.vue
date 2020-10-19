<template>
    <div class="head">
        <div class="head1">
            <div id="head_left">
                <div class="img1"></div>
                <span id="boke">博客</span>
            </div>
            <div id="head_right">
                <div id="search">
                    <input style="border: 0px;margin-left: 10px;margin-top: 8px" placeholder="搜索">
                    <el-button type="primary" class="icon_btn"><i class="el-icon-search" style="color: black"></i></el-button>
                </div>
                <div id="icon_item">
                    <el-button type="primary" class="icon_btn1"><i class="el-icon-circle-plus" style="color: blue;font-size: 20px"></i></el-button>
                    <el-button type="primary" class="icon_btn1"><i class="el-icon-message-solid" style="color: black;font-size: 20px"></i></el-button>
                    <el-button type="primary" class="icon_btn1"><i class="el-icon-setting" style="color: black;font-size: 20px"></i></el-button>
                </div>
                <div id="icon_user">
                    <el-button type="primary" class="icon_btn1"><i class="el-icon-user-solid" style="color: blue;font-size: 20px"></i></el-button>
                    <span>{{username}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyHead"
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
        width: 20px;
        height: 26px;
        background-color: #FFFFFF;
        border: 0px
    }
    .icon_btn1{
        width: 28px;
        height: 28px;
        background-color: #FFFFFF;
        border: 0px
    }
</style>