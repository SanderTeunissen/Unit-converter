"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const units_1 = require("./units");
class Converter {
    constructor(value) {
        this.value = value;
        this.unitSystems = units_1.UnitSystems;
    }
    from(unit) {
        this.findOriginalUnit(unit);
        return this;
    }
    to(unit) {
        this.findToUnit(unit);
        return this;
    }
    calculate() {
        if (this.fromUnit === undefined) {
            throw new Error("Before you call the calculate function, you have to call the from and to functions to define what units to convert");
        }
        else if (this.toUnit === undefined) {
            throw new Error("Before you call the calculate function, you have to call the to function to define what unit to convert to");
        }
        else {
            return this.value / this.toUnit.to_base * this.fromUnit.to_base;
        }
    }
    findOriginalUnit(unit) {
        Object.keys(this.unitSystems).map((key) => {
            if (unit in this.unitSystems[key].units) {
                this.unitSystem = this.unitSystems[key];
                this.fromUnitKey = unit;
                this.fromUnit = this.unitSystems[key].units[unit];
            }
        });
        if (this.unitSystem === undefined || this.fromUnit === undefined) {
            throw new Error(`Unit ${unit} is not available`);
        }
    }
    findToUnit(unit) {
        if (this.unitSystem === undefined || this.fromUnit === undefined) {
            throw new Error("First you have to set te orignal unit");
        }
        else {
            if (unit in this.unitSystem.units) {
                this.toUnitKey = unit;
                this.toUnit = this.unitSystem.units[unit];
            }
            else {
                throw new Error(`Unit ${this.fromUnitKey} not convertable to unit ${unit}`);
            }
        }
    }
}
exports.Converter = Converter;
//# sourceMappingURL=converter.js.map