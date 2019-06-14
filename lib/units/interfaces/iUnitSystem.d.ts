import { IUnit } from "./IUnit";
export interface IUnitSystem {
    name: string;
    base: string;
    units: {
        [key: string]: IUnit;
    };
}
