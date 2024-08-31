// Core
export { default } from "./core/Color.js";

// Names
export { default as bangNames } from "./names/bangNames.js";
export { default as css3Names } from "./names/css3Names.js";
export { default as getName } from "./names/getName.js";
export { default as html4Names } from "./names/html4Names.js";
export { default as oldRgbNames } from "./names/oldRgbNames.js";
export { default as ravelingNames } from "./names/ravelingNames.js";
export { default as thomasNames } from "./names/thomasNames.js";
export { default as x11Names } from "./names/x11Names.js";
// TODO: ns3: https://people.csail.mit.edu/jaffer/Color/ns3.pdf
// TODO: hollasch: https://people.csail.mit.edu/jaffer/Color/hollasch.pdf
// TODO: big: https://people.csail.mit.edu/jaffer/Color/big.pdf
// TODO: medium: https://people.csail.mit.edu/jaffer/Color/medium.pdf
// TODO: small: https://people.csail.mit.edu/jaffer/Color/small.pdf
// TODO: resene: https://people.csail.mit.edu/jaffer/Color/resene.pdf
// TODO: Name That Color: https://people.csail.mit.edu/jaffer/Color/ntc.pdf
// TODO: resene-2010: https://people.csail.mit.edu/jaffer/Color/resene-2010.pdf
// TODO: nbs-anthus: https://people.csail.mit.edu/jaffer/Color/nbs-anthus.pdf
// TODO: nbs-iscc: https://people.csail.mit.edu/jaffer/Color/nbs-iscc.pdf
// TODO: winsor-newton: https://people.csail.mit.edu/jaffer/Color/winsor-newton.pdf
// TODO: fs595c: https://people.csail.mit.edu/jaffer/Color/fs595c.pdf
// TODO: fs595c1: https://people.csail.mit.edu/jaffer/Color/fs595c1.pdf
// TODO: pigments: https://people.csail.mit.edu/jaffer/Color/pigments.pdf
// TODO: crayola: https://people.csail.mit.edu/jaffer/Color/crayola.pdf
// TODO: cne-2007: https://people.csail.mit.edu/jaffer/Color/cne-2007.pdf
// TODO: cne-core-2007: https://people.csail.mit.edu/jaffer/Color/cne-core-2007.pdf
// TODO: xkcd: https://people.csail.mit.edu/jaffer/Color/xkcd.pdf
// TODO: saturate: https://people.csail.mit.edu/jaffer/Color/saturate.pdf

// Types
export type { default as ColorLike } from "./types/ColorLike.js";

// Utility
export { default as contrast } from "./utility/contrast.js";
export { default as createColorLike } from "./utility/createColorLike.js";
export { default as fromHex } from "./utility/fromHex.js";
export { default as fromRgba } from "./utility/fromRgba.js";
export { default as luminance } from "./utility/luminance.js";
export { default as squaredRgbDistance } from "./utility/squaredRgbDistance.js";
// TODO: Lightest background color.
// TODO: Darkest background color.
// TODO: Optimal (sensible?) background color.
// TODO: From HSL.
// TODO: To HSL.
// TODO: To hexadecimal.
// TODO: From HSV.
// TODO: To HSV.
// TODO: From CMYK.
// TODO: To CMYK.
// TODO: From XYZ.
// TODO: To XYZ.
// TODO: Complementary color.
// TODO: Split complementary colors.
// TODO: Analogous colors.
// TODO: Triadic colors.
// TODO: Tetradic colors.
// TODO: Shades.
// TODO: Tints.
// TODO: Tones.
// TODO: Color-blindness simulation: https://github.com/MaPePeR/jsColorblindSimulator