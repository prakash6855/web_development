class Password {
    constructor() {
        console.log("Welcome to password generator app");
        this.pass = ""
    }
    generatePassword(len) {
        let characters = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "1234567890";
        let specialcharacters = "~!@#$%^&*()_-+=}{|\/?><.,:;"
        if (len < 3) {
            console.log("This is weak password and it should be at least 3 characters")
        } else {
            let i = 0;
            while (i < len) {
                this.pass += characters[Math.floor(Math.random() * characters.length)];
                this.pass += numbers[Math.floor(Math.random() * numbers.length)];
                this.pass += specialcharacters[Math.floor(Math.random() * specialcharacters.length)];
                i += 3;
            }
            this.pass = this.pass.substr(0, len);
            return this.pass;
        }
    }
}
let p = new Password()
console.log(p.generatePassword(10))