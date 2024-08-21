<template>
  <div class="title" :class="computedClass" :style="{ '--align': align }">
    <span v-for="(item, index) in lightText" :style="`--i: ${index + 1}`" :key="index">{{ item }}</span>
  </div>
</template>
<script setup>
import { computed } from 'vue';
const prop = defineProps({
  align: {
    type: String,
    default: 'left',
  },
  text: {
    type: String,
    default: 'Blocklet',
  },
  size: {
    type: String,
    default: 'big',
    validator: (value) => ['mini', 'default', 'big'].includes(value),
  },
});

const lightText = computed(() => {
  const text = prop.text || 'Blocklet';
  return text.split('');
});

const computedClass = computed(() => {
  switch (prop.size) {
    case 'mini':
      return 'size-mini';
    case 'default':
      return 'size-default';
    case 'big':
      return 'size-big';
    default:
      return '';
  }
});
</script>
<style scoped>
.title {
  font-weight: 900;
  font-size: var(--size);
  color: #333;
  cursor: pointer;
  text-align: var(--align);
}
.title span {
  transition: 0.5s;
  transition-delay: calc(var(--i) * 0.1s);
}
.title:hover span {
  color: #fff;
  text-shadow:
    0 0 10px #fff,
    0 0 20px #fff,
    0 0 30px #fff,
    0 0 50px #fff,
    0 0 80px #fff;
}
.size-mini {
  /* 样式 */
  font-size: 20px;
}
.size-default {
  /* 样式 */
  font-size: 30px;
}
.size-big {
  /* 样式 */
  font-size: 50px;
}
</style>
