<template>
  <div>
    <p style="text-align: center;">头部</p>
    <van-grid>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
    <p style="text-align: center;">金刚区</p>
    <van-grid :gutter="10" :border="false">
      <van-grid-item v-for="i in list" @click="changeMore(i)" :key="i.title" :icon="i.icon" :text="i.title" />
    </van-grid>
  </div>
</template>
<script>


export default {
  data() {
    return {
      list: [
        { icon: 'like-o', title: '爱心' },
        { icon: 'star-o', title: '星星' },
        { icon: 'phone-o', title: '手机' },
        { icon: 'fire-o', title: '火狐' },
        { icon: 'coupon-o', title: '文件' },
        { icon: 'cart-o', title: '推车' },
        { icon: 'gem-o', title: '钻石' },
        { icon: 'bag-o', title: '小包' },
        { icon: 'apps-o', title: '更多' },
      ]
    }
  },
  methods: {
    changeMore(i) {
      if (i.title === '更多') {
        this.$router.push({
          path: '/more'
        })
      }
      console.log('11')
    }
  },
}

</script>
<style>
</style>