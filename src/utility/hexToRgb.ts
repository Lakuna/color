import type Rgb from "../types/Rgb.js";

/**
 * Split a hexadecimal value into sRGB values.
 * @param hex - The hexidecimal representation of the number (i.e. `0x50c878`).
 * @returns R, G, and B sRGB values (each in the range `[0x00,0xff]`), in that order.
 * @public
 */
export default function hexToRgb(hex: number): Rgb {
	return [(hex >> 16) & 0xff, (hex >> 8) & 0xff, hex & 0xff];
}
