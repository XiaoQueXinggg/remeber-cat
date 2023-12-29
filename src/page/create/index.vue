<template>
    <div class="title">
        <span class="back" @click="back">返回</span>
        <span class="name">{{ name }}</span>
    </div>
    <div class="create-wrapper">
        <input type="file" />
        <div class="filter-content">
            <div class="filter-item">
                <label>展示方式：</label>
                <span
                    v-for="option in options"
                    :key="option.value"
                    @click="displayMode = option.value"
                    :class="{ checked: option.value === displayMode }"
                    >{{ option.label }}</span
                >
            </div>
            <div class="filter-item">
                <label>记忆模式：</label>
                <span
                    v-for="mode in modes"
                    :key="mode.value"
                    @click="rememberMode = mode.value"
                    :class="{ checked: mode.value === rememberMode }"
                    >{{ mode.label }}</span
                >

                <!-- <a-button type="primary">完成 </a-button> -->
            </div>
        </div>
        <div
            class="editor-all"
            contenteditable="true"
            v-if="Mode.Default === displayMode"
        >
            {{ text }}
        </div>
        <div class="split-text" v-else>
            <Editor
                class="split-item"
                :class="{ 'checked-paragraph': paragraph.checked }"
                v-for="(paragraph, index) in list"
                :ref="(ele) => addEditor(ele, paragraph)"
                :key="index"
                @click="check(paragraph, index)"
                :checked="paragraph.checked"
                :text="paragraph.word"
            ></Editor>
        </div>
    </div>
    <div class="footer">
        <div class="decoration">
            <span>划重点：</span>
            <span
                v-for="font in hightLight"
                :key="font.type"
                @click="($event) => setFont($event, font.type)"
                >{{ font.label }}</span
            >
            <!-- <span>下划线</span>
            <span>背景</span>
            <span>颜色</span>
            <span>大小</span> -->
        </div>
        <div class="btn-wrapper">
            <span>调整</span>
            <span
                class="merge-word"
                :class="{ disabled: checkeds.length < 1 }"
                @click="merge"
            >
                合并
            </span>
            <span @click="setFont($event, 'split')">分割</span>
            <span>完成</span>
        </div>
    </div>
</template>
<script lang="ts">
import { message } from "ant-design-vue";
//@ts-ignore
import Editor from "../../components/editor.vue";
import {
    defineComponent,
    computed,
    reactive,
    toRefs,
    watch,
    onBeforeMount,
    ref,
} from "vue";
import { options, modes, hightLight } from "./helper";
import type { Data, Paragraph, FontType } from "./helper";
import { useRouter } from "vue-router";
enum Mode {
    Default,
    List,
}
export default defineComponent({
    components: { Editor },
    setup() {
        const router = useRouter();

        const eles: InstanceType<typeof Editor>[] = [];

        const quill = ref();

        const data: Data = reactive<any>({
            displayMode: 0,

            rememberMode: 0,
            text: "首先,我们需要准备一些基础的html代码。在页面中,我们需要一个div元素作为书本的容器,以及两个div元素代表书本的封面和内容。",
            list: [],
            checkeds: [],
        });

        const name = computed(() => {
            return "新建";
        });

        const parseText = (text: string) => {
            const match = text.match(/.*?[。?”;；!！\n]/gi);
            if (Array.isArray(match)) {
                data.list = match
                    .slice()
                    .map((word: string) => ({ word, checked: false }));
            } else {
                message.warn("解析失败");
            }
        };

        const addEditor = (
            ele: InstanceType<typeof Editor>,
            target?: Paragraph
        ) => {
            ele && eles.push(ele);
        };

        const check = (para: Paragraph, index?: number) => {
            const exist = data.checkeds.find(
                (paragraph: Paragraph) => para === paragraph
            );
            if (!exist) {
                data.checkeds.push(para);
            } else {
                data.checkeds = data.checkeds.filter(
                    (paragraph: Paragraph) => paragraph !== para
                );
            }
        };

        // const set = (cb: Function) => {
        //     eles.forEach((element: any) => cb(element));
        // };

        // const split = () => {
        //     eles.forEach((element: any) => {
        //         element.split("giao");
        //     });
        // };

        const merge = () => {
            if (data.checkeds.length < 2) {
                message.warn("请先选择两行文本");
                return;
            }
        };

        const setFont = (event: any, type: FontType, value?: any) => {
            event.preventDefault();
            eles.forEach((element: any) => {
                element.set(type, value);
            });
        };

        watch(
            () => data.text,
            (current, _) => parseText(current)
        );

        const back = () => router.go(-1);

        onBeforeMount(() => {
            parseText(data.text);
        });
        return {
            hightLight,
            name,
            quill,
            Mode,
            options,
            modes,
            setFont,
            ...toRefs(data),
            check,
            merge,

            addEditor,
            back,
        };
    },
});
</script>
<style lang="less" scoped>
.title {
    height: 50px;
    background: #f5f5f5;
    line-height: 50px;
    text-align: center;
    .back {
        float: left;
    }
}
.create-wrapper {
    padding: 0px 8px;
    .filter-content {
        .filter-item {
            margin-top: 10px;
            label {
                font-size: 12px;
            }
            span {
                margin-right: 10px;
                display: inline-block;
                background: #f5f5f5;
                color: #666;
                padding: 2px 8px;
                border-radius: 5px;
                font-size: 13px;
            }
            .checked {
                background-color: #1677ff;
                color: white;
            }
        }
        .ant-select {
        }
    }
    .editor-all,
    .split-text {
        margin-top: 10px;
        font-size: 13px;
        color: #666;
        line-height: 25px;
    }
    .split-text {
        .split-item {
            background: #f5f5f5;
            border-radius: 3px;
            padding: 0px 5px;
            margin-bottom: 10px;
        }
        .checked-paragraph {
            background: #dbe5f8;
        }
    }
}
.footer {
    height: 65px;
    position: fixed;
    bottom: 0px;
    width: 100%;
    // background: #dbe5f8;
    left: 0px;
    .decoration {
        height: 30px;
        font-size: 12px;
        color: #666;
        span {
            margin-right: 10px;
        }
    }
    .btn-wrapper {
        display: flex;
        position: absolute;
        bottom: 0px;
        width: 100%;
        font-size: 12px;
        color: #666;
        float: right;
    }
}
</style>