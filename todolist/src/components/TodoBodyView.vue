<template>
    <div class="todo-body">
        <ul class="box-add-data" v-if="ArrData.length!=0">
            <li v-for="item in filterItem" :key="item.id">
                <div class="box-add-left"><span><input type="checkbox" :checked="item.completed" @change="changeCurrentState(item.id)"></span><span :class="{wordColor:item.completed}">{{item.text}}</span>
                </div>
                <div class="box-delet-btn" :class="{judgeColor:item.completed}" @click="deleteEvent(item.id)">x</div>
                <transition name="move">
                    <div class="clk-layer" v-show="item.completed"></div>
                </transition>
            </li>
        </ul>
    </div>
</template>
<script setup>
import {reactive,defineEmits, toRefs,computed} from 'vue'
const props = defineProps({
    ArrData: Array,
    text:String,
})

const {ArrData}=toRefs(props)

const data=reactive({
    isShow:''
})
const my_emits=defineEmits(['deleteItem','CurrentState']);
const deleteEvent=(val)=>{
    my_emits('deleteItem',val);
};
const changeCurrentState=(id)=>{
    my_emits('CurrentState',id);
}
const filterItem=computed(()=>{
    if(props.text=='Active'){
        return props.ArrData.filter(it=>{
            return !it.completed;
        })
    }else{
        if(props.text=='Completed'){
            return props.ArrData.filter(it=>{
            return it.completed;
        })
        }else{
            return props.ArrData
        }
    }
})
</script>

<style scoped>
.box-add-data{
    margin-bottom: 70px;
}
.box-add-data>li {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 24px;
    padding: 8px 10px 8px 0px;
    z-index: 1;
}

.box-add-left>span:nth-of-type(1) {
    margin-right: 5px;
}

.box-delet-btn {
    font-weight: bolder;
}

.clk-layer {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    padding: 0px 5px;
    background: #fe7345;
    border-radius: 5px;
    z-index: -1;
}
.wordColor{
    color: #fff;
    text-decoration: line-through;
}

.judgeColor{
    color:#fff;
}

.move-enter {
    transform: rotateX(45deg);
}

.move-enter-active {
    transition: all .5s ease-in-out;
}

.move-enter-to {
    transform: rotateX(-45deg);
}
</style>