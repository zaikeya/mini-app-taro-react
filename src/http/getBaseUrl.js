const getBaseUrl = () => {
  let baseUrl = "https://...";
  //如果是本地开发
  if (process.env.NODE_ENV === "development") {
    baseUrl = "http://...";
  }
  return baseUrl;
};

export default getBaseUrl;
