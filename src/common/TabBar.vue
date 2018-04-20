<template>
<div class="footer">
    <router-link to="/home">
    <span>首页</span>
    </router-link>
        <router-link to="/discount">
    <span>特惠</span>
    </router-link>
        <router-link to="/about">
    <span>关于</span>
    </router-link>
</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: {}
};
</script>
<style scoped lang='less'>
.footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid #ccc;
  a {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
}
</style>