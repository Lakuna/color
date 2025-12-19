import type Hsl from "../types/Hsl.js";
import type Hsv from "../types/Hsv.js";

/** Number of degrees in a circle. */
const d = 360;

/**
 * Determine the complementary color(s) of the given color.
 * @param c - The color to find the complement(s) of in HSL.
 * @param n - The number of complements to find. This can be `1` for a complementary color, `2` for triadic colors, `3` for tetradic colors, and so on.
 * @returns The complements of the given color.
 * @public
 */
export default function complement(c: Hsl, n?: number): Hsl[];

/**
 * Determine the complementary color(s) of the given color.
 * @param c - The color to find the complement(s) of in HSV.
 * @param n - The number of complements to find. This can be `1` for a complementary color, `2` for triadic colors, `3` for tetradic colors, and so on.
 * @returns The complements of the given color.
 * @public
 */
export default function complement(c: Hsv, n?: number): Hsv[];

export default function complement(c: Hsl | Hsv, n = 1): Hsl[] | Hsv[] {
	// eslint-disable-next-line prefer-destructuring
	const h = c[0];
	// eslint-disable-next-line prefer-destructuring
	const s = c[1];
	// eslint-disable-next-line prefer-destructuring
	const x = c[2];

	const hueAngle = h * d;
	const deltaAngle = d / (n + 1);

	const out: Hsl[] | Hsv[] = [];
	for (let i = 1; i <= n; i++) {
		const angle = hueAngle + deltaAngle * i;
		out.push([(angle > d ? angle - d : angle) / d, s, x]);
	}

	return out;
}
