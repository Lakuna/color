import type Hsi from "../types/Hsi.js";
import type Hsl from "../types/Hsl.js";
import type Hsv from "../types/Hsv.js";

/** Number of degrees in a circle. */
const d = 360;

/**
 * Determine the analogous colors of the given color.
 * @param color - The color to find the analogues of in HSI.
 * @param subdivisions - The number of slices to divide the color wheel into.
 * @returns The analogues of the given color.
 * @public
 */
export default function analogous(
	color: Hsi,
	subdivisions?: number
): [Hsi & [number, number, number], Hsi & [number, number, number]];

/**
 * Determine the analogous colors of the given color.
 * @param color - The color to find the analogues of in HSL.
 * @param subdivisions - The number of slices to divide the color wheel into.
 * @returns The analogues of the given color.
 * @public
 */
export default function analogous(
	color: Hsl,
	subdivisions?: number
): [Hsl & [number, number, number], Hsl & [number, number, number]];

/**
 * Determine the analogous colors of the given color.
 * @param color - The color to find the analogues of in HSV.
 * @param subdivisions - The number of slices to divide the color wheel into.
 * @returns The analogues of the given color.
 * @public
 */
export default function analogous(
	color: Hsv,
	subdivisions?: number
): [Hsv & [number, number, number], Hsv & [number, number, number]];

export default function analogous(
	color: Hsi | Hsl | Hsv,
	subdivisions = 12
):
	| [Hsi & [number, number, number], Hsi & [number, number, number]]
	| [Hsl & [number, number, number], Hsl & [number, number, number]]
	| [Hsv & [number, number, number], Hsv & [number, number, number]] {
	// eslint-disable-next-line prefer-destructuring
	const s = color[1];
	// eslint-disable-next-line prefer-destructuring
	const x = color[2];

	const hueAngle = color[0] * d;
	const deltaAngle = d / subdivisions;
	const underAngle = hueAngle - deltaAngle;
	const overAngle = hueAngle + deltaAngle;

	return [
		[(underAngle > d ? underAngle - d : underAngle) / d, s, x],
		[(overAngle > d ? overAngle - d : overAngle) / d, s, x]
	];
}
