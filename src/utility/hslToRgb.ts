import type Hsl from "../types/Hsl.js";
import type Rgb from "../types/Rgb.js";

/**
 * Converts the given hue data to RGB data.
 * @param v0 - The first piecewise value.
 * @param v1 - The second piecewise value.
 * @param h - The third piecewise value.
 * @returns The piecewise result.
 * @internal
 */
const hueToRgb = (v0: number, v1: number, h: number): number => {
	const i0 = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
	const i1 = 6 * i0;
	const i2 = v1 - v0;
	return i1 < 1
		? v0 + i2 * i1
		: 2 * i0 < 1
			? v1
			: 3 * i0 < 2
				? v0 + i2 * (2 / 3 - i0) * 6
				: v0;
};

/**
 * Convert the given HSL color to an sRGB color. Based on the EasyRGB pseudo-code.
 * @param color - The HSL color.
 * @returns An sRGB color.
 * @public
 */
export default function hslToRgb(color: Hsl): Rgb {
	// eslint-disable-next-line prefer-destructuring
	const h = color[0];
	// eslint-disable-next-line prefer-destructuring
	const s = color[1];
	// eslint-disable-next-line prefer-destructuring
	const l = color[2];

	const i0 = l * 0xff;
	const i1 = l < 0.5 ? l * (1 + s) : l + s - s * l;
	const i2 = 2 * l - i1;

	return s === 0
		? [i0, i0, i0]
		: [
				0xff * hueToRgb(i2, i1, h + 1 / 3),
				0xff * hueToRgb(i2, i1, h),
				0xff * hueToRgb(i2, i1, h - 1 / 3)
			];
}
