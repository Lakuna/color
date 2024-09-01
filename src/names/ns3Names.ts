import type ColorLike from "../types/ColorLike.js";
import fromHex from "../utility/fromHex.js";

/**
 * The NS3 color name dictionary.
 * @public
 */
const ns3Names: Map<string, ColorLike> = new Map<string, ColorLike>([
	["dodgerblue", fromHex(0x1e90ff)],
	["mediumturquoise", fromHex(0x48d1cc)],
	["darkturquoise", fromHex(0x00ced1)],
	["cyan", fromHex(0x00ffff)],
	["lavender", fromHex(0xe6e6fa)],
	["lightblue", fromHex(0xadd8e6)],
	["lightskyblue", fromHex(0x87cefa)],
	["lightsteelblue", fromHex(0xb0c4de)],
	["skyblue", fromHex(0x87ceeb)],
	["powderblue", fromHex(0xb0e0e6)],
	["deepskyblue", fromHex(0x00bfff)],
	["slategray", fromHex(0x708090)],
	["lightslategray", fromHex(0x778899)],
	["cornflowerblue", fromHex(0x6495ed)],
	["steelblue", fromHex(0x4682b4)],
	["cadetblue", fromHex(0x5f9ea0)],
	["seagreen", fromHex(0x2e8b57)],
	["mediumseagreen", fromHex(0x3cb371)],
	["lightseagreen", fromHex(0x20b2aa)],
	["gray", fromHex(0x808080)],
	["tan", fromHex(0xd2b48c)],
	["darkkhaki", fromHex(0xbdb76b)],
	["darkseagreen", fromHex(0x8fbc8f)],
	["burlywood", fromHex(0xdeb887)],
	["gainsboro", fromHex(0xdcdcdc)],
	["lightgray", fromHex(0xd3d3d3)],
	["bisque", fromHex(0xffe4c4)],
	["blanchedalmond", fromHex(0xffebcd)],
	["antiquewhite", fromHex(0xfaebd7)],
	["mistyrose", fromHex(0xffe4e1)],
	["beige", fromHex(0xf5f5dc)],
	["ivory", fromHex(0xfffff0)],
	["cornsilk", fromHex(0xfff8dc)],
	["lightyellow", fromHex(0xffffe0)],
	["honeydew", fromHex(0xf0fff0)],
	["lightcyan", fromHex(0xe0ffff)],
	["azure", fromHex(0xf0ffff)],
	["aliceblue", fromHex(0xf0f8ff)],
	["mintcream", fromHex(0xf5fffa)],
	["white", fromHex(0xffffff)],
	["snow", fromHex(0xfffafa)],
	["floralwhite", fromHex(0xfffaf0)],
	["seashell", fromHex(0xfff5ee)],
	["linen", fromHex(0xfaf0e6)],
	["whitesmoke", fromHex(0xf5f5f5)],
	["ghostwhite", fromHex(0xf8f8ff)],
	["lavenderblush", fromHex(0xfff0f5)],
	["oldlace", fromHex(0xfdf5e6)],
	["papayawhip", fromHex(0xffefd5)],
	["wheat", fromHex(0xf5deb3)],
	["peachpuff", fromHex(0xffdab9)],
	["navajowhite", fromHex(0xffdead)],
	["moccasin", fromHex(0xffe4b5)],
	["palegoldenrod", fromHex(0xeee8aa)],
	["lemonchiffon", fromHex(0xfffacd)],
	["lightgoldenrodyellow", fromHex(0xfafad2)],
	["paleturquoise", fromHex(0xafeeee)],
	["aquamarine", fromHex(0x7fffd4)],
	["turquoise", fromHex(0x40e0d0)],
	["mediumaquamarine", fromHex(0x66cdaa)],
	["mediumspringgreen", fromHex(0x00fa9a)],
	["palegreen", fromHex(0x98fb98)],
	["springgreen", fromHex(0x00ff7f)],
	["yellowgreen", fromHex(0x9acd32)],
	["lawngreen", fromHex(0x7cfc00)],
	["chartreuse", fromHex(0x7fff00)],
	["greenyellow", fromHex(0xadff2f)],
	["yellow", fromHex(0xffff00)],
	["khaki", fromHex(0xf0e68c)],
	["gold", fromHex(0xffd700)],
	["lightgoldenrod", fromHex(0xeedd82)],
	["goldenrod", fromHex(0xdaa520)],
	["darkgoldenrod", fromHex(0xb8860b)],
	["olivedrab", fromHex(0x6b8e23)],
	["forestgreen", fromHex(0x228b22)],
	["limegreen", fromHex(0x32cd32)],
	["green", fromHex(0x008000)],
	["darkgreen", fromHex(0x006400)],
	["darkslategray", fromHex(0x2f4f4f)],
	["darkolivegreen", fromHex(0x556b2f)],
	["dimgray", fromHex(0x696969)],
	["black", fromHex(0x000000)],
	["sienna", fromHex(0xa0522d)],
	["saddlebrown", fromHex(0x8b4513)],
	["brown", fromHex(0xa52a2a)],
	["maroon", fromHex(0xb03060)],
	["firebrick", fromHex(0xb22222)],
	["red", fromHex(0xff0000)],
	["orangered", fromHex(0xff4500)],
	["tomato", fromHex(0xff6347)],
	["chocolate", fromHex(0xd2691e)],
	["peru", fromHex(0xcd853f)],
	["orange", fromHex(0xffa500)],
	["sandybrown", fromHex(0xf4a460)],
	["coral", fromHex(0xff7f50)],
	["darkorange", fromHex(0xff8c00)],
	["pink", fromHex(0xffc0cb)],
	["lightpink", fromHex(0xffb6c1)],
	["salmon", fromHex(0xfa8072)],
	["lightcoral", fromHex(0xf08080)],
	["darksalmon", fromHex(0xe9967a)],
	["lightsalmon", fromHex(0xffa07a)],
	["rosybrown", fromHex(0xbc8f8f)],
	["indianred", fromHex(0xcd5c5c)],
	["palevioletred", fromHex(0xdb7093)],
	["deeppink", fromHex(0xff1493)],
	["mediumorchid", fromHex(0xba55d3)],
	["violet", fromHex(0xee82ee)],
	["hotpink", fromHex(0xff69b4)],
	["mediumpurple", fromHex(0x9370db)],
	["plum", fromHex(0xdda0dd)],
	["orchid", fromHex(0xda70d6)],
	["thistle", fromHex(0xd8bfd8)],
	["lightslate", fromHex(0x8470ff)],
	["mediumslateblue", fromHex(0x7b68ee)],
	["magenta", fromHex(0xff00ff)],
	["mediumblue", fromHex(0x0000cd)],
	["blue", fromHex(0x0000ff)],
	["darkviolet", fromHex(0x9400d3)],
	["blueviolet", fromHex(0x8a2be2)],
	["darkorchid", fromHex(0x9932cc)],
	["purple", fromHex(0xa020f0)],
	["violetred", fromHex(0xd02090)],
	["mediumviolet", fromHex(0xc71585)],
	["darkslateblue", fromHex(0x483d8b)],
	["royalblue", fromHex(0x4169e1)],
	["slateblue", fromHex(0x6a5acd)],
	["navy", fromHex(0x000080)],
	["midnightblue", fromHex(0x191970)]
]);

export default ns3Names;