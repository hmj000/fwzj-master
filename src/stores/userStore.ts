import { defineStore} from "pinia";

export const UserStore = defineStore("user",{
    state:()=>{
        return {
            id:'',
            name:'',
            email:'',
            tel:'',
            avatar:'',
            token:'',
            loginOrNot:true
        }
    },
    actions:{
      update(id:string,name:string,email:string,tel:string,avatar:string){
          this.id = id
          this.name = name
          this.email = email
          this.tel = tel
          this.avatar = avatar
          this.loginOrNot = true
      }
    },
    persist:{
        paths:["id","name","email","avatar","token","tel"]
    }
})