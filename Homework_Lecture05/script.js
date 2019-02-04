let allResultsPeople = []; //site lugje so site properties
let allResultsPlanets = []; //site planeti so site properties
let allPeople = []; // site lugje so properties sto mene mi trebaat samo
let allPlanets = []; // site planeti so propeties sto mene mi trebaat samo

let size;//goleminata na allPeople
let size1;//goleminata na allPlanets
let flag2 = 0;//proverka za dali se naogjam na Home,People ili Planets

let peopleUrl = "https://swapi.co/api/people";

let planetsUrl = "https://swapi.co/api/planets";

function ajaxCallPeople(url) {
    if (size === undefined) {
        $("#table").hide();
        $("#spinner").removeClass("display-none");
        $(".logo").hide();
        if (url === null) {
            getPeople(allPeople);
            return;
        }
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                allResultsPeople.push(myJson.results.map((item) => item));
                allResultsPeople = [].concat.apply([], allResultsPeople);

                let people = myJson.results.map(function (item) {
                    return {
                        personname: item.name,
                        gender: item.gender,
                        birthyear: item.birth_year,
                        height: item.height,
                        mass: item.mass
                    }
                });
                allPeople = allPeople.concat(people);
                ajaxCallPeople(myJson.next);
            })
            .catch(error => console.error('Error:', error));
    } else {
        getPeople(allPeople);
    }
}

function ajaxCallPlanets(url) {
    if (size1 === undefined) {
        $("#table").hide();
        $("#spinner").removeClass("display-none");
        $(".logo").hide();
        if (url === null) {
            getPlanets(allPlanets);
            return;
        }
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                allResultsPlanets.push(myJson.results.map((item) => item));
                allResultsPlanets = [].concat.apply([], allResultsPlanets);

                let planets = myJson.results.map(function (item) {
                    return {
                        planetname: item.name,
                        diameter: item.diameter,
                        climate: item.climate,
                        terrain: item.terrain,
                        rotationperiod: item.rotation_period,
                        population: item.population
                    }
                });
                allPlanets = allPlanets.concat(planets);
                ajaxCallPlanets(myJson.next);
            })
            .catch(error => console.error('Error:', error));
    } else {
        getPlanets(allPlanets);
    }
}

async function asyncCall(id){
    await makeCall(id);
}

function makeCall(id){
    let name;
    fetch(`https://swapi.co/api/people/${id}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            name = response.name;
            $("#dialog").empty();
            $("#dialog").dialog({
                title: `${name}`
            })
            $("#ui-id-1").css({'background-color':'black','color':'white'});
            getProperties(response);
        })
}

function getProperties(data){
    let entries = Object.entries(data);
    $("#dialog").css("background-color","white");
    $("#dialog").append($(`<ul id="ul">`))
    let movieCounter = 1;
    for (const item of entries) {
        if(item[0] === "hair_color" || item[0] === "skin_color" || item[0] === "eye_color"){
            $("#ul").append(`<li>${item[0]} : ${item[1]}</li>`);
        }
        if(item[0] === "films"){
            let obj = item[1];
            $("#ul").append(`<li>${item[0]}<ul id="ul1"></ul></li>`)
            for (const item of obj) {
                $("#ul1").append(`<li data-field="${item}"><span style="color:DeepSkyBlue;cursor: pointer;">Movie ${movieCounter}</span></li>`);
                movieCounter++;
            }
            movieCounter = 1;
        }
    }
    let check = true;

    $("#ul1 li").click(function(event){
        let url = event.currentTarget.dataset.field;
        let li = event.currentTarget;
        
        fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            if(check === true){
                $(li).append(`<div id="div" style="background-color:silver">
                    <p>Title: ${response.title}</p>
                    <p>Director: ${response.director}</p>
                    <p>Producer: ${response.producer}</p>
                    <p>Release Date: ${response.release_date}</p>
                </div>`);
                check = false;
            }else if(check === false){
                $("#div").remove();
                check = true;
            }
        })
    })
}

function getPeople(allPeople) {
    size = Object.keys(allPeople).length;

    $("#table").show();
    $(".logo").show();
    $("#spinner").addClass("display-none");

    $("#table").removeClass("display-none");
    $("#people").removeClass("display-none");
    $("#planets").addClass("display-none");

    $("tbody").empty();
    
    let counter = 1;

    for (const person of allPeople) {
        $("tbody").append(`<tr id="${counter}">
        <td>${person.personname}</td>
        <td>${person.gender}</td>
        <td>${person.birthyear}</td>
        <td>${person.height}</td>
        <td>${person.mass}</td>
        </tr>`);
        counter++;
    }
    $("tbody tr").click((event)=>{
        let id = event.currentTarget.id;
        asyncCall(id);
    })
}

function getPlanets(allPlanets) {
    size1 = Object.keys(allPlanets).length;

    $("#table").show();
    $(".logo").show();
    $("#spinner").addClass("display-none");

    $("#table").removeClass("display-none");
    $("#planets").removeClass("display-none");
    $("#people").addClass("display-none");

    $("tbody").empty();

    for (const planet of allPlanets) {
        $("tbody").append(`<tr>
        <td>${planet.planetname}</td>
        <td>${planet.diameter}</td>
        <td>${planet.climate}</td>
        <td>${planet.terrain}</td>
        <td>${planet.rotationperiod}</td>
        <td>${planet.population}</td>
        </tr>`);
    }
}

$("#getPeople").click(function () {
    flag2 = 0;
    $("th").css("color", "black");
    ajaxCallPeople(peopleUrl);
});

$("#getPlanets").click(function () {
    flag2 = 0;
    $("th").css("color", "black");
    ajaxCallPlanets(planetsUrl);
});

$("#goHome , .navbar-brand").click(function () {
    flag2 = 1;
    $("input").val("")
    $("#people").addClass("display-none");
    $("#planets").addClass("display-none");
    $("#table").hide();
    $(".logo").show();
});

$("#search").click(function () {
    $("th").css("color", "black");

    let name = $("input").val().toLowerCase();
    
    if (name === "") {
        $(".logo").hide();
        $("#table").hide();
        $(`<p id="error">`).text("Error!!! Empty input.").css("cssText", "color:red !important;font-size: 40px !important;background-color: white !important").appendTo($(".container"));;
        setTimeout(function () {
            if (flag2 === 0) {
                $("#table").show();
            }
            $(".logo").show();
            $("#error").remove();
        }, 2500);
    } else {
        if (size === undefined && size1 === undefined) {
            $(".logo").hide();
            $(`<p id="error1">`).text("Error!!! Make calls first.").css("cssText", "color:red !important;font-size: 40px !important;background-color: white !important").appendTo($(".container"));
            setTimeout(function () {
                $(".logo").show();
                $("#error1").remove();
            }, 2500);
        } else {
            let flag = 0;
            let flag1 = 0;
            if (size > 0) {
                let arr = [];
                for (const person of allPeople) {
                    let name1 = person.personname.toLowerCase();
                    if(name1.includes(name)){
                        flag = 1;
                        arr.push(person);
                    }
                }
                if (flag === 1) {
                    $("#body").empty();
                    makeTablePeople(arr);
                }
            }

            if (size1 > 0) {
                let arr1 = [];

                for (const planet of allPlanets) {
                    let name2 = planet.planetname.toLowerCase();
                    if(name2.includes(name)){
                        flag1 = 1;
                        arr1.push(planet);
                    }
                }
                if (flag1 === 1) {
                    $("#body").empty();
                    makeTablePlanets(arr1);
                }
            }

            if (flag === 0 && flag1 === 0) {
                $("input").val("");
                $(".logo").hide();
                $("table").hide();
                let err = $("<p>").text("Error!!! Cannot find.").appendTo($(".container"));
                err.css("cssText", "color:red !important;font-size: 40px !important;background-color: white !important");
                
                setTimeout(function () {
                    $("table").show();
                    err.remove();
                }, 2500);
            }
        }
    }
})

function makeTablePeople(arr) {
    $("#planets").addClass("display-none");
    $("#people").removeClass("display-none");

    for (const person of arr) {
        $("tbody").append(`<tr>
        <td>${person.personname}</td>
        <td>${person.gender}</td>
        <td>${person.birthyear}</td>
        <td>${person.height}</td>
        <td>${person.mass}</td>
    </tr>`)
    }

    $("table").show();
}

function makeTablePlanets(arr1) {
    $("#planets").removeClass("display-none");
    $("#people").addClass("display-none");

    for (const planet of arr1) {
        $("tbody").append(`<tr>
        <td>${planet.planetname}</td>
        <td>${planet.diameter}</td>
        <td>${planet.climate}</td>
        <td>${planet.terrain}</td>
        <td>${planet.rotationperiod}</td>
        <td>${planet.population}</td>
    </tr>`)
    }

    $("table").show();
}
let proverka = true;
let proverka1 = true;
let proverka2 = true;

$("th").on("click", (event) => {
    $("th").css("color", "black");
    let name = event.currentTarget.innerHTML.toLowerCase().replace(" ", "");
    let sortirana = [];
    let sortirana1 = [];
    if (allPlanets.length > 0) {
        if (allPlanets[0].hasOwnProperty(name)) {
            if (name === "planetname") {
                if(proverka){
                    $(event.currentTarget).css("color", "red");
                    $("#body").empty();
                    sortirana = allPlanets.sort((f, s) => f.planetname.localeCompare(s.planetname));
                    makeTablePlanets(sortirana);
                    proverka = false;
                }else{
                    $(event.currentTarget).css("color", "blue");
                    $("#body").empty();
                    sortirana = allPlanets.sort((f, s) => s.planetname.localeCompare(f.planetname));
                    makeTablePlanets(sortirana);
                    proverka = true;
                }
            }
        }
    }

    if (allPeople.length > 0) {
        if (allPeople[0].hasOwnProperty(name)) {
            if (name === "personname") {
                if(proverka1){
                    $(event.currentTarget).css("color", "red");
                    $("#body").empty();
                    sortirana1 = allPeople.sort((f, s) => f.personname.localeCompare(s.personname));
                    makeTablePeople(sortirana1);
                    proverka1 = false;
                }else{
                    $(event.currentTarget).css("color", "blue");
                    $("#body").empty();
                    sortirana1 = allPeople.sort((f, s) => s.personname.localeCompare(f.personname));
                    makeTablePeople(sortirana1);
                    proverka1 = true;
                }
            }
            if (name === "gender") {
                if(proverka2){
                    $(event.currentTarget).css("color", "red");
                    $("#body").empty();
                    sortirana1 = allPeople.sort((f, s) => f.gender.localeCompare(s.gender));
                    makeTablePeople(sortirana1);
                    proverka2 = false;
                }else{
                    $(event.currentTarget).css("color", "blue");
                    $("#body").empty();
                    sortirana1 = allPeople.sort((f, s) => s.gender.localeCompare(f.gender));
                    makeTablePeople(sortirana1);
                    proverka2 = true;
                }
            }
        }
    }
});