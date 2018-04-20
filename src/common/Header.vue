<template>
<div class="header">
<slot></slot>
</div>
</template>
<script>
export default {
   data(){
       return {}
   },
   methods: {},
   computed: {},
   components: {}
}
</script>
<style scoped lang='less'>
.header{
    height: 50px;
    background: #fff;
    position: fixed;
    left: 0px;
    top:0px;
    width: 100%;
    border-bottom: 1px solid #ccc;
    h2{
        line-height: 2;
    }
}
</style>