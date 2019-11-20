import { IUnitSystem } from "./interfaces/iUnitSystem";

import UnitSystemNames from "./unit-systems-names";

import { Current } from "./declerations/current";
import { Energy } from "./declerations/energy";
import { Length } from "./declerations/length";
import { Power } from "./declerations/power";
import { Time } from "./declerations/time";
import { Voltage } from "./declerations/voltage";
import { Volume } from "./declerations/volume";

export const UnitSystems: IUnitSystem[] = [
    Current, Energy, Length, Power, Time, Voltage, Volume
]

export { UnitSystemNames }