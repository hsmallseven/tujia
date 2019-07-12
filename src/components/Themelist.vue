<template>
  <div class="Themelist">
    <ul class="list">
      <li v-for="(item,index) in list" v-if="type==='daban' ||type==='jingdu' ||type==='fugang'">
        <div class="heart"></div>
        <img :src="item.defaultPicture" />
        <div class="text">
          <p class="one">{{item.unitName}}</p>
          <p class="two">
            <span>{{item.unitSummeries[0].text}}</span>
            <span>{{item.unitSummeries[1].text}}</span>
            <span>{{item.unitSummeries[2].text}}</span>
          </p>
          <p class="three">￥{{item.finalPrice}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: "",
      list: []
    };
  },
  watch: {
    $route: {
      handler(newV) {
        this.type = newV.params.type;
      },
      deep: true,
      immediate: true
    }
  },

  methods: {
    getData() {
      //   created() {
      this.$axios.get("http://localhost:3000/items").then(res => {
        this.list = res.data;
      // this.type = $route.params;
        console.log(res);
      });
    }
    //   }
  },
  watch: {
    $route: {
      handler(newV) {
        this.type = newV.params.type;
        this.getData();
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.list {
  width: 100%;
  box-sizing: border-box;
}
.Themelist {
  height: 100%;
  width: 100%;
  background: #ffdde3;
  box-sizing: border-box;
  padding: 0.1rem 0.1rem 0 0.1rem;
}
li {
  display: inline-block;
  list-style: none;
  width: 50%;
  box-sizing: border-box;
  padding: 0.1rem;
  background: #ffdde3;
  position: relative;
height:4.42rem;
}
img {
  width: 100%;
  vertical-align: middle;
}
.text {
  background: white;
  box-sizing: border-box;
  padding: 0.2rem;
}
p {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.one {
  line-height: 0.28rem;
  height: 0.28rem;
  font-size: 0.28rem;
  color: #333;
}
.two span {
  color: #999;
}
.three {
  color: #f66;
  font-weight: 900;
  font-size: 0.32rem;
  margin-bottom: 0.4rem;
}
.heart {
  width: 0.38rem;
  height: 0.38rem;
  background-image: url(https://pwastatic.tujia.com/modules//static/imgs/unfavorate.png);
  background-size: 100%;
  border-radius: 50%;
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
  z-index: 999;
}
</style>

