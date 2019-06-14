"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voltage = {
    name: "Spanning",
    base: "V",
    units: {
        mV: {
            name: {
                singular: 'Millivolt',
                plural: 'Millivolt'
            },
            to_base: 1 / 1000
        },
        V: {
            name: {
                singular: 'Volt',
                plural: 'Volt'
            },
            to_base: 1
        },
        kV: {
            name: {
                singular: 'Kilovolt',
                plural: 'Kilovolt'
            },
            to_base: 1000
        },
        MV: {
            name: {
                singular: 'Megavolt',
                plural: 'Megavolt'
            },
            to_base: 1000000
        },
        GV: {
            name: {
                singular: 'Gigavolt',
                plural: 'Gigavolt'
            },
            to_base: 1000000000
        },
        TV: {
            name: {
                singular: 'Teravolt',
                plural: 'Teravolt'
            },
            to_base: 1000000000000
        }
    }
};
//# sourceMappingURL=voltage.js.map