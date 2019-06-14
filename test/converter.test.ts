import { UnitConverter } from "../src/"
import { Converter } from "../src/converter";

describe("Test converter basics", () => {
    it("Module function returns converter", () => {
        expect(UnitConverter(1) instanceof Converter).toBe(true);
    });

    it("Returns converter object in from function", () => {
        expect(UnitConverter(1).from("A") instanceof Converter).toBe(true);
    });

    it("Returns converter object in to function", () => {
        expect(UnitConverter(1).from("A").to("mA") instanceof Converter).toBe(true);
    });

    it("Throws an error when invallid from unit is given", () => {
        expect(() => { UnitConverter(1).from("ABC") }).toThrowError("Unit ABC is not available");
    });

    it("Throws an error when invallid to unit is given", () => {
        expect(() => { UnitConverter(1).from("A").to("ABC") }).toThrowError("Unit A not convertable to unit ABC");
    });

    it("Throws an error when to unit is set before from unit", () => {
        expect(() => { UnitConverter(1).to("ABC") }).toThrowError("First you have to set te orignal unit");
    });

    it("Throws an error when calculate is called without from unit", () => {
        expect(() => { UnitConverter(1).calculate() }).toThrowError("Before you call the calculate function, you have to call the from and to functions to define what units to convert");
    });

    it("Throws an error when calculate is called without to unit", () => {
        expect(() => { UnitConverter(1).from("A").calculate() }).toThrowError("Before you call the calculate function, you have to call the to function to define what unit to convert to");
    });
});