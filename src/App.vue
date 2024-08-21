<script setup>
import ProfileCard from './components/profile-card.vue';
import LightBulbWord from './components/light-bulb-word.vue';
</script>

<template>
  <LightBulbWord text="Blocklet" />
  <ProfileCard />
  <LightBulbWord text="双击卡片编辑" align="right" size="default"/>
</template>

<style scoped>
body {
  background-color: rgb(60, 60, 70);
  display: flex;
  justify-content: center;
}
</style>
