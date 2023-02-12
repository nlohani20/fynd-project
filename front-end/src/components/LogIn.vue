<template>
    <div>
        <!-- <img class="logo" src="" />
        <h1>LogIn</h1>
        <div class="register">
            <input type="text" placeholder="Enter Email" v-model="email" />
            <input type="password" placeholder="Enter Password" v-model="password" />
            <button v-on:click="login">Login</button>
            <br>
            <p>{{ error }}</p>
        </div> -->

        <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="w-full max-w-md space-y-8">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Log in to your account
                    </h2>
                </div>

                <div class="mt-8 space-y-6" >
                    <div class="-space-y-px rounded-md shadow-sm">
                        <div>
                            <!-- <label for="email-address" class="sr-only">Email address</label> -->
                            <input id="email-address" v-model="email" name="email" type="email" autocomplete="email"
                                required=""
                                class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Email address" />
                        </div>
                        <div>
                            <!-- <label for="password" class="sr-only">Password</label> -->
                            <input id="password" v-model="password" name="password" type="password"
                                autocomplete="current-password" required=""
                                class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Password" />
                        </div>
                    </div>

                    <div>
                        <button v-on:click="login" type="submit"
                            class="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-500 py-2 px-4 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                            Log in
                        </button>
                    </div>
                </div>

            </div>
        </div>
        <p>{{ error }}</p>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async login() {
            let user = {
                email: this.email,
                password: this.password,
            }
            let result = await axios.post('api/login', user);
            console.warn(result.data);
            if (result.data.title == "login failed") {
                this.error = "Invalid Credentials";
            } else {
                localStorage.setItem("user-info", JSON.stringify(result.data.user))
                this.error = "";
                this.$router.push('/');
                this.$router.go();
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push('/');
        }
    }
}

</script>