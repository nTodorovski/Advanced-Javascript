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

function findPerson(){
    $("tbody tr").click((event)=>{
        let name = event.currentTarget.firstElementChild.innerHTML;
        for (const person of allResultsPeople) {
            if(person.name === name){
                showStats(person);
            }
        }
    });
}

function findPlanet(){
    $("tbody tr").click((event)=>{
        let name = event.currentTarget.firstElementChild.innerHTML;
        for (const planet of allResultsPlanets) {
            if(planet.name === name){
                showStats(planet);
            }
        }
    });
}

function showStats(person){
    $("#dialog").empty();
    let p = $("<p>");
    p.css("background-color","white","color","black")
    let dialog = $("#dialog");
    $("#dialog").dialog({
        title: ''
    });

    let entries = Object.entries(person);
    let k = '';
    for (const key of entries) {
        if(typeof key[1] === "object" && key[1].length > 1){
            for (const string of key[1]) {
                k = k+"<br>"+string;
            }
            p.append(`<p>
                ${key[0]} : ${k}
            </p>`);
        }else{
            p.append(`<p>
                ${key[0]} : ${key[1]}
            </p>`);
        }
        p.appendTo(dialog);
    }
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

    for (const person of allPeople) {
        $("tbody").append(`<tr>
        <td>${person.personname}</td>
        <td>${person.gender}</td>
        <td>${person.birthyear}</td>
        <td>${person.height}</td>
        <td>${person.mass}</td>
        </tr>`);
    }

    findPerson();
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
    
    findPlanet();
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

    let proverka = '';
    if($("#people").hasClass("display-none")){
        proverka = "planeti";
    }else if($("#planets").hasClass("display-none")){
        proverka = "lugje";
    }

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
            if (size > 0 && proverka === "lugje") {
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

            if (size1 > 0 && proverka === "planeti") {
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
$("th").on("click", (event) => {
    $("th").css("color", "black");
    let name = event.currentTarget.innerHTML.toLowerCase().replace(" ", "");
    console.log(name)
    let sortirana = [];
    let sortirana1 = [];
    if (allPlanets.length > 0) {
        if (allPlanets[0].hasOwnProperty(name)) {
            if (name === "planetname") {
                $(event.currentTarget).css("color", "red");
                $("#body").empty();
                sortirana = allPlanets.sort((f, s) => f.planetname.localeCompare(s.planetname));
                makeTablePlanets(sortirana);
                findPlanet();
            }
        }
    }

    if (allPeople.length > 0) {
        if (allPeople[0].hasOwnProperty(name)) {
            if (name === "personname") {
                $(event.currentTarget).css("color", "red");
                $("#body").empty();
                sortirana1 = allPeople.sort((f, s) => f.personname.localeCompare(s.personname));
                makeTablePeople(sortirana1);
                findPerson();
            }
            if (name === "gender") {
                $(event.currentTarget).css("color", "red");
                $("#body").empty();
                sortirana1 = allPeople.sort((f, s) => f.gender.localeCompare(s.gender));
                makeTablePeople(sortirana1);
                findPlanet();
            }
        }
    }
});