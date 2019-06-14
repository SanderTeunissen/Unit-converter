import { UnitConverter } from "../../src"

describe("Test current converting", () => {
    it("Should convert microampère correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "µA", returnUnit: "mA", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 3);
        });
    });

    it("Should convert milliampère correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "mA", returnUnit: "µA", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "mA", returnUnit: "A", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 3);
        });
    });

    it("Should convert ampère correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "A", returnUnit: "mA", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "A", returnUnit: "kA", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 3);
        });
    });

    it("Should convert kiloampère correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "kA", returnUnit: "A", expectedReturn: 1000 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 3);
        });
    });
});