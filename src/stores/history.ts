import { defineStore} from "pinia";

interface data{
    history:String[]
}

export const HistoryStore = defineStore("history",{
    state:()=>{
        return <data>{
            history:[]
        }
    },
    actions:{
        unshift(item:string){
            let index = this.history.indexOf(item)
            if ( index > -1){
                this.history.splice(index,1)
            }
            this.history.unshift(item)
        },
        splice(index:number){
            this.history.splice(index,1)
        },
        clear(){
            this.history = []
        }
    },
    persist:{
        paths:["history"]
    }
})