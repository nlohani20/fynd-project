<template>
  <div>
    <!-- id="page-wrap"> -->
    <!-- <ProductsGrid :products="products" v-on:add-to-cart="addToCart($event)" /> -->


    <div class="bg-white">
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="product in products" :key="product.pid" class="group relative">
            <router-link v-bind:to="'/products/' + product.pid">
              <div>
                <div
                  class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img :src="product.imageUrl" alt="image"
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a :href="product.href">
                        <!-- <span aria-hidden="true" class="absolute inset-0" /> -->
                        {{ product.name }}
                      </a>
                      <!-- <router-link v-bind:to="'/products/' + product.pid">
                      {{ product.name }}
                    </router-link> -->
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">{{ product.quantity }}</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">₹{{ product.price }}</p>

                </div>
              </div>
            </router-link>
            <button v-on:click="addToCart(product.pid)"
              class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import axios from 'axios';
// import ProductsGrid from '../components/ProductsGrid.vue';

export default {
  name: 'ProductsPage',
  components: {
    // ProductsGrid,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async addToCart(productId) {
      await axios.post(`/api/cart/${productId}`, {
        productId: this.$route.params.id
      });
    }
  },
  async created() {
    const result = await axios.get('/api/products');
    const products = result.data;
    this.products = products;
  }
};
</script>

