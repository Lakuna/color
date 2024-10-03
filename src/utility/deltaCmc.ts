import type Lab from "../types/Lab.js";
import type Lch from "../types/Lch.js";

/**
 * Calculates the ΔCMC between two CIELAB values. Based on the EasyRGB pseudocode.
 * @param color0 - The first color.
 * @param color1 - The second color.
 * @param weight - The CIELCH weights. Defaults to all ones.
 * @returns The difference between the colors.
 * @see {@link https://en.wikipedia.org/wiki/Color_difference | Color difference}
 * @public
 */
export default function deltaCmc(
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
	const a1 = color1[1];
	// eslint-disable-next-line prefer-destructuring
	const b1 = color1[2];

	const xC1 = Math.hypot(a0, b0);
	const i0 = xC1 ** 4;
	const xff = Math.sqrt(i0 / (i0 + 1900));
	const xH1 =
		b0 === 0
			? a0 < 0
				? 180
				: 0
			: a0 === 0
				? b0 < 0
					? 270
					: 90
				: Math.atan(b0 / a0) * 57.29577951 + // `180 / Math.PI`
					(a0 > 0 ? (b0 > 0 ? 0 : 360) : 180);
	const i1 = (0.0638 * xC1) / (1 + 0.0131 * xC1) + 0.638;
	const i2 = Math.hypot(a1, b1) - xC1;

	return Math.hypot(
		(color1[0] - l0) /
			(weight[0] * (l0 < 16 ? 0.511 : (0.040975 * l0) / (1 + 0.01765 * l0))),
		i2 / (weight[1] * i1),
		Math.sqrt((a1 - a0) ** 2 + (b1 - b0) ** 2 - i2 ** 2) /
			((xff *
				(xH1 < 164 || xH1 > 345
					? 0.36 + Math.abs(0.4 * Math.cos((35 + xH1) * 0.01745329)) // `Math.PI / 180`
					: 0.56 + Math.abs(0.2 * Math.cos((168 + xH1) * 0.01745329))) + // `Math.PI / 180`
				1 -
				xff) *
				i1)
	);
}
