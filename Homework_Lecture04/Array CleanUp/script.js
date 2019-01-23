let ar = [1, NaN, 2, [3, NaN,'', 5] ];

function obraboti(niza){
    niza.forEach(function(value,index){
        if(typeof value === "number" || typeof value === "string"){
            if(!parseInt(value)){
                niza.splice(index,1);
                obraboti(niza);
            }
        }else if(typeof value === "object"){
            obraboti(value);
        }
    });
    return niza;
}
obraboti(ar);
console.log(ar);