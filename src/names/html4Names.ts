import type ColorLike from "../types/ColorLike.js";
import fromHex from "../utility/fromHex.js";

/**
 * The HTML4 color name dictionary.
 * @see {@link https://www.w3.org/TR/REC-html40/sgml/loosedtd.html | HTML 4.01 Transitional Document Type Definition}
 * @public
 */
const html4Names: Map<ColorLike, string> = new Map<ColorLike, string>([
	[fromHex(0x008080), "teal"],
	[fromHex(0x00ffff), "aqua"],
	[fromHex(0x808080), "gray"],
	[fromHex(0xc0c0c0), "silver"],
	[fromHex(0xffffff), "white"],
	[fromHex(0x00ff00), "lime"],
	[fromHex(0xffff00), "yellow"],
	[fromHex(0x808000), "olive"],
	[fromHex(0x008000), "green"],
	[fromHex(0x000080), "navy"],
	[fromHex(0x800080), "purple"],
	[fromHex(0x0000ff), "blue"],
	[fromHex(0xff00ff), "fuchsia"],
	[fromHex(0xff0000), "red"],
	[fromHex(0x800000), "maroon"],
	[fromHex(0x000000), "black"]
]);

export default html4Names;
