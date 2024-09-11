import type Rgb from "../types/Rgb.js";
import fromHex from "../utility/hexToRgb.js";

/**
 * `thomas.txt` from the X11 window system distribution. A huge improvement over `old-rgb.txt`. A version of the older database that was tuned by John Thomas at Tektronix to match a box of Crayola crayons.
 * @see {@link https://people.csail.mit.edu/jaffer/Color/Dictionaries#thomas | Color-Name Dictionaries}
 * @public
 */
const thomasNames: Map<string, Rgb> = new Map<string, Rgb>([
	["midnightblue", fromHex(0x0c3e63)],
	["darkslategray", fromHex(0x3c404a)],
	["darkslategrey", fromHex(0x3c404a)],
	["steelblue", fromHex(0x377999)],
	["darkturquoise", fromHex(0x1d6f75)],
	["cyan", fromHex(0x00ffff)],
	["turquoise", fromHex(0x48d1cc)],
	["lightsteelblue", fromHex(0x3498ca)],
	["mediumturquoise", fromHex(0x3eacb5)],
	["seagreen", fromHex(0x2ba770)],
	["aquamarine", fromHex(0x29ab97)],
	["gray", fromHex(0xaeaeae)],
	["grey", fromHex(0xaeaeae)],
	["khaki", fromHex(0xbda76b)],
	["lightgray", fromHex(0xd3d3d3)],
	["lightgrey", fromHex(0xd3d3d3)],
	["white", fromHex(0xffffff)],
	["springgreen", fromHex(0x00ff9f)],
	["palegreen", fromHex(0x98ff98)],
	["green", fromHex(0x00ff00)],
	["yellow", fromHex(0xffff00)],
	["wheat", fromHex(0xe5c775)],
	["greenyellow", fromHex(0x9fd300)],
	["forestgreen", fromHex(0x55c034)],
	["yellowgreen", fromHex(0x4bd300)],
	["limegreen", fromHex(0x2e9b1c)],
	["mediumspringgreen", fromHex(0x3c8d23)],
	["mediumaquamarine", fromHex(0x158776)],
	["mediumseagreen", fromHex(0x1b8656)],
	["dimgray", fromHex(0x696969)],
	["dimgrey", fromHex(0x696969)],
	["darkolivegreen", fromHex(0x4f4f2f)],
	["darkgreen", fromHex(0x005300)],
	["mediumforestgreen", fromHex(0x6b8e23)],
	["brown", fromHex(0x674300)],
	["firebrick", fromHex(0x88120d)],
	["indianred", fromHex(0x652e2e)],
	["sienna", fromHex(0x8e6b23)],
	["orangered", fromHex(0xe2412a)],
	["red", fromHex(0xff0000)],
	["mediumgoldenrod", fromHex(0xb8860b)],
	["goldenrod", fromHex(0xdaa520)],
	["orange", fromHex(0xff8a00)],
	["gold", fromHex(0xfec544)],
	["pink", fromHex(0xffaeb9)],
	["coral", fromHex(0xf88975)],
	["tan", fromHex(0xb09b7d)],
	["sandybrown", fromHex(0xb28f56)],
	["salmon", fromHex(0xf86d68)],
	["magenta", fromHex(0xff00d3)],
	["orchid", fromHex(0xda6bd4)],
	["cornflowerblue", fromHex(0x6495ed)],
	["lightblue", fromHex(0xabc5ff)],
	["violet", fromHex(0x9400d3)],
	["violetred", fromHex(0xff0094)],
	["mediumorchid", fromHex(0xac4da6)],
	["mediumvioletred", fromHex(0xc71585)],
	["thistle", fromHex(0x923e70)],
	["slateblue", fromHex(0x7586be)],
	["cadetblue", fromHex(0x7e7da0)],
	["mediumslateblue", fromHex(0x5f6d9a)],
	["skyblue", fromHex(0x008aff)],
	["mediumblue", fromHex(0x3d62d0)],
	["darkslateblue", fromHex(0x333e63)],
	["plum", fromHex(0x4c2e57)],
	["maroon", fromHex(0x670748)],
	["darkorchid", fromHex(0x6a2566)],
	["navy", fromHex(0x00008e)],
	["navyblue", fromHex(0x00008e)],
	["blueviolet", fromHex(0x7221bc)],
	["blue", fromHex(0x0000ff)]
]);

export default thomasNames;
