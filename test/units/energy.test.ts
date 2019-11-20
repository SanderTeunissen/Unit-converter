import { UnitConverter, UnitSystemNames } from "../../src"

describe("Test energy converting", () => {
    it("Should convert milliwatthour correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "mWh", returnUnit: "Wh", expectedReturn: 0.001 },
            { inputValue: 1, startUnit: "mWh", returnUnit: "J", expectedReturn: 3.6 },
            { inputValue: 1, startUnit: "mWh", returnUnit: "kJ", expectedReturn: 0.0036 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Energy).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert watthour correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "Wh", returnUnit: "mWh", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "Wh", returnUnit: "kWh", expectedReturn: 0.001 },
            { inputValue: 1, startUnit: "Wh", returnUnit: "J", expectedReturn: 3600 },
            { inputValue: 1, startUnit: "Wh", returnUnit: "kJ", expectedReturn: 3.6 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Energy).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert kilowatthour correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "kWh", returnUnit: "Wh", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "kWh", returnUnit: "MWh", expectedReturn: 0.001 },
            { inputValue: 1, startUnit: "kWh", returnUnit: "J", expectedReturn: 3600000 },
            { inputValue: 1, startUnit: "kWh", returnUnit: "kJ", expectedReturn: 3600 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Energy).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert megawatthour correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "MWh", returnUnit: "kWh", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "MWh", returnUnit: "GWh", expectedReturn: 0.001 },
            { inputValue: 1, startUnit: "MWh", returnUnit: "J", expectedReturn: 3600000000 },
            { inputValue: 1, startUnit: "MWh", returnUnit: "kJ", expectedReturn: 3600000 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Energy).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert gigawatthour correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "GWh", returnUnit: "MWh", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "GWh", returnUnit: "J", expectedReturn: 3600000000000 },
            { inputValue: 1, startUnit: "GWh", returnUnit: "kJ", expectedReturn: 3600000000 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Energy).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert joule correctly", () => {
        const testValues = [
            { inputValue: 3600, startUnit: "J", returnUnit: "Wh", expectedReturn: 1 },
            { inputValue: 3600, startUnit: "J", returnUnit: "kWh", expectedReturn: 0.001 },
            { inputValue: 1, startUnit: "J", returnUnit: "kJ", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Energy).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert kilojoule correctly", () => {
        const testValues = [
            { inputValue: 3600, startUnit: "kJ", returnUnit: "Wh", expectedReturn: 1000 },
            { inputValue: 3600, startUnit: "kJ", returnUnit: "kWh", expectedReturn: 1 },
            { inputValue: 1, startUnit: "kJ", returnUnit: "J", expectedReturn: 1000 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Energy).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });
});