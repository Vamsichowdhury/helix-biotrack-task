<template>
    <div>
        <h1 class="title">Update Product</h1>
        <v-card class="mx-auto" max-width="500" elevation="21" >
        <div class='container'>
            <div class="tabs">
                <span class="tabA" @click="tabA=true;tabB=false">Info</span>
                <span class="tabB" @click="tabB=true;tabA=false">Pricing</span>
            </div>
            <hr>
        <v-form @submit.prevent="" class="form">
            <div v-if="tabA">
                
                <div v-if="this.$store.state.permissions.editName">
                     <label for="product-name">Product Name</label>
                    <v-text-field id="product-name" type="text" v-model="toBeUpdated.name"></v-text-field>
                </div>

                <div v-if="this.$store.state.permissions.editGender">
                    <label>Select gender: </label>
                    <input type="radio" id="gender-male" name="gender" value="male" v-model="toBeUpdated.gender">
                    <label for="gender-male">Male</label>

                    <input type="radio" id="gender-female" name="gender" value="female" v-model="toBeUpdated.gender">
                    <label for="gender-female">Female</label>
                </div>

            <div class="color" v-if="this.$store.state.permissions.editColor">
                <label for="color">Choose a color:</label>
                    <select name="color" id="color" v-model="toBeUpdated.color">
                        <option value="red">red</option>
                        <option value="black">black</option>
                        <option value="white">white</option>
                        <option value="brown">brown</option>
                    </select>
            </div>
            </div>
            <div v-if="tabB">
                <div v-if="this.$store.state.permissions.editPrice">
                    <label>price</label>
                    <v-text-field type="text" v-model="toBeUpdated.price"></v-text-field>
                </div>
                <div v-if="this.$store.state.permissions.editTax">
                     <label>Tax</label>
                    <v-text-field type="text" v-model="toBeUpdated.tax"></v-text-field>
                </div>
               
            </div>
             <router-link style="text-decoration: none" to="/products">
                <v-btn type="submit" @click="updateProduct()" rounded="pill" color="primary"> Submit Update </v-btn>
             </router-link>

        </v-form>
        </div>
        
        </v-card>
    </div>
</template>

<script lang='ts'>
import { Options,Vue } from 'vue-class-component';
import store from "../store"
import axios from 'axios'
    export default class UpdateProduct extends Vue{
    public name="";
    public gender="";
    public color="";
    public price="";
    public tax="";
    public tabA=true;
    public tabB=false;

//     public updateProduct():void{
//         console.log("add Product",{name:this.pname,gender:this.gender,color:this.color,price:this.price,tax:this.tax})
//         // const res =await axios.post("http://localhost:3000/todos",{name:this.newToDo})
//         store.dispatch("addProduct",{name:this.pname,gender:this.gender,color:this.color,price:this.price,tax:this.tax})
//   } 

    async updateProduct():void{
            
            const productDetails={name:this.toBeUpdated.name,gender:this.toBeUpdated.gender,color:this.toBeUpdated.color,price:this.toBeUpdated.price,tax:this.toBeUpdated.tax}
            console.log(this.$route.params.id)
            console.log(store.state.products)
            const res =await axios.put(`http://localhost:3000/products/${this.$route.params.id}`,productDetails)
            console.log(res.data)
            store.dispatch("updateProduct",res.data)
        }
    public toBeUpdated={}
    mounted():void{
        console.log("in update component",this.$route.params.id)
        const myTarget=JSON.parse(JSON.stringify(store.state.products))
        
        for(let i=0;i<myTarget.length;i++){
            console.log(myTarget[i].id,this.$route.params.id)
            if(myTarget[i].id==this.$route.params.id){
                this.toBeUpdated=myTarget[i]
                break
            }
        }
        console.log("to be updated product",this.toBeUpdated)

    }

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