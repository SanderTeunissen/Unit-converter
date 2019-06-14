import { Current } from "./declerations/current";
import { Energy } from "./declerations/energy";
import { Length } from "./declerations/length";
import { Power } from "./declerations/power";
import { Time } from "./declerations/time";
import { Voltage } from "./declerations/voltage";
import { Volume } from "./declerations/volume";
import { IUnitSystem } from "./interfaces/iUnitSystem";

export interface IUnitSystems {
    [key: string]: IUnitSystem
}

export const UnitSystems: IUnitSystems = {
    Current, Energy, Length, Power, Time, Voltage, Volume
}