const API_PREFIX = "https://api" + process.env.VUE_APP_DOMAIN;
export default {
  smsCode: `${API_PREFIX}/api/web/sms/code`,
  smsRegister: `${API_PREFIX}/api/web/sms/register`
};
