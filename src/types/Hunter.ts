import type { Color } from "./Color.js";

/**
 * A Hunter Lab representation of a color. Designed to be computed via simple formulas from CIEXYZ color space, but to be more perceptually uniform. A precursor to CIELAB.
 * @see {@link https://en.wikipedia.org/wiki/Hunter_Lab | Hunter Lab}
 * @public
 */
export default interface Hunter extends Color {
	/** The L (lightness) value of this color in the range `[0,100]` (lighter values are whiter). */
	0: number;

	/** The a opponent color axis value of this color. The positive direction represents redness, while the negative direction represents greenness. */
	1: number;

	/** The b opponent color axis value of this color. The positive direction represents yellowness, while the negative direction represents blueness. */
	2: number;
}
