export declare class Converter {
    private value;
    private fromUnitKey?;
    private fromUnit?;
    private toUnitKey?;
    private toUnit?;
    private unitSystem?;
    private unitSystems;
    constructor(value: number);
    from(unit: string): Converter;
    to(unit: string): Converter;
    calculate(): number;
    private findOriginalUnit;
    private findToUnit;
}
