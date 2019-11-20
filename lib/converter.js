"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const units_1 = require("./units");
class Converter {
    constructor(value, systemName) {
        this.value = value;
        this.currentFromBase = null;
        this.wantedFromBase = null;
        this.unitSystem = null;
        this.unitSystem = units_1.UnitSystems.find(x => x.name == systemName);
    }
    from(unitKey) {
        if (this.unitSystem.units[unitKey] == undefined) {
            throw Error(`Unit ${unitKey} is not available`);
        }
        else {
            this.currentFromBase = this.unitSystem.units[unitKey];
        }
        return this;
    }
    to(unitKey) {
        if (this.unitSystem.units[unitKey] == undefined) {
            throw Error(`Unit ${unitKey} is not available`);
        }
        else {
            this.wantedFromBase = this.unitSystem.units[unitKey];
        }
        return this;
    }
    calculate() {
        if (this.currentFromBase == null) {
            throw Error(`Original unit is not set`);
        }
        else if (this.wantedFromBase == null) {
            throw Error(`Wanted unit is not set`);
        }
        else {
            const multiplier = this.currentFromBase / this.wantedFromBase;
            return this.value * multiplier;
        }
    }
}
exports.Converter = Converter;
//# sourceMappingURL=converter.js.map