import type ColorLike from "../types/ColorLike.js";
import fromHex from "../utility/fromHex.js";

/**
 * The small color name dictionary.
 * @see {@link https://www.w3.org/TR/REC-html40/sgml/loosedtd.html | HTML 4.01 Transitional Document Type Definition}
 * @public
 */
const smallNames: Map<ColorLike, string> = new Map<ColorLike, string>([
	[fromHex(0x236b8e), "steel blue"],
	[fromHex(0x00ffff), "cyan"],
	[fromHex(0xd9d9f3), "quartz"],
	[fromHex(0x38b0de), "summer sky"],
	[fromHex(0x5f9f9f), "cadet blue"],
	[fromHex(0x238e68), "sea green"],
	[fromHex(0x9f9f5f), "khaki"],
	[fromHex(0xc0c0c0), "grey"],
	[fromHex(0xffffff), "white"],
	[fromHex(0xadeaea), "turquoise"],
	[fromHex(0x70db93), "aquamarine"],
	[fromHex(0x00ff7f), "spring green"],
	[fromHex(0x00ff00), "green"],
	[fromHex(0xffff00), "yellow"],
	[fromHex(0xdbdb70), "goldenrod"],
	[fromHex(0x99cc32), "yellow green"],
	[fromHex(0xb5a642), "brass"],
	[fromHex(0xcfb53b), "old gold"],
	[fromHex(0x238e23), "forest green"],
	[fromHex(0x2f4f2f), "dark green"],
	[fromHex(0x527f76), "green copper"],
	[fromHex(0x545454), "dim grey"],
	[fromHex(0x000000), "black"],
	[fromHex(0x5c4033), "very dark brown"],
	[fromHex(0x855e42), "darkwood"],
	[fromHex(0x8e6b23), "sienna"],
	[fromHex(0x6b4226), "semi-sweet chocolate"],
	[fromHex(0x8e2323), "firebrick"],
	[fromHex(0x8c1717), "scarlet"],
	[fromHex(0xff0000), "red"],
	[fromHex(0xcd7f32), "gold"],
	[fromHex(0xb87333), "copper"],
	[fromHex(0xff7f00), "orange"],
	[fromHex(0xebc79e), "new tan"],
	[fromHex(0xf5ccb0), "flesh"],
	[fromHex(0xdb9370), "tan"],
	[fromHex(0xdb70db), "orchid"],
	[fromHex(0x007fff), "slate blue"],
	[fromHex(0xff00ff), "magenta"],
	[fromHex(0x0000ff), "blue"],
	[fromHex(0x9932cd), "dark orchid"],
	[fromHex(0xcc3299), "violet red"],
	[fromHex(0x871f78), "dark purple"],
	[fromHex(0x8e236b), "maroon"],
	[fromHex(0x5959ab), "rich blue"],
	[fromHex(0x2f2f4f), "midnight blue"],
	[fromHex(0x4f2f4f), "violet"]
]);

export default smallNames;
