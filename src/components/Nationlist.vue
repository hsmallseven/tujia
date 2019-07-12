<template>
  <div>
    <div class="fffff">
      <div class="topp">
        <p @click="gooo">8</p>
        <h2>选择国家和地区</h2>
      </div>
    </div>
    <ul class="qwer">
      <li v-for="(item,index) in list" :key="index">
        <h3 v-if="index===0 || index!==0 && item.letter!==list[index-1].letter ">{{item.letter}}</h3>
        <span>{{item.name}}</span>
      </li>
    </ul>
    <ul class="rightlis">
      <li v-for="(item,index) in letters" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
import { constants } from "crypto";
export default {
  data() {
    return {
      list: [],
      letters: ""
    };
  },
  created() {
    this.getnum();
    this.$axios
      .get(
        "https://m.tujia.com/bingo/h5/city/getcountrycodes?_apitsp=1562848752592"
      )
      .then(res => {
        this.list = res.data.data.items
          .sort((a, b) => {
            return a.pingYin.localeCompare(b.pingYin);
          })
          .map(item => {
            return {
              letter: item.pingYin[0].toUpperCase(),
              name: item.name
            };
          });
      });
  },
  methods: {
    getnum() {
      var str = "";
      for (var i = 65; i < 91; i++) {
        if (
          String.fromCharCode(i) === "U" ||
          String.fromCharCode(i) === "V" ||
          String.fromCharCode(i) === "I" ||
          String.fromCharCode(i) === "O"
        )
          continue;
        str += String.fromCharCode(i);
      }
      this.letters = str;
    },
    gooo() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.topp {
  width: 100%;
  background: white;
  box-sizing: border-box;
  padding: 0.2rem;
  position: fixed;
  top: 0;
}
.topp p {
  width: 0.4rem;
  height: 0.4rem;
  font-size: 0.4rem;
  margin: 0.3rem 0 0 0.2rem;
}
.topp h2 {
  font-size: 0.48rem;
  margin-top: 0.5rem;
}
h3,
span {
  display: block;
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
}
.rightlis {
  position: fixed;
  right: 0.3rem;
  top: 20%;
}
.rightlis li {
  list-style: none;
}
.qwer {
  margin-top: 2.4rem;
}
</style>
