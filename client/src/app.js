'use strict';


class Person {

    constructor(name) {
        this.name = name;
    }

    scream() {
        console.log(`ahh! Save ${this.name}!`);
    }

}

class Hobo extends Person {

    constructor(name) {
        super(name);
        this.hoboName = name + 'eski';
    }

    scream() {
        console.log(`Yo dawg, ${this.hoboName} here`);
        super.scream();
    }
}

let bart = new Person('bart');
let homer = new Hobo('homer');

bart.scream();
homer.scream();
