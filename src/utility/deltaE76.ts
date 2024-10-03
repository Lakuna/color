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
export default function deltaE76(color0: Lab, color1: Lab): number;

/**
 * Calculates the ΔE* CIE (CIE 1976) between two CIELUV values. Based on the EasyRGB pseudocode.
 * @param color0 - The first color.
 * @param color1 - The second color.
 * @returns The difference between the colors.
 * @see {@link https://en.wikipedia.org/wiki/Color_difference | Color difference}
 * @public
 */
export default function deltaE76(color0: Luv, color1: Luv): number;

export default function deltaE76(color0: Lab | Luv, color1: Lab | Luv): number {
	return Math.hypot(
		color0[0] - color1[0],
		color0[1] - color1[1],
		color0[2] - color1[2]
	);
}
