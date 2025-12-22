import type Lchab from "../types/Lchab.js";
import type Lchuv from "../types/Lchuv.js";

/** Number of degrees in a circle. */
const d = 360;

/**
 * Determine the analogous colors of the given color.
 * @param color - The color to find the analogues of in CIE-L\*Ch(ab).
 * @param subdivisions - The number of slices to divide the color wheel into.
 * @returns The analogues of the given color.
 * @public
 */
export default function analogousLch(
	color: Lchab,
	subdivisions?: number
): [Lchab & [number, number, number], Lchab & [number, number, number]];

/**
 * Determine the analogous colors of the given color.
 * @param color - The color to find the analogues of in CIE-L\*Ch(uv).
 * @param subdivisions - The number of slices to divide the color wheel into.
 * @returns The analogues of the given color.
 * @public
 */
export default function analogousLch(
	color: Lchuv,
	subdivisions?: number
): [Lchuv & [number, number, number], Lchuv & [number, number, number]];

export default function analogousLch(
	color: Lchab | Lchuv,
	subdivisions = 12
):
	| [Lchab & [number, number, number], Lchab & [number, number, number]]
	| [Lchuv & [number, number, number], Lchuv & [number, number, number]] {
	// eslint-disable-next-line prefer-destructuring
	const l = color[0];
	// eslint-disable-next-line prefer-destructuring
	const c = color[1];
	// eslint-disable-next-line prefer-destructuring
	const h = color[2];

	const deltaAngle = d / subdivisions;
	const underAngle = h - deltaAngle;
	const overAngle = h + deltaAngle;

	return [
		[l, c, (underAngle > d ? underAngle - d : underAngle) / d],
		[l, c, (overAngle > d ? overAngle - d : overAngle) / d]
	];
}
