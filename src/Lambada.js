const curry = require('./curry.js')

const Lambada = function Lambada(fn) {
  if (fn instanceof Function) {
    if (fn instanceof Lambada) {
      return fn
    } else {
      const curried = curry(fn)
      Object.setPrototypeOf(curried, Lambada.prototype)
      return curried
    }
  }
}

Object.setPrototypeOf(Lambada.prototype, Function.prototype)

module.exports = Lambada
