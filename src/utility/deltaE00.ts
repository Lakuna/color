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
	b === 0
		? a < 0
			? 180
			: 0
		: a === 0
			? b < 0
				? 270
				: 90
			: Math.atan(b / a) * 57.29577951 + (a > 0 ? (b > 0 ? 0 : 360) : 180); // `180 / Math.PI`

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
	const xGX = 0.5 * (1 - Math.sqrt(i0 / (i0 + 6103515625))); // `25 ** 7
	const i1 = (1 + xGX) * a0;
	const xC1 = Math.hypot(i1, b0);
	const xH1 = cieLabToHue(i1, b0);
	const i2 = (1 + xGX) * a1;
	const xC2 = Math.hypot(i2, b1);
	const xH2 = cieLabToHue(i2, b1);
	const xLX = (l0 + l1) / 2;
	const xCY = (xC1 + xC2) / 2;
	const i3 = xC1 * xC2;
	const i4 = xH1 + xH2;
	const xHX =
		i3 === 0
			? i4
			: Math.abs(xH1 - xH2) > 180
				? i4 < 360
					? (i4 + 360) / 2
					: (i4 - 360) / 2
				: i4 / 2;
	const xDC = (xC2 - xC1) / (weight[1] * (1 + 0.045 * xCY));
	const i5 = xH2 - xH1;
	const xDH =
		(2 *
			Math.sqrt(i3) *
			Math.sin(
				((i3 === 0
					? 0
					: Math.abs(i5) <= 180
						? i5
						: i5 > 180
							? i5 - 360
							: i5 + 360) /
					2) *
					0.01745329 // `Math.PI / 180`
			)) /
		(weight[2] *
			(1 +
				0.015 *
					xCY *
					(1 -
						0.17 * Math.cos((xHX - 30) * 0.01745329) + // `Math.PI / 180`
						0.24 * Math.cos(2 * xHX * 0.01745329) + // `Math.PI / 180`
						0.32 * Math.cos((3 * xHX + 6) * 0.01745329) - // `Math.PI / 180`
						0.2 * Math.cos((4 * xHX - 63) * 0.01745329)))); // `Math.PI / 180`
	const i6 = xCY ** 7;
	const i7 = (xLX - 50) ** 2;

	return Math.sqrt(
		((l1 - l0) / (weight[0] * (1 + (0.015 * i7) / Math.sqrt(20 + i7)))) ** 2 +
			xDC ** 2 +
			xDH ** 2 +
			-Math.sin(2 * (30 * Math.exp(-(((xHX - 275) / 25) ** 2))) * 0.01745329) * // `Math.PI / 180`
				(2 * Math.sqrt(i6 / (i6 + 6103515625))) * // `25 ** 7
				xDC *
				xDH
	);
}
