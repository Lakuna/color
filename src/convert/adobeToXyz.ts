import type Adobe from "../types/Adobe.js";
import type Xyz from "../types/Xyz.js";

const gamma = 0x233 / 0x100; // https://www.adobe.com/digitalimag/pdfs/AdobeRGB1998.pdf

const f = 100 / 0xff ** gamma; // `(x / 0xff) ** gamma * 100)` is equivalent to `x ** gamma * f`.

/**
 * Convert the given Adobe RGB color to a CIEXYZ color. Based on the EasyRGB pseudo-code.
 * @param color - The Adobe RGB color.
 * @returns A CIEXYZ color.
 * @public
 */
export default function adobeToXyz(color: Adobe): Xyz {
	const i0 = color[0] ** gamma * f;
	const i1 = color[1] ** gamma * f;
	const i2 = color[2] ** gamma * f;

	return [
		i0 * 0.57667 + i1 * 0.18555 + i2 * 0.18819,
		i0 * 0.29738 + i1 * 0.62735 + i2 * 0.07527,
		i0 * 0.02703 + i1 * 0.07069 + i2 * 0.9911
	];
}
