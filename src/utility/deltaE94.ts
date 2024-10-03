import type Lab from "../types/Lab.js";
import type Lch from "../types/Lch.js";

/**
 * Calculates the ΔE* 1994 between two CIELAB values. Based on the EasyRGB pseudocode.
 * @param color0 - The first color.
 * @param color1 - The second color.
 * @param weight - The CIELCH weights. Defaults to all ones.
 * @returns The difference between the colors.
 * @see {@link https://en.wikipedia.org/wiki/Color_difference | Color difference}
 * @public
 */
export default function deltaE94(
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

	const xC1 = Math.hypot(a0, b0);
	const i0 = l1 - l0;
	const i1 = Math.hypot(a1, b1) - xC1;
	const i2 = Math.hypot(l0 - l1, a0 - a1, b0 - b1) ** 2 - i0 ** 2 - i1 ** 2;

	return Math.hypot(
		i0 / weight[0],
		i1 / (weight[1] * (1 + 0.045 * xC1)),
		(i2 > 0 ? Math.sqrt(i2) : 0) / (weight[2] * (1 + 0.015 * xC1))
	);
}
