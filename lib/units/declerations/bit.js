"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
exports.Bit = {
    name: __1.UnitSystemNames.Bit,
    base: "Bit",
    units: {
        Bit: 1,
        Byte: 8,
        Kb: 1000,
        Mb: 1000000,
        Gb: 1000000000,
        Tb: 1000000000000,
        KB: 1000 * 8,
        KiB: 1024 * 8,
        MB: 10 ^ 6 * 8,
        MiB: 2 ^ 20 * 8,
        GB: 10 ^ 9 * 8,
        GiB: 2 ^ 30 * 8,
        TB: 10 ^ 12 * 8,
        TiB: 2 ^ 40 * 8,
    }
};
//# sourceMappingURL=bit.js.map