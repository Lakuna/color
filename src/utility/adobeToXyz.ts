import type Adobe from "../types/Adobe.js";
import type Xyz from "../types/Xyz.js";

/**
 * Convert the given Adobe RGB color to a CIEXYZ color. Based on the EasyRGB pseudo-code.
 * @param color - The Adobe RGB color.
 * @returns A CIEXYZ color.
 * @public
 */
export default function adobeToXyz(color: Adobe): Xyz {
	const i0 = (color[0] / 0xff) ** 2.19921875 * 100;
	const i1 = (color[1] / 0xff) ** 2.19921875 * 100;
	const i2 = (color[2] / 0xff) ** 2.19921875 * 100;

	return [
		i0 * 0.57667 + i1 * 0.18555 + i2 * 0.18819,
		i0 * 0.29738 + i1 * 0.62735 + i2 * 0.07527,
		i0 * 0.02703 + i1 * 0.07069 + i2 * 0.9911
	];
}
