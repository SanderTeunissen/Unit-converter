import { IUnitSystem } from "../interfaces/iUnitSystem";
import { UnitSystemNames } from "..";
const daysInYear = 365.25;

export const Time: IUnitSystem = {
    name: UnitSystemNames.Time,
    base: "s",
    units: {
        ms:  1 / 1000,
        s: 1,
        min: 60,
        h: 60 * 60,
        d: 60 * 60 * 24,
        week: 60 * 60 * 24 * 7,
        month: 60 * 60 * 24 * daysInYear / 12,
        year: 60 * 60 * 24 * daysInYear
    }
}