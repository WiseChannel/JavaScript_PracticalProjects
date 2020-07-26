const quoteContainer = document.getElementsByClassName('expressionGenerator')
const quoteText = document.getElementById('quote')
const authorText = document.getElementsByClassName('author')
const twitterBtn = document.getElementsByClassName('twitter')
const newQuoteBtn = document.getElementsByClassName('new-quote')


async function getQuote() {
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=json';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    try {
        const result = await  fetch(proxyUrl + apiUrl)
        const data = await result.json()
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Unknow'
        } else {
            authorText.innerText = data.quoteAuthor
        }
        if (data.quoteText.lenght > 120) {
            quoteText.classList.add('long-quote')
        } else {
            quoteText.classList.remove('long-quote')
        }
        quoteText.innerText = data.quoteText;
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

newQuoteBtn.addEventListner('click', getQuote())
twitterBtn.addEventListner('click', tweetQuote())

//start

setInterval(
    getQuote()
), 1000