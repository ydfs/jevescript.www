<template>
  <div class="whole">
    <div class="body">
      <div class="login-button">
        <button @click="loginWay = false">
          微信扫码登录
        </button>
        <button @click="loginWay = true">
          手机号登录
        </button>
      </div>
      <div v-show="loginWay">
        <el-radio-group v-model="labelPosition" size="small"> </el-radio-group>
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign"
        >
          <el-form-item
            label="手机号码"
            style="padding: 0px"
            prop="phone"
            :rules="[{ required: true, message: '手机号不能为空' }]"
          >
            <el-input
              v-model="formLabelAlign.phone"
              maxlength="11"
              placeholder="请输入手机号码"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="验证码"
            prop="code"
            :rules="[{ required: true, message: '验证码不能为空' }]"
          >
            <div class="gain">
              <el-input
                v-model="formLabelAlign.code"
                maxlength="6"
                placeholder="请输入验证码"
              >
              </el-input>
              <el-button type="text" @click="getCode">获取验证码</el-button>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button
              style="font-size: 16px; width: 370px"
              type="primary"
              @click="getReg"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div class="scan" v-show="!loginWay">
        <img src="/connect/qrcode/021Alxko1IiMFa1u" />
        <p>请打开微信使用【扫一扫】登录</p>
      </div>
    </div>
  </div>
</template>

<script>
import smsService from "@/global/services/sms.js";
export default {
  data() {
    return {
      loginWay: true,
      labelPosition: "top",
      key: "",
      formLabelAlign: {
        type: "",
        code: "",
        phone: ""
      }
    };
  },
  methods: {
    getCode() {
      smsService.smsCode({ phone: this.formLabelAlign.phone }).then(res => {
        this.key = res.data.key;
        console.log(res);
      });
    },
    getReg() {
      smsService
        .smsRegister({
          key: this.key,
          code: this.formLabelAlign.code,
          phone: this.formLabelAlign.phone
        })
        .then(req => {
          console.log(req);
          this.$router.push({ name: "Root" });
        });
    }
  }
};
</script>

<style lang="less">
.whole {
  height: 100%;
  display: flex;
  justify-content: center;
  background: #f2f2f2;
  .body {
    width: 500px;
    height: 400px;
    margin-top: 150px;
    background: #ffffff;
    padding: 65px;
    .login-button {
      display: flex;
      justify-content: space-around;
      button {
        border: none;
        background-color: #ffff;
        outline: none;
        cursor: pointer;
        font-size: 16px;
      }
    }
    .el-form-item__label {
      padding: 0 0 0 0;
      height: 35px;
    }
    .gain {
      display: flex;
      .el-button {
        position: absolute;
        right: 10px;
      }
    }
    .scan {
      display: grid;
      justify-content: center;
      margin-top: 30px;
    }
  }
}
</style>
