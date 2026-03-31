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
	color: Readonly<Lchab>,
	subdivisions?: number
): [[number, number, number] & Lchab, [number, number, number] & Lchab];
/**
 * Determine the analogous colors of the given color.
 * @param color - The color to find the analogues of in CIE-L\*Ch(uv).
 * @param subdivisions - The number of slices to divide the color wheel into.
 * @returns The analogues of the given color.
 * @public
 */
export default function analogousLch(
	color: Readonly<Lchuv>,
	subdivisions?: number
): [[number, number, number] & Lchuv, [number, number, number] & Lchuv];
export default function analogousLch(
	color: Readonly<Lchab | Lchuv>,
	subdivisions = 12
):
	| [[number, number, number] & Lchab, [number, number, number] & Lchab]
	| [[number, number, number] & Lchuv, [number, number, number] & Lchuv] {
	const l = color[0];

	const c = color[1];

	const h = color[2];

	const deltaAngle = d / subdivisions;
	const underAngle = h - deltaAngle;
	const overAngle = h + deltaAngle;

	return [
		[l, c, (underAngle > d ? underAngle - d : underAngle) / d],
		[l, c, (overAngle > d ? overAngle - d : overAngle) / d]
	];
}
