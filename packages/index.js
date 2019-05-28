import MButton from './button'
import MCell from './cell'
import MIcon from './icon'
import MIndicator from './indicator'
import MSwitch from './switch'
import MMarquee from './marquee'
import MNoticeBar from './noticebar'
import MTransition from './transtion'
const components = [MButton, MCell, MIcon, MIndicator, MSwitch, MMarquee, MNoticeBar, MTransition]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (!Vue && install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
//对外导出
const MEOW = {
  install,
  MButton,
  MCell,
  MIcon,
  MIndicator,
  MSwitch,
  MMarquee,
  MNoticeBar,
  MTransition
}
export default MEOW

