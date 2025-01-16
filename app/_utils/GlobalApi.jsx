const { default: axios } = require("axios");

const axiosClient = axios.create({
  baseURL: "http://192.168.29.114:1337/api",
});

const getCategory = () => axiosClient.get("/categories?populate=*");

const getSliders = () =>
  axiosClient.get("/sliders?populate=*").then((res) => {
    console.log("sliders", res.data.data);
    return res.data.data;
  });

const getCategoryList = () =>
  axiosClient.get("/categories?populate=*").then((res) => {
    console.log("CategoryList--->Resp", res.data.data);
    return res.data.data;
  });

const getAllProducts = () =>
  axiosClient.get("products?populate=*").then((res) => {
    console.log("AllProducts--->Resp", res.data.data);
    return res.data.data;
  });

const getProductsByCategory = (category) =>
  axiosClient
    .get("products?filters[categories][name][$in]=" + category + "&populate=*")
    .then((res) => {
      return res.data.data;
    });

const registerUser = (userName, email, password) =>
  axiosClient.post("/auth/local/register", {
    email: email,
    password: password, 
    username: userName,
  });

export default {
  getCategory,
  getSliders,
  getCategoryList,
  getAllProducts,
  getProductsByCategory,
  registerUser,
};
