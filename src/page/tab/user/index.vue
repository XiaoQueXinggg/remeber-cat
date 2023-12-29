<template>
    <div class="transaction-wrapper">
        <div class="player-username">
            <label for="">玩家账号：</label>
            <Input></Input>
        </div>
        <div class="player-username">
            <label for="">确认玩家账号：</label>
            <Input></Input>
        </div>
        <div class="player-username">
            <label for="">您的手机号：</label>
            <Input></Input>
        </div>
        <div class="player-username">
            <label for="">QQ：</label>
            <Input></Input>
        </div>
        <div class="player-username">
            <label for="">充值金额：</label>
            <Input></Input>
        </div>
        <div class="step-button">
            <Button>登录</Button>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { reactive } from "vue";
import { Input, Button, message } from "ant-design-vue";
const form = reactive({
    player: "",
    phone: "",
    QQ: "",
    money: "",
});
// import { Input, Button } from "ant-design-vue";

// const form = reactive({
//     username: "",
//     password: "",
// });

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
.transaction-wrapper {
    .player-username {
        display: grid;
        grid-template-columns: 110px 1fr;
        margin-bottom: 12px;
        label {
            font-size: 12px;
            color: #333;
            height: 30px;
            line-height: 30px;
        }
    }
}
</style>
