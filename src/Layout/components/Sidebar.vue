<template>
  <div class="sidebar-container">
    <div class="router">
      <div class="item" @click="handleRouterToGo(item.path)" v-for="item in routerList" :key="item.path">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  data() {
    return {
      routerList: [
        { path: "PageA", name: "页面A" },
        { path: "PageB", name: "页面B" }
      ]
    };
  },
  methods: {
    handleRouterToGo(path) {
      this.$router.push({ name: path });
    }
  }
};
</script>
<style lang="scss" scoped>
.sidebar-container {
  width: 180px;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  background: blue;
}
.item {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  text-align: center;
  background: #ffffff;
  margin: 10px 0;
  cursor: pointer;
}
</style>
