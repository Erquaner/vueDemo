<template>
    <div class="front-wrapper">
        <div class="front-header">
            <div class="search-header">
                搜索热点
            </div>
            <div class="select-page">
                <div :class='["left-dir", nowPage>0 ? "can-click" : ""]' @click="(nowPage>0) && (nowPage--)"> < </div>
                <span :class="[nowPage == (i-1) ? 'now-point' : '']" v-for="i in pageAllNum">.</span>
                <div :class='["right-dir", nowPage<(pageAllNum-1) ? "can-click" : ""]' @click="(nowPage<pageAllNum-1) && (nowPage++)"> > </div>
            </div>
        </div>
        <div class="front-title">
            <div class="title-sort">排名</div>
            <div class="search-num">搜索指数</div>
        </div>
        <div class="front-list" >
            <div class="list-content" v-for="index in pageLength" v-if="(nowPage * pageLength + index - 1) < lists.length" @click="addOne(nowPage * pageLength + index - 1)"> 
                <div :class="['list-num', 'list-' + (nowPage * pageLength + index)]">{{nowPage * pageLength + index}}</div>
                <div class="list-title">{{lists[nowPage * pageLength + index - 1].title}}</div>
                <div class="list-click-num">{{lists[nowPage * pageLength + index - 1].clickNum}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    data () {
        return {
            nowPage: 0
        }
    },
    computed: {
        ...mapState(['pageNum', 'pageLength', 'lists']),
        pageAllNum () {
            var num = Math.ceil(this.lists.length / this.pageLength);
            return num > this.pageNum ? this.pageNum : num;
        }
    },
    methods: {
        addOne(index) {
            this.$store.commit('addOne', index);
        }
    }  
}
</script>


<style>
    .front-wrapper {
        width: 300px;
        border: 1px solid lime;
        margin-top: 30px;
    }
    .front-header {
        display: flex;  
        height: 40px;
        align-items: center;
    }
    .search-header {
        flex: 1;
        font-weight: 600;
    }
    .select-page {
        display: flex;
    }
    .select-page > span {
        font-weight: 600;
        color: #e3e3e3;
    }
    .now-point {
        color: #c3c3c3!important;
    }
    .select-page > div {
        cursor: pointer;
    }

    .front-title {
        display: flex;
        align-items: center;
        height: 30px;
    }
    .title-sort {
        flex: 1;
    }

    .list-content {
        display: flex;
        align-items: center;
        height: 30px;
    }
    .list-num {
        width: 14px;
        height: 14px;
        font-size: 8px;
        line-height: 14px;
        text-align: center;
        background: #8eb9f5;
        color: white;
    }
    .list-title {
        flex: 1;
    }
    .list-1 {
        background: #f54545;
    }
    .list-2 {
        background: #ff8547;
    }
    .list-3 {
        background: #ffac38;
    }
    

    .can-click {
        color: #8eb9f5;
        font-weight: 500;
    }
</style>
