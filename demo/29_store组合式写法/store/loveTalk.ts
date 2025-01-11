import {defineStore} from "pinia";
import axios from "axios";
import {nanoid} from "nanoid";

// 选项式
// export const useTalkStore = defineStore('talk',{
//
//   actions: {
//     async getATalk() {
//       // 下面这行写法:连续解构赋值 + 重命名
//       const {data: {content: title}} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
//       const obj = {
//         id: nanoid(),
//         title
//       }
//       this.talkList.unshift(obj);
//     }
//   },
//
//   state(){
//     return {
//       talkList:JSON.parse(localStorage.getItem("talkList") as string )|| [],
//     }
//   }
// })

// 组合式
import {reactive} from "vue";

export const useTalkStore = defineStore('talk',()=>{
  // talkList就是state
  const talkList = reactive(JSON.parse(localStorage.getItem("talkList") as string )|| [])


  // getATalk函数相当于action
      async function getATalk() {
      // 下面这行写法:连续解构赋值 + 重命名
      const {data: {content: title}} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
      const obj = {
        id: nanoid(),
        title
      }
      talkList.unshift(obj);
    }

  return {talkList,getATalk}
})
