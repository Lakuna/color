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

	const i0 = color[0] * 6;
	const i1 = i0 === 6 ? 0 : i0;
	const i2 = Math.floor(i1);
	const i3 = v * 0xff;
	const i4 = i1 - i2;
	const i5 = v * (1 - s * (1 - i4)) * 0xff;
	const i6 = v * (1 - s) * 0xff;
	const i7 = v * (1 - s * i4) * 0xff;

	return s === 0
		? [i3, i3, i3]
		: i2 === 0
			? [i3, i5, i6]
			: i2 === 1
				? [i7, i3, i6]
				: i2 === 2
					? [i6, i3, i5]
					: i2 === 3
						? [i6, i7, i3]
						: i2 === 4
							? [i5, i6, i3]
							: [i3, i6, i7];
}
