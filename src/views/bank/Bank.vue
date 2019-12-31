<template>
  <div class="sort">
    <mt-navbar
      fixed
      v-model="selected"
      style="background: #030303">
      <mt-tab-item id="1">竞速达人榜</mt-tab-item>
      <mt-tab-item id="2">锻炼达人榜</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <load-more :list="list" domId="loadMore1"></load-more>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <load-more :list="list" domId="loadMore2"></load-more>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import LoadMore from './LoadMore'
export default {
  name: 'bank',
  data () {
    return {
      list: [],
      selected: '1'
    }
  },
  components: {
    LoadMore
  },
  created () {
    // 接口请求数据
    for (let i = 1; i <= 20; i++) {
      this.list.push({
        id: i,
        sort: i,
        name: '坚强的猪',
        bank: 5,
        turn: 1366110000,
        avatar: 'http://placehold.it/100x100/7ce47e/ffffff'
      })
    }
  },
  watch: {
    selected (val, oldVal) {
      // 分别请求竞速达人榜与锻炼达人榜数据
      if (val === '1') {
        this.list = this.list.map(item => {
          return {
            ...item,
            id: item.id - 10,
            sort: item.sort - 10
          }
        })
      } else {
        this.list = this.list.map(item => {
          return {
            ...item,
            id: item.id + 10,
            sort: item.sort + 10
          }
        })
      }
    }
  }
}
</script>

<style lang="less">
.sort {
  background: #030303;
  .spin-bank {
    margin-top: 10px;
    display: inline-block;
    vertical-align: top;
  }
  .spin-bank-loading {
    margin-left: 10px;
    font-size: 16px;
    line-height: 30px;
    color: #ccc;
  }
  .mint-tab-item {
    color: #fefefe;
    &.is-selected {
      border-bottom: none;
      color: #6ddf95;
    }
    .mint-tab-item-label {
      font-size: 14px;
    }
  }
  .bank-item-wrap {
    margin-top: 48px;
  }
}
</style>
