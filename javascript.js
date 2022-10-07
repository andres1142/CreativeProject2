function onClick(e){

    e.preventDefault()

    const options = {
        method: 'POST',
        headers: {
            'X-RapidAPI-Key': 'c71934342bmsh7004b0f610885e0p1aa324jsn1e33bf331dbe',
            'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
        }
    };
    const url = `https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=${(e.currentTarget.innerText).toLocaleLowerCase()}&count=1`


    fetch(url,options)
        .then(response => response.json())
        .then( function(response){
            const quote_holder = document.getElementById('quote_holder')
            const quote = document.createElement('div')
            const author = document.createElement('div')

            quote.classList.add('quote')
            quote.append(response[0].quote)
            console.log(response[0].quote)

            author.classList.add('author')
            author.append('-' + response[0].author)
            console.log(response[0].author)

            removeAllChildNodes(quote_holder)
            quote_holder.append(quote,author)

        })
        .catch(err => console.log(err))
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


document.getElementById('movies').addEventListener('click', onClick);
document.getElementById('famous').addEventListener('click', onClick);

