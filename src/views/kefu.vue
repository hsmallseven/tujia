<template>
     <div>
          <div class="service">
           <ul class="dial">
              <li><a href="##"><i class="iconfont">&#xe6f7;</i><p>客服热线</p><span>4001881234</span></a></li>
               <li class="diallitwo"><a href="##" ><i id="overseas" class="iconfont">&#xe6f7;</i><p>境外拨打</p><span>+86-10-80697258转2</span></a></li>
            </ul>
            <ul class="skip">
                <li><a href="##">返回首页</a></li>
                  <li><a href="##">退出登陆</a></li>
                    <li><a href="##">刷新页面</a></li>
                      <li><a href="##">我的收藏</a></li>
            </ul>
            <ul class="skip">
                <li><a href="##">关于途家</a></li>
                  <li><a href="##">网站地图</a></li>
                    <li><a href="##">下载APP</a></li>
                      <li><a href="##">电脑版</a></li>
            </ul>
            <p class="footp">©2019途家网津ICP备17006480号</p>
          </div>
     </div>
 </div>    
</template>
<script>
</script>
<style scoped>
.service{
     
      padding: 0 0.2rem 0 0.2rem;
      text-align: center;
      list-style: none;
       background: #f7f9fb;
          
  }
  .service ul{
      display:flex;
  }
  .service .dial li{
      float:left;
      -webkit-flex: 1 1 auto;
      list-style:none;
      height:0.7rem;
      text-align:left;
      margin-right:0.68rem
  }
  .service li i{
      display:inline-block;
    line-height:0.68rem;
    color: #f60;
    width:0.64rem;
    height:0.64rem;
    margin-left:0.48rem;
    float:left;
      }
      .service .dial p{
          display:inline-block;
          width:1.54rem;
          margin:0;
          padding:0;
          float:left;
          margin-left:0.08rem;
          height:0.3rem;
          line-height:0.3rem

      }
       .service .dial span{
          display:block;
          margin:0;
          padding:0;
          float:left;
          margin-left:0.08rem;
          height:0.3rem;
           line-height:0.3rem
      }
      .service .dial a{
          display:block;
          text-decoration:none;
          color:black;
          font-size:0.24rem;
           height:0.7rem;
      }
      .dial a i{
        font-size:0.68rem;
      }
       .service #overseas{
          margin:0
      }
      .skip{
          width:100%;
        
      }
      .skip li{
          list-style:none;
          float:left;
          text-align:center;
          -webkit-flex: 1 1 auto;
          list-style:none;
          height:0.42rem;
          line-height:0.42rem;
          width:25%;
      }
        .service .skip a{
          text-decoration:none;
          color: #999;
          font-size:0.28rem;
          -webkit-flex: 1 1 auto;
           height:0.42rem;
          line-height:0.42rem

      }
      .footp{
    margin-top: 0.4rem;
    padding: 0.2rem 0.2rem 0.1rem;
    line-height: 0.36rem;
    font-size: 0.2rem;
    color: #999;
    text-align: center;
    border-top: 0.02rem solid #e9e9e9;
      }
    .service .dial .diallitwo{
        margin-right:0px;
      }
</style>