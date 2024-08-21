<template>
  <div class="input-wrapper">
    <div v-if="readOnly">{{ modelValue }}</div>
    <input
      v-else
      class="input"
      type="text"
      :value="modelValue"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      data-lpignore="true"
      :maxlength="maxlength"
      @input="onInput" />
  </div>
</template>
<script setup>
defineProps({
  modelValue: String,
  maxlength: {
    type: Number,
    default: 20,
  },
  readOnly: Boolean,
});
const emit = defineEmits(['onChange', 'update:modelValue']);

function onInput(e) {
  emit('update:modelValue', e.target.value);
  emit('onChange', e.target.value);
}
</script>
<style scoped>
.input-wrapper {
  position: relative;
}

.input {
  color: var(--inputColor);
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 0;
  background-color: transparent;
  box-shadow:
    inset 0 0 0 2px var(--inputColor),
    inset 6px 6px 0 var(--outlineColor),
    3px 3px 0 var(--outlineColor);
  -webkit-appearance: none;
}

.input:focus {
  outline-offset: 1px;
}
</style>
