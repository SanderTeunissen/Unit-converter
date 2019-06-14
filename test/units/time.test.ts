import { UnitConverter } from "../../src"

describe("Test current converting", () => {
    it("Should convert milliseconds correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "ms", returnUnit: "s", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert seconds correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "s", returnUnit: "ms", expectedReturn: 1000 },
            { inputValue: 60, startUnit: "s", returnUnit: "min", expectedReturn: 1 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert minutes correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "min", returnUnit: "s", expectedReturn: 60 },
            { inputValue: 60, startUnit: "min", returnUnit: "h", expectedReturn: 1 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert hours correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "h", returnUnit: "min", expectedReturn: 60 },
            { inputValue: 24, startUnit: "h", returnUnit: "d", expectedReturn: 1 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert days correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "d", returnUnit: "h", expectedReturn: 24 },
            { inputValue: 7, startUnit: "d", returnUnit: "week", expectedReturn: 1 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert weeks correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "week", returnUnit: "d", expectedReturn: 7 },
            { inputValue: 52.1785, startUnit: "week", returnUnit: "month", expectedReturn: 12 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert months correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "month", returnUnit: "week", expectedReturn: 4.3482 },
            { inputValue: 12, startUnit: "month", returnUnit: "year", expectedReturn: 1 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert years correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "year", returnUnit: "month", expectedReturn: 12 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });
});