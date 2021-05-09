<template>
  <div class="page-layout">
    <Header />
    <router-view class="page-body" />
    <Footer />
  </div>
</template>

<script>
import Header from "./BasicLayoutHeader.vue";
import Footer from "./BasicLayoutFooter.vue";
export default {
  name: "TheLayout",
  data() {
    return {};
  },
  created() {},
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="less" scoped>
.page-layout {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;
}
.page-body {
  flex: 1;
}
</style>
