const quoteContainer = document.getElementById('expressionGenerator')
const quoteText = document.getElementById('quote')
const authorText = document.getElementsByClassName('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('id-quote')
const loader = document.getElementById('loader')

function loading() {
    loader.hidden = false
    quoteContainer.hidden = true
}

function complete() {
    if (!loader.hidden) {
        quoteContainer.hidden = false
        loader.hidden = true
    }
}

async function getQuote() {
    loading()
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=json';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    try {
        const result = await  fetch(proxyUrl + apiUrl)
        const data = await result.json()
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Unknown'
        } else {
            authorText.innerText = data.quoteAuthor
        }
        if (data.quoteText.lenght > 120) {
            quoteText.classList.add('long-quote')
        } else {
            quoteText.classList.remove('long-quote')
        }
        quoteText.innerText = data.quoteText;
        complete()
    } catch(e) {
        getQuote()
        console.log("Error: ", e)
    }
}

function tweetQuote() {
    const quote = quoteText.innerText
    const author = authorText.innerText
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`
    window.open(twitterUrl, '_blank')
}


//start

newQuoteBtn.addEventListener('click', () => {
    console.log('work')
    getQuote()
})
twitterBtn.addEventListener('click', () => {
    console.log('work')
    tweetQuote()
})

getQuote()

