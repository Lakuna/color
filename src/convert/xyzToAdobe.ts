import type Adobe from "../types/Adobe.js";
import type Xyz from "../types/Xyz.js";

/**
 * Convert the given CIEXYZ D65/2° standard illuminant color to an Adobe RGB color. Based on the EasyRGB pseudo-code.
 * @param color - The CIEXYZ color.
 * @returns An Adobe RGB color.
 * @public
 */
export default function xyzToAdobe(color: Xyz): Adobe {
	const i0 = color[0] / 100;
	const i1 = color[1] / 100;
	const i2 = color[2] / 100;

	return [
		(i0 * 2.04137 + i1 * -0.56495 + i2 * -0.34469) ** 0.45470693 * 0xff, // `1 / 2.19921875`
		(i0 * -0.96927 + i1 * 1.87601 + i2 * 0.04156) ** 0.45470693 * 0xff, // `1 / 2.19921875`
		(i0 * 0.01345 + i1 * -0.11839 + i2 * 1.01541) ** 0.45470693 * 0xff // `1 / 2.19921875`
	];
}
