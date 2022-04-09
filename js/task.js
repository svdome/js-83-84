// define classes here
class Android {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    };
    getDescription() {
        return `The ${this.name} costs ${this.price}`
    };

    getVersion() {
        if(this.name === "Galaxy") {
            return `12 (always for android phones)`
        } else if(this.name === "iPhone") {   
            return `15 (always for iOS phones)`
        };
    };  
};

class iOS extends Android {

}
// Sample usage - do not modify
const galaxy = new Android("Galaxy", 400);
console.log(galaxy.getDescription()); // "The Galaxy costs 400"
console.log(galaxy.getVersion()); // 12 (always for android phones)

const iphone = new iOS("iPhone", 500);
console.log(iphone.getDescription()); // "The iPhone costs 500"
console.log(iphone.getVersion()); // 15 (always for iOS phones)