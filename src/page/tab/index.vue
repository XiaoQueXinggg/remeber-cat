<template>
    <div class="wrapper">
        <router-view></router-view>
        <div class="page-footer">
            <div
                v-for="tab in tabs"
                :key="tab.name"
                :class="{ 'checked-tab': tab.path === currentTab }"
            >
                {{ tab.name }}
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

import { useRoute } from "vue-router";

const tabs = [
    {
        name: "首页",
        path: "home",
    },
    {
        name: "社区",
        path: "social",
    },
    {
        name: "首页",
        path: "user",
    },
];

const currentTab = computed(() => route.name);

const route = useRoute();

console.log(route.name, "route");
</script>
<style lang="less" scoped>
.wrapper {
    background-image: linear-gradient(#dbe5f8, #f4f5f8);
    min-height: 100vh;
}
.page-footer {
    position: fixed;
    bottom: 0px;
    height: 50px;
    background: white;
    width: 100%;
    left: 0px;
    display: flex;

    div {
        width: 33.33%;
        text-align: center;
        font-size: 14px;
        color: #999;
    }
    .checked-tab {
        background: #99bcff;
        color: white;
    }
}
</style>