import { IUnitSystem } from "../interfaces/iUnitSystem";
import { UnitSystemNames } from "..";

export const Energy: IUnitSystem = {
    name: UnitSystemNames.Energy,
    base: "J",
    units: {
        mWh: 3.6,
        Wh: 3600,
        kWh: 3600000,
        MWh: 3600000000,
        GWh: 3600000000000,
        J: 1,
        kJ: 1000
    }
}