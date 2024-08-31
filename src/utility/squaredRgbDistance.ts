import type ColorLike from "../types/ColorLike.js";

/**
 * Calculate the squared Euclidean distance between two colors in RGB color space.
 * @param a - The first color.
 * @param b - The second color.
 * @returns The squared distance.
 * @see {@link https://en.wikipedia.org/wiki/Euclidean_distance | Euclidean distance}
 * @see {@link https://en.wikipedia.org/wiki/Color_difference | Color difference}
 * @public
 */
export default function squaredRgbDistance(a: ColorLike, b: ColorLike): number {
	const x = b[0] - a[0];
	const y = b[1] - a[1];
	const z = b[2] - a[2];
	return x * x + y * y + z * z;
}
