import { IUnitSystem } from "../interfaces/iUnitSystem";
import { UnitSystemNames } from "..";

export const Length: IUnitSystem = {
    name: UnitSystemNames.Length,
    base: "m",
    units: {
        Tm: 1000000000000,
        Gm: 1000000000,
        Mm: 1000000,
        km: 1000,
        hm: 100,
        dam: 10,
        m: 1,
        dm: 1 / 10,
        cm: 1 / 100,
        mm: 1 / 1000,
        µm: 1 / 1000000,
        nm: 1 / 1000000000
    }
}
