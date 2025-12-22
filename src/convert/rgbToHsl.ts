import type Hsl from "../types/Hsl.js";
import type Rgb from "../types/Rgb.js";

const c0 = 1 / 3;
const c1 = 2 / 3;

/**
 * Convert the given sRGB color to an HSL color. Based on the EasyRGB pseudo-code.
 * @param color - The sRGB color.
 * @returns An HSL color.
 * @public
 */
export default function rgbToHsl(color: Rgb): Hsl & [number, number, number] {
	const i0 = color[0] / 0xff;
	const i1 = color[1] / 0xff;
	const i2 = color[2] / 0xff;
	const i3 = Math.min(i0, i1, i2);
	const i4 = Math.max(i0, i1, i2);
	const i5 = i4 + i3;
	const l = i5 / 2;
	const i6 = i4 - i3;

	if (i6 === 0) {
		return [0, 0, l];
	}

	const i7 = i6 / 2;
	const i8 = ((i4 - i0) / 6 + i7) / i6;
	const i9 = ((i4 - i1) / 6 + i7) / i6;
	const i10 = ((i4 - i2) / 6 + i7) / i6;
	const i11 =
		i0 === i4 ? i10 - i9
		: i1 === i4 ? c0 + i8 - i10
		: i2 === i4 ? c1 + i9 - i8
		: 0;

	return [
		i11 < 0 ? i11 + 1
		: i11 > 1 ? i11 - 1
		: i11,
		l < 0.5 ? i6 / i5 : i6 / (2 - i4 - i3),
		l
	];
}
