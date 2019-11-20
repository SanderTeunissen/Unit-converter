import { IUnitSystem } from "../interfaces/iUnitSystem";
import UnitSystemNames from "../unit-systems-names";

export const Voltage: IUnitSystem = {
    name: UnitSystemNames.Voltage,
    base: "V",
    units: {
        mV: 1 / 1000,
        V: 1,
        kV: 1000,
        MV: 1000000,
        GV: 1000000000,
        TV: 1000000000000
    }
}