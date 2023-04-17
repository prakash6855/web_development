async function prakash() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("42 deg")
        }, 1500)
    })

    let manaliWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("-10 deg")
        }, 4500)
    })
    // delhiWeather.then(alert);
    // manaliWeather.then(alert);
    console.log("Fetching delhi weather data please wait for 1.5 seconds");
    let delhiW = await delhiWeather;
    console.log("Fetched delhi weather: " + delhiW);
    console.log("Fetching manali weather data plese wait for 4.5 seconds");
    let manaliW = await manaliWeather;
    console.log("Fetched manali weather: " + manaliW);
    return [delhiW, manaliW];
}
const vikash = async () => {
    console.log("Hii there i will wait for you if you are not well dressed")
}

const main1 = async () => {
    console.log("weather forecast today")
    let a = await prakash();
    let b = await vikash();
}
main1()

