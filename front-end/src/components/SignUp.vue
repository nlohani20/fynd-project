<template>
    <div>
        <!-- <img class="logo" src="" />
        <h1>Sign Up</h1>
        <div class="register">
            <input type="text" placeholder="Enter Name" v-model="name" />
            <input type="text" placeholder="Enter Email" v-model="email" />
            <input type="password" placeholder="Enter Password" v-model="password" />
            <input type="text" placeholder="Enter Phone no." v-model="phone" />
            <input type="text" placeholder="Specify Gender" v-model="gender" />
            <button v-on:click="signUp">Sign Up</button>
            <br>
            <router-link to="/login"> LogIn</router-link>
        </div> -->

        <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="w-full max-w-md space-y-8">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create an account
                    </h2>
                </div>

                <div class="mt-8 space-y-6" >
                    <div class="-space-y-px rounded-md shadow-sm">
                        <div>
                            <!-- <label for="email-address" class="sr-only">Email address</label> -->
                            <input v-model="name" name="name" type="text" autocomplete="name"
                                required
                                class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter Name" />
                        </div>
                        <div>
                            <!-- <label for="password" class="sr-only">Password</label> -->
                            <input v-model="email" name="email" type="email" autocomplete="email"
                                required=""
                                class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter Email" />
                        </div>
                        <div>
                            <!-- <label for="password" class="sr-only">Password</label> -->
                            <input v-model="password" name="password" type="password" autocomplete="current-password"
                                required=""
                                class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter Password" />
                        </div>
                        <div>
                            <!-- <label for="password" class="sr-only">Password</label> -->
                            <input v-model="phone" name="phone" type="text" autocomplete="phone"
                                required=""
                                class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter Phone no." />
                        </div>
                        <div>
                            <!-- <label for="password" class="sr-only">Password</label> -->
                            <input v-model="gender" name="gender" type="text" autocomplete="gender"
                                required=""
                                class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter Gender" />
                        </div>
                    </div>

                    <div>
                        <button v-on:click="signUp" type="submit"
                            class="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-500 py-2 px-4 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                            Sign Up
                        </button>
                    </div>
                </div>

            </div>
        </div>
        <p>{{error}}</p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            phone: '',
            gender: '',
            error: ''
        }
    },
    methods: {
        async signUp() {
            if(this.name == '') {
                this.error = 'Name cannot be empty';
            } else if(this.email == '') {
                this.error = 'Email cannot be empty';
            } else if(this.password == '') {
                this.error = 'Password cannot be empty';
            } else {
                let result = await axios.post('api/users',
                        {
                            email: this.email,
                            password: this.password,
                            name: this.name,
                            gender: this.gender,
                            phone: this.phone,
                        }
                    );
                if (result.status == 201) {
                    this.$router.push('/login');
                }
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

<style>
/* .logo {
    width: 100px
}

.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
} */
</style>