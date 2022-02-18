<template>
  <v-app>
    <v-main>
      <Dashboard />
      <!-- <div class="main-header">
            <router-link style="text-decoration: none" :to="{ path: '/'}">
                        <h1>Products List</h1>
            </router-link>
             <router-link style="text-decoration: none" to='/permissions'>
                        <h1> Permissions</h1>
            </router-link>
        </div>-->
      <router-view/> 
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Options,Vue } from 'vue-class-component'
import ProductList from "./components/ProductList.vue"
import Dashboard from './components/Dashboard.vue'

@Options({
  components:{
    Dashboard,
  }
})
export default class App extends Vue{
  public title="hello world"
}
</script>

<style scoped>
.main-header{
    height: 80px;
    background-color:cadetblue;
    display: flex;
    justify-content: space-around;
}
</style>