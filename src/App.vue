<script lang="ts">
import LayoutProvider from './components/LayoutProvider.vue';
export default {
    components: { LayoutProvider },
}
</script>

<template>
    <layout-provider>
        <router-view></router-view>
    </layout-provider>
</template>

<style>

</style>
