import { UnitSystemNames } from "./units";
export declare class Converter {
    private value;
    private currentFromBase;
    private wantedFromBase;
    private unitSystem;
    constructor(value: number, systemName: UnitSystemNames);
    from(unitKey: string): Converter;
    to(unitKey: string): Converter;
    calculate(): number;
}
