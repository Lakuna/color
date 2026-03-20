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
): ([number, number, number] & Lchab)[];
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
): ([number, number, number] & Lchuv)[];
export default function complementLch(
	color: Lchab | Lchuv,
	n = 1
): ([number, number, number] & Lchab)[] | ([number, number, number] & Lchuv)[] {
	const l = color[0];

	const c = color[1];

	const h = color[2];

	const deltaAngle = d / (n + 1);

	const out:
		| ([number, number, number] & Lchab)[]
		| ([number, number, number] & Lchuv)[] = [];
	for (let i = 1; i <= n; i++) {
		const angle = h + deltaAngle * i;
		out.push([l, c, (angle > d ? angle - d : angle) / d]);
	}

	return out;
}
