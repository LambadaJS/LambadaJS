const map = require('./map.js')
const Lambada = require('./Lambada.js')
require('./pipe')

describe('Map', function() {

    it('Should be an function', function() {
        expect(map).toBeInstanceOf(Function)
    })

    it('Should apply a function to the `this` value', function() {
        expect(map.call( Number(5), x => x + 1 )).toBe(6)
        const addOneSubtract1 = Lambada( x => x + 1 ).map( x => Lambada.pipe( x, x => x -1 ) )
        expect(addOneSubtract1(3)).toBe(3)
    })

    it('Should return undefined if mapper is not a function', function() {
        const sumOne = Lambada( x => 1 + x )
        expect(sumOne.map(5)).toBe(undefined)
    })
})
