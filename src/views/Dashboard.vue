<template>
<div class="p-4">
  <h1 class="text-xl font-medium">Dashboard</h1>
    <div class="mt-6">
        <h2>Welcome, {{ firstName }}</h2>
    </div>
</div>
</template>

<script>
import { supa } from '../supabase'
export default {
    computed: {
        firstName() {
            return supa.auth.user().user_metadata.firstName
        }
    }
}
</script>

<style>

</style>