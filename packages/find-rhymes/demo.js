const {findRhymingWords} = require('./index.js')

const rhymesWithPurely = findRhymingWords('purely')
console.log(rhymesWithPurely)

const rhymesWithNonsense = findRhymingWords('lskdjf')
console.log(rhymesWithNonsense)