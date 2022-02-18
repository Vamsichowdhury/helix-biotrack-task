<template>
   
   <div class="menu-container">
       <div class="menu-header">
                <div>
                    <v-app-bar-nav-icon @click="showMenu=!showMenu" class='navbar-icon'></v-app-bar-nav-icon>

                    <v-avatar color="teal" size="47" class="white--text text-h5">VM</v-avatar>
                </div>
                <div id="brand-title"><h1>Helix Biotrack</h1></div>
                <div class="close">X</div>
        </div>
        <div v-if="showMenu" class="cards-container">
            <v-card class="dashboard rounded-xl text-center" min-height="100%" elevation="15">
            <div class="card-text">
              <v-icon dark left>mdi-minus-circle</v-icon>
              <div class="card-title">
                  <h3>Dashboard</h3>
              </div>
              <div class="card-text-details">
                  <h5>Time clock manager</h5>
              </div>
            </div>
          </v-card>
           <v-card class="inventory rounded-xl text-center" min-height="100%" elevation="15">
            <div class="card-text">
              <v-icon dark left>mdi-minus-circle</v-icon>
              <div class="card-title">
                <h3>Inventory</h3>
              </div>
              <div class="inventory-details-container">
                <div class="card-text-details">
                    <h5>Current Inventory</h5>
                    <h5>Inventory Tools</h5>
                    <div class="card-text-details-nested">
                        <router-link style="text-decoration: none" :to="{ path: '/products'}">
                            <h5>Products</h5>
                        </router-link>
                        <h5>Product Categories</h5>
                        <h5>Batch Types</h5>
                        <h5>Strain</h5>
                        <h5>Vendors & Laboratories</h5>
                        <h5>Inventory Rooms</h5>
                        <h5>Inventory Audits</h5>
                    </div>
              </div>
              <div class="card-text-details">
                    <h5>pricing tools</h5>
                    <div class="card-text-details-nested">
                        <h5>price tools</h5>
                        <h5>Batch Level Pricing</h5>
                        <h5>Member Level Pricing</h5>
                        <h5>Tax Categories</h5>
                        <h5>Pricing Options</h5>
                    </div>
                    <h5>Batch Transfer</h5>
                    <div class="card-text-details-nested">
                        <h5>New Batches</h5>
                        <h5>Purchase Order</h5>
                        <h5>Inbound Transfer</h5>
                        <h5>Quote</h5>
                        <h5>Outbound Transfer</h5>
                        <h5>Drivers</h5>
                        <h5>Vehicles</h5>
                    </div>
              </div>
              </div>
              
            </div>
          </v-card>
           <v-card class="dashboard rounded-xl text-center" min-height="100%" elevation="15">
            <div class="card-text">
              <v-icon dark left>mdi-minus-circle</v-icon>
              <div class="card-title">
                <h3>Money</h3>
              </div>
              <div class="card-text-details">
                    <h5>Money manager</h5>
                    <h5>Employee close till</h5>
                    <h5>Pay out till</h5>
              </div>
            </div>
          </v-card>
           <v-card class="dashboard rounded-xl text-center" min-height="100%" elevation="15">
            <div class="card-text">
              <v-icon dark left>mdi-minus-circle</v-icon>
              <div class="card-title">
                <h3>Retail</h3>
              </div>
              <div class="card-text-details">
                <h5>Check-In</h5>
                <h5>Point Of Sale</h5>
                <h5>Order Fulfillment</h5>
                <h5>Customer Profile</h5>
                <h5>Management</h5>
                <h5>Retail Sales History</h5>
                <h5>Retail Options</h5>
                <div class="card-text-details-nested">
                    <h5>Discount Manager</h5>
                    <h5>Loyalty Programs</h5>
                    <h5>Retail settings</h5>
                    <h5>Doctors</h5>
                </div>
                
              </div>
            </div>
          </v-card>
          <v-card class="dashboard rounded-xl text-center" min-height="100%" elevation="15">
            <div class="card-text">
              <v-icon dark left>mdi-minus-circle</v-icon>
              <div class="card-title">
                <h3>Reports</h3>
              </div>
              <div class="card-text-details">
                <h5>Reports Tool</h5>
              </div>
            </div>
          </v-card>
          <v-card class="dashboard rounded-xl text-center" min-height="100%" elevation="15">
            <div class="card-text">
              <v-icon dark left>mdi-minus-circle</v-icon>
              <div class="card-title">
                <h3>Locations</h3>
              </div>
              <div class="card-text-details">
                <h5>Sales Limit</h5>
                <h5>Template Manager</h5>
                <h5>Reservations</h5>
                <h5>Import/Export Wizard</h5>
              </div>
            </div>
          </v-card>
          <v-card class="dashboard rounded-xl text-center" min-height="100%" elevation="15">
            <div class="card-text">
              <v-icon dark left>mdi-minus-circle</v-icon>
              <div class="card-title">
                <h3>System Settings</h3>
              </div>
              <div class="card-text-details">
                <h5>Data Sharing Options</h5>
                <router-link style="text-decoration: none" to='/permissions'>
                        <h5>Permissions</h5>
                </router-link>
              </div>
            </div>
          </v-card>
          <v-card class="dashboard rounded-xl text-center" min-height="100%" elevation="15">
            <div class="card-text">
              <v-icon dark left>mdi-minus-circle</v-icon>
              <div class="card-title">
                <h3>Support</h3>
              </div>
              <div class="card-text-details">
                <h5>Create a Ticker</h5>
                <h5>View Training</h5>
                <h5>Documentation</h5>
              </div>
            </div>
          </v-card>
        </div>
   </div>
        
</template>

<script lang='ts'>
import {Vue } from 'vue-class-component';

export default class Dashboard extends Vue{
public showMenu=true;
}
   
</script>

<style scoped>
.dashboard{
    height: 450px;
    width:230px;
    margin: 10px;
    background-color: rgb(0,131,241);
    flex:none;
}
.inventory{
    height: 450px;
    width:420px;
    margin: 10px;
    background-color: rgb(0,131,241);
    flex:none;
}
.card-text{
    color:white;
    padding: 20px;
}
.cards-container{
    margin-top: 0;
    display: flex;
    flex-direction: row;
    overflow-x: auto;

}
.card-text-details{
    text-align: left;
}
.card-text-details-nested{
    padding-left: 20px ;
}
.inventory-details-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.card-title{
    margin: 15px;
}
.menu-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
}
.menu-container{
    background-color: rgb(6, 93, 165);
    border: 10px solid rgb(6, 93, 165);
}
.close{
    color: aliceblue;
    margin-right: 20px;
    text-align: center;
}
#brand-title{
    color: aliceblue;
}
.navbar-icon{
    margin:0px 20px;
}
::-webkit-scrollbar {
    height: 12px;
}
 
::-webkit-scrollbar-track {
  background-color: rgb(6, 93, 165);
}
 
::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius:5px;

}
</style>