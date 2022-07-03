<template>

  <div>
    <div @touchmove="gtouchmove()" @touchend="showDeleteButton(list)" @touchstart="gtouchstart(list)">
      <van-nav-bar left-text="返回" right-text="保存" left-arrow @click-left="onClickLeft" @click-right="onClickRight"
        v-if="display" />
      <van-search v-model="value" placeholder="请输入搜索关键词" />
      <p>引用展示</p>


      <van-grid :gutter="10" :border="false">
        <draggable class="ceshi">
          <van-grid-item v-for="i in list" :badge="fatherState" @click="addIcon(i)" :key="i.title" :icon="i.icon"
            v-model="list" animation="300" class="table-typeset-model" :text="i.title" />
        </draggable>
      </van-grid>


      <p>娱乐购物</p>

      <van-grid :gutter="10" :border="false">
        <van-grid-item v-for="i in happyList" :badge="i.state ? '' : sonState" @click="addhappy(i)" :key="i.title"
          :icon="i.icon" :text="i.title" />
      </van-grid>

      <p>财富管理</p>
      <van-grid :gutter="10" :border="false">
        <van-grid-item v-for="i in moneyList" :badge="i.state ? '' : sonState" @click="addhappy(i)" :key="i.title"
          :icon="i.icon" :text="i.title" />
      </van-grid>
    </div>


  </div>

</template>
<script>
// import { nextTick } from 'process';

import draggable from 'vuedraggable'
import { Dialog } from 'vant';
export default {
  data() {
    return {
      value: '',
      list: [
        { icon: 'like-o', title: '爱心', state: true },
        { icon: 'star-o', title: '星星', state: true },
        { icon: 'phone-o', title: '手机', state: true },
        { icon: 'fire-o', title: '火狐', state: true },
        { icon: 'coupon-o', title: '文件', state: true },
        { icon: 'cart-o', title: '推车', state: true },
        { icon: 'gem-o', title: '钻石', state: true },
        { icon: 'bag-o', title: '小包', state: true },
      ],
      happyList: [
        { icon: 'like-o', title: '爱心', state: false },
        { icon: 'star-o', title: '星星', state: false },
        { icon: 'phone-o', title: '手机', state: false },
        { icon: 'fire-o', title: '火狐', state: false },
        { icon: 'music-o', title: '音乐', state: false },
        { icon: 'underway-o', title: '闹钟', state: false },
        { icon: 'video-o', title: '电影', state: false },
        { icon: 'bill-o', title: '钱包', state: false },
        { icon: 'tv-o', title: '电视', state: false },
        { icon: 'envelop-o', title: '信件', state: false },
        { icon: 'flower-o', title: '小花', state: false },
        { icon: 'cashier-o', title: '电脑', state: false },
      ],
      moneyList: [
        { icon: 'coupon-o', title: '文件', state: false },
        { icon: 'cart-o', title: '推车', state: false },
        { icon: 'gem-o', title: '钻石', state: false },
        { icon: 'bag-o', title: '小包', state: false },
        { icon: 'after-sale', title: '花呗', state: false },
        { icon: 'records', title: '借呗', state: false },
        { icon: 'discount', title: '信用卡', state: false },
        { icon: 'aim', title: '芝麻信用', state: false },
        { icon: 'logistics', title: '余额宝', state: false },
        { icon: 'free-postage', title: '邮政', state: false },
        { icon: 'points', title: '网贷', state: false },
        { icon: 'calendar-o', title: '定期', state: false },

      ],

      fatherState: '',
      sonState: '',
      display: false,
      // 节流阀呀
      jieliu: false,
      show: false
    }
  },

  methods: {
    showNotify() {
      this.$dialog.alert({
        message: '弹窗内容',
      });
    },
    // 添加展示点击事件
    addIcon(e) {
      console.log(e)
      if (!this.jieliu) return
      // console.log(e);
      this.list = this.list.filter(a => {
        return a != e

      })
      // console.log(this.list)

      this.moneyList.forEach(item => {


        if (item.title == e.title) {
          item.state = false
        }
      })
      this.happyList.forEach(item => {
        if (item.title == e.title) {
          item.state = false
        }
      })
      // console.log(this.moneyList)

    },
    //娱乐购物
    addhappy(i) {
      // console.log(i)
      // 如果当前的i的状态为true 就不做操作
      if (!this.jieliu | i.state) return
      // console.log(arr[0]);
      if (this.list.length > 12) {
        //alert('首页区块最多添加13个应用，不能再添加')
        Dialog.alert({
          message: '首页区块最多添加13个应用,超出的部分清先移除再添加',
        }).then(() => {
          // on close
        });
        this.show = true
        // i.state = fasle
        return
      } else {
        // 等于true就可以让引用展示  出现效果
        i.state = true

        let arr = []
        arr.push(i)
        // console.log(arr);
        // 取出数组的第一项 给list
        // console.log(this.list);
        this.list.push(arr[0])

      }
      // console.log(this.list);
    },

    // 返回按钮点击事件
    onClickLeft() {
      this.display = false
      this.iconCheng()
    },
    // 右边按钮点击事件
    onClickRight() {
      this.display = false
      this.iconCheng()
    },
    // 展示方法
    newShow() {

      // 引用展示
      this.fatherState = '-',


        this.list.forEach(e => {
          this.happyList.forEach(i => {
            if (e.title === i.title) {

              i.state = e.state
            } else {
              this.sonState = '+'
            }
          })
        })
      // 子级展示
      this.list.forEach(e => {
        this.moneyList.forEach(i => {
          if (e.title === i.title) {
            i.state = e.state
          } else {
            this.sonState = '+'
          }
        })
      })
    },
    // 点击取消按钮 清空icon图标
    iconCheng() {
      this.sonState = ''
      this.fatherState = ''
    },


    //长按事件（起始）
    gtouchstart(item) {
      // console.log('按下了')


      var self = this;
      this.timeOutEvent = setTimeout(function () {
        self.longPress(item);
      }, 500); //这里设置定时器，定义长按500毫秒触发长按事件
      return false;
    },
    //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
    showDeleteButton() {


      clearTimeout(this.timeOutEvent); //清除定时器
      if (this.timeOutEvent != 0) {
        //这里写要执行的内容（如onclick事件）
        // console.log("点击但未长按");
        // console.log();



      }
      return false;
    },
    //如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
    gtouchmove() {
      // console.log('移动了')

      clearTimeout(this.timeOutEvent); //清除定时器
      this.timeOutEvent = 0;


    },
    //真正长按后应该执行的内容
    longPress(val) {
      this.timeOutEvent = 0;
      //执行长按要执行的内容，如弹出菜单
      // console.log("长按");

      // 渲染
      this.newShow()
      // 长按显示 修改展示内容
      this.display = true
      // 长按就把节流阀打开
      this.jieliu = true
      //this.addIcon()
    },
  },

  components: {
    draggable,
    [Dialog.Component.name]: Dialog.Component,
  },

}
</script>
<style>
.my_icon {
  font-family: 'minus';
}

.ceshi {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

}
</style>