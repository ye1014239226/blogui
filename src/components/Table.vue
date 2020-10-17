<template>
    <div class="context">
        <el-card class="box-card">
            <div v-for="i in manger" :key="i" class="text item">
                <div class="card_head">
                    <span class="head_card">{{i.head}}</span>
                </div>
                <div v-if="i.url==''">
                    <div class="title_1">
                        <span class="title">{{i.title}}</span>
                    </div>
                </div>
                <div v-else>
                    <div class="card_title">
                        <img src="../assets/book.png" style="float: left;width: 40px;height: 40px">
                        <div class="title_2">
                            <span class="title">{{i.title}}</span>
                        </div>
                    </div>
                </div>
                <div class="manger">
                    <i class="el-icon-user"></i>
                    <span>{{i.author}}</span>
                    <i class="el-icon-time"></i>
                    <span>{{i.time}}</span>
                    <el-button type="primary" class="icon_btn"><i class="el-icon-view" style="color: black"></i></el-button>
                    <span>{{i.watch}}</span>
                    <el-button type="primary" class="icon_btn"><i class="el-icon-chat-dot-square" style="color: black"></i></el-button>
                    <span>{{i.comment}}</span>
                    <el-button type="primary" class="icon_btn"><i class="el-icon-star-off" style="color: black"></i></el-button>
                    <span>{{i.like}}</span>
                </div>
                <div id="line"></div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "Table",
    }
</script>

<style scoped>

</style>