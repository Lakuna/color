import type Rgb from "../types/Rgb.js";
import fromHex from "../utility/hexToRgb.js";

/**
 * The HTML-3.2 and HTML-4 Color Names. Use of this color dictionary is not recommended.
 * @see {@link https://people.csail.mit.edu/jaffer/Color/Dictionaries#html-4 | Color-Name Dictionaries}
 * @public
 */
const html4Names: Map<string, Rgb> = new Map<string, Rgb>([
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
