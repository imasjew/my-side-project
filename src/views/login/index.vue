<template>
  <div class="login-page-wrap">
    <div class="title-wrap">登录</div>
    <div class="body-wrap">
      <div class="account-wrap">
        <input type="text" class="input-account" v-model="account" />
      </div>
      <div class="pswd-wrap">
        <input type="text" class="input-pswd" v-model="pswd" />
      </div>
      <div class="login-wrap">
        <button>登录</button>
        <button>注册</button>
      </div>
    </div>
  </div>
</template>
<script setup>import { ref } from 'vue';

const account = ref('')
const pswd = ref('')
</script>
<style lang="less">
.login-page-wrap {
  min-height: 100vh;
  min-width: 100vw;
  // border: 1px solid transparent; // 防止高度塌陷，但形成多余高度
  overflow: hidden; // 防止高度塌陷较好方案
  background: url(https://pic1.zhimg.com/v2-9bb87fc82882ece1d08e0e19168ce5c4_r.jpg)
    center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .title-wrap {
    position: relative;
    margin: 24px;
    font-size: 48px;
    color: white;
    text-shadow: 2px 2px 8px #222;
  }
  .body-wrap {
    margin: 40px;
    .login-wrap {
      margin-top: 24px;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
