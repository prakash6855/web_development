// Callback Hell:----Using callbacks can be quite "messy" if you have a sequence of dependent asynchronous operations that must be performed in order because this results in multiple levels of nested callbacks. This problem is commonly known as "callback hell"


function loadscript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Loaded script with SRC: " + src);
        callback(null, src);
    }
    script.onerror = function () {
        console.log("Error loading script with SRC: " + src);
        callback(new Error("src got some error"))
    }
    document.body.appendChild(script);
}


function Hello(error, src) {
    if (error) {
        console.log(error)
        sendEmergencyMessageToCeo();
        return
    }
    alert("hello" + src);
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", function Hello(error, src) {
    if (error) {
        console.log(error)
        sendEmergencyMessageToCeo();
        return
    }
    loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", function Hello(error, src) {
        if (error) {
            console.log(error)
            sendEmergencyMessageToCeo();
            return
        } loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", function Hello(error, src) {
            if (error) {
                console.log(error)
                sendEmergencyMessageToCeo();
                return
            } loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", function Hello(error, src) {
                if (error) {
                    console.log(error)
                    sendEmergencyMessageToCeo();
                    return
                } loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", function Hello(error, src) {
                    if (error) {
                        console.log(error)
                        sendEmergencyMessageToCeo();
                        return
                    } loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", function Hello(error, src) {
                        if (error) {
                            console.log(error)
                            sendEmergencyMessageToCeo();
                            return
                        } loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", function Hello(error, src) {
                            if (error) {
                                console.log(error)
                                sendEmergencyMessageToCeo();
                                return
                            }
                            loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", function Hello(error, src) { })
                        })
                    })
                })
            })
        })
    })
})

