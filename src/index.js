const Lambada = require('./Lambada')

module.exports = function exporter(minimal = false) {
    if (minimal) {
        return Lambada
    } else {
        Lambada.pipe = require('./pipe')
        Lambada.prototype.map = require('./map')
        return Lambada
    }
}
