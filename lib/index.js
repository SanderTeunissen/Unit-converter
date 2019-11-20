"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const converter_1 = require("./converter");
const units_1 = require("./units");
exports.UnitSystemNames = units_1.UnitSystemNames;
exports.UnitConverter = (value, unitSystemName) => {
    return new converter_1.Converter(value, unitSystemName);
};
exports.default = exports.UnitConverter;
//# sourceMappingURL=index.js.map