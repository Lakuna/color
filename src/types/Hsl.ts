import type { Color } from "./Color.js";

/**
 * An HSL (HLS) representation of a color.
 * @see {@link https://en.wikipedia.org/wiki/HSL_and_HSV | HSL and HSV}
 * @public
 */
export default interface Hsl extends Color {
	/** The hue channel of this color in the range `[0,1]`. Multiply this value by 360 to get the hue angle in degrees. */
	0: number;

	/** The saturation channel of this color in the range `[0,1]`. */
	1: number;

	/** The lightness channel of this color in the range `[0,1]`. */
	2: number;
}
