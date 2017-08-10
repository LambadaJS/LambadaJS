const curry = require ("./curry.js")

describe('Curry', function() {

    it('should return a function', function() {
        let identity = curry ( x => x)
        expect(identity).toBeInstanceOf(Function)
    })

    it('Returnee should keep returning curried functions until have enougth arguments to excute', function(){
        let curriedSum = curry((a, b) => a + b)
        let sumWith5 = curriedSum(5)
        expect(sumWith5).toBeInstanceOf(Function)
        expect(sumWith5(5)).not.toBeInstanceOf(Function)
        expect(sumWith5(1)).toBe(6)
    })

})
