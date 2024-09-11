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
	const cieL = color[0];
	// eslint-disable-next-line prefer-destructuring
	const cieA = color[1];
	// eslint-disable-next-line prefer-destructuring
	const cieB = color[2];

	let varH = Math.atan2(cieB, cieA);

	if (varH > 0) {
		varH = (varH / Math.PI) * 180;
	} else {
		varH = 360 - (Math.abs(varH) / Math.PI) * 180;
	}

	const cieC = Math.sqrt(cieA ** 2 + cieB ** 2);
	const cieH = varH;

	return [cieL, cieC, cieH];
}
