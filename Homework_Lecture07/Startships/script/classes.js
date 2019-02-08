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