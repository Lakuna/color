import type ColorLike from "../types/ColorLike.js";

/**
 * The piecewise function that is used internally for calculating relative luminance.
 * @param c - The value in a channel of a color.
 * @returns The piecewise value.
 * @internal
 */
const piecewise = (c: number) =>
	c > 0.04045 ? ((c + 0.055) / 1.055) ** 2.4 : c / 12.92;

/**
 * Calculate the relative luminance of a color.
 * @param color - The color.
 * @returns The relative luminance of the color.
 * @see {@link https://www.w3.org/WAI/GL/wiki/Relative_luminance | Relative luminance}
 * @public
 */
export default function luminance(color: ColorLike): number {
	return (
		0.2126 * piecewise(color[0]) +
		0.7152 * piecewise(color[1]) +
		0.0722 * piecewise(color[2])
	);
}
