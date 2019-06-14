import { IUnitSystem } from "../interfaces/iUnitSystem";
const daysInYear = 365.25;

export const Time: IUnitSystem = {
    name: "Tijd",
    base: "s",
    units: {
        ms: {
            name: {
                singular: 'Milliseconde',
                plural: 'Milliseconden'
            },
            to_base: 1 / 1000
        },
        s: {
            name: {
                singular: 'Seconde',
                plural: 'Seconden'
            },
            to_base: 1
        },
        min: {
            name: {
                singular: 'Minuut',
                plural: 'Minuten'
            },
            to_base: 60
        },
        h: {
            name: {
                singular: 'Uur',
                plural: 'Uren'
            },
            to_base: 60 * 60
        },
        d: {
            name: {
                singular: 'Dag',
                plural: 'Dagen'
            },
            to_base: 60 * 60 * 24
        },
        week: {
            name: {
                singular: 'Week',
                plural: 'Weken'
            },
            to_base: 60 * 60 * 24 * 7
        },
        month: {
            name: {
                singular: 'Maand',
                plural: 'Maanden'
            },
            to_base: 60 * 60 * 24 * daysInYear / 12
        },
        year: {
            name: {
                singular: 'Jaar',
                plural: 'Jaren'
            },
            to_base: 60 * 60 * 24 * daysInYear
        }
    }
}