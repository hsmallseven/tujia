<template>
  <div class="about">
    <!--头部-->
    <header>
        <div>
          <span>
              房屋详情
          </span>
        </div>
        <div>
          <i></i>
          <i></i>
        </div>
        <div></div>
    </header>
    <!--图片详情-->
    <div id="detailimg">
          <div id="theme_swiper">
          <div class="swiper-container">
          <div class="swiper-wrapper" >
            <div class="swiper-slide"  v-for="(item,index) in imglist" :key="index">
              <img :src="item.albumUrl" alt="">
              </div>
          </div>
        </div>
    </div>
        <!-- <img src="" alt=""> -->
        <!-- <div id="detailimg_top"> -->
          <div>
            <i></i>
          </div>
          <div>
            <i></i>
          </div>
        <!-- </div> -->
    </div>


    <!--信息-->
    <div id="detailmiddle">
        <div class="detailtext">
          <h3>{{data.unitName}}</h3>
        </div>
        <div id="detailtext1"> 
            <ul>
              <li>
                <p></p>
                <h3>{{data.roomCountSummary}}</h3>
                <p>{{data.houseTypeName}}{{data.grossArea}}平米</p>
                
              </li>
              <li>
                <p></p>
                <h3>{{data.bedSummary}}</h3>
                <p>{{data.bedDescriptions}}</p>
                
              </li>
            </ul>
        </div>
        <div id="detailmain">
            <div id="detailmain_exe1">
                <img :src="data.landlordInfo.logoUrl" alt="">
                <div>
                  <h4>{{data.landlordInfo.hotelName}}</h4>
                  <p>{{data.businessTypeName}},实名认证</p>
                </div>
                <div>
                    &gt;
                </div>
            </div>
            <div id="detailmain_exe2">
                
            </div>
        </div>
        <!--房屋位置-->
        <div id="houselocation">
            <div>
              <h1>房屋位置</h1>
              <div>
                <img src="https://api.map.baidu.com/staticimage?width=670&height=200&center=118.77943,32.041607&zoom=16&markers=118.77943,32.041607&markerStyles=-1,https://staticfile.tujia.com/mobile/images/h5/housedetail/mapicon.png" alt="">
                <p id="houselocation_p">
                  <i></i>
                  <span>{{data.address}}</span>
                </p>
              </div>
            </div>
        </div>
    </div>


      <!--房屋详情-->
      <div id="housedetail">
          <h1>房屋详情</h1>
          <h2>房屋描述</h2>
          <div id="housedetail_div" ref="detailtext">{{data.introduction}}</div>
          <div id="houseopen">
            <span @click="open" ref="open">展开全部</span>
          </div>
      </div>


      <!--设施服务-->
      <div id="services">
        <h1>
            设施服务
        </h1>
        <div>
            <div id="services_P">
              <p>
                  <i></i>
                  无限网络
              </p>
            </div>
        </div>
      </div>

      <!--房屋规则-->
      <div id="Rules">
          
      </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
    data(){
      return {
        houseopen:"展开全部",
        imglist:[],
        data:[]
      }
    },
    created(){
      
      this.$axios.get("http://localhost:3000/"+this.$route.params.id).then((res)=>{
        this.data=res.data[0]
        this.imglist=res.data[0].pictureList;
        console.log(res.data)
        console.log(this.data.landlordInfo.hotelName)
      })
    },
    watch:{
      imglist(){
                          this.$nextTick(()=>{
					var mySwiper = new Swiper ('.swiper-container', {
				    loop: true, // 循环模式选项
				    autoplay: {
				    delay: 1000,    
				     disableOnInteraction: false,
				    },
	     		})      
      });
      }
    },
    methods:{
      open(){
        if(this.$refs.open.innerText==="展开全部"){

          this.$refs.detailtext.style.height="auto";
          this.$refs.open.innerText="收起"
        }else{
           this.$refs.detailtext.style.height="0.64rem"
             this.$refs.open.innerText="展开全部"
        }

      },
    },
    mounted(){
    },
}
</script>
<style>
    header{
    position: relative;
    height: 0.88rem;
    background: #f5f5f5;
    }
    header>div:nth-child(1){
    position: absolute;
    left: 0;
    right: 0;
    padding: 0 75px;
    box-sizing: border-box;
    height: 100%;
    overflow: auto
    
    }
    header>div:nth-child(1)>span{
    line-height: 44px;
    display: block;
    text-align: center;
    font-size: 15px;
    color: #000;
    }
     header>div:nth-child(2){
           position: absolute;
    left: 0;
    top: 0;
    padding: 14.5px 10px 14px 20px;
    box-sizing: border-box;
     }
      header>div:nth-child(2)>i:nth-child(1){
            display: inline-block;
    width: 8px;
    height: 15px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAeCAYAAAAl+Z4RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDg0ODFCNDY0MTM1MTFFOEIzQjVEMjZEQ0NBNzE4NDEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDg0ODFCNDU0MTM1MTFFOEIzQjVEMjZEQ0NBNzE4NDEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQjAyQ0JCNjRBQTUxMUU3QjMyQzgwQkFDQjFERDlBQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQjAyQ0JCNzRBQTUxMUU3QjMyQzgwQkFDQjFERDlBQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsPKli8AAAGQSURBVHjanJVJSwNBFISTTozLjxIEEQXBGOMuuBHBgwuKnsWLB4OoICiGKHFL3AUR8WfpydHJWA1voBh6Znps+A6vkqppul93p71SKunIgSoogK3sP8wNkJd6WSUwt4BrMuvRsA3IiHmItDOwoRKYi6TVgF69prIwX4AR0q7AHHB1oWLM52CctDqY9s1RAdpcAVOk3Unt8h9NAWlwCmZIuwcTQbMpwDfPkvYo5l/TVFXAfAzmSXuWNfgJWyhF5iOwQL+9glHgRG2TEvMBWCT9TZrGiWsSHbADlkh7l4Pi2LSoDlih+gMMgm/bA6ICC9QW01zGgDLVnbJ4HUkCtsEuaV3gxTbEn+4m2CO9GzyBdtsAPdbBPtU90oWttgF6rIFDqntlJjnbAA+sSlf6ow88hIWYtsyTxjohrR/cmkLC9tyT1q6QNgBugiFRTePJ4aqSVpArLWsT4IeU5Ab2R1Eu2UzKsm2bElIjbRhc6hDbl8mVm1h/dVK0MfCZ5OC4ciPXScsnfRtduZm/5K0o/wkwAJjyTcagXwZrAAAAAElFTkSuQmCC);
    background-size: 8px 15px;

      }
       header>div:nth-child(2)>i:nth-child(2){
             display: inline-block;
    margin-left: 5px;
    width: 32px;
    height: 15px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAeCAYAAACc7RhZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDg0ODFCNDI0MTM1MTFFOEIzQjVEMjZEQ0NBNzE4NDEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDg0ODFCNDE0MTM1MTFFOEIzQjVEMjZEQ0NBNzE4NDEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQjAyQ0JCNjRBQTUxMUU3QjMyQzgwQkFDQjFERDlBQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQjAyQ0JCNzRBQTUxMUU3QjMyQzgwQkFDQjFERDlBQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqxLGD0AAAWKSURBVHjazFkJbBVVFJ1PRwsGtCAgKC1VgmhdIlVQcYUqIiVuFRut1GgVNO5GWTSiGLUGY9S4oxKj7IhgoFXUFNPEErGKawTZxGgCUhFFqVaknpucSW6ub7bvr+lNTv7Mm/fezLvvLufdn2m/zstG9gPOAy4HTgMGAH8CXwNvAwuAL72Ol2eBG9T9I8C0NBP4/K0Feqn2SRH9q4H7gCLz7ADgROIe4C32+yjlouQdJwGFCfoOMvdHAeMj+u8DtgCf8trL0AK2mgVlHINPAGYDQ1MsRl7yHHdld4L+ZwGvOpSba1lP612bVAG3Ao/S9ANpBxqBN4F1QA/gFKASONSM3wBcRs2HSRHdpof3/8h2YIgf06kr8DxwlWkXP79bNGjaFwFTgatp/v3ZPhhYzfYFIe+6xiy+AXgCaM3RgnsC04FjeX8IUBGlgN7ACuBk1bYNuBF4I2JcG/ACFypWcy0tSpQ5j377kGPcYHX9O3Ah8FuOd/1jYJOOIYECxE8LTOfHzeLfBSbQdJLIL8BEoJ6xoycV8SDQBKyKGPtTByxeZLO57+Kr9GHlJvERYBh3chrNuirlSyUmDGesKAEmxyxeyxXA3BwtfhxQF5YGw3bwXGA0sFi5xREpXyymvxE4nXMt9DqR+IzmVjJKCYtVe4vDjLRC9gLfmed/8PfnmMU3KLPfyV9R3KyQ/D9STFi1SSZbGTF/8F16vjWSBqMUkETazUsGdtBmdSPJqQHOcHzjX8AIoDnFnBmfO1xOJtfZpAtdp4qx5KAYej4TGBUzp8xRQSLU5JOgbHWwrz7MzWnkQGBKTJ8dzApRMpQfWBnBCoU0fUiLCGQkA/d6R/8RJHQXMC6JNEcFwX4h2SFKChKM+SJEAccDV3J3wgJtK8nWLKZSsZAyoFj1KTMKGM4sdqZjvr/9TmTuU5j2XCI7PYfYxbY84Hz6vlVkIJK6HzDZbh+5yUtC9KIUsJGnsjhpNkxxXEz/pNR2AznAPF4HMoBmXxNyYuyveMzD5tlKKmVtEh7QSuqYRtqyGKPlM2AZsJTXgeQDY7josdz9KM7vOeLXDOD+NERIixxwLuX1+8CdCcb041kikPE8i4fJ9ebILGnuVMaFSlOv0KlP5jzSkcIPNhszIyzNJJEJqtjxY8Ix23jiCsaNiem/mx8/jOlMDi0fsOJjF/8tiy6FPDGGHXcD2Z+uk5UCCsnhPWUBSUX3HR3TdyIXtga4CzjcRmxgOTnLIPr39og1NJn7qmwVUK6uhaJ+kkIB76nrc+jLUdWgopAj7O3AYczh9YzkwgZfAx4LmW+ZuZ/kcvkkMeBiUwjZm0IB9dw5CVrdqYS6BOOkuLqEWWCdCXDVtJaSmDkaSfACal7MsbPTWIAQm7PV/dKUFrSDfhzIJRF9v2KV6Wgu7l4u3mfkl3T4A32+JIESxUqeNm3TFQtMtIAKBhCRX7mj9nnYwSiQ+er6IlNX1CI+Xat2XBjck1x0HalxNzNmVUSJzWNlqkXdD2R8+ZcC7IfnqYJEIFIG28P8upOMbJHDXz1HnbCN173I3ryQE2iQAbaQ/d0C9DX9dnFnj+HBpzEms9Satsk61viqBKWPscVMQ2WOSfMV2dDyjdWuCpz5CUz2RXOwseYsGeUV4HXDJrs6CjlanmHMGML77iwBlmsFCJ0tNb5SExLwlhtqGhQxmx28PO1533VwmkP//z6E9VWbthZzL/9Y3Qy8o9rG0qXmB/8LHEd+nGcqLKvp+7mW2xxngrl0uc8ZbJdQAYGUkpF6qjxX6qgRSBX6Zcc7F/LoH4gQupKM+m9Qyt1PpawGZSsFDlMdRSK0OYKPrIiZdxNPg3scz/qyhtBHxyff+Ipo/A5y8N4pqHIupOE/jG2hiU8NWXyw4zagev8IMABgWTh29dDSzAAAAABJRU5ErkJggg==);
       background-size: 32px 15px;
       }


       /*图片详情*/
       #detailimg{
         width:100%;
         height:5.52rem;
         /* background-color: aquamarine; */
             position: relative;

       }
       .theme_swiper{
         width:100%;
         height:100%;
         
       }
       /* #detailimg_top{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 1.92rem;
    pointer-events: none;
       } */
        #detailimg>div:nth-of-type(2){
    position: absolute;
    top: 8px;
    right: 1rem;
    z-index: 9;
    width: 1rem;
    height: 1rem;
    text-align: center;
    line-height: 50px;
        }
        #detailimg>div:nth-of-type(2)>i{
              display: inline-block;
    background-image: url(https://nmstatic.tujia.com/static/images/page-unitDetal.bd91f27.png);
    background-position: -126px -82px;
    width: 0.4rem;
    height: 0.4rem;
    background-size: 165px 160px;
        }
    #detailimg>div:nth-of-type(3){
            position: absolute;
            top: 8px;
            right: 0.3rem;
            z-index: 9;
            width: 1rem;
            height: 1rem;
            text-align: center;
            line-height: 50px;
        }
    #detailimg>div:nth-of-type(3)>i{
    display: inline-block;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0E2NjIxNkM0QUE1MTFFN0IzMkM4MEJBQ0IxREQ5QUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E2NjIxNkQ0QUE1MTFFN0IzMkM4MEJBQ0IxREQ5QUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQTY2MjE2QTRBQTUxMUU3QjMyQzgwQkFDQjFERDlBQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQTY2MjE2QjRBQTUxMUU3QjMyQzgwQkFDQjFERDlBQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgL541IAAAL+SURBVHjaxJdbiE1hFMfPOU4zmcmtcX0glymX3B7cYjCNu4lJbi8jJU0Scsu4PMgLJYQaUwovLpkRSgwipXELMxjjQSdxGsQUM0Mil/Ff9du1mzpnzt5mtlW/s/fZe397rf1961vf/wsXFRWF/qdFElwfKnaLp6JRNIt3olzMSvK+2eIczzbT9ok4IAanEkCmKBXPxTYxUnTmXh+xSFwVZaKrq113rleIhTwbou0osUHUiH0iPVEAWeK2WCV+iSNiEo7CIlsUiwaxWDzAUQ9xl575LLaIQbTpxjtK6ZFNBNnFcRomBzqIa2KaeCkWiBcJurm/uMiXPRR/xHhRRbt4gnYjxAWCsyDyLSinB4pxbmOXm8S52WsxQ8TEWJzHuBZP0q6Gd9eJOWKdMwTWxVt5aLl4n0Ly1osl4jvY+acU2pnzlZxvt5yL6qdQdBI3xQ0PM6habGSsqz20s6GuFDmW1FHGwuyEj2lc6nP6nySAfBuC0VysDLD+3OI4zgLozZ94gAE4vnpFmJ9BW9hdiJys7xtgAP04foy4MnhygAHkcKyyAM7zZ1mAARRyvBKhPH6hlk8IwPlEKqKtG2URTg5zc787QdrBbM05xLkt0Y3OWrCXdcCiW92OAawRY5iGB93LcZNY6wpmWDs4t9VwD9PePvJrSz1gyXhUZIiz7jW7DSyL93cUJeJyIkXkKJfhNEhrA+cZvCsbEbM5mST7JuaybOaJ0ySOX0tDI05BM8wTP1oTpXUE0YC+OyWiPp2XIz7qXceUVHENCseCWMpXpHtwbuL2kpiP0zx6IGVZbvaIIEzpFFjVQmS2Zj0RNjPFBzEdlR3yGoAThI3fW77ijhiQ5Pkh4h4V9RU1/5mfjYnbapHWtWxY7ico2bnI84HiMc5jfndGLe0NVbKCLjZFs6JFhbvOEFm+TE1R3HrK7iamke1u1otjyPJMVtJmKt0OLyLH6/T67SpWJeyiQpRV2+Gc8TpXoz4LzHF2QrvET7GTHAkFFUCIXW/Bv9bpvwIMAJrxp6seHhdvAAAAAElFTkSuQmCC);
    /* background-position: -126px -82px; */
    width: 0.4rem;
    height: 0.4rem;
    background-size: 0.4rem 0.4rem;
        }

        /*信息*/


    #detailmiddle{
      width:100%;
      box-sizing: border-box;
      position: relative;
      padding: 0 20px;
    }
    .detailtext{
      width:100%;
      padding: 28px 0;
      text-align: center;
      font-size: 16px;
          color: #333
      
    }
    #detailtext1{
    /* line-height: 1.6; */
    font-size: 12px;
    overflow: hidden;
    padding: 30px 20px;
    color: #999;
    background: #f7f9fb;
    width: 100%;
    /* -webkit-box-sizing: content-box; */
    box-sizing: content-box;
    margin-left: -20px;
    }
    #detailtext1>ul>li{
    width: 50%;
    display: inline-block;
    /* float: left; */
    text-align: center;
    }
    #detailtext1>ul>li>p:nth-of-type(1){
      display: inline-block;
    background-image: url(https://nmstatic.tujia.com/static/images/page-unitDetal.bd91f27.png);
    background-position: -126px -56px;
    width: 21px;
    height: 24px;
    background-size: 165px 160px;
    }
     #detailtext1>ul>li>h3:nth-of-type(1){
           color: #333;
    font-size: 14px;
    padding: 5px 0;
    box-sizing: border-box;
     }
     #detailtext1>ul>li:nth-child(2)>p:nth-of-type(1){
           display: inline-block;
    background-image: url(https://nmstatic.tujia.com/static/images/page-unitDetal.bd91f27.png);
    background-position: -126px -32px;
    width: 24px;
    height: 22px;
    background-size: 165px 160px;
     }
     #detailmain{
    overflow: hidden;
    padding: 26px 0 22px;
    font-size: 11px;
    color: #999;
    box-sizing: border-box;
    line-height: 1.6;
     }
     #detailmain_exe1{

     }
     #detailmain_exe1>img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /* border-radius: 50%; */
    overflow: hidden;
    float: left;
    margin-right: 15px;
  
     }
      #detailmain_exe1>div:nth-of-type(1){
        float: left;
        width:5rem;
      }
     #detailmain_exe1>div:nth-of-type(1)>h4{
           width: 90%;
    overflow: hidden;
     text-overflow: ellipsis; 
   white-space: nowrap; 
     letter-spacing: 0; 
    font-size: 16px;
    line-height: 16px;
    color: #333;
    display: inline-block;
     }
     #detailmain_exe1>div:nth-of-type(2){
           float: right;
    line-height: 40px;
    width: 0.38rem;
    height:0.8rem;
    text-align: center;
    font-size: 16px;
     }
     /*房屋信息*/
     #houselocation>div:nth-child(1){
           position: relative;
    padding: 0 20px;
    box-sizing: border-box;
     }
      #houselocation>div:nth-child(1)>h1{
            margin-top: 9px;
    line-height: 56px;
    font-size: 17px;
    overflow: hidden;
      }
      #houselocation>div:nth-child(1)>div:nth-of-type(1)>img{
              width: 100%;
              position: relative;
      }
      #houselocation>div:nth-child(1)>div:nth-of-type(1)>p{
            padding-top: 20px;
            box-sizing: border-box;
            display: flex;
      }
      #houselocation_p>i{
          display: inline-block;
    background-image: url(https://nmstatic.tujia.com/static/images/page-unitDetal.bd91f27.png);
    background-position: -104px -69px;
    width: 0.38rem;
    height: 0.48rem;
    background-size: 165px 160px;
      }
      #houselocation_p>span{
        padding-left: 10px;
    font-weight: 700;
    overflow: hidden;
        line-height: 1.6;
      }

      /*房屋详情*/

    #housedetail{
    position: relative;
    padding: 0 20px;
    box-sizing: border-box;
    }
      #housedetail>h1{
          margin-top: 9px;
    line-height: 56px;
    /* font-size: 17px; */
    overflow: hidden
      }
       #housedetail>h2{
             margin-top: 14px;
       }
       #housedetail_div{
      height: 0.64rem;
      overflow: hidden;
       }
       #houseopen{
              line-height: 72px;
    text-align: center;
    color: #fd8238;
       }

       /*设施服务*/
       #services{
              position: relative;
    padding: 0 0.2rem;
    box-sizing: border-box;
       }
       #services>h1{
    margin-top: 0.18rem;
    line-height: 1.12rem;
    font-size: 0.34rem;
    overflow: hidden;
       }
       #services_P>p{
    width: 24%;
    display: inline-block;
    text-align: center;
    font-size: 0.22rem;
    margin-bottom: 0.24rem;
    color: #555;
        margin-bottom: 0.6rem;
       }
        #services_P>p>i{
    width: 0.5rem;
    height: 0.5rem;
    display: block;
    background-repeat: no-repeat;
    background-image: url(https://nmstatic.tujia.com/static/images/house-ico.ccf14a8.png);
    background-position: -4.16rem -4.68rem;
    background-size: 5.68rem 5.16rem;
    margin-left: 35%;
    /* transition:translateX(-60%); */
        }
</style>
