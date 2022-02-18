<template>
    <div>
        <h1 class="title">Product form</h1>
        <v-card class="mx-auto" max-width="500" elevation="21" >
        <div class='container'>
            <div class="tabs">
                <span class="tabA" @click="tabA=true;tabB=false">Info</span>
                <span class="tabB" @click="tabB=true;tabA=false">Pricing</span>
            </div>
            <hr>
        <v-form @submit.prevent="addProduct" class="form">
            <div v-if="tabA">

                <label for="product-name">Product Name</label>
                <v-text-field id="product-name" type="text" v-model="pname"></v-text-field>

                <div>
                    <label>Select gender: </label>
                    <input type="radio" id="gender-male" name="gender" value="male" v-model="gender">
                    <label for="gender-male">Male</label>

                    <input type="radio" id="gender-female" name="gender" value="female" v-model="gender">
                    <label for="gender-female">Female</label>
                </div>

            <div class="color">
                <label for="color">Choose a color:</label>
                    <select name="color" id="color" v-model="color">
                        <option value="red">red</option>
                        <option value="black">black</option>
                        <option value="white">white</option>
                        <option value="brown">brown</option>
                    </select>
            </div>
            </div>
            <div v-if="tabB">
                <label>price</label>
                <v-text-field type="text" v-model="price"></v-text-field>
                <label>Tax</label>
                <v-text-field type="text" v-model="tax"></v-text-field>
            </div>
             <router-link style="text-decoration: none" to="/">
                <v-btn type="submit" @click="addProduct" rounded="pill" color="primary"> submit </v-btn>
             </router-link>

        </v-form>
        </div>
        
        </v-card>
    </div>
</template>

<script lang='ts'>
import { Options,Vue } from 'vue-class-component';
import store from "../store"
import axios from "axios"

    export default class ProductForm extends Vue{
    public pname="";
    public gender="";
    public color="";
    public price="";
    public tax="";
    public tabA=true;
    public tabB=false;

    public async addProduct():void{
        console.log("in product input")
        const productDetails={name:this.pname,gender:this.gender,color:this.color,price:this.price,tax:this.tax}
        console.log(productDetails)
        const res =await axios.post("http://localhost:3000/products",productDetails)
        console.log("in product input",res.data)
        store.dispatch("addProduct",res.data)
        // this.newToDo=""
  }

    // public addProduct():void{
    //     console.log("add Product",{name:this.pname,gender:this.gender,color:this.color,price:this.price,tax:this.tax})
    //     const data={name:this.pname,gender:this.gender,color:this.color,price:this.price,tax:this.tax}

    //     store.dispatch("addProduct",data)
    //}  

}
</script>

<style scoped>
.container{
    padding: 20px;
}
.tabs{
    display:flex;
    justify-content:space-around;
    margin-bottom: 20px;
}
.title{
    text-align: center;
}
.form{
    margin-top: 20px;
}
#gender-male{
    margin-left: 10px;
}
#gender-female{
    margin-left: 10px;
}
.color{
    margin-top: 20px;
    margin-bottom: 40px;
}
.tabA:hover{
    cursor: pointer;
    color:aqua
}
.tabB:hover{
    cursor: pointer;
    color:aqua

}

</style>