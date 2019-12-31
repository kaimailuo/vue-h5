<template>
  <mt-loadmore
    :bottom-method="loadBottom"
    :bottom-all-loaded="allLoaded"
    @bottom-status-change="handleBottomChange">
    <ul class="bank-item-wrap">
      <li class="bank-item-mine">
        <bank-item :item="myData"></bank-item>
      </li>
      <li v-for="item in list" :key="item.id">
        <bank-item :item="item"></bank-item>
      </li>
    </ul>
    <div slot="bottom" class="mint-loadmore-bottom">
      <span v-show="bottomStatus !== 'loading'"
        :class="{ 'rotate': bottomStatus === 'pull' }">↓</span>
      <span v-show="bottomStatus === 'loading'" stytle="color: #fff;">加载中...</span>
    </div>
  </mt-loadmore>
</template>

<script>
import BankItem from './BankItem'
export default {
  name: 'loadMore',
  data () {
    return {
      bottomStatus: '',
      allLoaded: false,
      // 我的数据
      myData: {
        id: 0,
        sort: 0,
        name: '我的名字',
        bank: 1,
        turn: 1366110000,
        avatar: 'http://placehold.it/100x100/7ce47e/ffffff'
      }
    }
  },
  props: ['list', 'domId'],
  components: {
    BankItem
  },
  methods: {
    // 下拉请求数据
    loadBottom (id) {
      setTimeout(() => {
        let lastValue = this.list[this.list.length - 1]
        if (lastValue < 40) {
          for (let i = 1; i <= 10; i++) {
            this.list.push({
              id: lastValue + 1,
              sort: lastValue + 1,
              name: '下拉加载的名字',
              bank: 3,
              trun: 1366110000
            })
          }
        } else {
          this.allLoaded = true
        }
        // this.$broadcast('onBottomLoaded', id)
      }, 1500)
      // this.allLoaded = true // 若数据已全部获取完毕
      // this.$refs[this.domId].onBottomLoaded()
    },
    handleBottomChange (status) {
      this.BottomStatus = status
    }
  }
}
</script>

<style>
  .bank-item-mine {
    border-bottom: 5px solid #7ce47e;
  }
</style>
