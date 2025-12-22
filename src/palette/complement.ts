import type Hsi from "../types/Hsi.js";
import type Hsl from "../types/Hsl.js";
import type Hsv from "../types/Hsv.js";

/** Number of degrees in a circle. */
const d = 360;

/**
 * Determine the complementary color(s) of the given color.
 * @param color - The color to find the complement(s) of in HSI.
 * @param n - The number of complements to find. This can be `1` for a complementary color, `2` for triadic colors, `3` for tetradic colors, and so on.
 * @returns The complements of the given color.
 * @public
 */
export default function complement(
	color: Hsi,
	n?: number
): (Hsi & [number, number, number])[];

/**
 * Determine the complementary color(s) of the given color.
 * @param color - The color to find the complement(s) of in HSL.
 * @param n - The number of complements to find. This can be `1` for a complementary color, `2` for triadic colors, `3` for tetradic colors, and so on.
 * @returns The complements of the given color.
 * @public
 */
export default function complement(
	color: Hsl,
	n?: number
): (Hsl & [number, number, number])[];

/**
 * Determine the complementary color(s) of the given color.
 * @param color - The color to find the complement(s) of in HSV.
 * @param n - The number of complements to find. This can be `1` for a complementary color, `2` for triadic colors, `3` for tetradic colors, and so on.
 * @returns The complements of the given color.
 * @public
 */
export default function complement(
	color: Hsv,
	n?: number
): (Hsv & [number, number, number])[];

export default function complement(
	color: Hsi | Hsl | Hsv,
	n = 1
):
	| (Hsi & [number, number, number])[]
	| (Hsl & [number, number, number])[]
	| (Hsv & [number, number, number])[] {
	// eslint-disable-next-line prefer-destructuring
	const s = color[1];
	// eslint-disable-next-line prefer-destructuring
	const x = color[2];

	const hueAngle = color[0] * d;
	const deltaAngle = d / (n + 1);

	const out:
		| (Hsi & [number, number, number])[]
		| (Hsl & [number, number, number])[]
		| (Hsv & [number, number, number])[] = [];
	for (let i = 1; i <= n; i++) {
		const angle = hueAngle + deltaAngle * i;
		out.push([(angle > d ? angle - d : angle) / d, s, x]);
	}

	return out;
}
