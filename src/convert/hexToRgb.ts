import type Rgb from "../types/Rgb.js";

/**
 * Split a hexadecimal value into sRGB values.
 * @param hex - The hexidecimal representation of the number (i.e. `0x50c878`).
 * @returns An sRGB color.
 * @public
 */
export default function hexToRgb(hex: number): Rgb & [number, number, number] {
	return [(hex >> 16) & 0xff, (hex >> 8) & 0xff, hex & 0xff];
}
