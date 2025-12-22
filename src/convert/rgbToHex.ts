import type Rgb from "../types/Rgb.js";

/**
 * Convert sRGB values into the numerical hexadecimal representation of the color.
 * @param rgb - The sRGB representation of the number.
 * @returns The numerical hexadecimal representation of the color.
 * @public
 */
export default function rgbToHex(rgb: Rgb): number {
	return (
		Math.round(rgb[0] * 0x10000) +
		Math.round(rgb[1] * 0x100) +
		Math.round(rgb[2])
	);
}
