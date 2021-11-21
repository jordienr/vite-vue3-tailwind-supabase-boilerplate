<template>
    <nav class="bg-white">
        <div class="container mx-auto flex justify-between p-2 items-center">
            <span class="font-medium text-lg">
                <router-link to="/">@jordienr</router-link>
            </span>
            <span class="flex gap-6">
                <span v-if="!isLoggedIn">
                    <router-link class="p-2" to="/login">Log in</router-link>
                    <router-link class="p-2" to="/register">Sign up</router-link>
                </span>
                <span v-else>
                    <router-link class="p-2" to="/">Dashboard</router-link>
                    <router-link class="p-2" to="/profile">Profile</router-link>
                    <router-link class="p-2" to="/logout">Log out</router-link>
                </span>
            </span>
        </div>
    </nav>
    <main class="container mx-auto">
        <slot></slot>
    </main>
</template>

<script>
import { supa } from '../supabase'
export default {
    computed: {
        isLoggedIn() {
            return !!supa.auth.user()
        }
    }
}
</script>

<style>

</style>