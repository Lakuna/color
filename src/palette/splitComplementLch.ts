import type Lchab from "../types/Lchab.js";
import type Lchuv from "../types/Lchuv.js";

/** Number of degrees in a circle. */
const d = 360;

/**
 * Determine the split complementary colors of the given color.
 * @param color - The color to find the split complements of in CIE-L\*Ch(ab).
 * @param subdivisions - The number of slices to divide the color wheel into.
 * @returns The complements of the given color.
 * @public
 */
export default function splitComplementLch(
	color: Lchab,
	subdivisions?: number
): [Lchab & [number, number, number], Lchab & [number, number, number]];

/**
 * Determine the split complementary colors of the given color.
 * @param color - The color to find the split complements of in CIE-L\*Ch(uv).
 * @param subdivisions - The number of slices to divide the color wheel into.
 * @returns The complements of the given color.
 * @public
 */
export default function splitComplementLch(
	color: Lchuv,
	subdivisions?: number
): [Lchuv & [number, number, number], Lchuv & [number, number, number]];

export default function splitComplementLch(
	color: Lchab | Lchuv,
	subdivisions = 12
):
	| [Lchab & [number, number, number], Lchab & [number, number, number]]
	| [Lchuv & [number, number, number], Lchuv & [number, number, number]] {
	// eslint-disable-next-line prefer-destructuring
	const l = color[0];
	// eslint-disable-next-line prefer-destructuring
	const c = color[1];

	const deltaAngle = d / subdivisions;
	const oppositeAngle = color[2] + d / 2;
	const underAngle = oppositeAngle - deltaAngle;
	const overAngle = oppositeAngle + deltaAngle;

	return [
		[l, c, (underAngle > d ? underAngle - d : underAngle) / d],
		[l, c, (overAngle > d ? overAngle - d : overAngle) / d]
	];
}
