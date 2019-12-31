<template>
  <div id="app">
    <router-view class="page" />
    <mt-tabbar class="footer" v-model="selected" fixed>
      <mt-tab-item id="home">
        <i slot="icon" class="iconfont icon-youxi"></i>
        首页
      </mt-tab-item>
      <mt-tab-item id="bank">
        <i slot="icon" class="iconfont icon-icon"></i>
        排行榜
      </mt-tab-item>
      <mt-tab-item id="mine">
        <i slot="icon" class="iconfont icon-user"></i>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: 'home'
    }
  },
  mounted () {
    const href = window.location.href
    if (href.includes('/bank')) {
      this.selected = 'bank'
    } else if (href.includes('/mine') ||
      href.includes('/record') ||
      href.includes('/concat')) {
      this.selected = 'mine'
    }
  },
  watch: {
    selected (val, oldVal) {
      switch (val) {
        case 'home':
          this.$router.push('/')
          break
        case 'bank':
          this.$router.push('/bank')
          break
        case 'mine':
          this.$router.push('/mine')
          break
      }
    },
    '$route.path': function (val, oldVal) {
      if (val.includes('/bank')) {
        this.selected = 'bank'
      } else if (val.includes('/mine')) {
        this.selected = 'mine'
      } else if (val === '/') {
        this.selected = 'home'
      }
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.page {
  height: 100vh;
  padding-bottom: 65px;
  overflow: scroll;
}
.footer {
  background: #2c2c2c;
  .mint-tab-item {
    .mint-tab-item-icon {
      color: #5d6166;
      i {
        font-size: 22px;
      }
    }
    .mint-tab-item-label {
      color: #fefefe
    }
    &.is-selected {
      background: none;
      .mint-tab-item-icon {
        color: #7ce47e;
      }
      .mint-tab-item-label {
        color: #7ce47e
      }
    }
  }
}
</style>
