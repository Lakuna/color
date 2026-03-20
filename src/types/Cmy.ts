import type { Color } from "./Color.js";

/**
 * A CMY representation of a color.
 * @see {@link https://en.wikipedia.org/wiki/CMYK_color_model | CMYK color model}
 * @public
 */
export default interface Cmy extends Color {
	/** The cyan channel of this color in the range `[0,1]`. */
	// eslint-disable-next-line @typescript-eslint/naming-convention
	0: number;

	/** The magenta channel of this color in the range `[0,1]`. */
	// eslint-disable-next-line @typescript-eslint/naming-convention
	1: number;

	/** The yellow channel of this color in the range `[0,1]`. */
	// eslint-disable-next-line @typescript-eslint/naming-convention
	2: number;
}
