<template>
<div class="p-4">
    <h1 class="text-xl font-medium">Profile</h1>
    <div class="space-y-4 my-4">
        <div>
            <p class="text-md">First name</p>
            <p class="text-xl">{{ userMetaData.firstName }}</p>
        </div>
        <div>
            <p>Last name</p>
            <p class="text-xl">{{  userMetaData.lastName }}</p>
        </div>
        <div>
            <p>Email</p>
            <p class="text-xl">{{ userData.email }}</p>
        </div>
    </div>
</div>
</template>

<script>
import { supa } from '../supabase'
export default {
    computed: {
        userData() {
            return supa.auth.user()
        },
        userMetaData() {
            return supa.auth.user().user_metadata
        }
    }
}
</script>

<style>

</style>