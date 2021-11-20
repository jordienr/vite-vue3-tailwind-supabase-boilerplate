<template>
<div>
  <div class="flex flex-col gap-6 bg-white p-6 max-w-xs mx-auto mt-12">
  <h1 class="text-xl font-medium">Create your account</h1>
  <div v-if="emailSent" class="text-green-700 bg-green-50 p-4 border-green-300 border rounded">
    <p>An email has been sent, please check your inbox</p>
  </div>
  <div v-else class="flex flex-col gap-6">
  <label for="firstName">First name
    <input v-model="firstName" class="border p-2 rounded block w-full" type="text" name="firstName" id="firstName">
  </label>
  <label for="lastName">Last name
    <input v-model="lastName" class="border p-2 rounded block w-full" type="text" name="lastName" id="lastName">
  </label>
  <label for="Email">Email
      <input v-model="email" class="border p-2 block rounded w-full" type="text" name="email" id="email"></label>
  <label for="password">Password
      <input v-model="password" class="border p-2 block rounded w-full" type="text" name="password" id="password"></label>
    <button @click="register" class="bg-blue-600 py-2 rounded text-white font-medium">Crear cuenta</button>
  </div>

    <router-link class="text-blue-600 font-medium" to="/">Already have an account? Log in</router-link>
  </div>
</div>
</template>

<script lang="ts">
import { supa } from '../supabase'
export default {
  data: () => ({
    email: '',
    password: '',
    emailSent: false,
    firstName: '',
    lastName: '',
  }),
  methods: {
    async register(): Promise<void> {
      const { user, session, error } = await supa.auth.signUp({
        email: this.email,
        password: this.password
      }, {
        data: {
          firstName: this.firstName,
          lastName: this.lastName
        }
      })
      this.emailSent = true
    }
  }

}
</script>

<style>

</style>