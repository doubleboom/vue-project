<template>
<div>
<Header><h2>关于</h2></Header>
<div class="content">
    <div>关于</div>
</div>
<TabBar></TabBar>
</div>
</template>
<script>
import Header from '@/common/Header';
import TabBar from '@/common/TabBar';
export default {
   data(){
       return {}
   },
   methods: {},
   computed: {},
   components: {Header,TabBar}
}
</script>
<style scoped>
.content{
    position: absolute;
    top:50px;
    bottom:50px;
    background: dodgerblue;
}
</style>