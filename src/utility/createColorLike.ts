import type ColorLike from "../types/ColorLike.js";

/**
 * Create a color-like object (transparent black).
 * @returns A color-like object.
 * @public
 */
export default function createColorLike() {
	return new Float32Array(4) as Float32Array & ColorLike;
}
