import type Rgb from "../types/Rgb.js";
import type Xyz from "../types/Xyz.js";

// TODO

/**
 * Convert the given CIEXYZ D65/2° standard illuminant color to an sRGB color. Based on the EasyRGB pseudo-code.
 * @param color - The CIEXYZ color.
 * @returns An sRGB color.
 * @public
 */
export default function xyzToRgb(color: Xyz): Rgb {
	// eslint-disable-next-line prefer-destructuring
	const x = color[0];
	// eslint-disable-next-line prefer-destructuring
	const y = color[1];
	// eslint-disable-next-line prefer-destructuring
	const z = color[2];

	const varX = x / 100;
	const varY = y / 100;
	const varZ = z / 100;

	let varR = varX * 3.2406 + varY * -1.5372 + varZ * -0.4986;
	let varG = varX * -0.9689 + varY * 1.8758 + varZ * 0.0415;
	let varB = varX * 0.0557 + varY * -0.204 + varZ * 1.057;

	if (varR > 0.0031308) {
		varR = 1.055 * varR ** (1 / 2.4) - 0.055;
	} else {
		varR *= 12.92;
	}
	if (varG > 0.0031308) {
		varG = 1.055 * varG ** (1 / 2.4) - 0.055;
	} else {
		varG *= 12.92;
	}
	if (varB > 0.0031308) {
		varB = 1.055 * varB ** (1 / 2.4) - 0.055;
	} else {
		varB *= 12.92;
	}

	const sR = varR * 255;
	const sG = varG * 255;
	const sB = varB * 255;

	return [sR, sG, sB];
}
