<template>
  <div>
    <img src="https://pic.tujia.com/upload/feccms/day_190708/201907081101503254.jpg" class="pic1" />
    <img src="https://pic.tujia.com/upload/feccms/day_190703/201907031406558320.jpg" class="pic1" />
    <img src="https://pic.tujia.com/upload/feccms/day_190704/201907041612069179.jpg" class="pic1" />
    <ul class="themelist">
      <router-link to="/Theme/Themelist/daban" tag="li">
        <p>大阪</p>
      </router-link>
      <router-link to="/Theme/Themelist/dongjing" tag="li">
        <p>东京</p>
      </router-link>
      <router-link to="/Theme/Themelist/jingdu" tag="li">
        <p>京都</p>
      </router-link>
      <router-link to="/Theme/Themelist/zhahuang" tag="li">
        <p>札幌</p>
      </router-link>
      <router-link to="/Theme/Themelist/fugang" tag="li">
        <p>福冈</p>
      </router-link>
      <router-link to="/Theme/Themelist/chongsheng" tag="li">
        <p>冲绳</p>
      </router-link>
    </ul>
    <router-view />
    <img src="https://pic.tujia.com/upload/feccms/day_190703/201907031407573838.jpg" class="pic1" />
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.pic1 {
  width: 100%;
  vertical-align: middle;
}
.themelist {
  display: flex;
  width: 100%;
}
.themelist li {
  flex: 1;
  list-style: none;
}
.themelist li p {
  text-align: center;
  height: 0.56rem;
  line-height: 0.56rem;
}
.themelist li p.router-link-exact-active {
  color: red;
}
</style>
