const button = document.getElementById('button')
const audio = document.getElementById('audio')

const apiKEY = 'e985f868e96c46d9b0789c3855350152'

function tellMe(joke) {
    const jokeString = joke.trim().replace(/ /g, '%20');
    VoiceRSS.speech({
        key: 'e985f868e96c46d9b0789c3855350152',
        src: jokeString,
        hl: 'en-us',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false,
    });
}

async function getJokes() {
    const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist';
    let joke = ''
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()

        if (data.setup) {
            joke = `${data.setup} &&  ${data.delivery}`
        } else {
            joke = data.joke
        }
        console.log(joke)
    } catch (e) {
        console.log(e)
    }
}

button.addEventListener('click', getJokes)
