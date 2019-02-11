const hideAll = () => {
    $('.types').removeClass('hidden')
    $('.builder').addClass('hidden')
    $('#fighter').addClass('hidden')
    $('#cargo').addClass('hidden')
    $('#miner').addClass('hidden')
}
const showFighter = () => {
    $('.types').addClass('hidden')
    $('.builder').removeClass('hidden')
    $('#fighter').removeClass('hidden')
}
const showCargo = () => {
    $('.types').addClass('hidden')
    $('.builder').removeClass('hidden')
    $('#cargo').removeClass('hidden')
}
const showMiner = () => {
    $('.types').addClass('hidden')
    $('.builder').removeClass('hidden')
    $('#miner').removeClass('hidden')
}

const readInputs = () => {
    let obj = {}
    obj.name = $('#name').val()
    obj.pilot = $('#pilot').val()
    obj.fuelTankCapacity = $('#tank').val()
    obj.currentLocation = $('#currentLoc').val()
    obj.weapons = $('#weapons').val()
    obj.shield = $('#shield').val()
    obj.numberOfKills = $('#kills').val()
    obj.cargoCapacity = $('#cargoCap').val()
    obj.tradingRoute = $('#tradeRoute').val()
    obj.loadingCranes = $('#cranes').val()
    obj.miningTools = $('#mineTools').val()
    obj.miningTypes = $('#mineTypes').val()
    obj.miningStorage = $('#oreCap').val()
    return obj
}

const validateInputs = (ship,type) => {
    if(type === 'fighter'){
        let arr = [ship.name,ship.pilot,ship.fuelTankCapacity,ship.currentLocation,ship.weapons,ship.shield,ship.numberOfKills];
        for (const property of arr) {
            if(property === ""){
                return false;
            }
        }
    }else if(type === 'cargo'){
        let arr = [ship.name,ship.pilot,ship.fuelTankCapacity,ship.currentLocation,ship.cargoCapacity,ship.tradingRoute,ship.loadingCranes];
        for (const property of arr) {
            if(property === ""){
                return false;
            }
        }
    }else if(type === "miner"){
        let arr = [ship.name,ship.pilot,ship.fuelTankCapacity,ship.currentLocation,ship.miningStorage,ship.miningTools,ship.miningTypes];
        for (const property of arr) {
            if(property === ""){
                return false;
            }
        }
    }
    
    return true;
}

const getType = () => {
    const types = $('.shipType').toArray()
    for (const type of types) {
        if (!$(type).hasClass('hidden')) {
            return $(type).attr('id')
        }
    }
}

const showShips = () => {
    $("#fighters").empty();
    $("#cargos").empty();
    $("#miners").empty();
    for (const ship of shipyard) {
        if (ship.type === "fighter") {

            $("#fighters").append(`
            <div class="card" style="width: 18rem;" >
                <img src="./img/fighter.png" class="card-img-top" alt="fighter">
                <h5 class="card-header">FIGHTER</h5>
                <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Name: ${ship.name}</li>
                    <li class="list-group-item">Pilot: ${ship.pilot}</li>
                    <li class="list-group-item">Fuel Tank: ${ship.fuelTankCapacity}</li>
                    <li class="list-group-item">Location: ${ship.currentLocation}</li>
                    <li class="list-group-item">Weapons: ${ship.weapons}</li>
                    <li class="list-group-item">Shield: ${ship.shield}</li>
                    <li class="list-group-item">Kills: ${ship.numberOfKills}</li>
                </ul>
                <a href="#" class="card-link" id="${ship.name}1">Start Engine</a>
                <a href="#" class="card-link" id="${ship.name}2">Take Off</a>
                <a href="#" class="card-link" id="${ship.name}3">Land</a>
                <a href="#" class="card-link" id="${ship.name}4">Shoot Weapon 1</a>
                <a href="#" class="card-link" id="${ship.name}5">Shoot Weapon 2</a>
                <a href="#" class="card-link" id="${ship.name}6">Shoot Weapon 3</a>
                </div>
            </div>`)

            $(`#${ship.name}1`).click(() => {
                alert(ship.startEngine());
            })

            $(`#${ship.name}2`).click(() => {
                alert(ship.takeOff());
            })

            $(`#${ship.name}3`).click(() => {
                alert(ship.land());
            })
            
            $(`#${ship.name}4`).click(() => {
                alert(ship.shootWeapon1());
            })

            $(`#${ship.name}5`).click(() => {
                alert(ship.shootWeapon2());
            })

            $(`#${ship.name}6`).click(() => {
                alert(ship.shootWeapon3());
            })
        } else if (ship.type === "cargo") {

            $("#cargos").append(`
            <div class="card" style="width: 18rem;">
                <img src="./img/cargo.jpg" class="card-img-top" alt="cargo">
                <h5 class="card-header">CARGO</h5>
                <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Name: ${ship.name}</li>
                    <li class="list-group-item">Pilot: ${ship.pilot}</li>
                    <li class="list-group-item">Fuel Tank: ${ship.fuelTankCapacity}</li>
                    <li class="list-group-item">Location: ${ship.currentLocation}</li>
                    <li class="list-group-item">Cargo Capacity: ${ship.cargoCapacity}</li>
                    <li class="list-group-item">Trading Route: ${ship.tradingRoute}</li>
                    <li class="list-group-item">Loading Cranes: ${ship.loadingCranes}</li>
                </ul>
                <a href="#" class="card-link" id="${ship.name}1">Start Engine</a>
                <a href="#" class="card-link" id="${ship.name}2">Take Off</a>
                <a href="#" class="card-link" id="${ship.name}3">Land</a>
                <a href="#" class="card-link" id="${ship.name}4">Load</a>
                <a href="#" class="card-link" id="${ship.name}5">Unload</a>
                </div>
            </div>`)

            $(`#${ship.name}1`).click(() => {
                alert(ship.startEngine());
            })

            $(`#${ship.name}2`).click(() => {
                alert(ship.takeOff());
            })

            $(`#${ship.name}3`).click(() => {
                alert(ship.land());
            })
            
            $(`#${ship.name}4`).click(() => {
                alert(ship.load());
            })

            $(`#${ship.name}5`).click(() => {
                alert(ship.unload());
            })
        } else if (ship.type === "miner") {

            $("#miners").append(`
            <div class="card" style="width: 18rem;">
                <img src="./img/miner.jpg" class="card-img-top" alt="miner">
                <h5 class="card-header">MINER</h5>
                <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Name: ${ship.name}</li>
                    <li class="list-group-item">Pilot: ${ship.pilot}</li>
                    <li class="list-group-item">Fuel Tank: ${ship.fuelTankCapacity}</li>
                    <li class="list-group-item">Location: ${ship.currentLocation}</li>
                    <li class="list-group-item">Mining Tools: ${ship.miningTools}</li>
                    <li class="list-group-item">Mining Types: ${ship.miningTypes}</li>
                    <li class="list-group-item">Mining Storage: ${ship.miningStorage}</li>
                </ul>
                <a href="#" class="card-link" id="${ship.name}1">Start Engine</a>
                <a href="#" class="card-link" id="${ship.name}2">Take Off</a>
                <a href="#" class="card-link" id="${ship.name}3">Land</a>
                <a href="#" class="card-link" id="${ship.name}4">Mine</a>
                <a href="#" class="card-link" id="${ship.name}5">Set Storage Temperature</a>
                    <div class="input-group mb-3">
                        <input id="temp" type="text" class="form-control" placeholder="Temperature" aria-label="Temperature" aria-describedby="basic-addon1">
                    </div>
                </div>
            </div>`)

            $(`#${ship.name}1`).click(() => {
                alert(ship.startEngine());
            })

            $(`#${ship.name}2`).click(() => {
                alert(ship.takeOff());
            })

            $(`#${ship.name}3`).click(() => {
                alert(ship.land());
            })
            
            $(`#${ship.name}4`).click(() => {
                alert(ship.mine());
            })

            $(`#${ship.name}5`).click(() => {
                if($("#temp").val() === ""){
                    alert("Enter temperature.")
                }else{
                    let temp = $("#temp").val();
                    alert(ship.setStorageTemp(temp));
                    $("#temp").val("");
                }
            })
        }
    }
}