const Lambada = require('./Lambada.js')

const map = function map(mapper){
  if (typeof mapper === "function") {
    return mapper(this)
  }
}

module.exports = map;
