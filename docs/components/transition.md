## Transition 动画
### 功能说明
动画切换组件, Vue内置transition的封装
### 使用指南
``` javascript
import { MTransition } from "vue-meow-ui";

Vue.component(MTransition.name, MTransition);
```
### 代码演示
#### 内置过渡动画
通过 `name` 属性设置动画类型，暂时动画如下：
* `mw-fade`（淡入淡出）
* `mw-fade-left`（左侧淡入）
* `mw-fade-right`（右侧淡入）
* `mw-fade-top`（顶部淡入）
* `mw-fade-bottom`（底部淡入）
* `mw-slide-left`（左侧弹出）
* `mw-slide-right`（右侧弹出）
* `mw-slide-top`（顶部弹出）
* `mw-slide-bottom`（底部弹出）
* `mw-zoom`（由远及近放大）
* `mw-bounce`（弹跳进入）
* `mw-bounce-top`（上方弹跳进入）
* `mw-bounce-bottom`（下方弹跳进入）
* `mw-bounce-left`（左边弹跳进入）
* `mw-bounce-right`（右边弹跳进入）
* 待开发...