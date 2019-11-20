import { UnitConverter, UnitSystemNames } from "../../src"

describe("Test current converting", () => {
    it("Should convert milliwatt correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "mW", returnUnit: "W", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Power).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert watt correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "W", returnUnit: "mW", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "W", returnUnit: "kW", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Power).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert kilowatt correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "kW", returnUnit: "W", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "kW", returnUnit: "MW", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Power).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert megawatt correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "MW", returnUnit: "kW", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "MW", returnUnit: "GW", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Power).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert gigawatt correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "GW", returnUnit: "MW", expectedReturn: 1000 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Power).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });
});