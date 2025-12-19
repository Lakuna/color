import type Hsl from "../types/Hsl.js";
import type Hsv from "../types/Hsv.js";

/** Number of degrees in a circle. */
const d = 360;

/**
 * Determine the analogous colors of the given color.
 * @param c - The color to find the analogues of in HSL.
 * @param subdivisions - The number of slices to divide the color wheel into.
 * @returns The analogues of the given color.
 * @public
 */
export default function analogous(c: Hsl, subdivisions?: number): [Hsl, Hsl];

/**
 * Determine the analogous colors of the given color.
 * @param c - The color to find the analogues of in HSV.
 * @param subdivisions - The number of slices to divide the color wheel into.
 * @returns The analogues of the given color.
 * @public
 */
export default function analogous(c: Hsv, subdivisions?: number): [Hsv, Hsv];

export default function analogous(
	c: Hsl | Hsv,
	subdivisions = 12
): [Hsl, Hsl] | [Hsv, Hsv] {
	// eslint-disable-next-line prefer-destructuring
	const h = c[0];
	// eslint-disable-next-line prefer-destructuring
	const s = c[1];
	// eslint-disable-next-line prefer-destructuring
	const x = c[2];

	const hueAngle = h * d;
	const deltaAngle = d / subdivisions;
	const a = hueAngle - deltaAngle;
	const b = hueAngle + deltaAngle;

	return [
		[(a > d ? a - d : a) / d, s, x],
		[(b > d ? b - d : b) / d, s, x]
	];
}
