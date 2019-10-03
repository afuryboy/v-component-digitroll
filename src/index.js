
const {version} = require('../package.json');
import digitroll from './component/digitroll'
import './style/index.scss'

const install = (Vue,option) => {
  Vue.component(digitroll.name,digitroll)
}
const component = {
  install,
  version
}

export default component

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}