import { IUnitSystem } from "../interfaces/iUnitSystem";
import { UnitSystemNames } from "..";

export const Current: IUnitSystem = {
    name: UnitSystemNames.Current,
    base: "A",
    units: {
        µA: 1 / 1000000,
        mA: 1 / 1000,
        A: 1,
        kA: 1000
    }
}