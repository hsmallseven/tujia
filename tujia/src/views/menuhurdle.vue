<template>
<transition name="dong">
       <div class="bigmenu" v-show="flag" >
            <div class="menuall" >
                   <div class="return"  v-on:click.stop="back()"></div>
                   <ul class="menuclass" >
                   <router-link to=""> <li class="menuli1"><i></i>首页</li></router-link>
                    <router-link to=""><li class="menuli2"><i></i>搜索附近</li></router-link>
                     <router-link to=""><li class="menuli3"></li></router-link>
                      <router-link to=""><li class="menuli4"><i></i>我的</li></router-link>
                       <router-link to=""><li class="menuli5"><i></i>订单</li></router-link>
                        <router-link to=""><li class="menuli6"><i></i>收藏</li></router-link>
                        <router-link to=""> <li class="menuli7"><i></i>消息</li></router-link>
                         <router-link to=""> <li class="menuli8"><i></i>退出登录</li></router-link>
                          <router-link to=""> <li class="menuli9"></li></router-link>
                           <router-link to=""><li class="menuli10"><i></i>意见反馈</li></router-link>
                   </ul>
            </div>
            <div class="menuallop" ></div>
       </div>
 </transition>      
</template>
<script>
export default {
   data(){
       return{
           flag:true,
     }
   },
   methods:{
        back(){
           this.flag=false
        }
   }

}
</script>
<style scoped>
.dong-enter-active {
  transition: all .3s ease;
}
.bigmenu{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
     z-index:998;
}
.menuallop{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    opacity:0.3;
    background-color: rgba(0, 0, 0, .7);
    z-index:998;
}
.menuall{
    width:55%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0.9rem 0.4rem 0.9rem 0.9rem;
    background:white;
    overflow-y: auto;
    box-sizing: border-box;
    height:100%;
    z-index:999;
}
.return{
    display: inline-block;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 16px;
    height: 16px;
    background-image: url("https://staticfile.tujia.com/mobile/images/h5/personcenter/page-menu.png");
    background-size: 70px 52px;
    background-position: -18px 0;
}
.menuclass a{
    color: #333;
}
.menuli1 i{
    display: inline-block;
    background-image: url("https://staticfile.tujia.com/mobile/images/h5/personcenter/page-menu.png");
    background-size: 70px 52px;
    width: 16px;
    height: 14px;
    background-position: -36px 1px;;
    margin-right:16px;
}
 a{
 text-decoration: none;
  font-size:14px;
}
.menuli1{
    position: relative;
    line-height: 16px;
    vertical-align: top;
    width: 100%;
    display: inline-block;
    margin-bottom: 30px;
    height: 16px;
}
.menuli2{
    position: relative;
    line-height: 16px;
    vertical-align: top;
    width: 100%;
    display: inline-block;
    margin-bottom: 30px;
    height: 16px;
}
.menuli2 i{
    display: inline-block;
    background-image: url("https://staticfile.tujia.com/mobile/images/h5/personcenter/page-menu.png");
    background-size: 70px 52px;
    width: 16px;
    height: 14px;
    background-position: -0px 0;
    margin-right:16px;
}
.menuli3{
     vertical-align: top;
      display: inline-block;
      width: 100%;
      position: relative;
        margin-bottom: 30px;
        height: 1px;
        background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0.5,transparent),color-stop(0.5,#e9e9e9),to(#e9e9e9));
}
.menuli4{
    position: relative;
    line-height: 16px;
    vertical-align: top;
    width: 100%;
    display: inline-block;
    margin-bottom: 30px;
    height: 16px;
}
.menuli4 i{
    display: inline-block;
    background-image: url("https://staticfile.tujia.com/mobile/images/h5/personcenter/page-menu.png");
    background-size: 70px 52px;
    width: 16px;
    height: 14px;
    background-position: -17px -36px;
    margin-right:16px;
}
.menuli5{
    position: relative;
    line-height: 16px;
    vertical-align: top;
    width: 100%;
    display: inline-block;
    margin-bottom: 30px;
    height: 16px;
}
.menuli5 i{
    display: inline-block;
    background-image: url("https://staticfile.tujia.com/mobile/images/h5/personcenter/page-menu.png");
    background-size: 70px 52px;
    width: 16px;
    height: 14px;
    background-position: -54px 0px;
    margin-right:16px;
}
.menuli6{
    position: relative;
    line-height: 16px;
    vertical-align: top;
    width: 100%;
    display: inline-block;
    margin-bottom: 30px;
    height: 16px;
}
.menuli6 i{
    display: inline-block;
    background-image: url("https://staticfile.tujia.com/mobile/images/h5/personcenter/page-menu.png");
    background-size: 70px 52px;
    width: 16px;
    height: 14px;
    background-position: -36px -18px;
    margin-right:16px;
}
.menuli7{
    position: relative;
    line-height: 16px;
    vertical-align: top;
    width: 100%;
    display: inline-block;
    margin-bottom: 30px;
    height: 16px;
}
.menuli7 i{
    display: inline-block;
    background-image: url("https://staticfile.tujia.com/mobile/images/h5/personcenter/page-menu.png");
    background-size: 70px 52px;
    width: 16px;
    height: 14px;
    background-position: -36px -36px;
    margin-right:16px;
}
.menuli8{
    position: relative;
    line-height: 16px;
    vertical-align: top;
    width: 100%;
    display: inline-block;
    margin-bottom: 30px;
    height: 16px;
}
.menuli8 i{
    display: inline-block;
    background-image: url("https://staticfile.tujia.com/mobile/images/h5/personcenter/page-menu.png");
    background-size: 70px 52px;
    width: 16px;
    height: 14px;
    background-position: -54px -36px;
    margin-right:16px;
}
.menuli9{
     vertical-align: top;
      display: inline-block;
      width: 100%;
      position: relative;
        margin-bottom: 30px;
        height: 1px;
        background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0.5,transparent),color-stop(0.5,#e9e9e9),to(#e9e9e9));
}
.menuli10{
    position: relative;
    line-height: 16px;
    vertical-align: top;
    width: 100%;
    display: inline-block;
    margin-bottom: 30px;
    height: 16px;
}
.menuli10 i{
    display: inline-block;
    background-image: url("https://staticfile.tujia.com/mobile/images/h5/personcenter/page-menu.png");
    background-size: 70px 52px;
    width: 16px;
    height: 14px;
   background-position: -18px -18px;
    margin-right:16px;
}
</style>