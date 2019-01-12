$("button").click(reverseNumber);

function reverseNumber(){
    let str = $("input").val().split("").reverse();
    let number = Number(str.join(""));
    $("<div>").text(`Reverse Number: ${number}`).appendTo("body");
}