<template>
    <div class="remeber-wrapper">
        <div class="remeber-list" v-for="(content, key) in list" :key="key">
            <div class="bar"></div>
            <div class="title">古诗三首</div>
            <p>不闻机杼声</p>
            <a-button type="primary">开始背诵</a-button>
        </div>
    </div>
    <div class="create-remember" @click="toPage">+</div>
</template>
  
<script lang="ts">
import { reactive, defineComponent, toRefs } from "vue";

import { Button, message } from "ant-design-vue";

import { useRouter } from "vue-router";

export default defineComponent({
    setup() {
        const router = useRouter();

        const form = reactive({
            list: [1, 2, 3],
        });

        const toPage = () => router.push({ name: "update" });

        return { ...toRefs(form), toPage };
    },
});
</script>


<style lang="less" scoped>
.remeber-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 8px;

    .remeber-list {
        position: relative;
        overflow: hidden;
        box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1),
            0px -1px 3px 0px rgba(10, 31, 68, 0.08);
        padding: 8px 12px;
        border-radius: 5px;
        background: white;
        box-sizing: border-box;
        margin-bottom: 10px;
        width: 49%;
        // &::before {
        //     position: absolute;
        //     right: 3px;
        //     height: 98%;
        //     width: 5px;
        //     box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1),
        //         0px -1px 3px 0px rgba(10, 31, 68, 0.08);

        //     content: "";
        //     top: 1%;
        //     // background-color: #999;
        // }
        // transform: translateZ(30deg) rotateY(20deg);
        .bar {
            position: absolute;
            height: 100%;
            left: 0px;
            width: 5px;
            top: 0px;
            background: #1677ff;
        }
        .title {
            font-weight: bold;
        }
        // background-image: linear-gradient(#d9a7c7, #fffcdc);
        // background-image: linear-gradient(#6190e8, #a7bfe8);
        p {
            font-size: 12px;
            color: #999;
        }
    }
}
.create-remember {
    position: fixed;
    right: 20px;
    bottom: 180px;
    background: white;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    font-size: 30px;
    line-height: 50px;
    text-align: center;
}
.ant-btn {
    float: right;
}
</style>
