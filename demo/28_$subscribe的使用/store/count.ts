import {defineStore} from "pinia";

export const useCountStore = defineStore("count", {

  actions: {
    increment(value:number) {
      if (this.sum < 10){
        this.sum +=value
      }

    }
  },

  state(){
    return{
      sum:1,
      school:'yinhap',
      address:'红米村'
    }
  },
  getters:{
    bigSum:state => state.sum * 10,
    upperSchool():string{
      return this.school.toUpperCase();
    }
  }
})
