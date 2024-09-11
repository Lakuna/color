import type Hsl from "../types/Hsl.js";
import type Rgb from "../types/Rgb.js";

/**
 * Convert the given sRGB color to an HSL color. Based on the EasyRGB pseudo-code.
 * @param color - The sRGB color.
 * @returns An HSL color.
 * @public
 */
export default function rgbToHsl(color: Rgb): Hsl {
	// eslint-disable-next-line prefer-destructuring
	const r = color[0];
	// eslint-disable-next-line prefer-destructuring
	const g = color[1];
	// eslint-disable-next-line prefer-destructuring
	const b = color[2];

	const varR = r / 255;
	const varG = g / 255;
	const varB = b / 255;

	const varMin = Math.min(varR, varG, varB);
	const varMax = Math.max(varR, varG, varB);
	const delMax = varMax - varMin;

	const l = (varMax + varMin) / 2;

	let h = 0;
	// eslint-disable-next-line no-useless-assignment
	let s = 0;
	if (delMax === 0) {
		h = 0;
		s = 0;
	} else {
		if (l < 0.5) {
			s = delMax / (varMax + varMin);
		} else {
			s = delMax / (2 - varMax - varMin);
		}

		const delR = ((varMax - varR) / 6 + delMax / 2) / delMax;
		const delG = ((varMax - varG) / 6 + delMax / 2) / delMax;
		const delB = ((varMax - varB) / 6 + delMax / 2) / delMax;

		if (varR === varMax) {
			h = delB - delG;
		} else if (varG === varMax) {
			h = 1 / 3 + delR - delB;
		} else if (varB === varMax) {
			h = 2 / 3 + delG - delR;
		}

		if (h < 0) {
			h += 1;
		}
		if (h > 1) {
			h -= 1;
		}
	}

	return [h, s, l];
}
