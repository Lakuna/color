/**
 * An RGBA representation of a color.
 * @public
 */
export default interface ColorLike extends Record<number, number> {
	/** The red channel of this color in the range `[0,1]`. */
	0: number;

	/** The green channel of this color in the range `[0,1]`. */
	1: number;

	/** The blue channel of this color in the range `[0,1]`. */
	2: number;

	/** The alpha channel of this color in the range `[0,1]`. */
	3: number;
}
