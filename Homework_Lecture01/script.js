$("#show").click(function() {
    $("tr").remove();
    let input = $("select").val();
    $.ajax({
        url: `https://restcountries.eu/rest/v2/region/${input}`,
        type: 'GET',
        crossDomain: 'true',
        success: function (response) {
            let countries = response;
            console.log(countries);
            createRow1(countries);
        },
        error: function (e) {
            console.log("The request failed!");
            console.log(response.responseText);
        }
    });
});

function createRow1(data){
    for(i=0;i<data.length;i++){
        let name = data[i].name;
        let table = $("tbody");
        table.append(`<tr>
        <td><button cs-tag="${name}">${name}</button></td>
        </tr>`)
    }
    $("button").click(function(event){
        let koja = event.target.attributes[0].value;
        let counter = 0;
        for(j=0;j<data.length;j++){
            if(data[j].name === koja){
                let div = $(`<div>`);
                let br = $("<br>")
                div.append(`
                <p>Name: ${data[j].name}</p><br>
                <p>Capital: ${data[j].capital}</p><br>
                <p>Currency: ${data[j].currencies[0].name}</p><br>
                <p>Flag:<img src="${data[j].flag}" width="70" height="40"></p><br>
                <p>Language: ${data[j].languages[0].name}</p><br>
                <p>Borders: ${data[j].borders}</p><br>
                <p>Calling Code: ${data[j].callingCodes}</p><br>
                <p>Population: ${data[j].population}</p><br>
                <p>SubRegion: ${data[j].subregion}</p><br>
                <p>Area: ${data[j].area}</p><br>
                <button id="${counter}">Delete</button>
                `)
                $("body").prepend(br);
                $("body").prepend(div);
                $(`#${counter}`).click(function(){
                    div.remove();
                    br.remove();
                })
                counter++;
            }
        }
    })
}