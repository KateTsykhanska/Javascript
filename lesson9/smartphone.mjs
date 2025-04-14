import Gadget from "./gadget.mjs";

export default class Smartphone extends Gadget {
    constructor(brand, model, year, operatingSystem) {
        super(brand, model, year);
        this._operatingSystem = operatingSystem
    }
    getInfo() {
        return (`бренд гаджета - ${this.brand}, модель - ${this.model}, рiк випуску - ${this.year}, операцiйна система - ${this.operatingSystem}`)
    }
    get operatingSystem() {
        return this._operatingSystem
    }
    set operatingSystem(setterOperatingSystem) {
        if (setterOperatingSystem === "iOS" ||
            setterOperatingSystem === "Android" ||
            setterOperatingSystem === "HarmonyOS") {
            this._operatingSystem = setterOperatingSystem
            console.log(`Операцiйна система - ${setterOperatingSystem}`)
        }
        else {
            console.log(`Помилка: ${setterOperatingSystem} недоступна операційна система`)
        }
    }
}