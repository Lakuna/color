import type ColorLike from "../types/ColorLike.js";
import toHsl from "./toHsl.js";

/**
 * Calculate the squared Euclidean distance between two colors in HSL color space.
 * @param a - The first color.
 * @param b - The second color.
 * @returns The squared distance.
 * @see {@link https://en.wikipedia.org/wiki/Euclidean_distance | Euclidean distance}
 * @see {@link https://en.wikipedia.org/wiki/Color_difference | Color difference}
 * @public
 */
export default function squaredHslDistance(a: ColorLike, b: ColorLike): number {
	const [ah, as, al] = toHsl(a);
	const [bh, bs, bl] = toHsl(b);

	const x = ah - bh;
	const y = as - bs;
	const z = al - bl;
	return x * x + y * y + z * z;
}
