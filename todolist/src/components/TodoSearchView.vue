<template>
    <div class="todo-search">
        <div class="box-forms-title">~ Today I need to ~</div>
        <div class="box-form-field">
            <input type="text" id="box-field-search" placeholder="Add new todo..." ref="field">
            <div class="box-field-submit" @mousedown="mouseDownEvent" @mouseup="mouseUpEvent"
                :style="{transform:data.changeTransform}" :class="{af:data.judge}">Submit</div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, defineEmits, defineProps, watch } from "vue"
const field = ref();
const todo_Data = defineEmits(['sendData'])
const props = defineProps({
    foo: Boolean,

})
const mouseDownEvent = () => {
    data.judge = false;
    data.changeTransform = 'none';
    let currentValue = field._rawValue.value
    if (currentValue) {
        let cData = { text: currentValue, id: new Date().getTime(), completed: false };
        field._rawValue.value = '';
        todo_Data('sendData', cData)
    }

}

const mouseUpEvent = () => {
    data.judge = true;
}

const data = reactive({
    judge: true,
    changeTransform: 'rotate(5deg)',
}
)
watch(props, (newVule) => {
    if (newVule.foo) {
        data.judge=true;
        data.changeTransform = 'rotate(5deg)'
    }
})

</script>

<style scoped>
.todo-search {
    margin-top: 25px;
}

.box-forms-title {
    height: 33px;
    line-height: 33px;
    text-align: center;
    font-weight: bolder;
    color: #494a4b;
    margin-bottom: 18px;
}

.box-form-field {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    padding: 0px 10px;
}

#box-field-search {
    flex: 1;
    line-height: 20px;
    outline: none;
    border: none;
    background: none;
    border-bottom: 3px dashed #fe7345;
    margin-right: 13px;
}

#box-field-search::placeholder {
    color: #ccc;
    font-size: 16px;
}

.box-field-submit {
    position: relative;
    font-size: 15px;
    padding: 5px 8px;
    border: 2px solid rgba(26, 26, 26, 0.767);
    border-radius: 6px;
    background: #fff;
    z-index: 2;
    transform-origin: bottom right;
    cursor: pointer;
}

.bfs {
    transform: rotate(5deg) !important;
}

.box-field-submit.af::after {
    position: absolute;
    left: 0px;
    bottom: -4px;
    display: block;
    content: '';
    width: 100%;
    height: 3px;
    border-radius: 0px 0px 6px 6px;
    background-color: #fe7345;
    background-image: url(../assets/image/下载.png);
    z-index: 1;

}
</style>