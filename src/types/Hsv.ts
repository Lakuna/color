import type { Color } from "./Color.js";

/**
 * An HSV (HSB) representation of a color.
 * @see {@link https://en.wikipedia.org/wiki/HSL_and_HSV | HSL and HSV}
 * @public
 */
export default interface Hsv extends Color {
	/** The hue channel of this color in the range `[0,1]`. */
	0: number;

	/** The saturation channel of this color in the range `[0,1]`. */
	1: number;

	/** The value (brightness) channel of this color in the range `[0,1]`. */
	2: number;
}
