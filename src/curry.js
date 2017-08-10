
const curry = function curry(fn) {
    return function curried(...args) {
      if (args.length < fn.length) {
        return function c(...args1) {
          return curried(...args.concat(args1))
        }
      } else {
        return fn(...args)
      }
    }
}

module.exports = curry
