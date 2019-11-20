export interface IUnitSystem {
    name: string;
    base: string;
    units: {
        [key: string]: number;
    };
}
