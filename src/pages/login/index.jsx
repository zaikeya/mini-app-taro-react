import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import { Form, View } from "@tarojs/components";
import { OsInput, OsButton, OsToast } from "ossaui";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../redux/actions/LoginInfo";
import "./index.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const user = useSelector(state => state.LoginInfo.user);
  const token = useSelector(state => state.LoginInfo.token);
  const dispatch = useDispatch();
  const formSubmit = value => {
    if (username === "" || password === "") {
      setShow(true);
      return;
    }
    console.log("=======>value", value);
    dispatch(setUser(username));
    dispatch(setToken(password));
    Taro.redirectTo({
      url: "/pages/index/index"
    });
  };

  useEffect(() => {
    if (user && token) {
      Taro.redirectTo({
        url: "/pages/index/index"
      });
    }
  }, []);

  return (
    <View>
      <View className="login-from">
        <Form onSubmit={formSubmit}>
          <View className="login-input">
            <OsInput
              name="username"
              placeholder="请输入账户名称"
              value={username}
              onChange={v => setUsername(v)}
            ></OsInput>

            <OsInput
              name="password"
              type="password"
              value={password}
              placeholder="请输入密码"
              onChange={v => setPassword(v)}
            ></OsInput>
          </View>
          <View className="login-button">
            <OsButton type="primary" shape="round" formType="submit">
              登录
            </OsButton>
          </View>
        </Form>
        <OsToast
          isShow={show}
          text="用户名或密码不能为空"
          onClose={() => setShow(false)}
        ></OsToast>
      </View>
    </View>
  );
};

export default Login;
