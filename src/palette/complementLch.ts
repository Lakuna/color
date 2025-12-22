import type Lchab from "../types/Lchab.js";
import type Lchuv from "../types/Lchuv.js";

/** Number of degrees in a circle. */
const d = 360;

/**
 * Determine the complementary color(s) of the given color.
 * @param color - The color to find the complement(s) of in CIE-L\*Ch(ab).
 * @param n - The number of complements to find. This can be `1` for a complementary color, `2` for triadic colors, `3` for tetradic colors, and so on.
 * @returns The complements of the given color.
 * @public
 */
export default function complementLch(
	color: Lchab,
	n?: number
): (Lchab & [number, number, number])[];

/**
 * Determine the complementary color(s) of the given color.
 * @param color - The color to find the complement(s) of in CIE-L\*Ch(uv).
 * @param n - The number of complements to find. This can be `1` for a complementary color, `2` for triadic colors, `3` for tetradic colors, and so on.
 * @returns The complements of the given color.
 * @public
 */
export default function complementLch(
	color: Lchuv,
	n?: number
): (Lchuv & [number, number, number])[];

export default function complementLch(
	color: Lchab | Lchuv,
	n = 1
): (Lchab & [number, number, number])[] | (Lchuv & [number, number, number])[] {
	// eslint-disable-next-line prefer-destructuring
	const l = color[0];
	// eslint-disable-next-line prefer-destructuring
	const c = color[1];
	// eslint-disable-next-line prefer-destructuring
	const h = color[2];

	const deltaAngle = d / (n + 1);

	const out:
		| (Lchab & [number, number, number])[]
		| (Lchuv & [number, number, number])[] = [];
	for (let i = 1; i <= n; i++) {
		const angle = h + deltaAngle * i;
		out.push([l, c, (angle > d ? angle - d : angle) / d]);
	}

	return out;
}
