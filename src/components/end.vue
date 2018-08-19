<template>
    <div class="end-wrapper">
        <div class="change-msg">
            <div class="change-page">
                显示页数：<input type="text" v-model="nowPage">
                <div class="change-btn" @click="changePage">修改</div>
            </div>
            <div class="change-length">
                显示条数：<input type="text" v-model="nowLength">
                <div class="change-btn" @click="changeLength">修改</div>
            </div>
        </div>
        <div class="add-list">
            <div class="add-title">
                添加标题：<input type="text" v-model="title">
            </div>
            <div class="add-num">
                添加数量：<input type="text" v-model="num">
            </div>
            <div class="add-btn">
                <div class="btn" @click="addList">确定</div>
            </div>
        </div>
        <div class="show-list">
            <table border>
                <tr>
                    <th>编号</th>
                    <th>标题</th>
                    <th>时间</th>
                    <th>点击量</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(list, index) in lists">
                    <td>{{index + 1}}</td>
                    <td>{{list.title}}</td>
                    <td>{{list.time}}</td>
                    <td>{{list.clickNum}}</td>
                    <td>
                        <span>修改</span>
                        <span @click="del(list.title)">删除</span>
                    </td>
                </tr>
            </table>
        </div>
        <div class="bg"></div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    data () {
        return {
            nowPage: this.$store.state.pageNum,
            nowLength: this.$store.state.pageLength,
            title: '',
            num: 0
        } 
    },
    computed: {
        ...mapState(['lists', 'pageNum', 'pageLength'])
    },
    methods: {
        ...mapMutations(['changePageNum', 'changePageLength', '_addList', 'delList']),
        changePage() {
            this.changePageNum(+this.nowPage);
            alert("修改成功");
        },
        changeLength() {
            this.changePageLength(+this.nowLength);
            alert("修改成功");
        },
        addList() {
            // console.log(this.title, this.num);
            if(this.title == '') {
                this._addList({title: "新闻" + parseInt(Math.random()*10000), num: parseInt(Math.random()*100000)})
            } else {
                this._addList({title: this.title, num: this.num})
            }
            this.title = '';
            this.num = 0;
        },
        del(title) {
            this.delList(title)
        }
    }
}
</script>


<style>
    /* .bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000;
        opacity: 0.3;
    } */
    .change-msg {
        display: flex;
        width: 100%;
    }
    .change-page, .change-length{
        flex: 1;
        display: flex;
        align-items: center;
        height: 30px;
    }
    .change-btn{
        margin-left: 20px;
        height: 20px;
        line-height: 20px;
        width: 50px;
        text-align: center;
        background: red;
        color: #fff;
        cursor: pointer;
        border-radius: 4px;
    }

    .end-wrapper > div {
        margin-bottom: 40px;
    }
    .add-list {
        display: flex;
        align-items: center;
    }
    .add-title, .add-num, .add-btn {
        flex: 1;
    }

    .btn{
        color: #fff;
        height: 20px;
        line-height: 20px;
        width: 40px;
        text-align: center;
        background: red;
    }

    table {
        width: 100%;
    }
    th, td {
        width: 20%;
        text-align: center;
    }
</style>
