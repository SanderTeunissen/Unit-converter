import { Converter } from "./converter";

export const UnitConverter = (value: number) => {
    return new Converter(value);
}

export default UnitConverter;