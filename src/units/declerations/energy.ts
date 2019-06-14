import { IUnitSystem } from "../interfaces/iUnitSystem";

export const Energy: IUnitSystem = {
    name: "Energie",
    base: "J",
    units: {
        mWh: {
            name: {
                singular: 'Milliwattuur',
                plural: 'Milliwattuur'
            },
            to_base: 3.6
        },
        Wh: {
            name: {
                singular: 'Wattuur',
                plural: 'Wattuur'
            },
            to_base: 3600
        },
        kWh: {
            name: {
                singular: 'Kilowattuur',
                plural: 'Kilowattuur'
            },
            to_base: 3600000
        },
        MWh: {
            name: {
                singular: 'Megawattuur',
                plural: 'Megawattuur'
            },
            to_base: 3600000000
        },
        GWh: {
            name: {
                singular: 'Gigawattuur',
                plural: 'Gigawattuur'
            },
            to_base: 3600000000000
        },
        J: {
            name: {
                singular: 'Joule',
                plural: 'Joule'
            },
            to_base: 1
        },
        kJ: {
            name: {
                singular: 'Kilojoule',
                plural: 'Kilojoule'
            },
            to_base: 1000
        }
    }
}