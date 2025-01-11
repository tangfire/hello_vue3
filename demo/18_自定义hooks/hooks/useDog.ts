import {reactive,onMounted} from 'vue'
import axios from 'axios'

export default function(){
  const dogList = reactive<string[]>([])

  // 方法
  async function getDog(){
    try {
      // 发请求
      const {data} = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      // 维护数据
      dogList.push(data.message)
    } catch (error) {
      // 处理错误
      alert(error)
    }
  }

  // 挂载钩子
  onMounted(()=>{
    getDog()
  })

  //向外部暴露数据
  return {dogList,getDog}
}
