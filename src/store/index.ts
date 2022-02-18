import { createStore } from 'vuex'

export interface State{
  products:[
    {
      name:string,
      gender:string,
      color:string,
      price:string,
      tax:string,
      id:string
    }
  ],
  permissions:{
    editMainProduct:boolean,
    editProduct:boolean,
    editName:boolean,
    editGender:boolean,
    editColor:boolean,
    editPrice:boolean,
    ediTax:boolean
  },
  addToCart:{
    name:string,
    quantity:number,
    totalPrice:number,
    tax:number
  }
}

export default createStore<State>({
  state: {
    products:[{name:"product1",gender:"male",color:"red",price:"100",tax:"10",id:"0"}],
    permissions:{
      editMainProduct:true,
      editProduct:true,
      editName:true,
      editGender:true,
      editColor:true,
      editPrice:true,
      editTax:true,
      editAddProduct:true,
      editDeleteProduct:true,
    },
    addToCart:[]
  },
  getters:{
      cartProductTotalPrice(state){
        return state.addToCart.reduce((prevTotal,product)=>product.totalPrice+prevTotal,0)
      },
      cartProductTotalTax(state){
        return state.addToCart.reduce((prevTotal,product)=>product.tax+prevTotal,0)
      }
  },
  mutations: {
    ADD_PRODUCT(state,details){
      state.products.push(details)
      console.log(state.products)
    },
    
    DELETE_PRODUCT(state,id:string){
      const myTarget=JSON.parse(JSON.stringify(state.products))
      const temp=myTarget.filter((item:any)=>item.id!==id)
      const res:any={}
      for(let i=0;i<temp.length;i++){
          res[i]=temp[i]
      }
      state.products=res
    },
    UPDATE_PRODUCT(state,details){
      state.products.map((pds,index)=>{
        if(pds["id"]==details.id){
          state.products[index]=details
        }
      })
    },
    UPDATED_PERMISSIONS(state,updatedData){
      state.permissions=updatedData
      console.log(state.permissions)
      console.log(state.products)
    },
    ADDTO_CART(state,data){
      state.addToCart.push(data)
    }
  },
  actions: {
    addProduct({commit},details){
      commit("ADD_PRODUCT",details)
    },
    deleteProduct({commit},id:string):void{
      commit("DELETE_PRODUCT",id)
    },
    updateProduct({commit},details):void{
      commit("UPDATE_PRODUCT",details)
    },
    updatedPermissions({commit},updatedData):void{
      commit("UPDATED_PERMISSIONS",updatedData)
    },
    addToCart({commit},data):void{
      commit("ADDTO_CART",data)
    }
  },
 
})
