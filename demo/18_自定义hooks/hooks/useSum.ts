import {ref,onMounted,computed} from 'vue'

export default function(){
  const sum = ref(0)

  const bigSum = computed(() => {
    return sum.value * 10
  })


  const increment = ()=>{
    sum.value += 1
  }
  const decrement = ()=>{
    sum.value -= 1
  }
  onMounted(()=>{
    increment()
  })

  //向外部暴露数据
  return {sum,increment,decrement,bigSum}
}
