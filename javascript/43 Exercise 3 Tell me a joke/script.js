//elem.InnerHTML is used to populate a div with HTML.Search about this method and create a website with a div tag containing a random joke given an array of joke.Use Math.random and fetch jokes from the internet(use any website to create an array).Your website should show a random joke on every reload.Minimum length of your jokes array should be 10.


let myjokes = [
    {
        "category": "Programming",
        "type": "single",
        "joke": "The generation of random numbers is too important to be left to chance.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 39,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "Why did the database administrator leave his wife?",
        "delivery": "She had one-to-many relationships.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 265,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 184,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "What are bits?",
        "delivery": "Tiny things left when you drop your computer down the stairs.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 211,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "A byte walks into a bar looking miserable.\nThe bartender asks it: \"What's wrong buddy?\"\n\"Parity error.\" it replies. \n\"Ah that makes sense, I thought you looked a bit off.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 24,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "// This line doesn't actually do anything, but the code stops working when I delete it.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 12,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "There are only 10 kinds of people in this world: those who know binary and those who don't.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 35,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "What is a dying programmer's last program?",
        "delivery": "Goodbye, world!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 56,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Algorithm: A word used by programmers when they don't want to explain how their code works.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 51,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "\"Can I tell you a TCP joke?\"\n\"Please tell me a TCP joke.\"\n\"OK, I'll tell you a TCP joke.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 57,
        "safe": true,
        "lang": "en"
    }
]
let index = Math.floor(Math.random() * (myjokes.length - 1))
console.log(index);
joke.innerHTML = myjokes[index].joke;