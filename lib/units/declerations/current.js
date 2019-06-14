"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Current = {
    name: "Stroomsterkte",
    base: "A",
    units: {
        µA: {
            name: {
                singular: 'Microampère',
                plural: 'Microampère'
            },
            to_base: 1 / 1000000
        },
        mA: {
            name: {
                singular: 'Milliampère',
                plural: 'Milliampère'
            },
            to_base: 1 / 1000
        },
        A: {
            name: {
                singular: 'Ampère',
                plural: 'Ampère'
            },
            to_base: 1
        },
        kA: {
            name: {
                singular: 'Kiloampère',
                plural: 'Kiloampère'
            },
            to_base: 1000
        }
    }
};
//# sourceMappingURL=current.js.map