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