import { UnitConverter, UnitSystemNames } from "../../src"

describe("Test volume converting", () => {
    it("Should convert milliliters correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "ml", returnUnit: "cl", expectedReturn: 0.1 },
            { inputValue: 1, startUnit: "ml", returnUnit: "cm3", expectedReturn: 1 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Volume).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert centiliter correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "cl", returnUnit: "ml", expectedReturn: 10 },
            { inputValue: 1, startUnit: "cl", returnUnit: "dl", expectedReturn: 0.1 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Volume).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert deciliter correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "dl", returnUnit: "cl", expectedReturn: 10 },
            { inputValue: 1, startUnit: "dl", returnUnit: "l", expectedReturn: 0.1 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Volume).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert liter correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "l", returnUnit: "dl", expectedReturn: 10 },
            { inputValue: 1, startUnit: "l", returnUnit: "kl", expectedReturn: 0.001 },
            { inputValue: 1, startUnit: "l", returnUnit: "dm3", expectedReturn: 1 },
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Volume).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert kiloliter correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "kl", returnUnit: "l", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "kl", returnUnit: "m3", expectedReturn: 1 },
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Volume).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert cubic millimeters correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "mm3", returnUnit: "cm3", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Volume).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert cubic centimeters correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "cm3", returnUnit: "mm3", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "cm3", returnUnit: "dm3", expectedReturn: 0.001 },
            { inputValue: 1, startUnit: "cm3", returnUnit: "ml", expectedReturn: 1 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Volume).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert cubic decimeters correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "dm3", returnUnit: "cm3", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "dm3", returnUnit: "m3", expectedReturn: 0.001 },
            { inputValue: 1, startUnit: "dm3", returnUnit: "l", expectedReturn: 1 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Volume).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert cubic meters correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "m3", returnUnit: "dm3", expectedReturn: 1000 },
            { inputValue: 100000, startUnit: "m3", returnUnit: "km3", expectedReturn: 0.0001 },
            { inputValue: 1, startUnit: "m3", returnUnit: "kl", expectedReturn: 1 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Volume).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert cubic kilometers correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "km3", returnUnit: "m3", expectedReturn: 1000000000 },
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Volume).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });
});