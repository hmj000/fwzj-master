import { defineStore} from "pinia";

export const CityStore = defineStore("city",{
    state:()=>{
        return {
            province:String,
            city:String,
            county:String,
            address:Array
        }
    },
    persist:{
        paths:["province","city","county","address"]
    }
})