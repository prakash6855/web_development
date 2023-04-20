let a = [
    "Initialising hack program",
    "Hacking user personal data",
    "please wait....",
    "User id found",
    "User password found",
    "Connecting to facebook",
    "Hacked successfully!!!"
]
const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(true) }, seconds * 1000)
    })
}

const sHack = async (message) => {
    await sleep(2);
//     console.log(message);
text.innerHTML = text.innerHTML + message + "<br>"
}

(async () => {
    for (let i = 0; i < a.length; i++)
    {
        await sHack(a[i])
    }

})()

