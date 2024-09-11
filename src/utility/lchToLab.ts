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
	const cieL = color[0];
	// eslint-disable-next-line prefer-destructuring
	const cieC = color[1];
	// eslint-disable-next-line prefer-destructuring
	const cieH = color[2];

	const cieA = Math.cos((cieH * Math.PI) / 180) * cieC;
	const cieB = Math.sin((cieH * Math.PI) / 180) * cieC;

	return [cieL, cieA, cieB];
}
