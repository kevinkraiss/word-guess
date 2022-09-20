// select elements from DOM
var startBtn = document.querySelector('.start-button')
var wordBlanksEl = document.querySelector('.word-blanks')

var words = ['html', 'function', 'query', 'localstorage', 'timeout', 'intervals', 'javascript', 'terminal']
var word
// score variable
// timeleft variable

// reset the word-blanks, an _ for each letter of new word
function renderCharacters() {
    var str = ""
    for (var i = 0; i < word.length; i++) {
        // if we guess the right character
            // push into string
        //else
            //push an _ into str
            str += '_ '
            console.log(str)
    }
    // set textContent of wordBlanksEl to be str
    wordBlanksEl.textContent = str.trim()
}

function startRound() {
    // get random word from words array
var randomIdx = Math.floor(Math.random() * words.length)
word = words[randomIdx]
renderCharacters()
}    

startBtn.addEventListener('click', startRound)


