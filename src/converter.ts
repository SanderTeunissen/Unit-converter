import { IUnit } from "./units/interfaces/IUnit";
import { UnitSystems } from "./units";
import { IUnitSystem } from "./units/interfaces/iUnitSystem";

export class Converter {
    private fromUnitKey?: string;
    private fromUnit?: IUnit;

    private toUnitKey?: string;
    private toUnit?: IUnit;

    private unitSystem?: IUnitSystem;
    private unitSystems = UnitSystems;

    constructor(private value: number) { }

    from(unit: string): Converter {
        this.findOriginalUnit(unit);
        return this;
    }

    to(unit: string): Converter {
        this.findToUnit(unit);
        return this;
    }

    calculate(): number {
        if (this.fromUnit === undefined) {
            throw new Error("Before you call the calculate function, you have to call the from and to functions to define what units to convert")
        } else if (this.toUnit === undefined) {
            throw new Error("Before you call the calculate function, you have to call the to function to define what unit to convert to")
        } else {
            return this.value / this.toUnit.to_base * this.fromUnit.to_base;
        }
    }

    private findOriginalUnit(unit: string): void {
        Object.keys(this.unitSystems).map((key: string) => {
            if (unit in this.unitSystems[key].units) {
                this.unitSystem = this.unitSystems[key];
                this.fromUnitKey = unit;
                this.fromUnit = this.unitSystems[key].units[unit]
            }
        });
        if (this.unitSystem === undefined || this.fromUnit === undefined) {
            throw new Error(`Unit ${unit} is not available`);
        }
    }

    private findToUnit(unit: string): void {
        if (this.unitSystem === undefined || this.fromUnit === undefined) {
            throw new Error("First you have to set te orignal unit");
        } else {
            if (unit in this.unitSystem.units) {
                this.toUnitKey = unit;
                this.toUnit = this.unitSystem.units[unit];
            } else {
                throw new Error(`Unit ${this.fromUnitKey} not convertable to unit ${unit}`);
            }
        }
    }
}