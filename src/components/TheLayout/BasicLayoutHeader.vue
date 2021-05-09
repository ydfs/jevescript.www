<template>
  <div class="page-header">
    <div class="page-header-cell container-w1200">
      <div class="page-header-hd">
        <router-link :to="{ name: 'Home' }">
          <img
            class="page-header-logo"
            src="~@/assets/images/common/aitschool_logo.png"
            alt="aitschool"
          />
        </router-link>
      </div>
      <div class="page-header-bd">
        <router-link class="page-header-link" :to="{ name: 'Home' }"
          >首页</router-link
        >
      </div>
      <div class="page-header-ft">
        <span class="login-btn">注册 | 登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicLayoutHeader",
  data() {
    return {};
  },
  created() {},
  components: {}
};
</script>

<style lang="less">
.page-header {
  position: relative;
  overflow: hidden;
  background: #fff;
  height: 60px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);

  .page-header-cell {
    display: flex;
    height: 100%;
  }

  .page-header-logo {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    width: 110px;
    height: 20px;
  }

  .page-header-hd {
    margin-left: 10px;
  }

  .page-header-bd {
    flex: 1;
    padding-left: 20px;
    line-height: 60px;
    font-size: 16px;
    font-weight: 500;
    color: #999;
    .page-header-link {
      margin: 20px;
      transition: all 0.2s;
      &:hover {
        color: #000;
      }
    }
  }

  .page-header-ft {
    .login-btn {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
