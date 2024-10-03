import type Cmy from "../types/Cmy.js";
import type Rgb from "../types/Rgb.js";

/**
 * Convert the given CMY color to an sRGB color. Based on the EasyRGB pseudo-code.
 * @param color - The CMY color.
 * @returns An sRGB color.
 * @public
 */
export default function cmyToRgb(color: Cmy): Rgb {
	return [(1 - color[0]) * 0xff, (1 - color[1]) * 0xff, (1 - color[2]) * 0xff];
}
