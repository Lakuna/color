import type Lab from "../types/Lab.js";
import type Luv from "../types/Luv.js";

/**
 * Calculates the ΔH* between two CIELAB values. Based on the EasyRGB pseudocode.
 * @param color0 - The first color.
 * @param color1 - The second color.
 * @returns The difference between the colors.
 * @see {@link https://en.wikipedia.org/wiki/Color_difference | Color difference}
 * @public
 */
export default function deltaH(color0: Lab, color1: Lab): number;

/**
 * Calculates the ΔH* between two CIELUV values. Based on the EasyRGB pseudocode.
 * @param color0 - The first color.
 * @param color1 - The second color.
 * @returns The difference between the colors.
 * @see {@link https://en.wikipedia.org/wiki/Color_difference | Color difference}
 * @public
 */
export default function deltaH(color0: Luv, color1: Luv): number;

export default function deltaH(color0: Lab | Luv, color1: Lab | Luv): number {
	// eslint-disable-next-line prefer-destructuring
	const cieA1 = color0[1];
	// eslint-disable-next-line prefer-destructuring
	const cieB1 = color0[2];
	// eslint-disable-next-line prefer-destructuring
	const cieA2 = color1[1];
	// eslint-disable-next-line prefer-destructuring
	const cieB2 = color1[2];

	const xDE =
		Math.sqrt(cieA2 ** 2 + cieB2 ** 2) - Math.sqrt(cieA1 ** 2 + cieB1 ** 2);

	const deltaH2 = Math.sqrt(
		(cieA2 - cieA1) ** 2 + (cieB2 - cieB1) ** 2 - xDE ** 2
	);

	return deltaH2;
}
