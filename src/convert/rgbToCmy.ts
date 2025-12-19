import type Cmy from "../types/Cmy.js";
import type Rgb from "../types/Rgb.js";

/**
 * Convert the given sRGB color to a CMY color. Based on the EasyRGB pseudo-code.
 * @param color - The sRGB color.
 * @returns A CMY color.
 * @public
 */
export default function rgbToCmy(color: Rgb): Cmy {
	return [1 - color[0] / 0xff, 1 - color[1] / 0xff, 1 - color[2] / 0xff];
}
