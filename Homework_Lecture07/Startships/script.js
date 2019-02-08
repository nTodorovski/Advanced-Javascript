class Starships {
    constructor({ name, pilot, fuelTankCapacity, currentLocation, type }) {
        this.name = name;
        this.pilot = pilot;
        this.fuelTankCapacity = fuelTankCapacity;
        this.currentLocation = currentLocation;
        this.type = type;
    }
    startEngine() {
        return `Engine Started`
    }
    takeOff() {
        return `Starship took off`
    }
    land() {
        return `Startship landed`
    }
}

class Fighter extends Starships {
    constructor({ name, pilot, fuelTankCapacity, currentLocation, type }, { weapons, shield, numberOfKills }) {
        super({ name, pilot, fuelTankCapacity, currentLocation, type });
        this.weapons = weapons;
        this.shield = shield;
        this.numberOfKills = numberOfKills;
    }

    shootWeapon1() {
        return `Shoot Weapon 1`
    }

    shootWeapon2() {
        return `Shoot Weapon 2`
    }

    shootWeapon3() {
        return `Shoot Weapon 3`
    }
}

class Cargo extends Starships {
    constructor({ name, pilot, fuelTankCapacity, currentLocation, type }, { cargoCapacity, tradingRoute, loadingCranes }) {
        super({ name, pilot, fuelTankCapacity, currentLocation, type });
        this.cargoCapacity = cargoCapacity;
        this.tradingRoute = tradingRoute;
        this.loadingCranes = loadingCranes;
    }

    load() {
        return `Ship loaded`
    }

    unload() {
        return `Ship unloaded`
    }
}

class Mining extends Starships {
    constructor({ name, pilot, fuelTankCapacity, currentLocation, type }, { miningTools, miningTypes, miningStorage }) {
        super({ name, pilot, fuelTankCapacity, currentLocation, type });
        this.miningTools = miningTools;
        this.miningTypes = miningTypes;
        this.miningStorage = miningStorage;
        this._temp;
    }

    mine() {
        return `Mining right now`
    }

    setStorageTemp(n) {
        this._temp = n;
    }
}

$("#select").click(() => {
    let ship = $("#starships").val();

    if (ship === "fighter") {

        $("#selectedShip").append(`
        <h3>FIghter</h3>
        <label for="name">Name</label>
        <input type="text" id="name" value="Executor"><br>
        <label for="pilot">Pilot</label>
        <input type="text" id="pilot" value="Luke Skywalker"><br>
        <label for="fuelTank">Fuel Tank Capacity</label>
        <input type="text" id="fuelTank" value="130l"><br>
        <label for="currentLocation">Current Location</label>
        <input type="text" id="currentLocation" value="Aerodrom"><br>
        <label for="type">Type of Starship</label>
        <input type="text" id="type" value="Fighter"><br>
        <label for="weapons">Weapons</label>
        <input type="text" id="weapons" value="Lasers"><br>
        <label for="shield">Shield</label>
        <input type="text" id="shield" value="Aura Shield"><br>
        <label for="numberOfKills">Number Of Kills</label>
        <input type="text" id="numberOfKills" value="30"><br>
        <button id="createFighter">Create Fighter Ship</button>`)

        $("#createFighter").click(() => {
            createFighter();
            $("input").val(" ");
            $("#selectedShip").empty();
        })

    } else if (ship === "cargo") {

        $("#selectedShip").append(`
        <h3>Cargo</h3>
        <label for="name">Name</label>
        <input type="text" id="name" value="Death Star"><br>
        <label for="pilot">Pilot</label>
        <input type="text" id="pilot" value="Darth Vader"><br>
        <label for="fuelTank">Fuel Tank Capacity</label>
        <input type="text" id="fuelTank" value="200l"><br>
        <label for="currentLocation">Current Location</label>
        <input type="text" id="currentLocation" value="Centar"><br>
        <label for="type">Type of Starship</label>
        <input type="text" id="type" value="Cargo"><br>
        <label for="cargoCapacity">Cargo Capacity</label>
        <input type="text" id="cargoCapacity" value="250000"><br>
        <label for="tradingRoute">Trading Route</label>
        <input type="text" id="tradingRoute" value="Aerodrom-Centar"><br>
        <label for="loadingCranes">Loading Cranes</label>
        <input type="text" id="loadingCranes" value="3"><br>
        <button id="createCargo">Create Cargo Ship</button>`)

        $("#createCargo").click(() => {
            createCargo();
            $("input").val(" ");
            $("#selectedShip").empty();
        })

    } else if (ship === "mining") {

        $("#selectedShip").append(`
        <h3>Mining</h3>
        <label for="name">Name</label>
        <input type="text" id="name" value="Y-wing"><br>
        <label for="pilot">Pilot</label>
        <input type="text" id="pilot" value="Yoda"><br>
        <label for="fuelTank">Fuel Tank Capacity</label>
        <input type="text" id="fuelTank" value="100l"><br>
        <label for="currentLocation">Current Location</label>
        <input type="text" id="currentLocation" value="Karposh"><br>
        <label for="type">Type of Starship</label>
        <input type="text" id="type" value="Miner"><br>
        <label for="miningTools">Mining Tools</label>
        <input type="text" id="miningTools" value="Hammers"><br>
        <label for="miningTypes">Mining Types</label>
        <input type="text" id="miningTypes" value="Surface Mining"><br>
        <label for="miningStorage">Mining Storage Capacity</label>
        <input type="text" id="miningStorage" value="254000"><br>
        <button id="createMining">Create Mining Ship</button>`)

        $("#createMining").click(() => {
            createMining();
            $("input").val(" ");
            $("#selectedShip").empty();
        })
    }
})


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