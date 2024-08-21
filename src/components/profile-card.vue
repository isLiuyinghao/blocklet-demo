<template>
  <div class="warp" @dblclick="ondblclick">
    <div class="describe">
      <h1>
        {{ profile.name }}
      </h1>
      <div class="profile-item">
        电话号码：<inputWrapper v-model="profile.phone" :maxlength="11" :readOnly="readOnly" />
      </div>
      <div class="profile-item">邮件信息：<inputWrapper v-model="profile.email" :readOnly="readOnly" /></div>
      <div class="profile-item">
        博客地址：<inputWrapper v-model="profile.blog" :maxlength="40" :readOnly="readOnly" />
      </div>
      <div class="profile-item">Keep going!!</div>
    </div>
    <div v-if="!readOnly">
      <button class="submit" @click="submit">保 存</button>
      <button class="submit" @click="readOnly = true">取 消</button>
    </div>
    <div class="c"></div>
    <div class="d"></div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import inputWrapper from './input-wrapper.vue';
import { supabase } from '../lib/supabaseClient';
const readOnly = ref(true);
const profile = ref({
  blog: '',
  email: '',
  id: '',
  key: '',
  name: '',
  phone: '',
});

function ondblclick() {
  readOnly.value = false;
}

async function submit() {
  try {
    await supabase.from('Profile').update(profile.value).eq('key', '1').select();
    alert('保存成功');
    readOnly.value = true;
  } catch (err) {
    console.log(err);
    alert('保存失败了！');
  }
}

async function getCountries() {
  let { data } = await supabase.from('Profile').select('*').eq('key', 1);
  if (data.length) {
    profile.value = data[0];
  }
}

onMounted(() => {
  getCountries();
  // insert();
});
</script>

<style scoped>
.warp {
  /* filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.164)); */
  padding: 80px;
  border-radius: 20px;
  color: var(--inputColor);
  position: relative;
  /* 设置渐变 */
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.2)
  );
  /* 重点：使元素背景模糊化 */
  backdrop-filter: blur(11px);
  /* 设置上高光和左高光，使其看起来更加逼真 */
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  border-left: 1px solid rgba(255, 255, 255, 0.8);
  text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.7);
}
.mode {
  position: absolute;
  right: 20px;
  top: 20px;
}

.profile-item {
  display: flex;
  margin-bottom: 10px;
}

.c {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: rgb(255, 170, 0);
  position: absolute;
  bottom: -60px;
  left: -60px;
  z-index: -99;
}
.d {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #77fdd7;
  position: absolute;
  top: -50px;
  right: -60px;
  z-index: -99;
}
.submit {
  color: #fff;
  margin-top: 40px;
  width: 100px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  transition: 0.3s;
}
.submit:hover {
  letter-spacing: 2px;
  color: #000;
  background-color: #fff;
}
.operate {
  position: relative;
}
.icon {
  width: 20px;
  height: 20px;
}
@media screen and (min-width: 400px) and (max-width: 600px) {
  .warp {
    padding: 50px;
  }
  /* 在这里添加样式规则 */
  .profile-item {
    display: block;
    font-size: 14px;
  }
  .c {
    width: 60px;
    height: 60px;
    bottom: -10px;
    left: -20px;
  }
  .d {
    width: 100px;
    height: 100px;
    top: -50px;
    right: -20px;
  }
}
@media screen and (max-width: 400px) {
  .warp {
    padding: 50px;
  }
  .profile-item {
    /* display: block; */
    font-size: 12px;
  }
  .c {
    width: 30px;
    height: 30px;
    bottom: -10px;
    left: -10px;
  }
  .d {
    width: 50px;
    height: 50px;
    top: -10px;
    right: -10px;
  }
}
</style>
