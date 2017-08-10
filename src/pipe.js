const Lambada = require('./Lambada.js')

const pipe = Lambada(function(...fns) {
  return Lambada(function(...args) {
    return fns.reduce(function (result, fn) {
      return fn(result)
    }, fns.shift()(...args))
  })
})

module.exports = pipe
