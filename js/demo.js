const _init = Vue.prototype.init

Vue.prototye.init = function (options = {}) {
  options.init = options.init
    ? [vuexInit].concat(options.init)
    : vueInit

  __init.call(this, options)
}