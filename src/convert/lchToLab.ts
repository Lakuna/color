import type Lab from "../types/Lab.js";
import type Lch from "../types/Lch.js";
import type Luv from "../types/Luv.js";

/**
 * Convert the given CIELCh(ab) or CIELCh(uv) color to a CIELAB or CIELUV (respectively) color. Based on the EasyRGB pseudo-code.
 * @param color - The CIELCh color.
 * @returns A CIELAB or CIELUV color.
 * @public
 */
export default function lchToLab(color: Lch): Lab | Luv {
	// eslint-disable-next-line prefer-destructuring
	const c = color[1];
	// eslint-disable-next-line prefer-destructuring
	const h = color[2];

	return [color[0], Math.cos(h * 0.01745329) * c, Math.sin(h * 0.01745329) * c]; // `Math.PI / 180`
}
