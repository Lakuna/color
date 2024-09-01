import type ColorLike from "../types/ColorLike.js";
import fromHex from "../utility/fromHex.js";

/**
 * Two4U's Small Color Database. A subset of Two4U's Medium Color Database.
 * @see {@link https://people.csail.mit.edu/jaffer/Color/Dictionaries#small | Color-Name Dictionaries}
 * @public
 */
const smallNames: Map<string, ColorLike> = new Map<string, ColorLike>([
	["steelblue", fromHex(0x236b8e)],
	["cyan", fromHex(0x00ffff)],
	["quartz", fromHex(0xd9d9f3)],
	["summersky", fromHex(0x38b0de)],
	["cadetblue", fromHex(0x5f9f9f)],
	["seagreen", fromHex(0x238e68)],
	["khaki", fromHex(0x9f9f5f)],
	["grey", fromHex(0xc0c0c0)],
	["white", fromHex(0xffffff)],
	["turquoise", fromHex(0xadeaea)],
	["aquamarine", fromHex(0x70db93)],
	["springgreen", fromHex(0x00ff7f)],
	["green", fromHex(0x00ff00)],
	["yellow", fromHex(0xffff00)],
	["goldenrod", fromHex(0xdbdb70)],
	["yellowgreen", fromHex(0x99cc32)],
	["brass", fromHex(0xb5a642)],
	["oldgold", fromHex(0xcfb53b)],
	["forestgreen", fromHex(0x238e23)],
	["darkgreen", fromHex(0x2f4f2f)],
	["greencopper", fromHex(0x527f76)],
	["dimgrey", fromHex(0x545454)],
	["black", fromHex(0x000000)],
	["verydarkbrown", fromHex(0x5c4033)],
	["darkwood", fromHex(0x855e42)],
	["sienna", fromHex(0x8e6b23)],
	["semisweetchocolate", fromHex(0x6b4226)],
	["firebrick", fromHex(0x8e2323)],
	["scarlet", fromHex(0x8c1717)],
	["red", fromHex(0xff0000)],
	["gold", fromHex(0xcd7f32)],
	["copper", fromHex(0xb87333)],
	["orange", fromHex(0xff7f00)],
	["newtan", fromHex(0xebc79e)],
	["flesh", fromHex(0xf5ccb0)],
	["tan", fromHex(0xdb9370)],
	["orchid", fromHex(0xdb70db)],
	["slateblue", fromHex(0x007fff)],
	["magenta", fromHex(0xff00ff)],
	["blue", fromHex(0x0000ff)],
	["darkorchid", fromHex(0x9932cd)],
	["violetred", fromHex(0xcc3299)],
	["darkpurple", fromHex(0x871f78)],
	["maroon", fromHex(0x8e236b)],
	["richblue", fromHex(0x5959ab)],
	["midnightblue", fromHex(0x2f2f4f)],
	["violet", fromHex(0x4f2f4f)]
]);

export default smallNames;
