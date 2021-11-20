<template>
  <div>
      <label class="text-md" :for="label">{{label}}
        <input class="border p-2 rounded block w-full mt-1 hover:border-blue-300 transition-colors focus:ring-1 ring-blue-500" type="text" :id="label" :name="label" :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        />
      </label>
  </div>
</template>

<script>
export default {
    name: 'InputText',
    props: {
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
        }
    }
}
</script>

<style>

</style>