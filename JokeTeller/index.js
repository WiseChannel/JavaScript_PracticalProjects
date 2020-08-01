const button = document.getElementById('button')
const audio = document.getElementById('audio')

const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist';
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
