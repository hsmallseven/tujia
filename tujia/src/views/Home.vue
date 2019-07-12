<template>
  <div class="home">
    <!-- 头部  -->
    <div id="indexheade">
      <div id="indexheade_top">
        <div>
          <span></span>
        </div>
        <div class="iconfont" @click.self="openmenu">&#xe790;<menhurdleu v-show="flags"></menhurdleu></div>
      </div>
      <div id="Swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://nmstatic.tujia.com/static/images/index/home/banner_bg2.jpg" alt=""></div>
            <div class="swiper-slide"><img src="https://nmstatic.tujia.com/static/images/index/home/banner_bg3.jpg" alt=""></div>
            <div class="swiper-slide"><img src="https://nmstatic.tujia.com/static/images/index/home/banner_bg1.jpg" alt=""></div>
          </div>
        </div>
        <div id="Swiper_input">
          <span>您想住哪？</span>
        </div>
      </div>
      <div id="mytujia">
        <div>
          <!-- <router-link> -->
            <span></span>
            <p @click="myhome">我的途家</p>
          <!-- </router-link> -->
        </div>
        <div>
          <!-- <router-link> -->
            <span></span>
            <p @click="myhometwo">我的订单</p>
          <!-- </router-link> -->
        </div>
      </div>
    </div>
    <!-- 精选主题  -->

    <div id="theme">
      <h2>精选主题</h2>
    </div>
    <div id="theme_swiper"  @click="jumptheeme">
          <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://pic.tujia.com/upload/mobileconfig/day_190705/201907051026578840.jpg" alt=""></div>
          </div>
        </div>
    </div>
  
  <!-- 发现公寓  -->
    <div id="find">
        <h2>发现公寓</h2>
    </div>
    <div id="Housing" @click="jumpparticular">
      <ul id="Housinglist">
        <li>
          <!-- <router-link > -->
          <div>
             <img src="https://pic.tujia.com/upload/mobileconfig/day_180115/thumb/201801151426141610_700_467.jpg" alt="">
          </div>
          <div>
              <div id="rightmig">
                <img src="https://pic.tujia.com/upload/landlordstorelogo/day_190414/201904141412551479.jpg" alt="">
                <span></span>
              </div>
              <span>夫子庙新街口精装高层大飘扇高层亲子房</span>
              <p><span>4.9分/23点评</span><span>1居/1床/宜住2人</span><span>近张府园地铁站</span></p>
              <p><span>连住优惠</span><span>闪订</span><span>验真</span></p>
          </div>
          <!-- </router-link> -->
        </li>
                <li>
          <!-- <router-link > -->
          <div>
             <img src="https://pic.tujia.com/upload/mobileconfig/day_171204/thumb/201712041639067200_700_467.jpg" alt="">
          </div>
          <div>
                  <div id="rightmig">
                <img src="" alt="">
                <span></span>
              </div>
              <span>夫子庙新街口精装高层大飘扇高层亲子房</span>
              <p><span>4.9分/23点评</span><span>1居/1床/宜住2人</span><span>近张府园地铁站</span></p>
              <p><span>连住优惠</span><span>闪订</span><span>验真</span></p>
          </div>
          <!-- </router-link> -->
        </li>
                <li>
          <!-- <router-link > -->
          <div>
             <img src="https://pic.tujia.com/upload/mobileconfig/day_180115/thumb/201801151425244459_700_467.jpg" alt="">
          </div>
          <div>
                <div id="rightmig">
                <img src="" alt="">
                <span></span>
              </div>
              <span>夫子庙新街口精装高层大飘扇高层亲子房</span>
              <p><span>4.9分/23点评</span><span>1居/1床/宜住2人</span><span>近张府园地铁站</span></p>
              <p><span>连住优惠</span><span>闪订</span><span>验真</span></p>
          </div>
          <!-- </router-link> -->
        </li>
                <li>
          <!-- <router-link > -->
          <div>
             <img src="https://pic.tujia.com/upload/mobileconfig/day_171204/thumb/201712041643395816_700_467.jpg" alt="">
          </div>
          <div>
                  <div id="rightmig">
                <img src="" alt="">
                <span></span>
              </div>
              <span>夫子庙新街口精装高层大飘扇高层亲子房</span>
              <p><span>4.9分/23点评</span><span>1居/1床/宜住2人</span><span>近张府园地铁站</span></p>
              <p><span>连住优惠</span><span>闪订</span><span>验真</span></p>
          </div>
          <!-- </router-link> -->
        </li>
                <li>
          <!-- <router-link > -->
          <div>
             <img src="https://pic.tujia.com/upload/mobileconfig/day_180115/thumb/201801151424465650_700_467.jpg" alt="">
          </div>
          <div>
                  <div id="rightmig">
                <img src="" alt="">
                <span></span>
              </div>
              <span>夫子庙新街口精装高层大飘扇高层亲子房</span>
              <p><span>4.9分/23点评</span><span>1居/1床/宜住2人</span><span>近张府园地铁站</span></p>
              <p><span>连住优惠</span><span>闪订</span><span>验真</span></p>
          </div>
          <!-- </router-link> -->
        </li>
      </ul>
    </div>

    <!-- footer  -->

    <div id="indexheade_footer">
        <div>
          <span>关于途家</span>
          <span>客服热线</span>
          <span>电脑版</span>
        </div>
        
        <div>
          <span>企业营业执照</span>
          <span>隐私权政策</span>
          <span>途家保障计划</span>
        </div>
        <p>©2019 途家网 津ICP备17006480号</p>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import menhurdleu from './menuhurdle'
export default {
  data(){
     return{
         flags:false,
     }
  },
created(){
          this.$nextTick(()=>{
					var mySwiper = new Swiper ('.swiper-container', {
				    loop: true, // 循环模式选项
				    autoplay: {
				    delay: 1000,    
				     disableOnInteraction: false,
				    },
	     		})      
			})
},
methods:{
      swiper(){
      },
      openmenu(){
            this.flags=!this.flags
      },
      myhome(){
          location.href="/wayhome"
      },
      myhometwo(){
          location.href="/indent/all"
      },
      jumptheeme(){
         location.href="/theme"
      },
      jumpparticular(){
          location.href="/about"
      }
},
 components:{
       menhurdleu
     }
}
</script>
<style>
/*头部*/
#indexheade {
  width: 100%;
}
#indexheade_top {
  width: 100%;
  height: 0.88rem;
  padding: 0 75px;
  box-sizing: border-box;
  position: relative;
}
#indexheade_top > div:nth-child(1) {
  width: 100%;
  height: 0.88rem;
  text-align: center;
}
#indexheade_top > div:nth-child(1) > span {
  display: inline-block;
  background-image: url(https://nmstatic.tujia.com/static/images/page-index.d83631d.png);
  background-position: 0 -94px;
  width: 1.7rem;
  height: 0.42rem;
  background-size: 139px 115px;
  margin-top: 10px;
}
#indexheade_top > div:nth-child(2) {
  position: absolute;
  top: 10px;
  right: 10px;
  line-height: 13px;
  padding: 10px;
  font-size:0.46rem;
     color: #f60;
}
#Swiper {
  width: 100%;
  height: 6.2rem;
  /* background-color: aquamarine; */
  box-sizing: border-box;
   position: relative;
}
.swiper-container {
width:100%;
height:100%;
} 
.swiper-slide>img{
  display: block;
  width: 100%;
  height:100%;
}
#Swiper_input{
  width:6.5rem;
  height:0.8rem;
  background-color: azure;
  position: absolute;
  left: 30px;
  right: 30px;
  bottom: 52px;
  z-index: 100;
}
#Swiper_input>span{
  text-align: center;
  display: inline-block;
  width:100%;
  height:100%;
  line-height:0.8rem;
}
#mytujia{
  width:100%;
  height:1.94rem;
  /* background-color: blue; */
  padding:0 4%;
  box-sizing: border-box;
}
#mytujia>div{
  width:2.9rem;
  height:1.34rem;
  /* background-color: bisque; */
  float: left;
  padding: 15px;
}
#mytujia>div:nth-child(1)>span{
    margin: 0 auto;
    display: block;
    width: 0.81rem;
    height: 0.81rem;
    background-size: 139px 115px;
    background-image: url(https://nmstatic.tujia.com/static/images/page-index.d83631d.png);
    background-position: -94px 0;
}
#mytujia>div:nth-child(1)>p{
      text-align: center;
    margin-top: 10px;
}
#mytujia>div:nth-child(2)>span{
    margin: 0 auto;
    display: block;
    width: 0.81rem;
    height: 0.81rem;
    background-size: 139px 115px;
    background-image: url(https://nmstatic.tujia.com/static/images/page-index.d83631d.png);
    background-position: -47px -47px;
}
#mytujia>div:nth-child(2)>p{
      text-align: center;
    margin-top: 10px;
}


/*精选主题*/


#theme{
  width:100%;
  height:1.269rem;
      text-align: center;
    background: #fff;
    margin-top: 12px;
    font-size: 14px;
    line-height: 65px;
    color: #666;
}
#theme_swiper{
  width:100%;
  height:4.64rem;
}
#theme_swiper>img{
  display: block;
  width:100%;
  height:100%;
}

/*发现公寓*/

#find{
   width:100%;
  height:1.269rem;
      text-align: center;
    background: #fff;
    margin-top: 12px;
    font-size: 14px;
    line-height: 65px;
    color: #666;
}
#Housing{
  width:100%;
  
}
#Housinglist>li>div:nth-child(1){
  width:100%;
  height:5.52rem;
}
#Housinglist>li>div:nth-child(1)>img{
  width:100%;
  height:100%;
  display: block;
}
#Housinglist>li>div:nth-child(2){
  width:100%;
  height:2.2rem;
  padding: 20px;
  box-sizing: border-box;
  position:relative; 
}
#Housinglist>li>div:nth-child(2)>span{
      vertical-align: middle;
    width: 100%;
    font-size: 17px;
    font-weight: bolder;
}
#Housinglist>li>div:nth-child(2)>p:nth-of-type(1){
    margin-top: 10px;
    color: #999;
    line-height: 16px;
}
#Housinglist>li>div:nth-child(2)>p:nth-of-type(2){
      margin-top: 5px;
}
#Housinglist>li>div:nth-child(2)>p:nth-of-type(2)>span{
  color: rgb(51, 51, 51);
    font-size: 10px;
    line-height: 14px;
    padding: 2px 4px 1px;
    background: rgb(255, 255, 255);
}
#rightmig{
    border-radius: 50%;
    position: absolute;
    top: -30px;
    right: 20px;
    width: 1.2rem;
    height:1.2rem;
    /* border: 1px solid #f1f1f1; */
}
#rightmig>img{
  width:100%;
  height:100%;
  display: inline-block;
   border-radius: 50%;

}
#rightmig>span{
  position: absolute;
    height: 50%;
    width: 50%;
    z-index: 10;
    right: -4px;
    bottom: -8px;
    border-radius: 50%;
    border-radius: 50%;
    background-image: url(https://nmstatic.tujia.com/static/images/best-landlord@2x.b19ddda.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}



/*footer*/

#indexheade_footer{
  width:100%;
 margin-top: 10px;
    height: 2rem;
    padding: 14px 0 10px;
    color: #fff;
    background: #333;
    text-align: center;
    box-sizing: border-box;
}
#indexheade_footer>div:nth-of-type(1){
  display: flex;
}
#indexheade_footer>div:nth-of-type(1)>span{
    display: block;
    position: relative;
    /* -webkit-box-flex: 1; */
    /* -webkit-flex: 1; */
    /* -ms-flex: 1; */
    flex: 1;
    height: 35px;
    line-height: 35px;
    font-size: 15px;
}
#indexheade_footer>div:nth-of-type(2){
  display: flex;
}
#indexheade_footer>div:nth-of-type(2)>span{
    display: block;
    position: relative;
    /* -webkit-box-flex: 1; */
    /* -webkit-flex: 1; */
    /* -ms-flex: 1; */
    flex: 1;
    height: 35px;
    line-height: 35px;
    font-size: 15px;
}
</style>
