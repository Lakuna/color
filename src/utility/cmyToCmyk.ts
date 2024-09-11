import type Cmy from "../types/Cmy.js";
import type Cmyk from "../types/Cmyk.js";

/**
 * Convert the given CMY color to a CMYK color. Based on the EasyRGB pseudo-code.
 * @param color - The CMY color.
 * @returns A CMYK color.
 * @public
 */
export default function cmyToCmyk(color: Cmy): Cmyk {
	// eslint-disable-next-line prefer-destructuring
	let c = color[0];
	// eslint-disable-next-line prefer-destructuring
	let m = color[1];
	// eslint-disable-next-line prefer-destructuring
	let y = color[2];

	let varK = 1;

	if (c < varK) varK = c;
	if (m < varK) varK = m;
	if (y < varK) varK = y;
	if (varK === 1) {
		c = 0;
		m = 0;
		y = 0;
	} else {
		c = (c - varK) / (1 - varK);
		m = (m - varK) / (1 - varK);
		y = (y - varK) / (1 - varK);
	}
	const k = varK;

	return [c, m, y, k];
}
