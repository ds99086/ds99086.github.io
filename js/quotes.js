const quotes = [
    {
        quote: "Time having fun is never wasted.",
        author: "Brother"
    },
    {
        quote: "Just for Today, I will try to live through this day only, and not tackle my whole life-problem at once.",
        author: "Frank Crane"
    },
    {
        quote: "Most folks are about as happy as they make up their minds to be.",
        author: "Abraham Lincoln"
    },    
    {
        quote: "Just for Today, I will Adjust myself to what Is, and not try to Adjust everything to my own desires. I will take my family, my business, and my luck as they come, and fit myself to them.",
        author: "Frank Crane"
    },    
    {
        quote: "Just for Today, I will take care of my Body. I will exercise it, care for it, and nourish it, and not abuse it nor neglect it; so that it will be a perfect machine for my will.",
        author: "Frank Crane"
    },    
    {
        quote: "Just for Today, I will try to strengthen my mind, I will study. I will learn something useful, I will not be a mental loafer all day. I will read something that requires effort, thought and concentration.",
        author: "Frank Crane"
    },    
    {
        quote: "Just for Today, I will exercise my Soul.I will do somebody a good turn and not get found out. If anybody knows of it, it will not count.",
        author: "Frank Crane"
    },
    {
        quote: "I will do at least two things I don’t want to do, as William James suggests, just for exercise.",
        author: "Frank Crane"
    },
    {
        quote: "Just for Today, I will be agreeable. I will look as well as I can, dress as becomingly as possible,  talk low,  act courteously, be liberal with flattery, criticize not one bit nor find fault with anything, and not try to regulate nor improve anybody.",
        author: "Frank Crane"
    },
    {
        quote: "Just for Today, I will have a Programme. I will write down just what I expect to do every hour. I may not follow it exactly, but I’ll have it. It will save me from the two pests Hurry and Indecision.",
        author: "Frank Crane"
    },
    {
        quote: "Just for Today, I will have a quiet half hour, all by myself, and relax. During this half hour, some time, I will think of divinity, so as to get a little more perspective to my life.",
        author: "Frank Crane"
    },
    {
        quote: "Just for Today, I will be Unafraid. Especially I will not be afraid to be Happy, to enjoy what is Beautiful, to love and to believe that those I love, love me.",
        author: "Frank Crane"
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