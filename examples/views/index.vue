<template>
  <mw-transition name="mw-zoom">
    <div class="components">
      <h1 class="logo">
        <mw-image :src="logo"></mw-image>
      </h1>
      <div class="version">MeowUI {{version}}</div>
      <p class="desc">一个正在建设中的的移动端Vue组件库</p>
      <div class="components-list">
        <mw-collapse accordion>
          <mw-collapse-item title="基础组件">
            <div class="cont mw-hairline--top">
              <mw-cell
                v-for="(item,index) in basic"
                :key="index"
                :title="item.meta.docTitle"
                arrow
                @click="views(item.path)"
              ></mw-cell>
            </div>
          </mw-collapse-item>
          <mw-collapse-item title="展示组件">
            <div class="cont mw-hairline--top">
              <mw-cell
                v-for="(item,index) in show"
                :key="index"
                :title="item.meta.docTitle"
                arrow
                @click="views(item.path)"
              ></mw-cell>
            </div>
          </mw-collapse-item>
          <mw-collapse-item title="导航组件">
            <div class="cont mw-hairline--top">
              <mw-cell
                v-for="(item,index) in nav"
                :key="index"
                :title="item.meta.docTitle"
                arrow
                @click="views(item.path)"
              ></mw-cell>
            </div>
          </mw-collapse-item>
          <mw-collapse-item title="表单组件">
            <div class="cont mw-hairline--top">
              <mw-cell
                v-for="(item,index) in form"
                :key="index"
                :title="item.meta.docTitle"
                arrow
                @click="views(item.path)"
              ></mw-cell>
            </div>
          </mw-collapse-item>
          <mw-collapse-item title="反馈组件">
            <div class="cont mw-hairline--top">
              <mw-cell
                v-for="(item,index) in feedback"
                :key="index"
                :title="item.meta.docTitle"
                arrow
                @click="views(item.path)"
              ></mw-cell>
            </div>
          </mw-collapse-item>
        </mw-collapse>
      </div>
      <footer class="tip">
        <a href="https://github.com/MrTenger/meow-ui">moew-ui</a>
        不断打磨 · 不断进步 · {{version}}
      </footer>
    </div>
  </mw-transition>
</template>

<script type="text/ecmascript-6">
import { version } from "../../package.json";
import basic from "@/router/basic/index";
import show from "@/router/show/index";
import form from "@/router/form/index";
import feedback from "@/router/feedback/index";
import nav from "@/router/nav/index";
export default {
  name: "homeMain",
  data() {
    return {
      version,
      basic,
      show,
      form,
      feedback,
      nav,
      logo: require("../../logo/meow-ui.png")
    };
  },
  methods: {
    views(path) {
      this.$router.push({
        path: path
      });
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.components {
  position: relative;
  .logo {
    width: 380px;
    height: 380px;
    margin: -30px auto 0;
    animation: animationFrames linear 1.2s;
    animation-delay: 0.6s;
    transform-origin: 50% 50%;
    .mw-image {
      width: inherit;
      height: inherit;
    }
  }
  .version {
    font-size: 52px;
    color: #2e2d2d;
    font-weight: 500;
    text-align: center;
    font-family: PingHei, Microsoft YaHei, Lucida Grande, Lucida Sans Unicode,
      STHeiti, Helvetica, Arial, Verdana, "sans-serif", PingHei-light, SimHei,
      Droid Sans;
  }
  .desc {
    text-align: center;
    color: #848484;
    font-size: 28px;
    margin: 20px 0 30px;
  }
  .components-list {
    margin: 0 30px 35px 30px;
    padding-top: 30px;
    .mw-collapse {
      background: #f7f8fa;
      &-item {
        margin-bottom: 30px;
        background: #fff;
        border-radius: 10px;
        &-title {
          padding-top: 38px;
          padding-bottom: 38px;
          h5 {
            font-size: 34px;
            font-weight: 600;
          }
          &::before {
            display: none !important;
          }
        }
      }
    }
    .cont {
      margin: 0 35px;
      .mw-cell {
        .mw-cell__title {
          color: #636060;
          text-transform: capitalize;
        }
        &:last-child {
          .mw-cell__body {
            &::before {
              display: none;
            }
          }
        }
      }
    }
  }
  .tip {
    text-align: center;
    font-size: 26px;
    color: #bbb;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    a {
      display: inline-block;
      width: 36px;
      height: 36px;
      background: url("data:image/png;base64,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")
        no-repeat center 0;
      background-size: 36px auto;
      font-size: 0;
      margin-right: 10px;
    }
  }
  @keyframes animationFrames {
    0% {
      transform: rotate(0deg) scaleX(1) scaleY(1);
    }
    10% {
      transform: rotate(-3deg) scaleX(0.8) scaleY(0.8);
    }
    20% {
      transform: rotate(-3deg) scaleX(0.8) scaleY(0.8);
    }
    30% {
      transform: rotate(3deg) scaleX(1.2) scaleY(1.2);
    }
    40% {
      transform: rotate(-3deg) scaleX(1.2) scaleY(1.2);
    }
    50% {
      transform: rotate(3deg) scaleX(1.2) scaleY(1.2);
    }
    60% {
      transform: rotate(-3deg) scaleX(1.2) scaleY(1.2);
    }
    70% {
      transform: rotate(3deg) scaleX(1.2) scaleY(1.2);
    }
    80% {
      transform: rotate(-3deg) scaleX(1.2) scaleY(1.2);
    }
    90% {
      transform: rotate(3deg) scaleX(1.2) scaleY(1.2);
    }
    100% {
      transform: rotate(0deg) scaleX(1) scaleY(1);
    }
  }
}
</style>
