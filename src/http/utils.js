import Taro from "@tarojs/taro";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/actions/LoginInfo";

export const getCurrentPageUrl = () => {
  let pages = Taro.getCurrentPages();
  let currentPage = pages[pages.length - 1];
  let url = currentPage.route;
  return url;
};

export const pageToLogin = () => {
  let path = getCurrentPageUrl();
  const dispatch = useDispatch();
  dispatch(setToken(""));
  if (!path.includes("login")) {
    Taro.reLaunch({
      url: "/pages/login/index"
    });
  }
};
