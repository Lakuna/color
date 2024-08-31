import type ColorLike from "../types/ColorLike.js";
import fromHex from "../utility/fromHex.js";

/**
 * The old RGB color name dictionary.
 * @public
 */
const oldRgbNames: Map<ColorLike, string> = new Map<ColorLike, string>([
	[fromHex(0x236b8e), "steel blue"],
	[fromHex(0x00ffff), "cyan"],
	[fromHex(0x70dbdb), "medium turquoise"],
	[fromHex(0x3299cc), "sky blue"],
	[fromHex(0x32cc99), "medium aquamarine"],
	[fromHex(0x5f9f9f), "cadet blue"],
	[fromHex(0x238e6b), "sea green"],
	[fromHex(0xa8a8a8), "light gray"], // Also "light grey"
	[fromHex(0x9f9f5f), "khaki"],
	[fromHex(0x8fbc8f), "pale green"],
	[fromHex(0xc0c0c0), "gray"], // Also "grey"
	[fromHex(0xbfd8d8), "light blue"],
	[fromHex(0xd8d8bf), "wheat"],
	[fromHex(0xffffff), "white"],
	[fromHex(0xeaeaad), "medium goldenrod"],
	[fromHex(0xadeaea), "turquoise"],
	[fromHex(0x00ff7f), "spring green"],
	[fromHex(0x93db70), "green yellow"],
	[fromHex(0x00ff00), "green"],
	[fromHex(0x7fff00), "medium spring green"],
	[fromHex(0xffff00), "yellow"],
	[fromHex(0xdbdb70), "goldenrod"],
	[fromHex(0x99cc32), "yellow green"],
	[fromHex(0x6b8e23), "medium forest green"],
	[fromHex(0x238e23), "forest green"],
	[fromHex(0x32cc32), "lime green"],
	[fromHex(0x2f4f2f), "dark green"],
	[fromHex(0x426f42), "medium sea green"],
	[fromHex(0x545454), "dim gray"], // Also "dim grey"
	[fromHex(0x4f4f2f), "dark olive green"],
	[fromHex(0x2f4f4f), "dark slate gray"], // Also "dark slate grey"
	[fromHex(0x000000), "black"],
	[fromHex(0x4f2f2f), "indian red"],
	[fromHex(0x6f4242), "salmon"],
	[fromHex(0x8e6b23), "sienna"],
	[fromHex(0x8e2323), "firebrick"],
	[fromHex(0xa52a2a), "brown"],
	[fromHex(0xcc3232), "orange"],
	[fromHex(0xff0000), "red"],
	[fromHex(0xcc7f32), "gold"],
	[fromHex(0xf4a460), "sandy brown"],
	[fromHex(0xff7f00), "coral"],
	[fromHex(0xdb9370), "tan"],
	[fromHex(0xbc8f8f), "pink"],
	[fromHex(0xdb7093), "medium violet red"],
	[fromHex(0xff007f), "orange red"],
	[fromHex(0xdb70db), "orchid"],
	[fromHex(0x9370db), "medium orchid"],
	[fromHex(0x7093db), "dark turquoise"],
	[fromHex(0x8f8fbc), "light steel blue"],
	[fromHex(0xeaadea), "plum"],
	[fromHex(0xd8bfd8), "thistle"],
	[fromHex(0x007fff), "slate blue"],
	[fromHex(0xff00ff), "magenta"],
	[fromHex(0x7f00ff), "medium slate blue"],
	[fromHex(0x0000ff), "blue"],
	[fromHex(0x9932cc), "dark orchid"],
	[fromHex(0xb000ff), "purple"],
	[fromHex(0xcc3299), "violet red"],
	[fromHex(0x6b238e), "dark slate blue"],
	[fromHex(0x8e236b), "maroon"],
	[fromHex(0x9f5f9f), "blue violet"],
	[fromHex(0x42426f), "cornflower blue"],
	[fromHex(0x3232cc), "medium blue"],
	[fromHex(0x23238e), "navy"], // Also "navy blue"
	[fromHex(0x2f2f4f), "midnight blue"],
	[fromHex(0x4f2f4f), "violet"]
]);

export default oldRgbNames;
