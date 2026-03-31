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
export default function labToLch(
	color: Readonly<Lab>
): [number, number, number] & Lchab;
/**
 * Convert the given CIELUV color to a CIELCh(uv) color. Based on the EasyRGB pseudo-code.
 * @param color - The CIELUV color.
 * @returns A CIELCh color.
 * @public
 */
export default function labToLch(
	color: Readonly<Luv>
): [number, number, number] & Lchuv;
export default function labToLch(
	color: Readonly<Lab | Luv>
): [number, number, number] & (Lchab | Lchuv) {
	const a = color[1];

	const b = color[2];

	const i0 = Math.atan2(b, a);

	return [
		color[0],
		Math.hypot(a, b),
		i0 > 0 ? i0 * c0 : 360 - Math.abs(i0) * c0
	];
}
