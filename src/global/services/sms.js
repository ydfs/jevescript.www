import request from "./../request/axios";
import API from "./../request/api.js";

const smsService = {
  smsCode: ({ phone }) => {
    return request.post(API.smsCode, { phone });
  },
  smsRegister: ({ key, code, phone }) => {
    return request.post(
      API.smsRegister,
      {
        key,
        code,
        phone
      },
      {
        withCredentials: true
      }
    );
  }
};

export default smsService;
