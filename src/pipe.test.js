const pipe = require ("./pipe.js")

describe('Pipe', function() {

    it('Should return a function', function() {
        const identity = pipe ( x => x)
        expect(identity).toBeInstanceOf(Function)
    })

    it('Should compose two functions', function(){
        const sumOne = x => 1 + x
        const double = x => x + x

        const sumOneThenDouble = pipe(sumOne, double)

        expect(sumOneThenDouble(5)).toBe(double(sumOne(5)))
    })

    it('Should handle multiple arguments', function () {
        const sumOne = x => 1 + x
        const square = y => y * y
        const double = z => z + z

        const doItAll = pipe(sumOne, square, double)

        expect(doItAll(42)).toBe(double(square(sumOne(42))))
    })

    it('Returnee should be capable of multiple arguments handling', function() {
        const sum = (x, y) => x + y
        const decrementByOne = x => x - 1

        const sumLessOne = pipe(sum, decrementByOne)

        expect(sumLessOne(3, 4)).toBe(decrementByOne(sum(3, 4)))
    })
})
