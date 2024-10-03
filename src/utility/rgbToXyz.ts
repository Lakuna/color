import type Rgb from "../types/Rgb.js";
import type Xyz from "../types/Xyz.js";

// TODO

/**
 * Convert the given sRGB color to a CIEXYZ color. Based on the EasyRGB pseudo-code.
 * @param color - The sRGB color.
 * @returns A CIEXYZ color.
 * @public
 */
export default function rgbToXyz(color: Rgb): Xyz {
	// eslint-disable-next-line prefer-destructuring
	const sR = color[0];
	// eslint-disable-next-line prefer-destructuring
	const sG = color[1];
	// eslint-disable-next-line prefer-destructuring
	const sB = color[2];

	let varR = sR / 255;
	let varG = sG / 255;
	let varB = sB / 255;

	if (varR > 0.04045) {
		varR = ((varR + 0.055) / 1.055) ** 2.4;
	} else {
		varR /= 12.92;
	}
	if (varG > 0.04045) {
		varG = ((varG + 0.055) / 1.055) ** 2.4;
	} else {
		varG /= 12.92;
	}
	if (varB > 0.04045) {
		varB = ((varB + 0.055) / 1.055) ** 2.4;
	} else {
		varB /= 12.92;
	}

	varR *= 100;
	varG *= 100;
	varB *= 100;

	const x = varR * 0.4124 + varG * 0.3576 + varB * 0.1805;
	const y = varR * 0.2126 + varG * 0.7152 + varB * 0.0722;
	const z = varR * 0.0193 + varG * 0.1192 + varB * 0.9505;

	return [x, y, z];
}
