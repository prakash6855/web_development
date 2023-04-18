// Promise.prototype.finally():---The finally() method of a Promise object schedules a function to be called when the promise is settled (either fulfilled or rejected). It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.

const f = () => {
    try {
        let a = 11;
        // console.log(code);
        console.log("Program ran successfully")
        return;
    }
    catch (error) {
        console.log("There is an error");
        console.log(b);
    }
    finally {
        console.log("I will run in any condition.")
    }
}

f();
console.log("Chapter end");