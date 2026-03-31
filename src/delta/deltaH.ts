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
export default function deltaH(
	color0: Readonly<Lab>,
	color1: Readonly<Lab>
): number;
/**
 * Calculates the ΔH* between two CIELUV values. Based on the EasyRGB pseudocode.
 * @param color0 - The first color.
 * @param color1 - The second color.
 * @returns The difference between the colors.
 * @see {@link https://en.wikipedia.org/wiki/Color_difference | Color difference}
 * @public
 */
export default function deltaH(
	color0: Readonly<Luv>,
	color1: Readonly<Luv>
): number;
export default function deltaH(
	color0: Readonly<Lab | Luv>,
	color1: Readonly<Lab | Luv>
): number {
	const a0 = color0[1];

	const b0 = color0[2];

	const a1 = color1[1];

	const b1 = color1[2];

	return Math.sqrt(
		(a1 - a0) ** 2 +
			(b1 - b0) ** 2 -
			(Math.hypot(a1, b1) - Math.hypot(a0, b0)) ** 2
	);
}
