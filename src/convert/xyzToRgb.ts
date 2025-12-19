import type Rgb from "../types/Rgb.js";
import type Xyz from "../types/Xyz.js";

/**
 * Convert the given CIEXYZ D65/2° standard illuminant color to an sRGB color. Based on the EasyRGB pseudo-code.
 * @param color - The CIEXYZ color.
 * @returns An sRGB color.
 * @public
 */
export default function xyzToRgb(color: Xyz): Rgb {
	const i0 = color[0] / 100;
	const i1 = color[1] / 100;
	const i2 = color[2] / 100;
	const i3 = i0 * 3.2406 + i1 * -1.5372 + i2 * -0.4986;
	const i4 = i0 * -0.9689 + i1 * 1.8758 + i2 * 0.0415;
	const i5 = i0 * 0.0557 + i1 * -0.204 + i2 * 1.057;

	return [
		(i3 > 0.0031308 ? 1.055 * i3 ** 0.41666666 - 0.055 : i3 * 12.92) * 0xff, // `1 / 2.4`
		(i4 > 0.0031308 ? 1.055 * i4 ** 0.41666666 - 0.055 : i4 * 12.92) * 0xff, // `1 / 2.4`
		(i5 > 0.0031308 ? 1.055 * i5 ** 0.41666666 - 0.055 : i5 * 12.92) * 0xff // `1 / 2.4`
	];
}
