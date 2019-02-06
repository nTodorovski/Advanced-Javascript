let person = {
    name: 'Martina',
    middleName: 'Luther',
    lastName: 'Queen'
}

Object.prototype.getKeysAndVals = function () {
    let keysOfObject = Object.keys(this);
    let valuesOfObject = Object.values(this);
    return [keysOfObject,valuesOfObject];
}

let [keys,values] = person.getKeysAndVals();

console.log(keys);
console.log(values);
