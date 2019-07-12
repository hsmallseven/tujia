<template>
    <div class="all">
          <div class=" orderdetails">您目前没有订单all</div>
          <router-view/>
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
    
       .orderdetails{
       padding: 0.8rem 0;
       text-align: center;
       color: #888;
       font-size:0.28rem;
    }

</style>