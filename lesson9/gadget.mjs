
export default class Gadget {
    constructor(brand, model, year) {
        this.brand = brand,
            this.model = model,
            this._year = year
    }
    getInfo() {
        console.log(`бренд гаджета - ${this.brand}, модель - ${this.model}, рiк випуску - ${this.year}`)
    }
    get year() {
        return this._year
    }
    set year(carYear) {
        if (carYear > 2000 && carYear <= 2025) {
            this._year = carYear
            console.log(`${carYear} - Коректний рiк`)
        }
        else {
            console.log(`Помилка: ${carYear} некоректний рік`)
        }
    }
    static getOldestGadget(gadgetsArray) {
        let oldest = gadgetsArray[0];

        for (let gadget of gadgetsArray) {
            if (gadget.year < oldest.year) {
                oldest = gadget;
            }
        }
    
        return oldest;
}
if (oldest) {
    console.log("Найстаріший гаджет:");
    oldest.getInfo();
}
}
