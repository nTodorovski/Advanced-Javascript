let arr = [];
let newArr = [];
let counter = 0;
document.write("Try amountToCoins(46, [25, 10, 5, 2, 1])");
function amountToCoins(number,niza){
    if(number === 0){
        counter = 0;
        newArr = arr;
        arr = [];
        return newArr;
    }
    if(niza[counter]<=number){
        number = number - niza[counter];
        arr.push(niza[counter]);
        return amountToCoins(number,niza);
    }else{
        counter++;
        return amountToCoins(number,niza);
    }
}