<template>
    <div class="todo-fooder">
        <transition name="demo">
            <div class="box-init-page" v-show="props.itemArr.length==0">Congrat, you have no more tasks to do</div>
        </transition>
        <div class="box-select-bar" v-show="props.itemArr.length!=0">
            <div class="box-sb-left"><span>{{props.count}}</span> <span>item left</span></div>
            <div class="box-sb-right">
                <div class="box-select-item">
                    <div class="box-select-text" :class="{changeBg:data.ToggleItem==item||props.itemArr.length==0,moveBock:data.isShowBg==item}"
                        @click="ToggleEvent(item)" @mouseenter="data.isShowBg=item"
                        @mouseleave="data.isShowBg=''"
                        v-for="(item,index) in ToggleText" :key="index" v-show="props.itemArr.length==1||props.count==0&&props.itemArr.length!=0||props.count==props.itemArr.length||props.itemArr.length-props.count>2?item=='All':true">{{item}}</div>
                </div>
                <div class="box-select-clear" :class="{changeBg:data.ToggleItem=='Clear completed',moveBock:data.isShowBg=='Clear completed'}"
                    @click="ClearData('Clear completed')" v-show="props.count!=props.itemArr.length" @mouseenter="data.isShowBg='Clear completed'"
                    @mouseleave="data.isShowBg=''">
                    Clear completed</div>

            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, defineProps,defineEmits} from 'vue';

const props = defineProps({
    itemArr: Array,
    count:String
})

const ToggleText = ['All', 'Active', 'Completed']

const data = reactive({
    ToggleItem: 'All',
    isShowBg: '',
    
})
const temperText=defineEmits(['temperText','clearTodoslist'])

const ToggleEvent=(txt)=>{
    data.ToggleItem=txt;
    temperText('temperText',txt);
}

const ClearData=(txt)=>{
    data.ToggleItem=txt;
    temperText('clearTodoslist',txt);
}








</script>
<style scoped>
.todo-fooder {
    margin-top: 30px;
}

.box-init-page {
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.box-select-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 24px;
}

.box-sb-left {
    width: 76px;
    font-size: 12px;
    color: #494a4b;

}

.box-sb-right {
    flex: 1;
    display: flex;
    justify-content:flex-end;
    align-items: center;
}

.box-select-item {
    display: flex;
    align-items: center;
}

.box-select-text {
    font-size: 12px;
    color: #494a4b;
    margin: 0px 3px;
    padding: 6px;
    border-radius: 3px;
    cursor: pointer;
}

.changeBg {
    background-color: #fe7345;
    color: #fff !important;
}

.moveBock {
    color:#fff !important;
    background-color:#fe7345;
    border-radius: 5px;
}

.box-select-clear {
    font-size: 12px;
    color: #494a4b;
    padding: 6px;
    border-radius: 3px;
    cursor: pointer;
}

.demo-enter {
    transform: scaleX(0.7);
}

.demo-enter-active {
    transition: all .2s linear;
}

.demo-enter-to {
    transform: scaleX(1);
}
</style>