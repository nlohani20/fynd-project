<template>
    <div id="page-wrap">
      <h1>Shopping Cart</h1>
    <ProductsList 
      :products="cartItems"
      v-on:remove-from-cart="removeFromCart($event)" 
    />
    <h3 id="total-price">Total: ₹{{ totalPrice }}</h3>
      <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Proceed to Checkout</button>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  import ProductsList from '../components/ProductsList';
  
  export default {
      name: 'CartPage',
      components :{
        ProductsList,
      },
      data() {
        return {
          cartItems:[],
        }
      },
      computed: {
        totalPrice() {
          return this.cartItems.reduce(
            (sum, item) => sum + Number(item.price),
            0,
          );
        }
      },
      methods : {
        async removeFromCart(productId) {
          const result = await axios.delete(`/api/cart/${productId}`);
          this.cartItems = result.data;
        }
      },
      async created() {
        const result = await axios.get(`/api/cart`);
        const cartItems = result.data;
        this.cartItems = cartItems;
      }
  };
  </script>
  
  <style scoped>
    h1 {
      border-bottom: 1px solid black;
      margin: 0;
      margin-top: 16px;
      padding: 16px;
    }
  
    #total-price {
      padding: 16px;
      text-align: right;
    }
  
    #checkout-button {
      width: 100%;
    }
  
  </style>
  