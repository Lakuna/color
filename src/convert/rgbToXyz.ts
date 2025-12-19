import type Rgb from "../types/Rgb.js";
import type Xyz from "../types/Xyz.js";

/**
 * Convert the given sRGB color to a CIEXYZ color. Based on the EasyRGB pseudo-code.
 * @param color - The sRGB color.
 * @returns A CIEXYZ color.
 * @public
 */
export default function rgbToXyz(color: Rgb): Xyz {
	const i0 = color[0] / 0xff;
	const i1 = color[1] / 0xff;
	const i2 = color[2] / 0xff;
	const i3 = (i0 > 0.04045 ? ((i0 + 0.055) / 1.055) ** 2.4 : i0 / 12.92) * 100;
	const i4 = (i1 > 0.04045 ? ((i1 + 0.055) / 1.055) ** 2.4 : i1 / 12.92) * 100;
	const i5 = (i2 > 0.04045 ? ((i2 + 0.055) / 1.055) ** 2.4 : i2 / 12.92) * 100;

	return [
		i3 * 0.4124 + i4 * 0.3576 + i5 * 0.1805,
		i3 * 0.2126 + i4 * 0.7152 + i5 * 0.0722,
		i3 * 0.0193 + i4 * 0.1192 + i5 * 0.9505
	];
}
