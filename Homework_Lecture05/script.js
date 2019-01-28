let people;
let people1;
let planets;
let planets1;
let size;
let size1;
let name;
let flag = 0;
let flag1 = 0;
let flag2 = 0;
let arrPeople = [];
let arrPlanets = [];
let sortirana;
let sortirana1;

function ajaxCallPeople(){
    if(size === undefined){
        $("#table").hide();
        $("#spinner").removeClass("display-none");
        $(".logo").hide();
        $.ajax({
            method: "GET",
            url: "https://swapi.co/api/people",
            success: function(response){
                let people1 = response;
                getPeople(people1);
            },
            error: function(response){
                console.log("The request failed!");
                console.log(response.responseText);
            }
        });
    }else{
        getPeople(people);
    }
}
 
function ajaxCallPlanets(){
    if(size1 === undefined){
        $("#table").hide();
        $("#spinner").removeClass("display-none");
        $(".logo").hide();
        $.ajax({
            method: "GET",
            url: "https://swapi.co/api/planets",
            success: function(response){
                let planets1 = response;
                getPlanets(planets1);
            },
            error: function(response){
                console.log("The request failed!");
                console.log(response.responseText);
            }
        });
    }else{
        getPlanets(planets);
    }
}
 
 
function getPeople(data){
    people = data;
    size = Object.keys(people).length;
    if($("#izmislena")){
        $("#izmislena").remove();
    }
    $("#table").show();
    $(".logo").show();
    $("#spinner").addClass("display-none");

    $("#table").removeClass("display-none");
    $("#people").removeClass("display-none");
    $("#planets").addClass("display-none");

    $("tbody").empty();

    people1 = people.results.map(function(item){
        return {
            personname:item.name,
            gender:item.gender,
            birthyear:item.birth_year,
            height:item.height,
            mass:item.mass
        }
    });

    for(i=0;i<people1.length;i++){
        $("tbody").append(`<tr>
        <td>${people1[i].personname}</td>
        <td>${people1[i].gender}</td>
        <td>${people1[i].birthyear}</td>
        <td>${people1[i].height}</td>
        <td>${people1[i].mass}</td>
        </tr>`);
    }
}
 
function getPlanets(data){
    planets = data;
    size1 = Object.keys(planets).length;
    if($("#izmislena")){
        $("#izmislena").remove();
    }
    $("#table").show();
    $(".logo").show();
    $("#spinner").addClass("display-none");

    $("#table").removeClass("display-none");
    $("#planets").removeClass("display-none");
    $("#people").addClass("display-none");

    $("tbody").empty();

    planets1 = planets.results.map(function(item){
        return {
            planetname:item.name,
            diameter:item.diameter,
            climate:item.climate,
            terrain:item.terrain,
            rotationperiod:item.rotation_period,
            population:item.population
        }
    });

    for(i=0;i<planets1.length;i++){
        $("tbody").append(`<tr>
        <td>${planets1[i].planetname}</td>
        <td>${planets1[i].diameter}</td>
        <td>${planets1[i].climate}</td>
        <td>${planets1[i].terrain}</td>
        <td>${planets1[i].rotationperiod}</td>
        <td>${planets1[i].population}</td>
        </tr>`);
    }
}
 
$("#getPeople").click(function(){
    flag2 = 0;
    $("th").css("color","black");
    ajaxCallPeople();
});
 
$("#getPlanets").click(function(){
    flag2 = 0;
    $("th").css("color","black");
    ajaxCallPlanets();
});
 
$("#goHome").click(function(){
    flag2 = 1;
    $("#people").addClass("display-none");
    $("#planets").addClass("display-none");
    $("#table").hide();
    $(".logo").show();
    $("#izmislena").remove();
});
 
$("button").click(function(){
    $("th").css("color","black");
    name = $("input").val();
    name = name.toLowerCase();
    if(name === ""){
        $(".logo").hide();
        $("#table").hide();
        $(`<p id="error">`).text("Error!!! Empty input.").css("cssText","color:red !important;font-size: 40px !important;background-color: white !important").appendTo($(".container"));;
        setTimeout(function(){
            if(flag2 === 0){
                $("#table").show();
            }
            $(".logo").show();
            $("#error").remove();
        }, 2500);
    }else{
        if(size === undefined && size1 === undefined){
            $(".logo").hide();
            let h =$(`<p id="error1">`).text("Error!!! Make calls first.").appendTo($(".container"));
            h.css("cssText","color:red !important;font-size: 40px !important;background-color: white !important");
            setTimeout(function(){ 
                $(".logo").show();
                $("#error1").remove();
            }, 2500);
        }else{
            if(size > 0){  
                let arr = [];
                for(i=0;i<people1.length;i++){
                    let name1 = people1[i].personname.toLowerCase();
                    if(name1.includes(name) || people1[i].gender === name || people1[i].birthyear.includes(name) || people1[i].height.includes(name) || people1[i].mass.includes(name)){
                        flag = 1;
                        arr.push(people1[i]);
                    }
                }
                if(flag === 1){
                    arrPeople = arr;
                }
            }
    
            if(size1 > 0){    
                let arr1 = [];
        
                for(i=0;i<planets1.length;i++){
                    let name2 = planets1[i].planetname.toLowerCase();
                    if(name2.includes(name) || planets1[i].diameter.includes(name) || planets1[i].climate.includes(name) || planets1[i].terrain.includes(name) || planets1[i].rotationperiod.includes(name) || planets1[i].population.includes(name)){
                        flag1 = 1;
                        $("tbody").empty();
                        arr1.push(planets1[i]);
                    }
                }
                
                if(flag1 === 1){
                    arrPlanets = arr1;
                }
            }   
            if(flag === 0 && flag1 === 0){
                $("input").val("");
                $(".logo").hide();
                $("table").hide();
                let err =$("<p>").text("Error!!! Cannot find.").appendTo($(".container"));
                err.css("cssText","color:red !important;font-size: 40px !important;background-color: white !important");
                setTimeout(function(){ 
                    $("table").show();
                    err.hide();
                }, 2500);
            }
    
            if(arrPeople.length>0 && arrPlanets.length>0){
                $("#izmislena").empty();
                $("#body").empty();
                makeTablePeople(arrPeople);
                let table = $(`<table id="izmislena" class="table table-striped table-hover">`);
                table.append(`<thead>
                    <tr id="planets">
                        <th>Planet Name</th>
                        <th>Diameter</th>
                        <th>Climate</th>
                        <th>Terrain</th>
                        <th>Rotation Period</th>
                        <th>Population</th>
                    </tr>
                </thead>`);
                let tbody = $(`<tbody id="body">`).appendTo(table);
    
                for(i=0;i<arrPlanets.length;i++){
                    tbody.append(`<tr>
                    <td>${arrPlanets[i].planetname}</td>
                    <td>${arrPlanets[i].diameter}</td>
                    <td>${arrPlanets[i].climate}</td>
                    <td>${arrPlanets[i].terrain}</td>
                    <td>${arrPlanets[i].rotationperiod}</td>
                    <td>${arrPlanets[i].population}</td>
                    </tr>`)
                }
                table.prependTo("#div2");
                arrPeople = [];
                arrPlanets = [];
            }else if (arrPeople.length>0 && arrPlanets.length === 0){
                $("#izmislena").empty();
                $("#body").empty();
                makeTablePeople(arrPeople);
                arrPeople = [];
            }else if(arrPeople.length === 0 && arrPlanets.length > 0){
                $("#izmislena").empty();
                $("#body").empty();
                makeTablePlanets(arrPlanets);
                arrPlanets =[];
            }   
            flag = 0;
            flag1 = 0;
        }
    }
})

function makeTablePeople(arr){
    $("#planets").addClass("display-none");
    $("#people").removeClass("display-none");

    for(i=0;i<arr.length;i++){
        $("tbody").append(`<tr>
            <td>${arr[i].personname}</td>
            <td>${arr[i].gender}</td>
            <td>${arr[i].birthyear}</td>
            <td>${arr[i].height}</td>
            <td>${arr[i].mass}</td>
        </tr>`)
    }
    $("table").show();
}

function makeTablePlanets(arr1){
    $("#planets").removeClass("display-none");
    $("#people").addClass("display-none");

    for(i=0;i<arr1.length;i++){
        $("tbody").append(`<tr>
            <td>${arr1[i].planetname}</td>
            <td>${arr1[i].diameter}</td>
            <td>${arr1[i].climate}</td>
            <td>${arr1[i].terrain}</td>
            <td>${arr1[i].rotationperiod}</td>
            <td>${arr1[i].population}</td>
        </tr>`)
    }
    $("table").show();
}
$("th").on("click", (event) => {
    $("th").css("color","black");
    let c = event.currentTarget.innerHTML;
    $(event.currentTarget).css("color","red");
    let name = c.toLowerCase().replace(" ","");

    if(planets1){
        if(planets1[0].hasOwnProperty(name)){
            $("#body").empty();
            if(name === "planetname"){
                sortirana = planets1.sort((f, s) => f.planetname.localeCompare(s.planetname));
                makeTablePlanets(sortirana);
            }else if(name === "climate"){
                sortirana = planets1.sort((f, s) => f.climate.localeCompare(s.climate));
                makeTablePlanets(sortirana);
            }else if(name === "terrain"){
                sortirana = planets1.sort((f, s) => f.terrain.localeCompare(s.terrain));
                makeTablePlanets(sortirana);
            }else{
                sortirana = planets1.sort(makeSorter(name));
                makeTablePlanets(sortirana);
            }
        }
    }

    if(people1){
        if(people1[0].hasOwnProperty(name)){
            $("#body").empty();
            if(name === "personname"){
                sortirana1 = people1.sort((f, s) => f.personname.localeCompare(s.personname));
                makeTablePeople(sortirana1);
            }else if(name === "gender"){
                sortirana1 = people1.sort((f, s) => f.gender.localeCompare(s.gender));
                makeTablePeople(sortirana1);
            }else if(name === "birthyear"){
                sortirana1 = people1.sort((f, s) => f.birthyear.toLowerCase().localeCompare(s.birthyear.toLowerCase()));
                makeTablePeople(sortirana1);
            }else{
                sortirana1 = people1.sort(makeSorter(name));
                makeTablePeople(sortirana1);
            }
        }
    }
});

function makeSorter(name) {
    return (f, s) => f[name] - s[name];
}