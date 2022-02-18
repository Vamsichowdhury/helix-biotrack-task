<template>
    <div>
        <v-card  id="v-card" class="mx-auto" max-width="400" elevation=21 >
            <form @submit.prevent="submitUpdatedPermissions">
                <v-container >
            <v-switch hide-details color="success"  @click="this.updatedPermissions('products')" v-model="editMainProduct" :label="`Products`"></v-switch>
            <div class="productEditFeaturesContainer">
                
                <v-switch hide-details color="success"  @click="this.updatedPermissions('editProduct')"  v-model="editProduct" :label="`Edit Product`"></v-switch>
                <div class="productEditFeatures">
                     <v-switch hide-details color="success"  @click="this.updatedPermissions('name')" v-model="editName" :label="`Name`"></v-switch>
                    <v-switch hide-details color="success"  @click="this.updatedPermissions('gender')"  v-model="editGender" :label="`Gender`"></v-switch>
                    <v-switch hide-details color="success"  @click="this.updatedPermissions('color')"  v-model="editColor" :label="`color`"></v-switch>
                    <v-switch hide-details color="success"  @click="this.updatedPermissions('price')"  v-model="editPrice" :label="`Price`"></v-switch>
                    <v-switch hide-details color="success"  @click="this.updatedPermissions('tax')"  v-model="editTax" :label="`Tax`"></v-switch>
                </div>
               
            </div>
            <v-switch hide-details color="success" @click="this.updatedPermissions('addProduct')"  v-model="editAddProduct" :label="`Add Product`"></v-switch>
            <v-switch hide-details color="success" @click="this.updatedPermissions('deleteProduct')"  v-model="editDeleteProduct" :label="`Delete Product`"></v-switch>
        </v-container>
            <v-btn class="submit" type="submit" rounded="pill" color="primary">submit</v-btn>

            </form>
        
        </v-card>
    </div>
</template>

<script lang='ts'>
import {Vue } from 'vue-class-component';
import store from "../store"
export default class Permissions extends Vue{
    public editMainProduct=store.state.permissions.editMainProduct
    public editProduct=store.state.permissions.editProduct
    public editName=store.state.permissions.editName
    public editGender=store.state.permissions.editGender
    public editColor=store.state.permissions.editColor
    public editPrice=store.state.permissions.editPrice
    public editTax=store.state.permissions.editTax
    public editAddProduct=store.state.permissions.editAddProduct
    public editDeleteProduct=store.state.permissions.editDeleteProduct

    public tobeSendData={}
   updatedPermissions(value:string):void{
       const data={
           editMainProduct:value==='products'?!this.editMainProduct:this.editMainProduct,
           editProduct:value==='editProduct'?!this.editProduct:this.editProduct,
           editName:value==='name'?!this.editName:this.editName,
           editGender:value==='gender'?!this.editGender:this.editGender,
           editColor:value==='color'?!this.editColor:this.editColor,
           editPrice:value==='price'?!this.editPrice:this.editPrice,
           editTax:value==='tax'?!this.editTax:this.editTax,
           editAddProduct:value==='addProduct'?!this.editAddProduct:this.editAddProduct,
           editDeleteProduct:value==='deleteProduct'?!this.editDeleteProduct:this.editDeleteProduct
       }
       this.tobeSendData=data
   }
   public submitUpdatedPermissions():void{
       console.log("in submitUpdatedPermissions",this.tobeSendData)
       store.dispatch("updatedPermissions",this.tobeSendData)
   }
    
}

</script>

<style scoped>
.productEditFeaturesContainer{
    padding-left: 60px;
}
.productEditFeatures{
    padding-left: 60px;
}
#v-card{
    margin-top: 20px;
}
.submit{
    margin-bottom: 30px;
    margin-left: 150px;
}
</style>