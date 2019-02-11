$(() => {
    $('.hideAll').on('click', hideAll)
    $('#fighterBuilder').on('click', showFighter)
    $('#cargoBuilder').on('click', showCargo)
    $('#minerBuilder').on('click', showMiner)
    $('#build').on('click', () => {
        let [ship, type] = getVals()
        if(validateInputs(ship,type)){
            buildShip(ship,type)
            showShips();
            $("input").val("");
            $("#close1").click();
        }else{
            alert("Fill all inputs.");
        }
    })
})

let shipyard = [];

const getVals = () => {
    let ship = readInputs()
    let type = getType()
    ship.type = type

    return [ship, type]
}

const buildShip = (ship, type) => {
    switch (type) {
        case 'fighter':
            shipyard.push(new Fighter(ship))
            break;
        case 'cargo':
            shipyard.push(new Cargo(ship))
            break;
        case 'miner':
            shipyard.push(new Mining(ship))
            break;
        default:
            break;
    }
}