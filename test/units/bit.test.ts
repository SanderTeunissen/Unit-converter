import { UnitConverter, UnitSystemNames } from "../../src"

describe("Test bit converting", () => {
    it("Should convert bit correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "Bit", returnUnit: "Byte", expectedReturn: 0.125 },
            { inputValue: 1, startUnit: "Bit", returnUnit: "kb", expectedReturn: 0.001 },
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Bit).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 3);
        });
    });

    it("Should convert byte correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "Byte", returnUnit: "Bit", expectedReturn: 8 },
            { inputValue: 1, startUnit: "Byte", returnUnit: "kB", expectedReturn: 0.001 },
            { inputValue: 1, startUnit: "Byte", returnUnit: "kiB", expectedReturn: 0.0009765625 },
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Bit).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 3);
        });
    });

    it("Should convert kilobit correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "kb", returnUnit: "Bit", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "kb", returnUnit: "Mb", expectedReturn: 0.001 },
            { inputValue: 1, startUnit: "kb", returnUnit: "kB", expectedReturn: 0.125 },
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Bit).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 3);
        });
    });

    it("Should convert megabit correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "Mb", returnUnit: "kb", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "Mb", returnUnit: "Gb", expectedReturn: 0.001 },
            { inputValue: 1, startUnit: "Mb", returnUnit: "MB", expectedReturn: 0.125 },
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Bit).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 3);
        });
    });

    it("Should convert gigabit correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "Gb", returnUnit: "Mb", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "Gb", returnUnit: "Tb", expectedReturn: 0.001 },
            { inputValue: 1, startUnit: "Gb", returnUnit: "GB", expectedReturn: 0.125 },
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Bit).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 3);
        });
    });

    it("Should convert terabit correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "Tb", returnUnit: "Gb", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "Tb", returnUnit: "TB", expectedReturn: 0.125 },
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Bit).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 3);
        });
    });

    it("Should convert kilobyte correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "kB", returnUnit: "Byte", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "kB", returnUnit: "MB", expectedReturn: 0.001 },
            { inputValue: 1, startUnit: "kB", returnUnit: "kiB", expectedReturn: 0.9765625 },
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Bit).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 3);
        });
    });

    it("Should convert megabyte correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "MB", returnUnit: "kB", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "MB", returnUnit: "GB", expectedReturn: 0.001 },
            { inputValue: 1, startUnit: "MB", returnUnit: "MiB", expectedReturn: 0.95367431640625 },
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Bit).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 3);
        });
    });

    it("Should convert gigabyte correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "GB", returnUnit: "MB", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "GB", returnUnit: "TB", expectedReturn: 0.001 },
            { inputValue: 1, startUnit: "GB", returnUnit: "GiB", expectedReturn: 0.93132257461548 },
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Bit).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 3);
        });
    });

    it("Should convert terabyte correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "TB", returnUnit: "GB", expectedReturn: 1000 },
            { inputValue: 1, startUnit: "TB", returnUnit: "TiB", expectedReturn: 0.90949470177293 },
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Bit).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 3);
        });
    });








    it("Should convert kibibyte correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "kiB", returnUnit: "Byte", expectedReturn: 1024 },
            { inputValue: 1, startUnit: "kiB", returnUnit: "MiB", expectedReturn: 0.0009765625 },
            { inputValue: 1, startUnit: "kiB", returnUnit: "kB", expectedReturn: 1.024 },
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Bit).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 3);
        });
    });

    it("Should convert mebibyte correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "MiB", returnUnit: "kiB", expectedReturn: 1024 },
            { inputValue: 1, startUnit: "MiB", returnUnit: "GiB", expectedReturn: 0.0009765625 },
            { inputValue: 1, startUnit: "MiB", returnUnit: "MB", expectedReturn: 1.048576 },
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Bit).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 3);
        });
    });

    it("Should convert gibibyte correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "GiB", returnUnit: "MiB", expectedReturn: 1024 },
            { inputValue: 1, startUnit: "GiB", returnUnit: "TiB", expectedReturn: 0.0009765625 },
            { inputValue: 1, startUnit: "GiB", returnUnit: "GB", expectedReturn: 1.073741824 },
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Bit).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 3);
        });
    });

    it("Should convert tebibyte correctly", () => {
        const testValues = [
            { inputValue: 1, startUnit: "TiB", returnUnit: "GiB", expectedReturn: 1024 },
            { inputValue: 1, startUnit: "TiB", returnUnit: "TB", expectedReturn: 1.099511627776 },
        ];
        testValues.map(tv => {
            expect(UnitConverter(tv.inputValue, UnitSystemNames.Bit).from(tv.startUnit).to(tv.returnUnit).calculate()).toBeCloseTo(tv.expectedReturn, 3);
        });
    });
});