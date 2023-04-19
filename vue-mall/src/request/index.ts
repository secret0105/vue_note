// 封装axios
import axios from 'axios'

// import type { AxiosResponse } from 'axios'

// 创建axios的实例

const service = axios.create({
    baseURL:"http://127.0.0.1:9099",
    timeout:5000,
    // 这里设置了请求头，后端也要使用相应的接收参数的方法
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
    
})

// 拦截器  参考官网
// 请求拦截
axios.interceptors.request.use((config) =>{
    // 在发送请求之前做些什么
    // 获取header中的token
    config.headers = config.headers || {}
    if (localStorage.getItem("token")){
        config.headers.token = localStorage.getItem("token") || ""
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

//   响应拦截
// 
axios.interceptors.response.use((res) =>{
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // 判断状态码
    const code:number = res.data.code
    if (code != 200){
        return Promise.reject(res.data)
    }
    return res.data
},(err) =>{
    console.log(err);
}
);
export default service