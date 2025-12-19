import type Hsv from "../types/Hsv.js";
import type Rgb from "../types/Rgb.js";

/**
 * Convert the given sRGB color to an HSV color. Based on the EasyRGB pseudo-code.
 * @param color - The sRGB color.
 * @returns An HSV color.
 * @public
 */
export default function rgbToHsv(color: Rgb): Hsv {
	const i0 = color[0] / 0xff;
	const i1 = color[1] / 0xff;
	const i2 = color[2] / 0xff;
	const v = Math.max(i0, i1, i2);
	const i3 = v - Math.min(i0, i1, i2);

	if (i3 === 0) {
		return [0, 0, v];
	}

	const i4 = i3 / 2;
	const i5 = ((v - i0) / 6 + i4) / i3;
	const i6 = ((v - i1) / 6 + i4) / i3;
	const i7 = ((v - i2) / 6 + i4) / i3;
	const i8 =
		i0 === v ? i7 - i6
		: i1 === v ?
			0.33333333 + i5 - i7 // `1 / 3`
		: i2 === v ?
			0.66666666 + i6 - i5 // `2 / 3`
		:	0;

	return [
		i8 < 0 ? i8 + 1
		: i8 > 1 ? i8 - 1
		: i8,
		i3 / v,
		v
	];
}
