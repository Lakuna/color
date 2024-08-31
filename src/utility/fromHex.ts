import type ColorLike from "../types/ColorLike.js";
import fromRgba from "./fromRgba.js";

/**
 * Create a color-like object from the given hexadecimal value.
 * @param hex - The hexidecimal representation of the number (i.e. `0x50c878`).
 * @returns A color-like object.
 * @public
 */
export default function fromHex(hex: number): ColorLike {
	return fromRgba(
		((hex >> 16) & 0xff) / 0xff,
		((hex >> 8) & 0xff) / 0xff,
		((hex >> 0) & 0xff) / 0xff
	);
}
