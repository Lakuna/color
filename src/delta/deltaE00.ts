import type Lab from "../types/Lab.js";
import type Lch from "../types/Lch.js";

/**
 * Convert CIELAB data to hue data.
 * @param a - An input CIELAB value.
 * @param b - An input CIELAB value.
 * @returns A CIELCh hue (h°) value.
 * @internal
 */
const cieLabToHue = (a: number, b: number): number =>
	b === 0 ?
		a < 0 ?
			180
		:	0
	: a === 0 ?
		b < 0 ?
			270
		:	90
	:	Math.atan(b / a) * 57.29577951 +
		(a > 0 ?
			b > 0 ?
				0
			:	360
		:	180); // `180 / Math.PI`

/**
 * Calculates the ΔE* 2000 (also called the CIEDE2000) between two CIELAB values. Based on the EasyRGB pseudocode.
 * @param color0 - The first color.
 * @param color1 - The second color.
 * @param weight - The CIELCH weights. Defaults to all ones.
 * @returns The difference between the colors.
 * @see {@link https://en.wikipedia.org/wiki/Color_difference | Color difference}
 * @public
 */
export default function deltaE00(
	color0: Lab,
	color1: Lab,
	weight: Lch = [1, 1, 1]
): number {
	// eslint-disable-next-line prefer-destructuring
	const l0 = color0[0];
	// eslint-disable-next-line prefer-destructuring
	const a0 = color0[1];
	// eslint-disable-next-line prefer-destructuring
	const b0 = color0[2];
	// eslint-disable-next-line prefer-destructuring
	const l1 = color1[0];
	// eslint-disable-next-line prefer-destructuring
	const a1 = color1[1];
	// eslint-disable-next-line prefer-destructuring
	const b1 = color1[2];

	const i0 = ((Math.hypot(a0, b0) + Math.hypot(a1, b1)) / 2) ** 7;
	const i1 = 0.5 * (1 - Math.sqrt(i0 / (i0 + 6103515625))); // `25 ** 7
	const i2 = (1 + i1) * a0;
	const i3 = Math.hypot(i2, b0);
	const i4 = cieLabToHue(i2, b0);
	const i5 = (1 + i1) * a1;
	const i6 = Math.hypot(i5, b1);
	const i7 = cieLabToHue(i5, b1);
	const i8 = (i3 + i6) / 2;
	const i9 = i3 * i6;
	const i10 = i4 + i7;
	const i11 =
		i9 === 0 ? i10
		: Math.abs(i4 - i7) > 180 ?
			i10 < 360 ?
				(i10 + 360) / 2
			:	(i10 - 360) / 2
		:	i10 / 2;
	const i12 = (i6 - i3) / (weight[1] * (1 + 0.045 * i8));
	const i13 = i7 - i4;
	const i14 =
		(2 *
			Math.sqrt(i9) *
			Math.sin(
				((i9 === 0 ? 0
				: Math.abs(i13) <= 180 ? i13
				: i13 > 180 ? i13 - 360
				: i13 + 360) /
					2) *
					0.01745329 // `Math.PI / 180`
			)) /
		(weight[2] *
			(1 +
				0.015 *
					i8 *
					(1 -
						0.17 * Math.cos((i11 - 30) * 0.01745329) + // `Math.PI / 180`
						0.24 * Math.cos(2 * i11 * 0.01745329) + // `Math.PI / 180`
						0.32 * Math.cos((3 * i11 + 6) * 0.01745329) - // `Math.PI / 180`
						0.2 * Math.cos((4 * i11 - 63) * 0.01745329)))); // `Math.PI / 180`
	const i15 = i8 ** 7;
	const i16 = ((l0 + l1) / 2 - 50) ** 2;

	return Math.sqrt(
		((l1 - l0) / (weight[0] * (1 + (0.015 * i16) / Math.sqrt(20 + i16)))) ** 2 +
			i12 ** 2 +
			i14 ** 2 +
			-Math.sin(2 * (30 * Math.exp(-(((i11 - 275) / 25) ** 2))) * 0.01745329) * // `Math.PI / 180`
				(2 * Math.sqrt(i15 / (i15 + 6103515625))) * // `25 ** 7
				i12 *
				i14
	);
}
