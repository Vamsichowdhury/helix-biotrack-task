<template>
    <div>
        <div class="header">
            <v-card class="mx-auto" max-width="800" >

                <h1 class="title">Products List</h1>
                <div id="search">
                    <v-text-field id="product-search" v-model="searchQuery" type="text" placeholder="search"></v-text-field>
                    <v-btn class="searchBtn" @click="searchResults" rounded="pill" color="primary">search</v-btn>
                </div>
                
                <router-link style="text-decoration: none" to="/product-form">
                    <v-btn v-if="this.$store.state.permissions.editAddProduct" class="add-p-btn" rounded="pill" color="primary">Add Product</v-btn>
                </router-link>
            </v-card>
        </div>

        <div class="product-container">
            <v-card class="mx-auto" max-width="800" elevation="21" >
            <v-table theme="dark">
                <thead >
                    <tr>
                        <th class="text-center">Name</th>
                        <th class="text-center">gender</th>
                        <th class="text-center">color</th>
                        <th class="text-center">price</th>
                        <th class="text-center">tax</th>
                        <th class="text-center"></th>
                        <th class="text-center"></th>
                    </tr>
                </thead>
                <tbody v-if="this.$store.state.permissions.editDeleteProduct">
                    <tr v-for="(product) in productDetails" :key="product.name">
                        <td>{{ product.name }}</td>
                        <td>{{ product.gender }}</td>
                        <td>{{ product.color }}</td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.tax }}</td>
                        <td v-if="this.$store.state.permissions.editProduct">
                            <router-link style="text-decoration: none" :to="{ path: '/update/'+ product.id}">
                                <v-btn rounded="pill" color="primary">Update</v-btn>
                            </router-link>
                        </td>
                        <td>
                            <v-btn @click="deleteProduct(product.id)" rounded="pill" color="error">Delete</v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-table>
            </v-card>
        </div>
    </div>
</template>

<script lang='ts'>
import { Vue } from 'vue-class-component'
import store from "../store"
import axios from "axios"

export default class App extends Vue{
    
    public productDetails=store.state.products
    public searchQuery="" 

    async created():Promise<void>{
            const res=await axios.get("http://localhost:3000/products")
            store.state.products=res.data
    }
    async deleteProduct(id:string):Promise<void>{
           
                const res=await axios.delete(`http://localhost:3000/products/${id}`)
                console.log("in delete product",id,res)
                store.dispatch("deleteProduct",id) 
        }
    public searchResults():void{
        const search=true;
        const temp:any=store.state.products.filter(pds=>pds["name"]===this.searchQuery)
        if(search){
            this.productDetails=temp
        }else if(search==""){
            this.productDetails=store.state.products
        }
    }
}

</script>

<style scoped>

.header{
    text-align: center;
    margin-top: 20px;
}
#search{
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
}
.searchBtn{
    margin-top: 10px;
}
.add-p-btn{
    margin-bottom: 20px;
}
td{
    text-align: center;
}
thead{
    background-color: dimgrey;
}
</style>