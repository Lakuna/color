import type Adobe from "../types/Adobe.js";
import type Xyz from "../types/Xyz.js";

const gamma = 0x233 / 0x100; // https://www.adobe.com/digitalimag/pdfs/AdobeRGB1998.pdf
const c0 = 1 / gamma;

/**
 * Convert the given CIEXYZ D65/2° standard illuminant color to an Adobe RGB color. Based on the EasyRGB pseudo-code.
 * @param color - The CIEXYZ color.
 * @returns An Adobe RGB color.
 * @public
 */
export default function xyzToAdobe(
	color: Xyz
): Adobe & [number, number, number] {
	const i0 = color[0] / 100;
	const i1 = color[1] / 100;
	const i2 = color[2] / 100;

	return [
		(i0 * 2.04137 + i1 * -0.56495 + i2 * -0.34469) ** c0 * 0xff,
		(i0 * -0.96927 + i1 * 1.87601 + i2 * 0.04156) ** c0 * 0xff,
		(i0 * 0.01345 + i1 * -0.11839 + i2 * 1.01541) ** c0 * 0xff
	];
}
