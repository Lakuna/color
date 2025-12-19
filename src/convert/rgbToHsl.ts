import type Hsl from "../types/Hsl.js";
import type Rgb from "../types/Rgb.js";

/**
 * Convert the given sRGB color to an HSL color. Based on the EasyRGB pseudo-code.
 * @param color - The sRGB color.
 * @returns An HSL color.
 * @public
 */
export default function rgbToHsl(color: Rgb): Hsl {
	const i0 = color[0] / 0xff;
	const i1 = color[1] / 0xff;
	const i2 = color[2] / 0xff;
	const i3 = Math.min(i0, i1, i2);
	const i4 = Math.max(i0, i1, i2);
	const l = (i4 + i3) / 2;
	const i5 = i4 - i3;

	if (i5 === 0) {
		return [0, 0, l];
	}

	const s = l < 0.5 ? i5 / (i4 + i3) : i5 / (2 - i4 - i3);
	const i6 = ((i4 - i0) / 6 + i5 / 2) / i5;
	const i7 = ((i4 - i1) / 6 + i5 / 2) / i5;
	const i8 = ((i4 - i2) / 6 + i5 / 2) / i5;
	const i9 =
		i0 === i4 ? i8 - i7
		: i1 === i4 ? 1 / 3 + i6 - i8
		: i2 === i4 ? 2 / 3 + i7 - i6
		: 0;
	const h =
		i9 < 0 ? i9 + 1
		: i9 > 1 ? i9 - 1
		: i9;

	return [h, s, l];
}
