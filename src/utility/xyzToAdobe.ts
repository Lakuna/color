import type Adobe from "../types/Adobe.js";
import type Xyz from "../types/Xyz.js";

/**
 * Convert the given CIEXYZ D65/2° standard illuminant color to an Adobe RGB color. Based on the EasyRGB pseudo-code.
 * @param color - The CIEXYZ color.
 * @returns An Adobe RGB color.
 * @public
 */
export default function xyzToAdobe(color: Xyz): Adobe {
	// eslint-disable-next-line prefer-destructuring
	const x = color[0];
	// eslint-disable-next-line prefer-destructuring
	const y = color[1];
	// eslint-disable-next-line prefer-destructuring
	const z = color[2];

	const varX = x / 100;
	const varY = y / 100;
	const varZ = z / 100;

	let varR = varX * 2.04137 + varY * -0.56495 + varZ * -0.34469;
	let varG = varX * -0.96927 + varY * 1.87601 + varZ * 0.04156;
	let varB = varX * 0.01345 + varY * -0.11839 + varZ * 1.01541;

	varR **= 1 / 2.19921875;
	varG **= 1 / 2.19921875;
	varB **= 1 / 2.19921875;

	const aR = varR * 255;
	const aG = varG * 255;
	const aB = varB * 255;

	return [aR, aG, aB];
}
