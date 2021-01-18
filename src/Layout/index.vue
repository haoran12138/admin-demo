<template>
  <div class="app-wrapper">
    <Sidebar />
    <div class="main-container">
      <Navber />
      <AppMain />
    </div>
  </div>
</template>
<script>
import Navber from "./components/Navbar";
import AppMain from "./components/AppMain";
import Sidebar from "./components/Sidebar";
export default {
  name: "Layout",
  components: { Navber, AppMain, Sidebar }
};
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.main-container {
  min-height: 100%;
  margin-left: 180px;
  position: relative;
}
</style>
