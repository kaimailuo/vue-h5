<template>
  <div class="mine">
    <div class="mine-label">
      <div class="avatar">
        <img src="../../assets/logo.png" alt="">
      </div>
      <div class="name">{{name}}</div>
      <mt-button
        class="mine-btn"
        type="default"
        @click="handleClickEdit"
        size="small">修改昵称</mt-button>
    </div>
    <mine-item icon="icon-mall" name="商城" url="/"></mine-item>
    <mine-item icon="icon-iconfont-jiangbei" name="竞速排行" url="/bank"></mine-item>
    <mine-item icon="icon-shu" name="锻炼轨迹" url="/record"></mine-item>
    <mine-item icon="icon-kefu" name="联系我们" @click.native="clickConcat"></mine-item>
    <mt-popup
      class="mine-pop"
      v-model="editVisible"
      :closeOnClickModal="false"
      pop-transition="popup-fade">
      <mt-field
        class="mine-pop-input"
        placeholder="请输入昵称"
        v-model="name"></mt-field>
      <mt-button
        class="mine-pop-btn mine-pop-save"
        @click="handleClickSave"
        type="default">保存昵称</mt-button>
      <mt-button
        class="mine-pop-btn mine-pop-back"
        @click="handleClickClose"
        type="default">返回</mt-button>
    </mt-popup>
    <mt-popup
      class="mine-pop"
      v-model="concatVisible"
      :closeOnClickModal="false"
      pop-transition="popup-fade">
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
      class="mine-pop-btn mine-pop-back">返回</mt-button>
    </mt-popup>
  </div>
</template>

<script>
import MineItem from './MineItem'
import { Toast } from 'mint-ui'
export default {
  name: 'mine',
  data () {
    return {
      editVisible: false,
      concatVisible: false,
      name: '坚强的猪',
      tel: '18888888888',
      email: '88888888@qq.com'
    }
  },
  components: {
    MineItem
  },
  methods: {
    handleClickEdit () {
      // this.$router.push('/edit')
      this.editVisible = true
    },
    handleClickClose () {
      this.editVisible = false
    },
    handleClickSave () {
      // 修改昵称并保存
      // ...
      this.editVisible = false
    },
    clickConcat () {
      this.concatVisible = true
    },
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
      this.concatVisible = false
    }
  }
}
</script>

<style lang="less" scoped>
  .mine-label {
    width: 90%;
    height: 200px;
    margin: 10px auto 30px;
    padding-top: 30px;
    background: linear-gradient(to right, #5bc676, #306e31);
    border-radius: 5px;
    .avatar {
      width: 70px;
      height: 70px;
      margin: 0 auto;
      img {
        border-radius: 50%;
      }
    }
    .name {
      line-height: 40px;
      font-size: 14px;
      color: #fefefe;
    }
    .mine-btn {
      background: #d9fdd2;
    }
  }
</style>

<style lang="less">
.mine {
  .v-modal {
    opacity: 1;
  }
  .mine-pop {
    width: 100%;
    height: 100%;
    background: #000;
    .mine-pop-input {
      background: #000;
      margin: 20px;
      border-bottom: 1px solid #7ce47e;
      input {
        background: #000;
        color: #7ce47e;
      }
      .mint-cell-wrapper {
        background: none;
      }
    }
    .mine-pop-btn {
      width: 60%;
      position: absolute;
      margin-left: -30%;
      border-radius: 1000px;
    }
    .mine-pop-save {
      bottom: 150px;
      background: #7ce47e;
      color: #fefefe;
    }
    .mine-pop-back {
      bottom: 80px;
      box-shadow: #7ce47e 0 0 10px;
      background: #000000;
      color: #7ce47e;
    }

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
  }
}
</style>
