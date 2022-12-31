import Taro from "@tarojs/taro";
import getBaseUrl from "./getBaseUrl";
import interceptors from "./interceptors";
import configureStore from "../redux/store/store";

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem));

class httpRequest {
  baseOptions(params, method = "GET") {
    let { url, data, param } = params;
    const { store } = configureStore;
    const token = store?.LoginInfo?.token || "";
    console.log("=======>>>>>>>request", token);
    const BASE_URL = getBaseUrl(url);
    // let contentType = "application/x-www-form-urlencoded";
    let contentType = "application/json;charset=UTF-8";
    contentType = params.contentType || contentType;
    const option = {
      url: BASE_URL + url, //地址
      data: data, //传参
      method: method, //请求方式
      timeout: 50000, // 超时时间
      header: {
        //请求头
        "content-type": contentType,
        Authorization: token
      }
    };
    return Taro.request(option);
  }

  get(url, data = "", param) {
    let option = { url, data, param };
    return this.baseOptions(option);
  }

  post(url, data, param, contentType) {
    let params = { url, data, param, contentType };
    return this.baseOptions(params, "POST");
  }

  put(url, data = "") {
    let option = { url, data };
    return this.baseOptions(option, "PUT");
  }

  delete(url, data = "") {
    let option = { url, data };
    return this.baseOptions(option, "DELETE");
  }
}

export default new httpRequest();
