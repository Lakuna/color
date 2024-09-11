import type { Color } from "./Color.js";

/**
 * A CMY representation of a color.
 * @see {@link https://en.wikipedia.org/wiki/CMYK_color_model | CMYK color model}
 * @public
 */
export default interface Cmy extends Color {
	/** The cyan channel of this color in the range `[0,1]`. */
	0: number;

	/** The magenta channel of this color in the range `[0,1]`. */
	1: number;

	/** The yellow channel of this color in the range `[0,1]`. */
	2: number;
}
