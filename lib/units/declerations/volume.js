"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Volume = {
    name: "Volume",
    base: "l",
    units: {
        ml: {
            name: {
                singular: 'Milliliter',
                plural: 'Milliliter'
            },
            to_base: 1 / 1000
        },
        cl: {
            name: {
                singular: 'Centiliter',
                plural: 'Centiliter'
            },
            to_base: 1 / 100
        },
        dl: {
            name: {
                singular: 'Deciliter',
                plural: 'Deciliter'
            },
            to_base: 1 / 10
        },
        l: {
            name: {
                singular: 'Liter',
                plural: 'Liter'
            },
            to_base: 1
        },
        kl: {
            name: {
                singular: 'Kiloliter',
                plural: 'Kiloliter'
            },
            to_base: 1000
        },
        mm3: {
            name: {
                singular: 'Kubieke millimeter',
                plural: 'Kubieke millimeter'
            },
            to_base: 1 / 1000000
        },
        cm3: {
            name: {
                singular: 'Kubieke centimeter',
                plural: 'Kubieke centimeter'
            },
            to_base: 1 / 1000
        },
        dm3: {
            name: {
                singular: 'Kubieke decimeter',
                plural: 'Kubieke decimeter'
            },
            to_base: 1
        },
        m3: {
            name: {
                singular: 'Kubieke meter',
                plural: 'Kubieke meter'
            },
            to_base: 1000
        },
        km3: {
            name: {
                singular: 'Kubieke kilometer',
                plural: 'Kubieke kilometer'
            },
            to_base: 1000000000000
        }
    }
};
//# sourceMappingURL=volume.js.map