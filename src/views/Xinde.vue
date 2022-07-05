<template>
  <div id="app">

    <h1>删除</h1>
    <draggable>
      <div v-for="i in one" class="dome" @click="addIcon(i)">
        <span :class="color[0]">-</span>
        <div> {{ i.title }}</div>
        <span>三</span>
      </div>
    </draggable>
    <h1>添加</h1>

    <div v-for="i in two" class="dome" @click="addhappy(i)">
      <span :class="color[1]">+</span>
      <div> {{ i.title }}</div>
    </div>

    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  data() {
    return {
      one: [
        { icon: 'minus', title: '爱心', state: true },
        { icon: 'minus', title: '星星', state: true },
        { icon: 'minus', title: '手机', state: true },



      ],
      two: [
        { icon: 'plus', title: '推车', state: true },
        { icon: 'plus', title: '钻石', state: true },
        { icon: 'plus', title: '小包', state: true }
      ],
      biao: "+",
      color: ['red', 'blue'],

    }
  },
  methods: {
    // 添加展示点击事件
    addIcon(e) {

      console.log(e)
      // console.log(e);
      this.one = this.one.filter(a => {
        return a != e

      })
      // console.log(this.list)

      let arr = []
      arr.push(e)
      // console.log(arr);
      // 取出数组的第一项 给list
      // console.log(this.list);




      this.two.push(arr[0])

    },
    //娱乐购物
    addhappy(i) {
      this.two = this.two.filter(a => {
        return a != i

      })
      //i.state = true//true是把原本i的state的状态赋值为true

      let arr = []
      arr.push(i)
      // console.log(arr);
      // 取出数组的第一项 给list
      // console.log(this.list);

      this.one.push(arr[0])

    }
    // console.log(this.list);
  },

  components: {
    draggable,
  }

}
</script>
<style lang="less" scoped>
/deep/.van-grid-item {
  padding-right: 0;
  margin-top: 0;
}

/deep/.van-grid-item__content {
  display: inline;
  align-items: start;
  vertical-align: middle;

  // /deep/.van-icon{
  // border-radius: 50%;
  //   background: blue;
  //   border: 1px solid;
  // }

  i {
    background: red;
    border: 1px solid;
    border-radius: 50%;
    color: #fff;
  }
}

.two {
  margin-bottom: 20px;

  /deep/.van-grid-item__content {
    i {
      background: blue;
      border: 1px solid;
      border-radius: 50%;
      color: #fff;
    }
  }
}

.myIcon::after {
  content: '三';
  float: right;
}

.ceshi {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.dome {
  display: flex;
  justify-content: space-around;

  .red {
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: 20px;
    background: red;
    border: 1px solid;
    border-radius: 50%;
    color: #fff;
  }

  .blue {
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: 20px;
    background: blue;
    border: 1px solid;
    border-radius: 50%;
    color: #fff;
  }
}
</style>