<template>
  <div class="concat" id="concat">
    <div class="concat-item">
      <div class="concat-item-label">
        <i class="iconfont icon-weibiaoti-"></i>
        {{tel}}
      </div>
      <mt-button
        @click="handleClickPhone"
        type="default"
        size="small"
        class="concat-item-btn">拨打电话</mt-button>
    </div>
    <div class="concat-item">
      <div class="concat-item-label">
        <i class="iconfont icon-duanxin"></i>
        {{email}}
      </div>
      <mt-button
        v-clipboard:copy="email"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
        type="default"
        size="small"
        class="concat-item-btn">复制邮箱</mt-button>
    </div>
    <mt-button
      @click="handleClickBack"
      type="default"
      class="concat-btn">返回</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'concat',
  data () {
    return {
      tel: '18888888888',
      email: '88888888@qq.com'
    }
  },
  mounted () {
    document.getElementById('concat').scrollTop = 0
  },
  methods: {
    handleClickPhone () {
      window.location.href = 'tel://' + this.tel
    },
    onCopy () {
      Toast('复制成功！')
    },
    onError () {
      Toast('复制失败！')
    },
    handleClickBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less">
  .concat {
    position: relative;
    height: 90vh;
    padding: 0;
    .concat-item {
      height: 50px;
      margin-top: 20px;
      font-size: 18px;
      line-height: 50px;
      color: #7ce47e;
      text-indent: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      i {
        font-size: 24px;
        margin-right: 5px;
      }
      .concat-item-btn {
        margin-right: 15px;
        border-radius: 100px;
        background: #7ce47e;
        color: #fefefe;
      }
    }
    .concat-btn {
      width: 60%;
      margin-left: -30%;
      position: absolute;
      bottom: 10px;
      border-radius: 1000px;
      box-shadow: #7ce47e 0 0 10px;
      background: #000000;
      color: #7ce47e;
    }
  }
</style>
