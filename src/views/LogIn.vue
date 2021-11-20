<template>
<div class="max-w-xs mx-auto mt-12">
  <div class="bg-white border rounded p-6">
  <h1 class="text-xl font-medium">
    Sign in to your account
  </h1>
  <form @submit.prevent class="mt-6 space-y-4">
    <InputText v-model="email" role="email" label="Email"></InputText>
    <InputText type="password" v-model="password" role="password" label="Password"></InputText>
  <button @click="login" class="mt-6 py-2 bg-blue-600 text-white font-medium block w-full rounded">Log in</button>
  <small class="text-red-600">{{ error }}</small>
  </form>

  <router-link class="mt-6 block text-blue-600" to="/register">
   Don't have an account? Sign up
  </router-link>
  </div>
</div>
</template>

<script lang="ts">
import { supa } from '../supabase/'

export default {
  data: () => ({
    email: '',
    password: '',
    error: ''
  }),
  methods: {
    async login(): Promise<void> {
      const { session, user, error } = await supa.auth.signIn({
        email: this.email,
        password: this.password
      })
      this.error = error?.message ||""
      if (!error) {
        window.location.reload()
      }
    }
  }
}
</script>

<style>

</style>