import type Cmy from "../types/Cmy.js";
import type Cmyk from "../types/Cmyk.js";

/**
 * Convert the given CMYK color to a CMY color. Based on the EasyRGB pseudo-code.
 * @param color - The CMYK color
 * @returns A CMY color.
 * @public
 */
export default function cmykToCmy(color: Cmyk): Cmy {
	// eslint-disable-next-line prefer-destructuring
	let c = color[0];
	// eslint-disable-next-line prefer-destructuring
	let m = color[1];
	// eslint-disable-next-line prefer-destructuring
	let y = color[2];
	// eslint-disable-next-line prefer-destructuring
	const k = color[3];

	c = c * (1 - k) + k;
	m = m * (1 - k) + k;
	y = y * (1 - k) + k;

	return [c, m, y];
}
