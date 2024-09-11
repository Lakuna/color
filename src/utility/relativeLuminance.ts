import type Rgb from "../types/Rgb.js";

/**
 * The piecewise function that is used internally for calculating relative luminance.
 * @param a - The value in a channel of a color.
 * @returns The piecewise value.
 * @internal
 */
const piecewise = (a: number) =>
	a > 0.04045 ? ((a + 0.055) / 1.055) ** 2.4 : a / 12.92;

/**
 * Calculate the relative luminance of an sRGB color.
 * @param color - The sRGB color.
 * @returns The relative luminance of the sRGB color.
 * @see {@link https://www.w3.org/WAI/GL/wiki/Relative_luminance | Relative luminance}
 * @public
 */
export default function relativeLuminance(color: Rgb): number {
	return (
		0.2126 * piecewise(color[0] / 0xff) +
		0.7152 * piecewise(color[1] / 0xff) +
		0.0722 * piecewise(color[2] / 0xff)
	);
}
