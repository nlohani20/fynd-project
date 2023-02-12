<template>
  <div id="nav-bar">
    <!-- <router-link to="/products" id="products-link">
      <h1>GARDEN FRESH</h1>
    </router-link>
    <div v-if="!loggedIn">
      <router-link to="/signup" class="temp">
        <button>SignUp</button>
      </router-link>
      <router-link to="/login" class="temp">
        <button>LogIn</button>
      </router-link>
    </div>
    <button v-else v-on:click="logout">Logout</button>
    <router-link to="/cart" id="cart-link">
      <button>Shopping Cart</button>
    </router-link> -->
    <div as="nav" class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <!-- <DisclosureButton
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton> -->
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <router-link to="/" id="products-link" class="text-white py-1">
                  <h1>GARDEN FRESH</h1>
                </router-link>
                <router-link to="/products"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</router-link>
                  <router-link to="/signup" v-if="!loggedIn"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">SignUp</router-link>
                  <router-link to="/" v-else
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><button
                      v-on:click="logout">Logout</button></router-link>
                <router-link to="/login" v-if="!loggedIn"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">LogIn</router-link>
                <router-link to="/cart" v-else
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Shopping Cart</router-link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      loggedIn: false,
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
      this.$router.go();
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (user) {
      this.loggedIn = true;
    }
  }
}
</script>

<style scoped>
/* #nav-bar {
  border-bottom: 1px solid #ddd;
  height: 75px;
  width: 100%;
}

#products-link {
  text-align: center;
  display: block;
  color: black;
  font-size: 22px;
  left: 32px;
  position: absolute;
  top: 16px;
  text-decoration: none;
}

#products-link h1 {
  margin: 0;
}

#cart-link {
  position: absolute;
  right: 16px;
  top: 16px;
} */
</style>
