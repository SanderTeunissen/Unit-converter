import { UnitConverter, UnitSystemNames } from "../../src"

describe("Test voltage converting", () => {
    it("Should convert millivolt correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "mV", returnUnit: "V", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Voltage).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert volt correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "V", returnUnit: "mV", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "V", returnUnit: "kV", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Voltage).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert kilovolt correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "kV", returnUnit: "V", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "kV", returnUnit: "MV", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Voltage).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert megavolt correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "MV", returnUnit: "kV", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "MV", returnUnit: "GV", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Voltage).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert gigavolt correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "GV", returnUnit: "MV", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "GV", returnUnit: "TV", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Voltage).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert teravolt correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "TV", returnUnit: "GV", expectedReturn: 1000 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Voltage).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });
});