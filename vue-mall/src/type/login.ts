// 参照教程 这里写对logindata的封装
export interface LoginForm {
    username: string
    pass: string
}

export class LoginData {
    ruleForm: LoginForm={
        username: "",
        pass: ""
    }
}