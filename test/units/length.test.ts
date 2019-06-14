import { UnitConverter } from "../../src"

describe("Test current converting", () => {
    it("Should convert nanometer correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "nm", returnUnit: "µm", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert micrometer correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "µm", returnUnit: "nm", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "µm", returnUnit: "mm", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert millimeter correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "mm", returnUnit: "µm", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "mm", returnUnit: "cm", expectedReturn: 0.1 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert centimeter correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "cm", returnUnit: "mm", expectedReturn: 10 },
            { inputValue: 1, startUnit: "cm", returnUnit: "dm", expectedReturn: 0.1 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert decimeter correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "dm", returnUnit: "cm", expectedReturn: 10 },
            { inputValue: 1, startUnit: "dm", returnUnit: "m", expectedReturn: 0.1 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert meter correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "m", returnUnit: "dm", expectedReturn: 10 },
            { inputValue: 1, startUnit: "m", returnUnit: "dam", expectedReturn: 0.1 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert decameter correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "dam", returnUnit: "m", expectedReturn: 10 },
            { inputValue: 1, startUnit: "dam", returnUnit: "hm", expectedReturn: 0.1 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert hectometer correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "hm", returnUnit: "dam", expectedReturn: 10 },
            { inputValue: 1, startUnit: "hm", returnUnit: "km", expectedReturn: 0.1 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert kilometer correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "km", returnUnit: "hm", expectedReturn: 10 },
            { inputValue: 1, startUnit: "km", returnUnit: "Mm", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert megameter correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "Mm", returnUnit: "km", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "Mm", returnUnit: "Gm", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert gigameter correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "Gm", returnUnit: "Mm", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "Gm", returnUnit: "Tm", expectedReturn: 0.001 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });

    it("Should convert terameter correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "Tm", returnUnit: "Gm", expectedReturn: 1000 }
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 4);
        });
    });
});