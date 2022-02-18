<template>
    <div class="pos-container">
        <div class="products-container">
            <div class="product-card-container" v-for="product in products" :key="product.id">
                <v-card class="product-card mx-auto" elevation=15 >
                    <h5 class="product-details">{{product.name}}</h5>
                    <h5 class="product-details">Price:${{product.price}} per unit</h5>
                    <h5 class="product-details">Tax : ${{product.tax}}per unit</h5>
                    <input class="quantity-input" v-model.lazy="quantity" type="number">
                    <h4 class="add-cart-btn"><v-btn size="x-small" color="success" @click="addToCart(product)">Add to cart</v-btn></h4>
                </v-card>
            </div>
        </div>
        <div class="main-cart-container">
            <v-card class="cart-container mx-auto" elevation=15 >
                <h5 style="color:blue">Shopping Cart</h5>
                <br>
                <hr>
                <div class="cart-products-container">
                    <div  v-for="product in cartProducts" :key="product.id">
                        <div class="cart-products">
                            <h5>{{product.name}}</h5>
                            <h5>{{product.quantity}} u</h5>
                            <h5>${{product.totalPrice}}</h5>
                        </div>
                    <hr>
                    </div>
                </div>
                <div class="pricing">
                    <h5>Sub-Total:<span id="pricing-subtotal">${{this.$store.getters.cartProductTotalPrice}}</span></h5>
                    <h5>Total tax:<span id="pricing-tax">${{this.$store.getters.cartProductTotalTax}}</span></h5>
                    <h5>Total:<span id="pricing-total">${{this.$store.getters.cartProductTotalPrice+this.$store.getters.cartProductTotalTax}}</span></h5>
                    <v-btn size="small" block color="success" >send to order fullfillment</v-btn>
                </div>
            </v-card>
        </div>
    </div>
</template>

<script lang='ts'>
import {Vue } from 'vue-class-component';
import store from "../store"
import axios from "axios"
export default class Permissions extends Vue{
    public title="point of sale"
    public quantity=1
    public products=store.state.products
    public cartProducts=store.state.addToCart
    
    async addToCart(product):void{
        const totalPrice=product['price']*this.quantity
        const totalTax=product['tax']*this.quantity
        const data={name:product['name'],quantity:this.quantity,tax:totalTax,totalPrice:totalPrice}
        const res =await axios.post("http://localhost:3000/pointofsale",data)
        this.quantity=1
        store.dispatch("addToCart",res.data)
    }
}
</script>

<style scoped>
.pos-container{
    height: 100vh;
    background-color: darkgray;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.products-container{
    display: flex;
    width: 800px;
    flex-direction: row;
    flex-wrap: wrap;
}
.product-card{
    margin: 10px;
    padding: 20px;
    width: 170px;
    height: 200px;
}
.product-card-container{
    margin: 3px;
}
.product-details{
    color:blue
}
.product-card:hover{
    margin: 10px;
    border: 3px solid green;
    padding: 20px;
    width: 180px;
    height: 200px;
}
.cart-container{
    width: 500px;
    height: 400px;
    margin: 10px;
    padding: 10px;    
}
.pricing{
    width: 480px;
}
.cart-products-container{
    height: 240px;
}
.cart-products{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 5px;
}
#pricing-subtotal{
    margin-left: 350px;
}
#pricing-tax{
    margin-left: 358px;
}
#pricing-total{
    margin-left: 380px;
}
.add-cart-btn{
    margin-top: 10px;
    margin-left: 17px;
}
.quantity-input{
    margin-top: 40px;
    width: 100px;
    margin-left: 11px;
    border: 2px solid darkgray;
    border-radius: 10px;
}
</style>