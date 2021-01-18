<template>
  <div class="navbar-container">
    Navbar

    <el-button type="primary" size="mini" @click="handleOut">退出</el-button>
  </div>
</template>
<script>
import { removeToken } from "@/utils/auth";
export default {
  name: "Navbar",
  methods: {
    handleOut() {
      // 退出逻辑应该提取出来 复用
      removeToken(); // 清除token
      //  清除保存的权限参数（如果有的话）
      this.$router.push({ name: "Login" });
    }
  }
};
</script>
<style lang="scss" scoped>
.navbar-container {
  width: 100%;
  height: 50px;
  background: pink;
}
</style>
