import type Lab from "../types/Lab.js";
import type Lch from "../types/Lch.js";
import type Luv from "../types/Luv.js";

/**
 * Convert the given CIELAB or CIELUV color to a CIELCh(ab) or CIELCh(uv) (respectively) color. Based on the EasyRGB pseudo-code.
 * @param color - The CIELAB or CIELUV color.
 * @returns A CIELCh color.
 * @public
 */
export default function labToLch(color: Lab | Luv): Lch {
	// eslint-disable-next-line prefer-destructuring
	const a = color[1];
	// eslint-disable-next-line prefer-destructuring
	const b = color[2];

	const i0 = Math.atan2(b, a);

	return [
		color[0],
		Math.hypot(a, b),
		i0 > 0 ? i0 * 57.29577951 : 360 - Math.abs(i0) * 57.29577951 // `180 / Math.PI`
	];
}
