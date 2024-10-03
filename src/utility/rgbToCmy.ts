import type Cmy from "../types/Cmy.js";
import type Rgb from "../types/Rgb.js";

// TODO

/**
 * Convert the given sRGB color to a CMY color. Based on the EasyRGB pseudo-code.
 * @param color - The sRGB color.
 * @returns A CMY color.
 * @public
 */
export default function rgbToCmy(color: Rgb): Cmy {
	// eslint-disable-next-line prefer-destructuring
	const r = color[0];
	// eslint-disable-next-line prefer-destructuring
	const g = color[1];
	// eslint-disable-next-line prefer-destructuring
	const b = color[2];

	const c = 1 - r / 255;
	const m = 1 - g / 255;
	const y = 1 - b / 255;

	return [c, m, y];
}
