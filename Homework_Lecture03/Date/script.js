let person = {
    firstName: "Nikola",
    lastName:"Todorovski",
    dateOfBirth:"5.10.1992",
    placeOfBirth:"Skopje",
    details: function(){
        return `${this.firstName} ${this.lastName} ${this.placeOfBirth}`;
    },
    calculateAge: function(){
        this.dateOfBirth = this.dateOfBirth.split(".");
        let arr = [];
        this.dateOfBirth.forEach(function(x){
            arr.push(Number(x));
        });
        let now = new Date();
        let birthday = new Date();
        birthday.setFullYear(arr[2],arr[1]+1,arr[0]);
        let start = new Date(0);
        let ageDiff = now.getTime() - birthday.getTime();
        let ageDate = new Date(ageDiff);
        let years = Math.abs(ageDate.getUTCFullYear() - start.getUTCFullYear());
        let days = Math.abs(ageDate.getUTCDate() - start.getUTCDate());
        let m1 = birthday;
        let m2 = new Date();
        m2.setFullYear(arr[2]+1);
        function getMonths(m1,m2){
            let months = (m2.getTime() - m1.getTime())/1000;
            months /= (60*60*24*7*4);
            months = Math.abs(Math.round(months));
            return months;
        };
        return `You have ${years} years, ${getMonths(m1,m2)} months, and ${days} days.`;
    }
}

console.log(person.calculateAge());



let nikola = {
    firstName: "Nikola",
    lastName:"Todorovski",
    dateOfBirth:"05.11.1992"
}
let marjan = {
    firstName: "Marjan",
    lastName:"Ugrinoski",
    dateOfBirth:"14.8.1991"
}

let family = {
    numberOfMembers: 2,
    members: [nikola,marjan],
    calcAvg: function(){
        let arr = [];
        this.members.forEach(function(item){
            let age = item.dateOfBirth.split(".");
            age = new Date().getFullYear() - 1 - Number(age[2]);
            arr.push(age);
        });
        let result = 0;
        for(i=0;i<arr.length;i++){
            result = result + arr[i];
        }
        return result / arr.length;
    },
    calcSum: function(){
        let arr = [];
        this.members.forEach(function(item){
            let age = item.dateOfBirth.split(".");
            age = new Date().getFullYear() - 1 - Number(age[2]);
            arr.push(age);
        });
        let result = 0;
        for(i=0;i<arr.length;i++){
            result = result + arr[i];
        }
        return result;
    }
}

console.log(family.calcAvg());
console.log(family.calcSum());