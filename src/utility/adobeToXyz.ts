import type Adobe from "../types/Adobe.js";
import type Xyz from "../types/Xyz.js";

// TODO

/**
 * Convert the given Adobe RGB color to a CIEXYZ color. Based on the EasyRGB pseudo-code.
 * @param color - The Adobe RGB color.
 * @returns A CIEXYZ color.
 * @public
 */
export default function adobeToXyz(color: Adobe): Xyz {
	// eslint-disable-next-line prefer-destructuring
	const aR = color[0];
	// eslint-disable-next-line prefer-destructuring
	const aG = color[1];
	// eslint-disable-next-line prefer-destructuring
	const aB = color[2];

	let varR = aR / 255;
	let varG = aG / 255;
	let varB = aB / 255;

	varR **= 2.19921875;
	varG **= 2.19921875;
	varB **= 2.19921875;

	varR *= 100;
	varG *= 100;
	varB *= 100;

	const x = varR * 0.57667 + varG * 0.18555 + varB * 0.18819;
	const y = varR * 0.29738 + varG * 0.62735 + varB * 0.07527;
	const z = varR * 0.02703 + varG * 0.07069 + varB * 0.9911;

	return [x, y, z];
}
