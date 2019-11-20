import { Converter } from "./converter";
import { UnitSystemNames } from "./units";

export const UnitConverter = (value: number, unitSystemName: UnitSystemNames) => {
    return new Converter(value,unitSystemName);
}

export { UnitSystemNames }

export default UnitConverter;