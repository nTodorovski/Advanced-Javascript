function combination(str){
    let lenStr = str.length;
    let result = [];
    let index = 0;
    while(index < lenStr){
    let char = str.charAt(index);
    let x;
    let arr = [char];
    for(x in result){
        arr.push(""+result[x]+char);
    }
    result = result.concat(arr);
    index++;
    }
    for(i=0;i<result.length;i++){
        for(j=i+1;j<result.length;j++){
            if(result[i] === result[j]){
                result.splice(j,1);
            }
        }
    }
    let div = $("<div>");
    for(i=0;i<result.length;i++){
        div.append(`${result[i]}<br>`);
    }
    $("body").append(div);
    return result;
}

combination("dog");