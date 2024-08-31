import type ColorLike from "../types/ColorLike.js";

/**
 * A color.
 * @public
 */
export default class Color extends Float32Array implements ColorLike {
	// TODO: Convenience class.

	/** The red channel of this color in the range `[0,1]`. */
	public 0: number;

	/** The green channel of this color in the range `[0,1]`. */
	public 1: number;

	/** The blue channel of this color in the range `[0,1]`. */
	public 2: number;

	/** The alpha channel of this color in the range `[0,1]`. */
	public 3: number;
}
