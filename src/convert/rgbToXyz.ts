import type Rgb from "../types/Rgb.js";
import type Xyz from "../types/Xyz.js";

const c0 = 0.04045;
const c1 = 0.055;
const c2 = 1.055;
const c3 = 2.4;
const c4 = 12.92;
const c5 = 100;

/**
 * Convert the given sRGB color to a CIEXYZ color. Based on the EasyRGB pseudo-code.
 * @param color - The sRGB color.
 * @returns A CIEXYZ color.
 * @public
 */
export default function rgbToXyz(color: Rgb): Xyz & [number, number, number] {
	const i0 = color[0] / 0xff;
	const i1 = color[1] / 0xff;
	const i2 = color[2] / 0xff;
	const i3 = (i0 > c0 ? ((i0 + c1) / c2) ** c3 : i0 / c4) * c5;
	const i4 = (i1 > c0 ? ((i1 + c1) / c2) ** c3 : i1 / c4) * c5;
	const i5 = (i2 > c0 ? ((i2 + c1) / c2) ** c3 : i2 / c4) * c5;

	return [
		i3 * 0.4124 + i4 * 0.3576 + i5 * 0.1805,
		i3 * 0.2126 + i4 * 0.7152 + i5 * 0.0722,
		i3 * 0.0193 + i4 * 0.1192 + i5 * 0.9505
	];
}
