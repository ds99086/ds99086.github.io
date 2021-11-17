const quotes = [
    {
        quote: "Time having fun is never wasted.",
        author: "Brother"
    },
    {
        quote: "The skills that are useful can be applied to many things.",
        author: "Nick Berg"
    },
    {
        quote: "Not everyone gets a choice in what they do.",
        author: "Mother"
    },
    {
        quote: "People are like books. Everyone has stories to tell. Read them.",
        author: "Me"
    }
];

const quote = document.querySelector("#quotediv span:first-child");
const author = document.querySelector("#quotediv span:last-child");

const randomNum = Math.floor(Math.random()*quotes.length);
const todayQuote = quotes[randomNum];

quote.innerHTML = todayQuote.quote;
author.innerHTML = todayQuote.author;