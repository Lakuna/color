import type Lab from "../types/Lab.js";
import type Lch from "../types/Lch.js";

/**
 * Calculates the ΔE* 1994 between two CIELAB values. Based on the EasyRGB pseudocode.
 * @param color0 - The first color.
 * @param color1 - The second color.
 * @param weight - The CIELCH weights. Defaults to all ones.
 * @returns The difference between the colors.
 * @see {@link https://en.wikipedia.org/wiki/Color_difference | Color difference}
 * @public
 */
export default function deltaE1994(
	color0: Lab,
	color1: Lab,
	weight: Lch = [1, 1, 1]
): number {
	// eslint-disable-next-line prefer-destructuring
	const cieL1 = color0[0];
	// eslint-disable-next-line prefer-destructuring
	const cieA1 = color0[1];
	// eslint-disable-next-line prefer-destructuring
	const cieB1 = color0[2];
	// eslint-disable-next-line prefer-destructuring
	const cieL2 = color1[0];
	// eslint-disable-next-line prefer-destructuring
	const cieA2 = color1[1];
	// eslint-disable-next-line prefer-destructuring
	const cieB2 = color1[2];
	// eslint-disable-next-line prefer-destructuring
	const whtL = weight[0];
	// eslint-disable-next-line prefer-destructuring
	const whtC = weight[1];
	// eslint-disable-next-line prefer-destructuring
	const whtH = weight[2];

	const xC1 = Math.sqrt(cieA1 ** 2 + cieB1 ** 2);
	const xC2 = Math.sqrt(cieA2 ** 2 + cieB2 ** 2);
	let xDL = cieL2 - cieL1;
	let xDC = xC2 - xC1;
	const xDE = Math.sqrt(
		(cieL1 - cieL2) * (cieL1 - cieL2) +
			(cieA1 - cieA2) * (cieA1 - cieA2) +
			(cieB1 - cieB2) * (cieB1 - cieB2)
	);

	let xDH = xDE * xDE - xDL * xDL - xDC * xDC;
	if (xDH > 0) {
		xDH = Math.sqrt(xDH);
	} else {
		xDH = 0;
	}
	const xSC = 1 + 0.045 * xC1;
	const xSH = 1 + 0.015 * xC1;
	xDL /= whtL;
	xDC /= whtC * xSC;
	xDH /= whtH * xSH;

	const deltaE94 = Math.sqrt(xDL ** 2 + xDC ** 2 + xDH ** 2);

	return deltaE94;
}
