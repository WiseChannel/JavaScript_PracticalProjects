
async function getQuote() {
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=json';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    try {
        const result = await  fetch(proxyUrl + apiUrl)
        const data = await result.json()
        console.log(data);
    } catch(e) {
        getQuote()
        console.log("Error: ", e)
    }
}

//start
getQuote()