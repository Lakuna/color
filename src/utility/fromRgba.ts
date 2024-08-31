import type ColorLike from "../types/ColorLike.js";

/**
 * Create a color-like object from the given red, green, blue, and alpha values.
 * @param r - The red channel value in the range `[0,1]`.
 * @param g - The green channel value in the range `[0,1]`.
 * @param b - The blue channel value in the range `[0,1]`.
 * @param a - The alpha channel value in the range `[0,1]`.
 * @returns A color-like object.
 * @public
 */
export default function fromRgba(r: number, g: number, b: number, a = 1) {
	return new Float32Array([r, g, b, a]) as Float32Array & ColorLike;
}
