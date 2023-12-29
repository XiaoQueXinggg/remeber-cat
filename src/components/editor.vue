<template>
    <editor-content :editor="editor"></editor-content>
</template>
<script lang="ts" setup>
import { useEditor, EditorContent } from "@tiptap/vue-3";

import StarterKit from "@tiptap/starter-kit";

// import BubbleMenu from "@tiptap/extension-bubble-menu";

import Underline from "@tiptap/extension-underline";

import { FontType } from "../page/create/helper";

import { watch, defineExpose } from "vue";

const props = defineProps(["text", "checked"]);

const editor = useEditor({
    content: props.text,
    extensions: [
        StarterKit,
        Underline,
        // BubbleMenu.configure({
        //     element: document.querySelector(".menu"),
        // }),
    ],
});

const set = (type: FontType, value?: any) => {
    console.log(editor.value, "act", editor.value?.isFocused);
    // if (!editor.value?.isFocused) return;
    switch (type) {
        case FontType.Bold:
            editor.value?.chain().focus().toggleBold()
            // editor.value?.commands.chain().toggleBold();
            break;
        case FontType.Decoration:
            editor.value?.commands.toggleUnderline();
    }
};

// const split = () => {
//     editor.value?.commands.wrapInList("paragraph");
//     console.log(editor, "editor", window.getSelection());
// };

defineExpose({
    set,
});
watch(
    () => props.text,
    (current) => {
        editor.value?.commands.setContent(current);
    }
);
watch(
    () => props.checked,
    () => {
        if (props.checked && !editor.value?.isEditable) {
            editor.value?.setEditable(true);
            editor.value?.commands.focus();
        }
    }
);
</script>
<style lang="less" scoped>
:deep(.tiptap) {
    outline: none;
}
</style>