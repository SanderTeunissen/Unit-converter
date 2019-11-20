import { UnitSystems, UnitSystemNames } from "./units";
import { IUnitSystem } from "./units/interfaces/iUnitSystem";

export class Converter {
    private currentFromBase: number = null;
    private wantedFromBase: number = null;

    private unitSystem: IUnitSystem = null;
    
    constructor(private value: number, systemName: UnitSystemNames) {
        this.unitSystem = UnitSystems.find(x => x.name == systemName);
    }

    from(unitKey: string): Converter {
        if (this.unitSystem.units[unitKey] == undefined) {
            throw Error(`Unit ${unitKey} is not available`);
        } else {
            this.currentFromBase = this.unitSystem.units[unitKey];
        }
        return this;
    }

    to(unitKey: string): Converter {
        if (this.unitSystem.units[unitKey] == undefined) {
            throw Error(`Unit ${unitKey} is not available`);
        } else {
            this.wantedFromBase = this.unitSystem.units[unitKey];
        }
        return this;
    }

    calculate(): number {
        if (this.currentFromBase == null) {
            throw Error(`Original unit is not set`);
        } else if (this.wantedFromBase == null) {
            throw Error(`Wanted unit is not set`);
        } else {
            const multiplier = this.currentFromBase / this.wantedFromBase;
            return this.value * multiplier;
        }
    }
}