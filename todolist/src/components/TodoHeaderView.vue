<template>
    <div class="todo-header">
        <div class="box-header-img"><img src="../assets/image/note.svg" class="auto-img">
        </div>
        <div class="box-header-title">To-Do List</div>
    </div>
</template>

<style scoped>
.todo-header{
    display: flex;
    justify-content: center;
    align-items: center;
    height:88px;
}
.box-header-img{
    width:88px;
    height:88px;
}

.auto-img{
    display:block;
    width:100%;
}
.box-header-title{
    margin-left: 10px;
    padding:13px 14px;
    background:#fe7345;
    transform: rotate(2deg);
    border-radius: 4px 3px 16px 6px;
    color:#f2f2f2;
}
</style>