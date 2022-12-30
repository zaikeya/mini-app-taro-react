import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { OsTabBar } from "ossaui";
import Home from "./components/home";
import User from "./components/user";
import "./index.scss";

const Index = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const tabsArr = [
    {
      icon: "home",
      selectedIcon: "home-pressed",
      text: t("main:home"),
      path: "/pages/home/index"
    },
    {
      icon: "user",
      selectedIcon: "user-pressed",
      text: t("main:mine"),
      path: "/pages/user/index"
    }
  ];

  const onChange = (item, index) => {
    setCurrent(index);
  };

  return (
    <View>
      {current === 0 ? <Home /> : <User />}
      <OsTabBar
        className="index-tabbar"
        isfixedBt
        tabsArr={tabsArr}
        activeTabIdx={current}
        onClick={onChange}
      />
    </View>
  );
};

export default Index;
