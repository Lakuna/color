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
): [[number, number, number] & Hsi, [number, number, number] & Hsi];
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
): [[number, number, number] & Hsl, [number, number, number] & Hsl];
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
): [[number, number, number] & Hsv, [number, number, number] & Hsv];
export default function analogous(
	color: Hsi | Hsl | Hsv,
	subdivisions = 12
):
	| [[number, number, number] & Hsi, [number, number, number] & Hsi]
	| [[number, number, number] & Hsl, [number, number, number] & Hsl]
	| [[number, number, number] & Hsv, [number, number, number] & Hsv] {
	const s = color[1];

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
