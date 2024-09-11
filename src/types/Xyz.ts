import type { Color } from "./Color.js";

/**
 * A CIEXYZ (CIE 1931) representation of a color. Colors are defined relative to a standard observer.
 * @see {@link https://en.wikipedia.org/wiki/CIE_1931_color_space | CIE 1931 color space}
 * @public
 */
export default interface Xyz extends Color {
	/** The X value of this color. */
	0: number;

	/** The Y value of this color. */
	1: number;

	/** The Z value of this color. */
	2: number;
}
