import { IUnitSystem } from "../interfaces/iUnitSystem";
import { UnitSystemNames } from "..";

export const Power: IUnitSystem = {
    name: UnitSystemNames.Power,
    base: "W",
    units: {
        mW: 1 / 1000,
        W: 1,
        kW: 1000,
        MW: 1000000,
        GW: 1000000000
    }
}