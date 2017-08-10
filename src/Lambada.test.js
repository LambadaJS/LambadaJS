const Lambada = require('./Lambada.js')

describe('Lambada', function() {

    it('Should return a function', function() {
        const identity = Lambada(x => x)
        expect(identity).toBeInstanceOf(Function)
    })

    it('Should return nothing if argument isn\'t a function', function() {
        expect(Lambada(5)).toBe(undefined)
    })

    it('Should return the argument back, if it\'s already a Lambada function', function() {
        const sum = Lambada( (x,y) => x + y )
        expect(Lambada(sum)).toBe(sum)
        const sumWith5 = sum(5)
        expect(sumWith5).toBe(sumWith5)
    })
})
