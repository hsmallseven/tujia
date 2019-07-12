<template>
  <div class="login">
    <div class="top">
      <p class="dltj">登录途家</p>
      <p class="new">新用户登录即自动注册途家账号</p>
    </div>
    <div class="input">
      <div>
        <!-- <span class="hah">+86</span> -->
        <router-link to="/Nationlist" class="hah" tag="span">+86</router-link>
        <input type="text" class="tel" placeholder="输入手机号" />
      </div>
      <div class="qwm">
        <input type="text" class="tel" placeholder="短信验证码" />
        <button>获取验证码</button>
      </div>
    </div>
    <a class="aaa">
      <div class="dlzc">登录/注册</div>
    </a>
    <router-link to="/Loginn" class="go">
      账号密码登录
      <!-- <a href="##" class="go">账号密码登录</a> -->
    </router-link>
    <p class="bbb">
      登录代表你已同意
      <a href="##">《途家网服务协议》</a>
      <a href="##">《隐私政策》</a>
    </p>
    <div class="left"></div>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.login {
  width: 100%;
  background: #fff;
  padding: 0.7rem 0.25rem 0;
  box-sizing: border-box;
}
.top {
  width: 100%;
  box-sizing: border-box;
}
.dltj {
  width: 100%;
  height: 0.64rem;
  font-size: 0.64rem;
  color: #333;
}
.new {
  width: 100%;
  font-size: 0.3rem;
  margin-top: 0.2rem;
  color: #999;
}
.input {
  width: 100%;
  margin-top: 0.6rem;
  box-sizing: border-box;
}
.input div {
  display: flex;
  border-bottom: 0.02rem solid #ccc;
}
.hah {
  display: inline-block;
  width: 1.88rem;
  height: 0.88rem;
  /* background: red; */
  font-size: 0.68rem;
  margin-left: 0;
}
.tel {
  background: #fff;
  caret-color: #fd8238;
  color: #333;
  border: 0;
  font-size: 0.4rem;
  height: 0.88rem;
}
.qwm {
  margin-top: 0.1rem;
}
.qwm button {
  width: 2rem;
  height: 0.6rem;
  border: inherit;
  border-color: #fff;
  background-color: #ccc;
  border-radius: 0.2rem;
  margin-top: 0.1rem;
  color: white;
}
.dlzc {
  width: 100%;
  height: 0.98rem;
  background: #ccc;
  border-radius: inherit;
  font-size: 0.45rem;
  text-align: center;
  line-height: 0.98rem;
  margin-top: 1rem;
  border-radius: 0.1rem;

  color: white;
}
.go {
  display: block;
  font-size: 0.28rem;
  color: #666;
  text-align: center;
  width: 100%;
  margin-top: 0.3rem;
}
.bbb {
  font-size: 0.24rem;
  color: #999;
  letter-spacing: 0;
  line-height: 0.24rem;
  text-align: center;
  margin-top: 2.5rem;
}
.bbb a {
  color: #001f24;
}
.left {
  width: 0.1rem;
  height: 0.6rem;
  background: orange;
  position: absolute;
  top: 1rem;
  left: 0;
}
</style>

