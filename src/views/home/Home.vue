<template>
  <div class="home">
    <div class="chart-wrap">
      <ve-gauge
        class="radial-gradient-bg"
        :data="chartData"
        :settings="chartSettings"></ve-gauge>
      <div class="chart-value-wrap">
        <div class="chart-value">
          <i class="iconfont icon-yibiaopan-active"></i>
          <span>{{originData.turn}}</span>
        </div>
      </div>
      <div class="chart-bg chart-bg1"></div>
      <div class="chart-bg chart-bg2"></div>
      <div class="chart-bg chart-bg3"></div>
      <div class="chart-bg chart-bg4"></div>
      <div class="chart-result">腕力:{{originData.strength}}KG</div>
    </div>
    <div class="bank-wrap">
      <div><i class="iconfont" :class="bankIcon"></i></div>
      <div class="bank-cur">当前段位</div>
      <div class="bank-cur-result">{{bank}}</div>
    </div>
    <div class="record-wrap">
      <div class="record-turn">
        <i class="iconfont icon-yibiaopan-active"></i>
        <section>
          <div>{{originData.highestSpeed}}转</div>
          <div>最高转速</div>
        </section>
      </div>
      <div class="record-time">
        <i class="iconfont icon-yibiaopan-active"></i>
        <section>
          <div>{{originData.duration}}秒</div>
          <div>持续时间</div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import bankMatch from '../../util/index'
const LinearGradient = require('zrender/lib/graphic/LinearGradient')
const color = new LinearGradient(0, 0, 1, 0, [{
  offset: 0,
  color: '#5eda6c' // 0% 处的颜色
},
{
  offset: 0.5,
  color: '#e8e53e' // 50% 处的颜色
},
{
  offset: 1,
  color: '#e44822' // 100% 处的颜色
}
]);
const colorSet = [
  [1, color]
  // [0.91, color],
  // [1, '#FFF']
]

export default {
  name: 'home',
  data () {
    return {
      chartSettings: {
        dataName: {
          'inner': '转速'
        },
        dimension: 'type',
        metrics: 'value',
        seriesMap: {
          'outer': {
            radius: '77%',
            pointer: {
              show: false
            },
            detail: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: [
                  [1, '#7f8e89']
                ],
                width: 1,
                opacity: 1
              }
            },
            axisLabel: {
              show: false,
              formatter (v) {
                return v.toFixed(0)
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              length: 20,
              lineStyle: {
                color: '#051932',
                width: 0,
                type: 'solid'
              }
            }
          },
          'turn': {
            min: 0,
            max: 18000,
            splitNumber: 9,
            pointer: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: colorSet,
                width: 15,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: 1
              }
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            detail: {
              show: false
            }
          },
          'inner': {
            min: 0,
            max: 18000,
            splitNumber: 9,
            radius: '65%',
            title: {
              show: true,
              offsetCenter: ['-60%', 98],
              textStyle: {
                color: '#555',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12
              }
            },
            pointer: {
              show: true,
              length: '70%',
              width: 6
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                fontWeight: 'bolder',
                color: '#a6a6a6',
                shadowColor: '#fff',
                shadowBlur: 10
              },
              formatter (v) {
                return v > 0 ? v / 1000 + 'k' : v
              }
            },
            axisTick: {
              length: 10,
              lineStyle: {
                color: '#acacac',
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
            splitLine: {
              length: 15,
              lineStyle: {
                width: 1,
                color: '#acacac',
                shadowColor: '#acacac',
                shadowBlur: 10
              }
            },
            // title: {
            //   textStyle: {
            //     fontWeight: 'bolder',
            //     fontSize: 20,
            //     fontStyle: 'italic',
            //     color: '#fff',
            //     shadowColor: '#fff',
            //     shadowBlur: 10
            //   }
            // },
            detail: {
              show: false
              // formatter (value) {
              //   // var num = Math.round(value)
              //   return `<h1 style="color: #fff;">${value}</h1>`
              // },
              // rich: rich,
              // offsetCenter: ['0%', '55%']
            }
          }
        }
      },
      // 接口数据
      originData: {
        turn: 8000,
        strength: 1000,
        highestSpeed: 6720,
        duration: 41,
        bank: 1
      }
    }
  },
  computed: {
    chartData () {
      return {
        columns: ['a', 'b', 'type', 'value'],
        rows: [
          { type: 'outer', value: 1, a: 1, b: 2 },
          { type: 'turn', value: 1, a: 1, b: 2 },
          { type: 'inner', value: this.originData.turn, a: 1, b: 2 }
        ]
      }
    },
    bankIcon () {
      let bankIcon = bankMatch(this.originData.bank, 'class')
      return bankIcon
    },
    bank () {
      let bank = bankMatch(this.originData.bank)
      return bank
    }
  }
}
</script>

<style lang="less">
  .home {
    background: #030303;
  }
  .radial-gradient-bg {
    background: radial-gradient(#27514d 10px, #1a3d41 10%, #030303 30%);
  }
  .chart-wrap {
    position: relative;
    .chart-value-wrap {
      position: absolute;
      bottom: 50px;
      left: 50%;
      width: 140px;
      margin-left: -70px;
      border-radius: 20px;
      background: #030303;
      z-index: 10;
    }
    .chart-value {
      margin-left: 10px;
      width: 120px;
      height: 40px;
      text-align: left;
      line-height: 30px;
      color: #fff;
      background: #52d97b;
      border: 5px solid #84f58d;
      border-radius: 20px;
      z-index: 10;
      i {
        font-size: 20px;
        float: left;
        margin-left: 10px;
      }
      span {
        margin-left: 10px;
        font-size: 18px;
      }
    }
    .chart-bg {
      position: absolute;
      height: 1px;
      left: 50%;
      background: #a1a8a0;
      &.chart-bg1 {
        width: 180px;
        bottom: 52px;
        margin-left: -90px;
      }
      &.chart-bg2 {
        width: 200px;
        bottom: 60px;
        margin-left: -100px;
      }
      &.chart-bg3 {
        width: 220px;
        bottom: 68px;
        margin-left: -110px;
      }
      &.chart-bg4 {
        width: 240px;
        bottom: 76px;
        margin-left: -120px;
      }
    }
    .chart-result {
      position: absolute;
      bottom: 10px;
      width: 100%;
      text-align: center;
      line-height: 24px;
      font-size: 18px;
      color: #73a37b;
    }
  }
  .bank-wrap {
    text-align: center;
    color: #3a664d;
    i {
      font-size: 76px;
    }
    .bank-cur {
      margin-top: 10px;
      font-size: 18px;
      line-height: 24px;
    }
    .bank-cur-result {
      font-size: 20px;
      line-height: 30px;
    }
  }
  .record-wrap {
    display: flex;
    margin-top: 20px;
    .record-turn, .record-time {
      flex: 1;
      color: #a4a4a4;
      i {
        font-size: 34px;
        margin-right: 20px;
      }
      section {
        display: inline-block;
        div {
          line-height: 18px;
          font-size: 14px;
        }
        div:first-child {
          border-bottom: 1px solid #a4a4a4;
        }
      }
    }
  }
</style>
