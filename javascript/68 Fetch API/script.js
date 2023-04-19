
//Fetch API


let p = fetch("https://goweather.herokuapp.com/weather/Dubai")
p.then((response) => { 
    console.log(response.status);
    // Response: status property:----The status read-only property of the Response interface contains the HTTP status codes of the response.
    console.log(response.ok);
    //Response: ok property:---The ok read-only property of the Response interface contains a Boolean stating whether the response was successful (status in the range 200-299) or not.
    console.log(response.headers);
        return response.json()
}).then((response) => {
        console.log(response)
})