import type Hsv from "../types/Hsv.js";
import type Rgb from "../types/Rgb.js";

/**
 * Convert the given HSV color to an sRGB color. Based on the EasyRGB pseudo-code.
 * @param color - The HSV color.
 * @returns An sRGB color.
 * @public
 */
export default function hsvToRgb(color: Hsv): Rgb {
	// eslint-disable-next-line prefer-destructuring
	const s = color[1];
	// eslint-disable-next-line prefer-destructuring
	const v = color[2];

	const i0 = v * 0xff;

	if (s === 0) {
		return [i0, i0, i0];
	}

	const i1 = color[0] * 6;
	const i2 = i1 === 6 ? 0 : i1;
	const i3 = Math.floor(i2);
	const i4 = i2 - i3;
	const i5 = v * (1 - s * (1 - i4)) * 0xff;
	const i6 = v * (1 - s) * 0xff;

	if (i3 === 0) {
		return [i0, i5, i6];
	}

	if (i3 === 2) {
		return [i6, i0, i5];
	}

	if (i3 === 4) {
		return [i5, i6, i0];
	}

	const i7 = v * (1 - s * i4) * 0xff;

	return (
		i3 === 1 ? [i7, i0, i6]
		: i3 === 3 ? [i6, i7, i0]
		: [i0, i6, i7]
	);
}
