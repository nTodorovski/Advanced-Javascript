function getInfo() {
    let obj = {
        name: $("#name").val(),
        pilot: $("#pilot").val(),
        fuelTankCapacity: $("#fuelTank").val(),
        currentLocation: $("#currentLocation").val(),
        type: $("#type").val(),
    }
    return obj;
}

function getFighterProps() {
    let obj = {
        weapons: $("#weapons").val(),
        shield: $("#shield").val(),
        numberOfKills: $("#numberOfKills").val()
    }
    return obj;
}

function createFighter() {
    let fighter = new Fighter(getInfo(), getFighterProps());

    $("#fighters").append(`
    <h3>FIGHTER</h3>
    <img src="img/fighter.png" alt="fighter">
    <ul>
    <li>Name: ${fighter.name}</li>
    <li>Pilot: ${fighter.pilot}</li>
    <li>Fuel Tank Capacity: ${fighter.fuelTankCapacity}</li>
    <li>Current Location: ${fighter.currentLocation}</li>
    <li>Type of Starship: ${fighter.type}</li>
    <li>Weapons: ${fighter.weapons}</li>
    <li>Shield: ${fighter.shield}</li>
    <li>Number of Kills: ${fighter.numberOfKills}</li>
    </ul>`)

    $("#fighters").removeClass("display-none");

}

function getCargoProps() {
    let obj = {
        cargoCapacity: $("#cargoCapacity").val(),
        tradingRoute: $("#tradingRoute").val(),
        loadingCranes: $("#loadingCranes").val()
    }
    return obj;
}

function createCargo() {
    let cargo = new Cargo(getInfo(), getCargoProps());

    $("#cargos").append(`
    <h3>CARGO</h3>
    <img src="img/cargo.jpg" alt="cargo">
    <ul>
    <li>Name: ${cargo.name}</li>
    <li>Pilot: ${cargo.pilot}</li>
    <li>Fuel Tank Capacity: ${cargo.fuelTankCapacity}</li>
    <li>Current Location: ${cargo.currentLocation}</li>
    <li>Type of Starship: ${cargo.type}</li>
    <li>Weapons: ${cargo.cargoCapacity}</li>
    <li>Shield: ${cargo.tradingRoute}</li>
    <li>Number of Kills: ${cargo.loadingCranes}</li>
    </ul>`)

    $("#cargos").removeClass("display-none");
}

function getMiningProps() {
    let obj = {
        miningTools: $("#miningTools").val(),
        miningTypes: $("#miningTypes").val(),
        miningStorage: $("#miningStorage").val()
    }
    return obj;
}

function createMining() {
    let mining = new Mining(getInfo(), getMiningProps());

    $("#minings").append(`
    <h3>MINER</h3>
    <img src="img/miner.jpg" alt="miner">
    <ul>
    <li>Name: ${mining.name}</li>
    <li>Pilot: ${mining.pilot}</li>
    <li>Fuel Tank Capacity: ${mining.fuelTankCapacity}</li>
    <li>Current Location: ${mining.currentLocation}</li>
    <li>Type of Starship: ${mining.type}</li>
    <li>Weapons: ${mining.miningTools}</li>
    <li>Shield: ${mining.miningTypes}</li>
    <li>Number of Kills: ${mining.miningStorage}</li>
    </ul>`)

    $("#minings").removeClass("display-none");
}