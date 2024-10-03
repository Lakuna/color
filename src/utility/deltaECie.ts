import type Lab from "../types/Lab.js";
import type Luv from "../types/Luv.js";

/**
 * Calculates the ΔE* CIE (CIE 1976) between two CIELAB values. Based on the EasyRGB pseudocode.
 * @param color0 - The first color.
 * @param color1 - The second color.
 * @returns The difference between the colors.
 * @see {@link https://en.wikipedia.org/wiki/Color_difference | Color difference}
 * @public
 */
export default function deltaECie(color0: Lab, color1: Lab): number;

/**
 * Calculates the ΔE* CIE (CIE 1976) between two CIELUV values. Based on the EasyRGB pseudocode.
 * @param color0 - The first color.
 * @param color1 - The second color.
 * @returns The difference between the colors.
 * @see {@link https://en.wikipedia.org/wiki/Color_difference | Color difference}
 * @public
 */
export default function deltaECie(color0: Luv, color1: Luv): number;

export default function deltaECie(
	color0: Lab | Luv,
	color1: Lab | Luv
): number {
	// eslint-disable-next-line prefer-destructuring
	const cieL1 = color0[0];
	// eslint-disable-next-line prefer-destructuring
	const cieA1 = color0[1];
	// eslint-disable-next-line prefer-destructuring
	const cieB1 = color0[2];
	// eslint-disable-next-line prefer-destructuring
	const cieL2 = color1[0];
	// eslint-disable-next-line prefer-destructuring
	const cieA2 = color1[1];
	// eslint-disable-next-line prefer-destructuring
	const cieB2 = color1[2];

	const deltaE = Math.hypot(cieL1 - cieL2, cieA1 - cieA2, cieB1 - cieB2);

	return deltaE;
}
