<script setup>
import TodoHeaderView from './components/TodoHeaderView.vue'
import TodoSearchView from './components/TodoSearchView.vue'
import TodoBodyView from './components/TodoBodyView.vue'
import TodoFooderView from './components/TodoFooderView.vue'
</script>

<template>
  <div class="box" @mouseup="mouseupEvent" @mousedown="mouseDownEvent">
    <div class="box-container">
      <TodoHeaderView />
      <TodoSearchView @sendData="sendData" :foo="foo" />
      <TodoBodyView :ArrData="ArrData" @deleteItem="deleteItem" @CurrentState="CurrentState" :text="textContent" />
      <TodoFooderView :itemArr="ArrData" @temperText="temperText" @clearTodoslist="clearTodoslist"
      :count="count"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ArrData: [],
      foo: false,
      textContent:'All',
      count:0
    }
  },
  methods: {
    sendData(val) {
      this.ArrData.push(val);
      this.countEvent();
    },
    mouseupEvent() {
      this.foo = true;
    },
    mouseDownEvent(){
      this.foo=false;
    },
    deleteItem(id) {
      this.ArrData = this.ArrData.filter(it => {
        return it.id != id;
      })
      console.log(this.ArrData)
    },
    temperText(txt){
      this.textContent=txt;
      this.countEvent();
    },
    clearTodoslist(txt){
      if(txt){
        this.ArrData=this.ArrData.filter(it=>{
          return !it.completed;
        })
      }
      this.countEvent();
    },
    CurrentState(id){
      this.ArrData=this.ArrData.map(it=>{
        if(it.id==id){
          return {
            ...it,
            completed:!it.completed
          }
        }else{
          return it;
        }
      })
      this.countEvent();
    },

    countEvent(){
      let ct=0;
      this.ArrData.forEach(it=>{
        if(!it.completed){
          ct=ct+1;
        }
      })
      this.count=ct;
    }

  },

}




</script>
<style scoped>
* {
  padding: 0px;
  margin: 0px;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, #ffb2bb 0%, #ffbbad 40%, #ffc0a4 60%)
}

.box-container {
  width: 360px;
  padding: 30px 40px 20px;
  background: #f2f2f2;
  border-radius: 10px;
}
</style>
