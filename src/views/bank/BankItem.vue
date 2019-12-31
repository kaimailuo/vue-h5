<template>
  <div class="bank-item" :class="item.sort % 2 === 0 ? (item.sort === 0 ? '' : 'bank-item-odd') : 'bank-item-even'">
    <div class="bank-item-sort">{{item.sort}}</div>
    <div class="bank-item-avatar">
      <img :src="item.avatar" alt="">
    </div>
    <div class="bank-item-name">
      <div class="bank-name-info">{{item.name}}</div>
      <div class="bank-name-sort">
        <i class="iconfont" :class="bankIcon"></i>
        {{bankName}}
      </div>
    </div>
    <div class="bank-item-turn">
      <span class="bank-turn-num">{{item.turn >= 10000 ? `${(item.turn / 10000).toFixed(1)}万` : item.turn}}</span>
      <span class="bank-turn-cir">转</span>
    </div>
  </div>
</template>

<script>
import bankMatch from '../../util/index'
export default {
  name: 'bankItem',
  data () {
    return {

    }
  },
  props: ['item'],
  computed: {
    bankIcon () {
      return bankMatch(this.item.bank, 'class')
    },
    bankName () {
      return bankMatch(this.item.bank)
    }
  }
}
</script>

<style lang="less">
  .bank-item {
    height: 50px;
    display: flex;
    flex-wrap: nowrap;
    &.bank-item-odd {
      background: #000;
    }
    &.bank-item-even {
      background: #323136;
    }
    .bank-item-sort {
      flex: 1;
      font-size: 14px;
      line-height: 50px;
      font-weight: bold;
      color: #6ddf95;
    }
    .bank-item-avatar {
      flex: 0.7;
      display: flex;
      text-align: left;
      align-items: center;
      img {
        width: 90%;
      }
    }
    .bank-item-name {
      width: 0;
      text-align: left;
      flex: 2.3;
      display: flex;
      flex-direction: column;
      line-height: 25px;
      padding-left: 10px;
      .bank-name-info {
        flex: 1;
        font-size: 14px;
        color: #fefefe;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .bank-name-sort {
        flex: 1;
        font-size: 12px;
        color: #6ddf95;
        i {
          vertical-align: top;
        }
      }
    }
    .bank-item-turn {
      flex: 2;
      line-height: 50px;
      color: #6ddf95;
      text-align: right;
      padding-right: 10px;
      .bank-turn-num {
        font-size: 16px;
      }
      .bank-turn-cir {
        margin: 0 5px;
      }
    }
  }

</style>
