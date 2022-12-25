import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { OsTabBar } from "ossaui";
import "./index.scss";

const Index = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const tabsArr = [
    {
      icon: "home",
      selectedIcon: "home-pressed",
      text: t("main:home"),
      path: "/pages/index/index"
    },
    {
      icon: "user",
      selectedIcon: "user-pressed",
      text: t("main:mine"),
      path: "/pages/user/index"
    }
  ];

  const onChange = (item, index) => {
    Taro.switchTab({
      url: item.path
    });
    setCurrent(index);
  };

  return (
    <View>
      <OsTabBar
        isfixedBt
        tabsArr={tabsArr}
        activeTabIdx={current}
        onClick={onChange}
      />
    </View>
  );
};

export default Index;
