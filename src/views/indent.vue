<template>
    <div class="all">
         <div class="header">
                 <a class="headerleft" href="##">
                     <i><img src="../assets/left.png"></i>
                     <img src="https://staticfile.tujia.com/mobile/styles/page/img/icon/logo_header.png">
                 </a>
                 <div class="titleskip">
                       <router-link to="/wayhome" class="inland"><div>国内订单</div></router-link>
                       <router-link to="/wayhome"><div>海外·港台</div></router-link>
                 </div>
                  <a href="##" class="headerright">
                       <i class="iconfont">&#xe790;</i>
                  </a>
          </div>
          <ul class="skip">
                <li><a href="##"><span>全部</span></a></li>
                  <li><a href="##"><span>待支付</span></a></li>
                    <li><a href="##"><span>待点评</span></a></li>
                      <li><a href="##"><span>代入住</span></a></li>
          </ul>
          <div class=" orderdetails">您目前没有订单</div>
          <kefu class="margintop"></kefu>
    </div>
</template>
<script>
import kefu from './kefu'
export default{
    components:{
        kefu
    }
}
</script>
<style scoped>
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
      .header{
        width:100%;
        height:0.7976rem;
        background:#ccc;
        text-align:center;
        line-height:0.7976rem;
        font-size:0.3rem;
         color: #000;
          background-color:white;
    }
    .iconfont{
         display:inline-block;
         font-size:0.42rem
     }
     .headerright{
        float:right;
        width:1.1rem;
        height:0.7976rem;
        text-decoration:none;
        line-height:0.7976rem;
        color: #f90;
        text-align:center;
    }
    .skip{
          width:100%;
          height:0.8rem;
          line-height:0.8rem;
          clear:both;
      }
      .skip li{
          list-style:none;
          float:left;
          text-align:center;
          -webkit-flex: 1 1 auto;
          list-style:none;
           height:0.8rem;
          line-height:0.8rem;
          width:25%;
      }
       .skip a{
          text-decoration:none;
          color: #555;
          font-size:0.28rem;
          -webkit-flex: 1 1 auto;
           height:0.8rem;
          line-height:0.8rem;
      }
      .skip span{
          display: inline-block;
           padding: 0 10px;
            height:0.76rem;
      }
      .skip  a span:hover{
          color: #f60;
          border-bottom: 2px solid #f60;
      }
      .titleskip{
          padding: 0.12rem 0.3rem;
           box-sizing:border-box;
           line-height:0.8rem;
           height:0.8rem;
           font-size:0.24rem;
           display:flex;
           float:left;
           margin-left:0.4rem;
           text-align:center;
           width:4.6rem
           
      }
      .titleskip a{
           float:left;
          flex:1;
          height:0.46rem;
          line-height:0.46rem;
          text-align:center;
           border-left-width: 1px;
          color: #fff;
         border-radius: 0 0.1rem 0.1rem 0;
         border: 1px solid #666;
         color: #666;
         text-decoration:none;
      }
       .titleskip .inland{
                border-radius: 0.1rem 0 0 0.1rem;
                background-color: #666;
                  color: #fff;
       }
       .orderdetails{
       padding: 0.8rem 0;
       text-align: center;
       color: #888;
       font-size:0.28rem;
    }
    .margintop{
            margin-top: 0.4rem;
    }
</style>