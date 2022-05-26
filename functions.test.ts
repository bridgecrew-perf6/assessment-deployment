const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Shuffle array returns same length array', () => {
        const originalArr = [1,2,3,4,5]

        const shuffled = shuffleArray(originalArr)

        let originaLength = originalArr.length
        let shuffledLength = shuffled.length

        expect(shuffledLength).toEqual(originaLength)
    })
})