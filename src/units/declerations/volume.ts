import { IUnitSystem } from "../interfaces/iUnitSystem";
import UnitSystemNames from "../unit-systems-names";

export const Volume: IUnitSystem = {
    name: UnitSystemNames.Volume,
    base: "l",
    units: {
        ml: 1 / 1000,
        cl: 1 / 100,
        dl: 1 / 10,
        l: 1,
        kl: 1000,
        mm3: 1 / 1000000,
        cm3: 1 / 1000,
        dm3: 1,
        m3: 1000,
        km3: 1000000000000
    }
}