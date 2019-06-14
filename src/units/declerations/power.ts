import { IUnitSystem } from "../interfaces/iUnitSystem";

export const Power: IUnitSystem = {
    name: "Vermogen",
    base: "W",
    units: {
        mW: {
            name: {
                singular: 'Milliwatt',
                plural: 'Milliwatt'
            },
            to_base: 1 / 1000
        },
        W: {
            name: {
                singular: 'Watt',
                plural: 'Watt'
            },
            to_base: 1
        },
        kW: {
            name: {
                singular: 'Kilowatt',
                plural: 'Kilowatt'
            },
            to_base: 1000
        },
        MW: {
            name: {
                singular: 'Megawatt',
                plural: 'Megawatt'
            },
            to_base: 1000000
        },
        GW: {
            name: {
                singular: 'Gigawatt',
                plural: 'Gigawatt'
            },
            to_base: 1000000000
        }
    }
}