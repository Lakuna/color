import type Cmy from "../types/Cmy.js";
import type Cmyk from "../types/Cmyk.js";

/**
 * Convert the given CMYK color to a CMY color. Based on the EasyRGB pseudo-code.
 * @param color - The CMYK color
 * @returns A CMY color.
 * @public
 */
export default function cmykToCmy(color: Cmyk): Cmy & [number, number, number] {
	// eslint-disable-next-line prefer-destructuring
	const k = color[3];

	return [
		color[0] * (1 - k) + k,
		color[1] * (1 - k) + k,
		color[2] * (1 - k) + k
	];
}
