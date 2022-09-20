// select elements from DOM
var startBtn = document.querySelector('.start-button')
var wordBlanksEl = document.querySelector('.word-blanks')
var scoreel = document.querySelector('.score')

var validChars = 'abcdefghijklmnopqrstuvwxyz'
var words = ['html', 'function', 'query', 'localstorage', 'timeout', 'intervals', 'javascript', 'terminal']
var word
var guessedCharacters = []
var score = 0
// timeleft variable

function checkWin() {
   var DOMword = wordBlanksEl.textContent.split(' ').join('')
   if (word === DOMword) {
    score++
    scoreel.textContent = score
    startRound()
   }
}

function handleKeydown(event) {
    console.log(event.key)
    if (validChars.includes(event.key)) {
        // keep track of character guessed
        guessedCharacters.push(event.key)
        //rerender wordBlanks.textContent
        renderCharacters()
    }
    // validate key
}

// reset the word-blanks, an _ for each letter of new word
function renderCharacters() {
    var str = ""
    for (var i = 0; i < word.length; i++) {
        var letter = word[i]
        // if we guess the right character
        if (guessedCharacters.includes(letter)) {
            str += letter + ' '
            // push into string
        } else {
            //push an _ into str
            str += '_ '
        }
    }
    // set textContent of wordBlanksEl to be str
    wordBlanksEl.textContent = str.trim()
    checkWin()
}

function startRound() {
    guessedCharacters = []
    // get random word from words array
    var randomIdx = Math.floor(Math.random() * words.length)
    word = words[randomIdx]
    renderCharacters()
}    

startBtn.addEventListener('click', startRound)

document.addEventListener('keydown', handleKeydown)
