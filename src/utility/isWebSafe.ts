import type Rgb from "../types/Rgb.js";

/**
 * Check whether or not the given color is "web-safe."
 * @param color - The color expressed as an RGB hexadecimal triplet.
 * @returns Whether or not the given color is "web-safe."
 * @see {@link https://en.wikipedia.org/wiki/Web_colors | Web colors}
 * @public
 */
export default function isWebSafe(color: Rgb): boolean {
	return (
		color[0] % 0x33 === 0 && color[1] % 0x33 === 0 && color[2] % 0x33 === 0
	);
}
