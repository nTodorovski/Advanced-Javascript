function longest(str){
    let length = 0;
    let word = '';
    let array = str.split(" ");
    for(i=0;i<array.length;i++){
        if(array[i].length > length){
            length = array[i].length;
            word = array[i];
        }
    }
    return word;
}