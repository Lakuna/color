import type Lab from "../types/Lab.js";
import type Lchab from "../types/Lchab.js";
import type Lchuv from "../types/Lchuv.js";
import type Luv from "../types/Luv.js";

const c0 = Math.PI / 180;

/**
 * Convert the given CIELCh(ab) color to a CIELAB color. Based on the EasyRGB pseudo-code.
 * @param color - The CIELCh color.
 * @returns A CIELAB color.
 * @public
 */
export default function lchToLab(color: Lchab): Lab & [number, number, number];

/**
 * Convert the given CIELCh(uv) color to a CIELUV color. Based on the EasyRGB pseudo-code.
 * @param color - The CIELCh color.
 * @returns A CIELUV color.
 * @public
 */
export default function lchToLab(color: Lchuv): Luv & [number, number, number];

export default function lchToLab(
	color: Lchab
): (Lab | Luv) & [number, number, number] {
	// eslint-disable-next-line prefer-destructuring
	const c = color[1];
	// eslint-disable-next-line prefer-destructuring
	const h = color[2];

	return [color[0], Math.cos(h * c0) * c, Math.sin(h * c0) * c];
}
