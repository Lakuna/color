import type { Color } from "./Color.js";

/**
 * A CIEXYZ (CIE 1931) Yxy representation of a color. Colors are defined relative to a standard observer.
 * @see {@link https://en.wikipedia.org/wiki/CIE_1931_color_space | CIE 1931 color space}
 * @public
 */
export default interface Yxy extends Color {
	/** The Y value of this color in the range `[0,100]`. */
	0: number;

	/** The x value of this color. */
	1: number;

	/** The y value of this color. */
	2: number;
}
