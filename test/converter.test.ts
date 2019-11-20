import { UnitConverter, UnitSystemNames } from "../src/"
import { Converter } from "../src/converter";

describe("Test converter basics", () => {
    it("Module function returns converter", () => {
        expect(UnitConverter(1, UnitSystemNames.Current) instanceof Converter).toBe(true);
    });

    it("Returns converter object in from function", () => {
        expect(UnitConverter(1, UnitSystemNames.Current).from("A") instanceof Converter).toBe(true);
    });

    it("Returns converter object in to function", () => {
        expect(UnitConverter(1, UnitSystemNames.Current).from("A").to("mA") instanceof Converter).toBe(true);
    });

    it("Throws an error when invallid 'from' unit is given", () => {
        expect(() => { UnitConverter(1, UnitSystemNames.Current).from("ABC") }).toThrowError("Unit ABC is not available");
    });

    it("Throws an error when invallid 'to' unit is given", () => {
        expect(() => { UnitConverter(1, UnitSystemNames.Current).from("A").to("ABC") }).toThrowError("Unit ABC is not available");
    });

    it("Throws an error when 'calculate' is called before 'from' unit is set", () => {
        expect(() => { UnitConverter(1, UnitSystemNames.Current).calculate() }).toThrowError("Original unit is not set");
    });

    it("Throws an error when 'calculate' is called before 'to' unit is set", () => {
        expect(() => { UnitConverter(1, UnitSystemNames.Current).from("A").calculate() }).toThrowError("Wanted unit is not set");
    });
});