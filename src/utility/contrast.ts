import type ColorLike from "../types/ColorLike.js";
import luminance from "./luminance.js";

/**
 * Calculate the contrast ratio between two colors.
 * @param a - The first color.
 * @param b - The second color.
 * @returns The contrast ratio between the colors.
 * @see {@link https://www.w3.org/WAI/GL/wiki/Contrast_ratio | Contrast ratio}
 * @public
 */
export default function contrast(a: ColorLike, b: ColorLike): number {
	const la = luminance(a);
	const lb = luminance(b);

	return la > lb ? (la + 0.05) / (lb + 0.05) : (lb + 0.05) / (la + 0.05);
}
