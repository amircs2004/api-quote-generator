const api_url = "https://api.quotable.io/random"
const quoteEL = document.getElementById("quote")
const authorEL = document.getElementById("author")
const btnEL = document.getElementById("btn")


getQueote(api_url)

async function getQueote(url) {
    const response = await fetch(url)
    var data = await response.json()
    quoteEL.innerHTML = data.content
    authorEL.innerHTML = data.author

}
btnEL.addEventListener("click" ,()=>{
    getQueote(api_url)
    
})