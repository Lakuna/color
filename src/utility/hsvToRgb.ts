import type Hsv from "../types/Hsv.js";
import type Rgb from "../types/Rgb.js";

/**
 * Convert the given HSV color to an sRGB color. Based on the EasyRGB pseudo-code.
 * @param color - The HSV color.
 * @returns An sRGB color.
 * @public
 */
export default function hsvToRgb(color: Hsv): Rgb {
	// eslint-disable-next-line prefer-destructuring
	const h = color[0];
	// eslint-disable-next-line prefer-destructuring
	const s = color[1];
	// eslint-disable-next-line prefer-destructuring
	const v = color[2];

	// eslint-disable-next-line no-useless-assignment
	let r = 0;
	// eslint-disable-next-line no-useless-assignment
	let g = 0;
	// eslint-disable-next-line no-useless-assignment
	let b = 0;
	if (s === 0) {
		r = v * 255;
		g = v * 255;
		b = v * 255;
	} else {
		let varH = h * 6;
		if (varH === 6) {
			varH = 0;
		}
		const varI = Math.floor(varH);
		const var1 = v * (1 - s);
		const var2 = v * (1 - s * (varH - varI));
		const var3 = v * (1 - s * (1 - (varH - varI)));

		// eslint-disable-next-line no-useless-assignment
		let varR = 0;
		// eslint-disable-next-line no-useless-assignment
		let varG = 0;
		// eslint-disable-next-line no-useless-assignment
		let varB = 0;
		if (varI === 0) {
			varR = v;
			varG = var3;
			varB = var1;
		} else if (varI === 1) {
			varR = var2;
			varG = v;
			varB = var1;
		} else if (varI === 2) {
			varR = var1;
			varG = v;
			varB = var3;
		} else if (varI === 3) {
			varR = var1;
			varG = var2;
			varB = v;
		} else if (varI === 4) {
			varR = var3;
			varG = var1;
			varB = v;
		} else {
			varR = v;
			varG = var1;
			varB = var2;
		}

		r = varR * 255;
		g = varG * 255;
		b = varB * 255;
	}

	return [r, g, b];
}
