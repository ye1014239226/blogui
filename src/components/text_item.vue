<template>
    <div>
        <div class="manger">
            <div class="left">
                <i class="el-icon-user"></i>
                <span style="margin-left: 5px">{{message.name}}</span>
                <i class="el-icon-time" style="margin-left: 12px"></i>
                <span style="margin-left: 5px">{{message.create_date}}</span>
            </div>
            <div class="right">
                <el-button type="primary" class="icon_btn"><i class="el-icon-view" style="color: black"></i></el-button>
                <span>{{message.view_num}}</span>
                <el-button type="primary" class="icon_btn"><i class="el-icon-chat-dot-square" style="color: black"></i></el-button>
                <span>{{message.comment_num}}</span>
                <el-button type="primary" class="icon_btn"><i class="el-icon-star-off" style="color: black"></i></el-button>
                <span >{{message.like_num}}</span>
            </div>
        </div>
        <div id="line"></div>
    </div>
</template>

<script>
    export default {
        name: "text_item",
        props:{message:Array},
    }
</script>

<style scoped>
    .manger{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .icon_btn{
        width: 20px;
        height: 26px;
        background-color: #FFFFFF;
        border: 0px
    }
</style>