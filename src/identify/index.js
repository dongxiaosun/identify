import SIdentify from './src/identify'

/* istanbul ignore next */
SIdentify.install = function (Vue) {
  Vue.component(SIdentify.name, SIdentify)
}

export default SIdentify
