
// 状态管理，这里写公共数据
import {ref, reactive} from 'vue'


const store = {
    // 定义状态
    state:reactive({
        message: "hello world",
        // 将后端要传送的数据固定写在这里接收
        datas:{}
    }),
    updateMsg(){
        this.state.message = "nihao"
    },
    // 获取后端数据
    updateDatas(value){
        this.state.datas = value
        // 这里是可以获取到对应的值
        console.log(this.state.datas);
    }

}
export default store