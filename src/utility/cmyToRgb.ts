import type Cmy from "../types/Cmy.js";
import type Rgb from "../types/Rgb.js";

/**
 * Convert the given CMY color to an sRGB color. Based on the EasyRGB pseudo-code.
 * @param color - The CMY color.
 * @returns An sRGB color.
 * @public
 */
export default function cmyToRgb(color: Cmy): Rgb {
	// eslint-disable-next-line prefer-destructuring
	const c = color[0];
	// eslint-disable-next-line prefer-destructuring
	const m = color[1];
	// eslint-disable-next-line prefer-destructuring
	const y = color[2];

	const r = (1 - c) * 255;
	const g = (1 - m) * 255;
	const b = (1 - y) * 255;

	return [r, g, b];
}
