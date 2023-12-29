<template>
    <div class="pass-login">
        <p class="tip">密码登录</p>
        <Input
            type="text"
            v-model:value="form.username"
            placeholder="请输入账号"
        />
        <Input
            type="password"
            v-model:value="form.password"
            placeholder="请输入密码"
        />
        <Button type="primary" @click="login">登录</Button>
    </div>
</template>
  
<script lang="ts" setup>
import { reactive } from "vue";

import { Input, Button, message } from "ant-design-vue";

import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
    username: "",
    password: "",
});

const login = () => {
    console.log("logio", form.username);
    message.success(form.username);
    router.push("./transaction");
};

// const onInputChange = ($event: { target: HTMLInputElement }) => {
//     const value = $event.target.value;

//     if (props.max && value) {
//         emits("update:value", value.slice(0, props.max));
//         return;
//     }
//     emits("update:value", value);
// };
// const count = ref(0);
</script>


<style lang="less" scoped>
.pass-login {
    box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1),
        0px -1px 3px 0px rgba(10, 31, 68, 0.08);
    padding: 16px;
    .ant-input {
        margin-bottom: 16px;
    }
    .ant-btn {
        width: 100%;
    }
    p {
        font-weight: bold;
    }
}
</style>
