let date = new Date;
date = date.getFullYear();

let person = {
    name: "Nikola",
    lastName: "Todorovski",
    dateOfBirth: "05.11.1992",
    hometown: "Skopje",
    course: "AJS",
    yearsOfTeaching: "13"
}

let nikola = new Person(person);

function Person({ name, lastName, dateOfBirth, hometown }) {
    this.name = name;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.hometown = hometown;
}

Person.prototype.sayFullName = function () {
    return `My name is ${this.name} ${this.lastName}.`;
}

Person.prototype.age = function () {
    let godina = date - this.dateOfBirth.slice(-4) - 1;
    return `I am born on ${this.dateOfBirth} and i am ${godina} old.`;
}
console.log(nikola.sayFullName());
console.log(nikola.age());

//////////////////////
///// ZADACA 2 ///////
//////////////////////

function Trainer(obj){
    let {course,yearsOfTeaching} = obj;
    this.course = course;
    this.yearsOfTeaching = yearsOfTeaching;
    Person.call(this,obj)
}

Trainer.prototype = Object.create(Person.prototype);

Trainer.prototype.numberOfTeaching = function () {
    return `I am teaching ${this.course} for ${this.yearsOfTeaching} years.`;
}

let nikola1 = new Trainer(person);

console.log(nikola1.sayFullName());
console.log(nikola1.age());
console.log(nikola1.numberOfTeaching());