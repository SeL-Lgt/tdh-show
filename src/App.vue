<template>
  <div id="app">
    <el-container>
      <el-header height="auto">
        <Header class="pd" />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer height="auto">
        <Footer class="pd" />
      </el-footer>
    </el-container>
    <Tips />
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Tips from "@/components/layout/Tips";
export default {
  name: "app",
  components: {
    Header,
    Footer,
    Tips,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer,
.el-main {
  padding: 0;
}
.pd {
  padding: 0 5vw;
}
</style>
