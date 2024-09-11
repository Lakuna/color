// Names
export { default as bangNames } from "./names/bangNames.js";
export { default as bigNames } from "./names/bigNames.js";
export { default as cne2007Names } from "./names/cne2007Names.js";
export { default as cneCore2007Names } from "./names/cneCore2007Names.js";
export { default as crayolaNames } from "./names/crayolaNames.js";
export { default as css3Names } from "./names/css3Names.js";
export { default as getName, getNameStandard } from "./names/getName.js";
export { default as hollaschNames } from "./names/hollaschNames.js";
export { default as html4Names } from "./names/html4Names.js";
export { default as mediumNames } from "./names/mediumNames.js";
export { default as nbsAnthusNames } from "./names/nbsAnthusNames.js";
export { default as nbsIsccNames } from "./names/nbsIsccNames.js";
export { default as ns3Names } from "./names/ns3Names.js";
export { default as ntcNames } from "./names/ntcNames.js";
export { default as oldRgbNames } from "./names/oldRgbNames.js";
export { default as pigmentsNames } from "./names/pigmentsNames.js";
export { default as ravelingNames } from "./names/ravelingNames.js";
export { default as resene2010Names } from "./names/resene2010Names.js";
export { default as reseneNames } from "./names/reseneNames.js";
export { default as smallNames } from "./names/smallNames.js";
export { default as thomasNames } from "./names/thomasNames.js";
export { default as x11Names } from "./names/x11Names.js";
export { default as xkcdNames } from "./names/xkcdNames.js";
// TODO: winsor-newton: https://people.csail.mit.edu/jaffer/Color/winsor-newton.pdf
// TODO: fs595c: https://people.csail.mit.edu/jaffer/Color/fs595c.pdf
// TODO: fs595c1: https://people.csail.mit.edu/jaffer/Color/fs595c1.pdf
// TODO: saturate: https://people.csail.mit.edu/jaffer/Color/saturate.pdf

// Types
export type { default as Adobe } from "./types/Adobe.js";
export type { default as Cmy } from "./types/Cmy.js";
export type { default as Cmyk } from "./types/Cmyk.js";
export type { Color } from "./types/Color.js";
export type { default as Hsl } from "./types/Hsl.js";
export type { default as Hsv } from "./types/Hsv.js";
export type { default as Hunter } from "./types/Hunter.js";
export type { default as Lab } from "./types/Lab.js";
export type { default as Lch } from "./types/Lch.js";
export type { default as Luv } from "./types/Luv.js";
export type { default as Rgb } from "./types/Rgb.js";
export type { default as Xyz } from "./types/Xyz.js";
export type { default as Yxy } from "./types/Yxy.js";

// Utility
export { default as adobeToXyz } from "./utility/adobeToXyz.js";
export { default as cmykToCmy } from "./utility/cmykToCmy.js";
export { default as cmyToCmyk } from "./utility/cmyToCmyk.js";
export { default as cmyToRgb } from "./utility/cmyToRgb.js";
export { default as contrast } from "./utility/contrast.js";
export { default as deltaC } from "./utility/deltaC.js";
export { default as deltaCmc } from "./utility/deltaCmc.js";
export { default as deltaE1994 } from "./utility/deltaE1994.js";
export { default as deltaE2000 } from "./utility/deltaE2000.js";
export { default as deltaECie } from "./utility/deltaECie.js";
export { default as deltaH } from "./utility/deltaH.js";
export { default as getReference } from "./utility/getReference.js";
export { default as hexToRgb } from "./utility/hexToRgb.js";
export { default as hslToRgb } from "./utility/hslToRgb.js";
export { default as hsvToRgb } from "./utility/hsvToRgb.js";
export { default as hunterToXyz } from "./utility/hunterToXyz.js";
export { default as labToLch } from "./utility/labToLch.js";
export { default as labToXyz } from "./utility/labToXyz.js";
export { default as lchToLab } from "./utility/lchToLab.js";
export { default as luvToXyz } from "./utility/luvToXyz.js";
export { default as relativeLuminance } from "./utility/relativeLuminance.js";
export { default as rgbToCmy } from "./utility/rgbToCmy.js";
export { default as rgbToHsl } from "./utility/rgbToHsl.js";
export { default as rgbToHsv } from "./utility/rgbToHsv.js";
export { default as rgbToXyz } from "./utility/rgbToXyz.js";
export { default as StandardIlluminant } from "./utility/StandardIlluminant.js";
export { default as xyzToAdobe } from "./utility/xyzToAdobe.js";
export { default as xyzToHunter } from "./utility/xyzToHunter.js";
export { default as xyzToLab } from "./utility/xyzToLab.js";
export { default as xyzToLuv } from "./utility/xyzToLuv.js";
export { default as xyzToRgb } from "./utility/xyzToRgb.js";
export { default as xyzToYxy } from "./utility/xyzToYxy.js";
export { default as yxyToXyz } from "./utility/yxyToXyz.js";
// TODO: Lightest background color.
// TODO: Darkest background color.
// TODO: Optimal (sensible?) background color.
// TODO: YIQ conversion (Python `colorsys.py`).
// TODO: HSI conversion.
// TODO: Tints, shades, and tones (color mixing).
// TODO: Nearest web safe color.
// TODO: Complementary color.
// TODO: Split complementary colors.
// TODO: Analogous colors.
// TODO: Triadic colors.
// TODO: Tetradic colors.
// TODO: Color-blindness simulation: https://github.com/MaPePeR/jsColorblindSimulator
