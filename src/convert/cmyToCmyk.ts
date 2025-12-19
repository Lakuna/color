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
	const c = color[0];
	// eslint-disable-next-line prefer-destructuring
	const m = color[1];
	// eslint-disable-next-line prefer-destructuring
	const y = color[2];

	const k = Math.min(c, m, y, 1);

	return k === 1 ?
			[0, 0, 0, 1]
		:	[(c - k) / (1 - k), (m - k) / (1 - k), (y - k) / (1 - k), k];
}
