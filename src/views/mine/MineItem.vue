<template>
  <div class="mine-item" @click="handleClickRouter">
    <div class="mine-item-label">
      <i class="iconfont" :class="icon"></i>
      <span>{{name}}</span>
    </div>
    <div class="mine-item-arrow">
      <i class="iconfont icon-arrow-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mineItem',
  props: ['icon', 'name', 'url'],
  methods: {
    handleClickRouter () {
      if (this.url) {
        this.$router.push(this.url)
      }
    }
  }
}
</script>

<style lang="less">
  .mine-item {
    width: 90%;
    margin: 0 auto 20px;
    height: 60px;
    border: 1px solid #5ecb7b;
    border-bottom: 5px solid #5ecb7b;
    border-radius: 5px;
    color: #7ce47e;
    line-height: 55px;
    font-size: 18px;
    .mine-item-label {
      float: left;
      i {
        margin-left: 10px;
        font-size: 24px;
        vertical-align: top;
      }
      span {
        margin-left: 10px;
        vertical-align: top;
      }
    }
    .mine-item-arrow {
      float: right;
      i {
        font-size: 36px;
      }
    }
  }
</style>
