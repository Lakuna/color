import type Hsi from "../types/Hsi.js";
import type Rgb from "../types/Rgb.js";

const c0 = 1 / 3;
const c1 = 2 / 3;

/**
 * Convert the given sRGB color to an HSI color.
 * @param color - The sRGB color.
 * @returns An HSI color.
 * @public
 */
export default function rgbToHsi(color: Rgb): Hsi & [number, number, number] {
	const i0 = color[0] / 0xff;
	const i1 = color[1] / 0xff;
	const i2 = color[2] / 0xff;
	const i = (i0 + i1 + i2) / 3;
	const v = Math.max(i0, i1, i2);
	const m = Math.min(i0, i1, i2);
	const c = v - m;

	if (c === 0) {
		return [0, 0, i];
	}

	const i4 = c / 2;
	const i5 = ((v - i0) / 6 + i4) / c;
	const i6 = ((v - i1) / 6 + i4) / c;
	const i7 = ((v - i2) / 6 + i4) / c;
	const i8 =
		i0 === v ? i7 - i6
		: i1 === v ? c0 + i5 - i7
		: i2 === v ? c1 + i6 - i5
		: 0;

	return [
		i8 < 0 ? i8 + 1
		: i8 > 1 ? i8 - 1
		: i8,
		i === 0 ? 0 : 1 - m / i,
		i
	];
}
