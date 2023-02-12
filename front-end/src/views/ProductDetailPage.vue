<template>
  <div>
    <!-- <div id="page-wrap" v-if="product">
      <div id="img-wrap">
        <img v-bind:src="product.imageUrl" />
      </div>
      <div id="product-details">
        <h1>{{ product.name }}</h1>
        <h3 id="price">₹{{ product.price }}</h3>
        <p>Quantity: {{ product.quantity }}</p>

        <button id="add-to-cart" v-if="!itemIsInCart && !showSuccessMessage" v-on:click="addToCart">Add to Cart</button>

        <button id="add-to-cart" class="green-button" v-if="!itemIsInCart && showSuccessMessage">Succesfully Added to
          cart!</button>

        <button id="add-to-cart" class="grey-button" v-if="itemIsInCart">Item already in cart!</button>

        <h4>Description</h4>
        <p>{{ product.description }}</p>
      </div>
    </div>
    <NotFoundPage v-else /> -->


    <div id="page-wrap" class="max-w-sm rounded overflow-hidden shadow-lg" v-if="product">
      <img class="h-full w-full object-cover object-center lg:h-full lg:w-full m-auto" v-bind:src="product.imageUrl">
      <div class="px-6 py-4">
        <div class=" flex justify-around">
        <div class="font-bold text-xl mb-2">{{ product.name }}</div>
        <div>
        <h3 >₹{{ product.price }}</h3>
        <p> {{ product.quantity }}</p>
      </div>
      </div>
        <p class="py-10 text-gray-700 text-base">
          {{ product.description }}
        </p>
      </div>
      <div>
        <button id="add-to-cart" class="black-button text-white" v-if="!itemIsInCart && !showSuccessMessage" v-on:click="addToCart" >Add to Cart</button>

<button id="add-to-cart" class="green-button" v-if="!itemIsInCart && showSuccessMessage">Succesfully Added to
  cart!</button>

<button id="add-to-cart" class="grey-button" v-if="itemIsInCart">Item already in cart!</button>
      </div>
    </div>
    <NotFoundPage v-else />

    </div>
</template>

<script>
import axios from 'axios';
import NotFoundPage from './NotFoundPage.vue';

export default {
  name: 'ProductDetailPage',
  components: {
    NotFoundPage,
  },
  data() {
    return {
      product: {},
      cartItems: [],
      showSuccessMessage: false,
    };
  },
  computed: {
    itemIsInCart() {
      return this.cartItems.some(item => item.pid === this.product.pid);
    }
  },
  methods: {
    async addToCart() {
      await axios.post('/api/cart', {
        productId: this.$route.params.id,
      });
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.$router.push('/products');
      }, 1500);
    }
  },
  async created() {
    const result = await axios.get(`/api/products/${this.$route.params.id}`);
    const product = result.data;
    this.product = product;

    const result2 = await axios.get('/api/cart');
    this.cartItems = result2.data;
  }
};
</script>

<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

.green-button {
  background-color: green;
}

.grey-button {
  background-color: grey;
}
.black-button {
  background-color: black;
}

#price {
  position: absolute;
  top: 24px;
  right: 16px;
}
</style>
