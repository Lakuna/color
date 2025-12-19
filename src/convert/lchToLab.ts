import type Lab from "../types/Lab.js";
import type Lchab from "../types/Lchab.js";
import type Lchuv from "../types/Lchuv.js";
import type Luv from "../types/Luv.js";

/**
 * Convert the given CIELCh(ab) color to a CIELAB color. Based on the EasyRGB pseudo-code.
 * @param color - The CIELCh color.
 * @returns A CIELAB color.
 * @public
 */
export default function lchToLab(color: Lchab): Lab;

/**
 * Convert the given CIELCh(uv) color to a CIELUV color. Based on the EasyRGB pseudo-code.
 * @param color - The CIELCh color.
 * @returns A CIELUV color.
 * @public
 */
export default function lchToLab(color: Lchuv): Luv;

export default function lchToLab(color: Lchab): Lab | Luv {
	// eslint-disable-next-line prefer-destructuring
	const c = color[1];
	// eslint-disable-next-line prefer-destructuring
	const h = color[2];

	return [color[0], Math.cos(h * 0.01745329) * c, Math.sin(h * 0.01745329) * c]; // `Math.PI / 180`
}
