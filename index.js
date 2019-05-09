const words = require('./dictionary')

// Return final n phonemes of a word
const endingPhonemes = (word, n=1) => (
    word
        .split(' ')
        .reverse()
        .slice(0, n)
        .reverse()
        .join('')
)

const wordsArray = Object.keys(words)

// Given a word, finds all rhyming words in the dictionary
const findRhymingWords = (word) => {
    const wordGiven = words[word]
    if (!wordGiven) {
        return []
    }
    const precision = 4
    const endingPhonemeGiven = endingPhonemes(wordGiven, precision)
    const result = 
        wordsArray.filter(
            currentWord => {
                const currentWordPhon = words[currentWord]
                const endingPhonemeCurrent = endingPhonemes(currentWordPhon, precision)
                return endingPhonemeCurrent === endingPhonemeGiven
            }
        )
    return result
}

module.exports = {
    findRhymingWords
}