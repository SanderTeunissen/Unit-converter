"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unit_systems_names_1 = require("../unit-systems-names");
exports.Voltage = {
    name: unit_systems_names_1.default.Voltage,
    base: "V",
    units: {
        mV: 1 / 1000,
        V: 1,
        kV: 1000,
        MV: 1000000,
        GV: 1000000000,
        TV: 1000000000000
    }
};
//# sourceMappingURL=voltage.js.map