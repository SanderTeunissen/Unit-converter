# Unit-converter
[![Build Status](https://travis-ci.com/SanderTeunissen/Unit-converter.svg?branch=master)](https://travis-ci.com/SanderTeunissen/Unit-converter)
Unit converter.



## Example

```javascript
UnitConverter(8, UnitSystemNames.Bit).from("Byte").to("Bit").calculate();
// -> 64

UnitConverter(5, UnitSystemNames.Current).from("A").to("mA").calculate();
// -> 5000

UnitConverter(2, UnitSystemNames.Energy).from("kWh").to("J").calculate();
// -> 7200000

UnitConverter(100, UnitSystemNames.Length).from("cm").to("m").calculate();
// -> 1

UnitConverter(1200, UnitSystemNames.Power).from("W").to("kW").calculate();
// -> 1.2

UnitConverter(3.5, UnitSystemNames.Time).from("h").to("s").calculate();
// -> 12600

UnitConverter(230, UnitSystemNames.Voltage).from("V").to("kV").calculate();
// -> 0.230

UnitConverter(9, UnitSystemNames.Volume).from("l").to("dm3").calculate();
// -> 9
```



## Supported units

| Unit system | Base | Supported units                                              |
| ----------- | ---- | ------------------------------------------------------------ |
| Bit         | Bit  | Bit, Byte, kb, Mb, Gb, Tb, kB, MB, GB, TB, kiB, MiB, GiB, TiB, |
| Current     | A    | µA, mA, A, kA                                                |
| Energy      | J    | mWh, Wh, kWh, MWh, GWh, J, kJ                                |
| Length      | m    | nm, µm, mm, cm, dm, m, dam, hm, km, Mm, Gm, Tm               |
| Power       | W    | mW, W, kW, MW, GW                                            |
| Time        | s    | ms, s, min, h, d, week, month, year                          |
| Voltage     | V    | mV, V, kV, MV, GV, TV                                        |
| Volume      | l    | ml, cl, dl, l, kl, mm3, cm3, dm3, m3, km3                    |

