<template>
  <div class="record">
    <div class="record-header">
      <div class="header-back" @click="handleClickBack">
        <i class="iconfont icon-arrow-left-c"></i>
      </div>
      <div class="header-switch-wrap">
        <span class="header-switch-label">月</span>
        <mt-switch
          class="header-switch"
          v-model="dateType"></mt-switch>
        <span class="header-switch-label">周</span>
      </div>
      <div class="header-turn">转数（天）</div>
    </div>
    <div class="record-chart">
      <ve-line
        height="200px"
        :extend="extend"
        :legend-visible="false"
        :data="chartData"></ve-line>
    </div>
    <div class="record-date">
      <span class="fl">{{today}}</span>
      <span class="fr record-share"><i class="iconfont icon-share"></i>分享</span>
    </div>
    <div class="record-item">
      <div class="record-item-label">
        <i class="iconfont icon-qialuli"></i>
        消耗
      </div>
      <div class="record-item-value">
        {{todayInfo.consume}}
      </div>
      <div class="record-item-unit">
        卡路里
      </div>
    </div>
    <div class="record-item">
      <div class="record-item-label">
        <i class="iconfont icon-zhuansu"></i>
        最高转速
      </div>
      <div class="record-item-value">
        {{todayInfo.turn}}
      </div>
      <div class="record-item-unit">
        转
      </div>
    </div>
    <div class="record-item">
      <div class="record-item-label">
        <i class="iconfont icon-clock"></i>
        训练时长
      </div>
      <div class="record-item-value">
        {{todayInfo.time}}
      </div>
      <div class="record-item-unit">
        分钟
      </div>
    </div>
  </div>
</template>

<script>

const format = function (fmt) {
  const o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

export default {
  name: 'record',
  data () {
    return {
      dateType: true,
      // 接口获取
      originalData: [
        { 'date': '1', 'turn': 1393 },
        { 'date': '2', 'turn': 3530 },
        { 'date': '3', 'turn': 2923 },
        { 'date': '4', 'turn': 1723 },
        { 'date': '5', 'turn': 3792 },
        { 'date': '6', 'turn': 4593 },
        { 'date': '7', 'turn': 3000 },
        { 'date': '8', 'turn': 1393 },
        { 'date': '9', 'turn': 3530 },
        { 'date': '10', 'turn': 2923 },
        { 'date': '11', 'turn': 1723 },
        { 'date': '12', 'turn': 3792 },
        { 'date': '13', 'turn': 4593 },
        { 'date': '14', 'turn': 3000 },
        { 'date': '15', 'turn': 1393 },
        { 'date': '16', 'turn': 3530 },
        { 'date': '17', 'turn': 2923 },
        { 'date': '18', 'turn': 1723 },
        { 'date': '19', 'turn': 3792 },
        { 'date': '20', 'turn': 4593 },
        { 'date': '21', 'turn': 3000 },
        { 'date': '22', 'turn': 1393 },
        { 'date': '23', 'turn': 3530 },
        { 'date': '24', 'turn': 2923 },
        { 'date': '25', 'turn': 1723 },
        { 'date': '26', 'turn': 3792 },
        { 'date': '27', 'turn': 4593 },
        { 'date': '28', 'turn': 3000 },
        { 'date': '29', 'turn': 1234 },
        { 'date': '30', 'turn': 3456 }
      ],
      // 接口获取
      todayInfo: {
        consume: 1325,
        turn: 2888,
        time: 293
      },
      extend: {
        grid: {
          top: '20',
          bottom: '10'
        },
        xAxis: {
          axisLabel: {
            color: '#fefefe'
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          axisLabel: {
            color: '#fefefe'
          },
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        series: {
          symbolSize: 15,
          lineStyle: {
            color: '#5ecb7b'
          }
        }
      }
    }
  },
  computed: {
    today () {
      return format.call(new Date(), 'yyyy-MM-dd')
    },
    chartData () {
      if (this.dateType) {
        return {
          columns: ['date', 'turn'],
          rows: this.originalData.length > 7
            ? this.originalData.slice(-7, this.originalData.length)
            : this.originalData
        }
      } else {
        return {
          columns: ['date', 'turn'],
          rows: this.originalData
        }
      }
    }
  },
  methods: {
    handleClickBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
  .record-header {
    height: 50px;
    display: flex;
    background: #222224;
    line-height: 50px;
    font-size: 16px;
    color: #fefefe;
    .header-back {
      flex: 0.5;
      text-align: left;
      i {
        font-size: 36px;
      }
    }
    .header-switch-wrap {
      flex: 2;
      text-align: left;
      .header-switch-label {
        vertical-align: top;
      }
      .header-switch {
        display: inline-block;
        margin:  4%;
      }
    }
    .header-turn {
      flex: 1;
      color: #b6b6b6;
    }
  }
  .record-chart {
    background: #222224;
    margin: 20px 0;
  }
  .record-date {
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    text-align: left;
    text-indent: 10px;
    color: #fefefe;
  }
  .record-share {
      margin-right: 10px;
    i {
      margin-right: 5px;
    }
  }
  .record-item {
    width: 100%;
    height: 50px;
    display: flex;
    margin-bottom: 15px;
    line-height: 50px;
    font-size: 16px;
    background: #222224;
    color: #5ecb7b;
    .record-item-label {
      flex: 2;
      text-align: left;
      text-indent: 20px;
      i {
        margin-right: 5px;
      }
    }
    .record-item-value {
      flex: 2;
      text-align: right;
      color: #fefefe;
    }
    .record-item-unit {
      flex: 1;
      text-align: right;
      margin-right: 10px;
    }
  }

</style>

<style>
  .mint-switch-input:checked + .mint-switch-core {
    background-color: #56bb37;
    border-color: #56bb37;
  }
</style>
