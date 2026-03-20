import type Hsi from "../types/Hsi.js";
import type Hsl from "../types/Hsl.js";
import type Hsv from "../types/Hsv.js";

/** Number of degrees in a circle. */
const d = 360;

/**
 * Determine the split complementary colors of the given color.
 * @param color - The color to find the split complements of in HSI.
 * @param subdivisions - The number of slices to divide the color wheel into.
 * @returns The complements of the given color.
 * @public
 */
export default function splitComplement(
	color: Hsi,
	subdivisions?: number
): [[number, number, number] & Hsi, [number, number, number] & Hsi];
/**
 * Determine the split complementary colors of the given color.
 * @param color - The color to find the split complements of in HSL.
 * @param subdivisions - The number of slices to divide the color wheel into.
 * @returns The complements of the given color.
 * @public
 */
export default function splitComplement(
	color: Hsl,
	subdivisions?: number
): [[number, number, number] & Hsl, [number, number, number] & Hsl];
/**
 * Determine the split complementary colors of the given color.
 * @param color - The color to find the split complements of in HSV.
 * @param subdivisions - The number of slices to divide the color wheel into.
 * @returns The complements of the given color.
 * @public
 */
export default function splitComplement(
	color: Hsv,
	subdivisions?: number
): [[number, number, number] & Hsv, [number, number, number] & Hsv];
export default function splitComplement(
	color: Hsi | Hsl | Hsv,
	subdivisions = 12
):
	| [[number, number, number] & Hsi, [number, number, number] & Hsi]
	| [[number, number, number] & Hsl, [number, number, number] & Hsl]
	| [[number, number, number] & Hsv, [number, number, number] & Hsv] {
	const s = color[1];

	const x = color[2];

	const deltaAngle = d / subdivisions;
	const oppositeAngle = color[0] * d + d / 2;
	const underAngle = oppositeAngle - deltaAngle;
	const overAngle = oppositeAngle + deltaAngle;

	return [
		[(underAngle > d ? underAngle - d : underAngle) / d, s, x],
		[(overAngle > d ? overAngle - d : overAngle) / d, s, x]
	];
}
