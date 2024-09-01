import type ColorLike from "../types/ColorLike.js";
import fromHex from "../utility/fromHex.js";

/**
 * The HTML4 color name dictionary.
 * @see {@link https://www.w3.org/TR/REC-html40/sgml/loosedtd.html | HTML 4.01 Transitional Document Type Definition}
 * @public
 */
const html4Names: Map<string, ColorLike> = new Map<string, ColorLike>([
	["teal", fromHex(0x008080)],
	["aqua", fromHex(0x00ffff)],
	["gray", fromHex(0x808080)],
	["silver", fromHex(0xc0c0c0)],
	["white", fromHex(0xffffff)],
	["lime", fromHex(0x00ff00)],
	["yellow", fromHex(0xffff00)],
	["olive", fromHex(0x808000)],
	["green", fromHex(0x008000)],
	["black", fromHex(0x000000)],
	["maroon", fromHex(0x800000)],
	["red", fromHex(0xff0000)],
	["fuchsia", fromHex(0xff00ff)],
	["blue", fromHex(0x0000ff)],
	["purple", fromHex(0x800080)],
	["navy", fromHex(0x000080)]
]);

export default html4Names;
