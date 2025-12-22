import type Lab from "../types/Lab.js";
import type Lchab from "../types/Lchab.js";
import type Lchuv from "../types/Lchuv.js";
import type Luv from "../types/Luv.js";

const c0 = 180 / Math.PI;

/**
 * Convert the given CIELAB color to a CIELCh(ab) color. Based on the EasyRGB pseudo-code.
 * @param color - The CIELAB color.
 * @returns A CIELCh color.
 * @public
 */
export default function labToLch(color: Lab): Lchab & [number, number, number];

/**
 * Convert the given CIELUV color to a CIELCh(uv) color. Based on the EasyRGB pseudo-code.
 * @param color - The CIELUV color.
 * @returns A CIELCh color.
 * @public
 */
export default function labToLch(color: Luv): Lchuv & [number, number, number];

export default function labToLch(
	color: Lab | Luv
): (Lchab | Lchuv) & [number, number, number] {
	// eslint-disable-next-line prefer-destructuring
	const a = color[1];
	// eslint-disable-next-line prefer-destructuring
	const b = color[2];

	const i0 = Math.atan2(b, a);

	return [
		color[0],
		Math.hypot(a, b),
		i0 > 0 ? i0 * c0 : 360 - Math.abs(i0) * c0
	];
}
