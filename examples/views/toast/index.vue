<template>
  <div>
    <div class="mw-field">
      <mw-button type="info" :inline="false" @click="toast()">默认弹出</mw-button>
    </div>
    <div class="mw-field">
      <mw-button type="info" :inline="false" @click="toast('top')">顶部弹出</mw-button>
    </div>
    <div class="mw-field">
      <mw-button type="info" :inline="false" @click="toast('bottom')">底部弹出</mw-button>
    </div>
    <div class="mw-field">
      <mw-button type="info" :inline="false" @click="toast('center', 'success')">成功弹出</mw-button>
    </div>
    <div class="mw-field">
      <mw-button type="info" :inline="false" @click="toast('center', 'warning')">警告弹出</mw-button>
    </div>
    <div class="mw-field">
      <mw-button type="info" :inline="false" @click="toast('center', 'failed')">失败弹出</mw-button>
    </div>
    <div class="mw-field">
      <mw-button type="info" :inline="false" @click="_loading('roller', false)">加载中3s后隐藏</mw-button>
    </div>
    <div class="mw-field">
      <mw-button type="info" :inline="false" @click="_loading('spinner', false)">加载中3s后隐藏</mw-button>
    </div>
    <div class="mw-field">
      <mw-button type="info" :inline="false" @click="_loading('carousel', true)">加载中显示遮罩层3s后隐藏</mw-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { setTimeout } from "timers";
export default {
  data() {
    return {};
  },
  methods: {
    toast(pos, type) {
      const _this = this;
      this.$toast("我是一条toast", {
        position: pos,
        type: type,
        callback() {
          _this.$notify("toast支持回调");
        }
      });
    },
    _loading(type, flag) {
      this.$toast("加载中...", {
        type: "loading",
        loadingType: type,
        hasMask: flag
      });
      setTimeout(() => {
        this.$toast.close();
      }, 3000);
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.mw-field {
  margin: 10px;
}
.common {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.center {
  width: 180px;
  height: 80px;
}
.left {
  width: 180px;
  height: 100%;
}
.right {
  width: 180px;
  height: 100%;
}
.top {
  width: 100%;
  height: 80px;
}
.bottom {
  width: 100%;
  height: 100px;
}
</style>
