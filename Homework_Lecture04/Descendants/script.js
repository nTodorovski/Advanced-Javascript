const familyTree = [{
    name: "Oliver",
    lastname: "Stones",
    childrens: [
        {
            name: "Viktor",
            lastname: "Stones",
            childrens: []
        },
        {
            name: "Suzan",
            lastname: "Sloun",
            childrens: [
                {
                    name: "Oliver jr",
                    lastname: "Sloun",
                    childrens: [
                        {
                            name: "Alexandar",
                            lastname: "Sloun",
                            childrens: [
                                {
                                    name: "Suzie",
                                    lastname: "Sloun",
                                    childrens: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Alex",
                    lastname: "Sloun",
                    childrens: [
                        {
                            name: "Gabriel",
                            lastname: "Sloun",
                            childrens: [
                                {
                                    name: "Gabriela",
                                    lastname: "Sloun",
                                    childrens: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}];
document.write(`Write ex: descendant("Suzan",familyTree)`);

function descendant(ime,node) {
    node.forEach(element => {
        if(ime === element.name){
            let elm = element;
            return console.log(printName(elm));
        }else{
            return descendant(ime,element.childrens);
        }
    });
}

let arr = [];

function printName(obj){
    obj.childrens.forEach(element => {
        arr.push(element.name);
        return printName(element);
    })
    return arr;
}