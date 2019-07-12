<template>
    <div class="big">
           <div class="header">
             <a class="headerleft" href="##">
               <i><img src="../assets/left.png"></i>
                  <img src="https://staticfile.tujia.com/mobile/styles/page/img/icon/logo_header.png">
             </a>
             我的途家
             <a href="##" class=headerright><i class="iconfont">&#xe790;</i></a>
             <div class="bapicture">
                 <img src="https://staticfile.tujia.com/mobile/images/h5/personcenter/head_bg.jpg">
               <div class="frog">
                   <div class="frogsmall"><img src="https://staticfile.tujia.com/mobile/images/h5/person_88.png"></div>
                    <p>18406562312</p>
                    <a href="##" class="badge1">
                        <i><img src="https://staticfile.tujia.com/Mobile/Images/h5/myMenu/icon_Ordinarary.png"></i>
                         普通会员
                    </a>
                    <a href="##" class="approve">通过信用认证，可享信用免押金<i></i></a>
              </div>
           </div>
        <div class="main">
                <ul class="firstul">
                <li><a href="##"><i class="mainli1"></i><p>订单</p><span>查看全部订单</span></a></li>
                <li><a href="##"><i class="mainli2"></i><p>积分</p><span>0积分</span></a></li>
                <li><a href="##"><i class="mainli3"></i><p>红包</p><span>0个</span></a></li>
                <li><a href="##"><i class="mainli4"></i><p>点评</p><span>我的服务您还满意吗</span></a></li>
                <li><a href="##"><i class="mainli5"></i><p>余额</p><span>￥0</span></a></li>
                <li><a href="##"><i class="mainli6"></i><p>途游卡</p><span>￥0</span></a></li>
               </ul>
           
         </div>
         <img  class="notice"src="https://staticfile.tujia.com/mobile/images/h5/personcenter/midbanner_customer.jpg"> 
          <div class="maintwo">
                <ul class="firstultwo">
                <li><a href="##"><i class="mainli1"></i><p>我要出租</p><span>出租房源挣钱</span></a></li>
                <li><a href="##"><i class="mainli2"></i><p>开具发票</p><span>历史发票</span></a></li>
                <li><a href="##"><i class="mainli3"></i><p>收藏</p><span>你的爱都在这里</span></a></li>
                <li><a href="##"><i class="mainli4"></i><p>客服</p><span>24小时服务</span></a></li>
               </ul>
    </div>
          <Kefu></Kefu>
</div>
         <router-view/> 
    </div>
</template>
<script>
import Kefu from './kefu'
export default{
    components:{
         Kefu
    }
}
</script>
<style scoped>
.big{
    height:100%;
}
    .header{
        width:100%;
        height:0.7976rem;
        background:#ccc;
        text-align:center;
        line-height:0.7976rem;
        font-size:0.3rem;
         color: #000;
         background-color:white
    }
    .headerleft{
        float:left;
        width:1.1rem;
        height:0.7976rem;
        text-decoration:none;
        line-height:0.7976rem;
        color: #f90;
    }
    .headerleft img{
        width:0.56rem;
        margin-left:0.06rem; 
    }
     .headerleft i img{
         width:0.15rem;
     }
    .headerright{
        float:right;
        width:1.1rem;
        height:0.7976rem;
        text-decoration:none;
        line-height:0.7976rem;
        color: #f90;
        text-align:center
    }
     .iconfont{
         display:inline-block;
         font-size:0.42rem
     }
    .bapicture{
        width:100%;
        height:3.6rem;
        position:relative;
        margin-bottom:1rem
    }
    .bapicture img{
        width:100%;
    }
    .frog{
        padding: 0.6rem 0 0.4rem 0;
        width:79%;
        height:1.6rem;
        margin:0 0.78rem 0;
        position:absolute;
        top:1.7rem;
        background: #fff url("https://staticfile.tujia.com/mobile/images/h5/personcenter/head_line.png") no-repeat bottom center;
        border-radius: 0.1rem; 
        box-shadow: 0 0 18px 0.5px rgba(63, 73, 84, 0.15);  
        background-size: 100% auto;
    }
    .frog p{
        text-align:center;
        color: #333;
        height:0.5rem;
        width:100%;
        line-height:0.5rem;
        margin-top:0.16rem;
    }
     .frog a{
         text-decoration:none
     }
    .frogsmall{
     width:1.1rem;
     height:1.1rem;
    border-radius: 50%;
    background: #fff;
    border: 0.04rem solid #fff;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
      position:absolute;
        left:50%;
        top:-0.44rem;
        margin-left: -0.64rem;
    }

    .frogsmall img{
        width:1.1rem;
        height:1.1rem;
    }
    .badge1 i{
        width:0.3rem;
        height:0.3rem;
        display:inline-block
    }
    .badge1 i img{
        width:0.3rem;
        height:0.3rem;
    }
  .frog  .badge1{
        font-size:0.2rem;
        background: #3f4954;
        color:white;
        display:inline-block;
        line-height:0.2rem;
        border-radius: 0.18rem;
        padding: 0 0.16rem 0 0.1rem;
        clear:both;
        text-align:center;
        position: relative;
        right: 0;
        top: -0.08rem;
    }
    .approve{
        display:block;
        font-size: 0.26rem;
        color: #fd8238;
        line-height: 0.26rem;
    }
    .approve i{
    display: inline-block;
    width: 0rem;
    height: 0rem;
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    border-left: 0.07rem solid transparent;
    border-right: 0.08rem solid transparent;
    border-top: 0.1rem solid #fd8238;
    position: relative;
    right: 0;
    top: -0.04rem;
    margin-left:0.02rem
    }
    .main{
        margin: 0 0.6rem 0 0.6rem;
    }
    .firstul{
            width:100%;
            list-style:none;
            height:3.68rem;
            
    }
     .firstul li{
         float:left;
         height:1.44rem;
         width: 33.3%;
         text-align: center;
         margin-top: 0.3rem;
     }
     .firstul li .mainli1{
    display: inline-block;
    background:url("https://staticfile.tujia.com/mobile/images/h5/personcenter/index_icons/icon_menu.png") no-repeat;
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
     }
     .firstul a{
         text-decoration:none;

     }
     .firstul li  p{
         display:line-block;
           margin-top: 0.06rem;
           font-size:0.12rem;
            color: #333;
            line-height:0rem;   
     }
     .firstul li  span{
         display:inline-block;
          line-height:0rem;
          margin-bottom:0.06rem ;
          font-size: 0.10rem;
           color: #999;
     }
     .mainli2{
    display: inline-block;
    background:url("https://staticfile.tujia.com/mobile/images/h5/personcenter/index_icons/icon_grade.png") no-repeat;
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
     }
       .mainli3{
    display: inline-block;
    background:url("https://staticfile.tujia.com/mobile/images/h5/personcenter/index_icons/icon_comment.png") no-repeat;
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
     }
       .mainli4{
    display: inline-block;
    background:url("https://staticfile.tujia.com/mobile/images/h5/personcenter/index_icons/icon_balance.png") no-repeat;
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
     }
       .mainli5{
    display: inline-block;
    background:url("https://staticfile.tujia.com/mobile/images/h5/personcenter/index_icons/icon_card.png") no-repeat;
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
     }
       .mainli6{
    display: inline-block;
    background:url("https://staticfile.tujia.com/mobile/images/h5/personcenter/index_icons/icon_rent.png") no-repeat;
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
     }
     .notice{
         width:100%;
         height:1.56rem;
         margin-top: 0.3rem;
     }
   .maintwo{
        margin: 0 0.6rem 0 0.6rem;
    }
     .firstultwo{
            width:100%;
            list-style:none;
            height:3.68rem;
            padding-bottom: 1.6rem;
    }
     .firstultwo li{
         float:left;
         height:1.44rem;
         width: 33.3%;
         text-align: center;
         margin-top: 0.3rem;
     }
     .firstultwo li .mainli1{
    display: inline-block;
    background:url("https://staticfile.tujia.com/mobile/images/h5/personcenter/index_icons/icon_rent.png") no-repeat;
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
     }
    .firstultwo a{
         text-decoration:none;

     }
    .firstultwo li  p{
         display:line-block;
           margin-top: 0.06rem;
           font-size:0.12rem;
            color: #333;
            line-height:0rem;   
     }
     .firstultwo li  span{
         display:inline-block;
          line-height:0rem;
          margin-bottom:0.06rem ;
          font-size: 0.10rem;
           color: #999;
     }
     .mainli2{
    display: inline-block;
    background:url("https://staticfile.tujia.com/mobile/images/h5/personcenter/index_icons/icon_invoice.png") no-repeat;
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
     }
       .mainli3{
    display: inline-block;
    background:url("https://staticfile.tujia.com/mobile/images/h5/personcenter/index_icons/icon_collect.png") no-repeat;
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
     }
       .mainli4{
    display: inline-block;
    background:url("https://staticfile.tujia.com/mobile/images/h5/personcenter/index_icons/icon_tel.png") no-repeat;
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
     }
</style>