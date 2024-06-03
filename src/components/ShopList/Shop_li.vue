<template>
  <li class="shop_li border-1px">
    <a>
      <div class="shop_left">
        <img class="shop_img" :src="shop_src">
      </div>
      <div class="shop_right">
        <section class="shop_detail_header">
          <h4 class="shop_title ellipsis">{{shop_title}}</h4>
          <ul class="shop_detail_ul">
            <li class="supports">保</li>
            <li class="supports">准</li>
            <li class="supports">票</li>
          </ul>
        </section>
        <section class="shop_rating_order">
          <section class="shop_rating_order_left">
            <div class="star star-24">
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item half"></span>
              <span class="star-item off"></span>
            </div>
            <div class="rating_section">
              {{ shop_rating_section }}
            </div>
            <div class="order_section">
              月售{{shop_order_section}}单
            </div>
          </section>
          <section class="shop_rating_order_right">
            <span class="delivery_style delivery_right">{{shop_rating_order_right}}</span>
          </section>
        </section>
        <section class="shop_distance">
          <p class="shop_delivery_msg">
            <span>¥{{ shop_starting_delivery }}起送</span>
            <span class="segmentation">/</span>
            <span>配送费约¥{{ shop_delivery }}</span>
          </p>
        </section>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: "Shop_li",
  props:{
    shop_src:{ //图片连接
      type:String,
      required: true,
    },
    shop_title:{
      type:String,
      default:'xx标题'
    },
    shop_rating_section:{
      type:Number,
      default: 0
    },
    shop_order_section:{
      type:Number,
      default:0
    },
    shop_rating_order_right:{
      type:String,
      default:'平台专送'
    },
    shop_starting_delivery:{
      type:Number,
      default:0
    },
    shop_delivery:{
      type:Number,
      default:0
    }
  }
}
</script>


<style scoped lang="stylus">

</style>