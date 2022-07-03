<template>
  <div class="cropper" :style='{ width: `${imgObj.width}px`, height: `${imgObj.height}px` }'>
    <vueCropper ref="cropper" :img="option.img" :outputSize="option.outputSize" :outputType="option.outputType"
      :canScale='option.canScale' :autoCrop='option.autoCrop' :autoCropWidth='option.autoCropWidth'
      :autoCropHeight='option.autoCropHeight' :canMoveBox='option.canMoveBox' :canMove='option.canMove'
      :centerBox='option.centerBox' :info='option.info' :fixedBox='option.fixedBox' @realTime='realTime'></vueCropper>
  </div>
  
</template>
<script>
import { VueCropper } from 'vue-cropper'
export default {
  data() {
    return {
      option: {
        img: require('../assets/preview.jpg'), // 裁剪图片地址，这里可以本地图片或者链接，链接不用require
        outputSize: 1, // 裁剪生成图片质量
        outputType: 'jepg', // 裁剪生成图片格式
        canScale: true, // 图片是否允许滚轮播放
        autoCrop: true, // 是否默认生成截图框 false
        info: false, // 是否展示截图框信息
        autoCropWidth: 200, // 生成截图框的宽度
        autoCropHeight: 200, // 生成截图框的高度
        canMoveBox: true, // 截图框是否可以拖动
        fixedBox: true, // 固定截图框的大小
        canMove: false, // 上传图片是否可拖动
        centerBox: true, // 截图框限制在图片里面
      },

    }
  },
  components: {
    VueCropper
  },
  watch: {
    'option.img': {
      handler: function (val) {
        const that = this
        const img = new Image()
        img.src = val
        img.onload = function () {
          that.imgObj.width = this.width
          that.imgObj.height = this.height
        }
      },
      immediate: true
    }
  },

 
}
</script>
<style lang="less" scoped>


</style>

