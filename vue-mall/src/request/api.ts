// 这里写login登录请求

import service from ".";

// 设置请求数据类型
interface LoginData {
    username: string,
    password: string
}

export function login(data:LoginData){
    return service({
        url: "/login",
        method: "post",
        data
    })
}
