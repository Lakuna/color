import type ColorLike from "../types/ColorLike.js";
import fromHex from "../utility/fromHex.js";

/**
 * Hollasch `colors.txt`. Compiled by Steve Hollasch. Looks fine for light sources, and appears better than `rgb.txt` for surface colors.
 * @see {@link https://people.csail.mit.edu/jaffer/Color/Dictionaries#hollasch | Color-Name Dictionaries}
 * @public
 */
const hollaschNames: Map<string, ColorLike> = new Map<string, ColorLike>([
	["cyan", fromHex(0x00ffff)],
	["lavender", fromHex(0xe6e6fa)],
	["bluelight", fromHex(0xadd8e6)],
	["powderblue", fromHex(0xb0e0e6)],
	["skyblue", fromHex(0x87ceeb)],
	["skybluelight", fromHex(0x87cefa)],
	["steelbluelight", fromHex(0xb0c4de)],
	["turquoisedark", fromHex(0x00ced1)],
	["turquoisemedium", fromHex(0x48d1cc)],
	["cerulean", fromHex(0x05b8cc)],
	["skybluedeep", fromHex(0x00bfff)],
	["peacock", fromHex(0x33a1c9)],
	["slategreylight", fromHex(0x778899)],
	["slategrey", fromHex(0x708090)],
	["steelblue", fromHex(0x4682b4)],
	["cadet", fromHex(0x5f9ea0)],
	["cobaltgreen", fromHex(0x3d9140)],
	["seagreenmedium", fromHex(0x3cb371)],
	["turquoiseblue", fromHex(0x00c78c)],
	["manganeseblue", fromHex(0x03a89e)],
	["seagreen", fromHex(0x2e8b57)],
	["warmgrey", fromHex(0x808069)],
	["coldgrey", fromHex(0x808a87)],
	["beige", fromHex(0xa39480)],
	["tan", fromHex(0xd2b48c)],
	["khakidark", fromHex(0xbdb76b)],
	["seagreendark", fromHex(0x8fbc8f)],
	["seagreenlight", fromHex(0x20b2aa)],
	["aquamarinemedium", fromHex(0x66cdaa)],
	["grey", fromHex(0xc0c0c0)],
	["gainsboro", fromHex(0xdcdcdc)],
	["lightgrey", fromHex(0xd3d3d3)],
	["blanchedalmond", fromHex(0xffebcd)],
	["bisque", fromHex(0xffe4c4)],
	["eggshell", fromHex(0xfce6c9)],
	["antiquewhite", fromHex(0xfaebd7)],
	["cyanwhite", fromHex(0xe0ffff)],
	["honeydew", fromHex(0xf0fff0)],
	["mintcream", fromHex(0xf5fffa)],
	["white", fromHex(0xffffff)],
	["floralwhite", fromHex(0xfffaf0)],
	["whitesmoke", fromHex(0xf5f5f5)],
	["aliceblue", fromHex(0xf0f8ff)],
	["azure", fromHex(0xf0ffff)],
	["ghostwhite", fromHex(0xf8f8ff)],
	["zincwhite", fromHex(0xfcf7ff)],
	["lavenderblush", fromHex(0xfff0f5)],
	["linen", fromHex(0xfaf0e6)],
	["seashell", fromHex(0xfff5ee)],
	["snow", fromHex(0xfffafa)],
	["ivory", fromHex(0xfffff0)],
	["titaniumwhite", fromHex(0xfcfff0)],
	["lightbeige", fromHex(0xf5f5dc)],
	["oldlace", fromHex(0xfdf5e6)],
	["papayawhip", fromHex(0xffefd5)],
	["cornsilk", fromHex(0xfff8dc)],
	["yellowlight", fromHex(0xffffe0)],
	["lemonchiffon", fromHex(0xfffacd)],
	["wheat", fromHex(0xf5deb3)],
	["navajowhite", fromHex(0xffdead)],
	["moccasin", fromHex(0xffe4b5)],
	["goldenrodpale", fromHex(0xeee8aa)],
	["goldenrodlight", fromHex(0xfafad2)],
	["mint", fromHex(0xbdfcc9)],
	["turquoisepale", fromHex(0xafeeee)],
	["aquamarine", fromHex(0x7fffd4)],
	["turquoise", fromHex(0x40e0d0)],
	["springgreenmedium", fromHex(0x00fa9a)],
	["greenpale", fromHex(0x98fb98)],
	["springgreen", fromHex(0x00ff7f)],
	["viridianlight", fromHex(0x6eff70)],
	["green", fromHex(0x00ff00)],
	["lawngreen", fromHex(0x7cfc00)],
	["chartreuse", fromHex(0x7fff00)],
	["greenyellow", fromHex(0xadff2f)],
	["yellow", fromHex(0xffff00)],
	["khaki", fromHex(0xf0e68c)],
	["cadmiumlemon", fromHex(0xffe303)],
	["gold", fromHex(0xffd700)],
	["lightgoldenrod", fromHex(0xeedd82)],
	["banana", fromHex(0xe3cf57)],
	["yellowgreen", fromHex(0x9acd32)],
	["olivedrab", fromHex(0x6b8e23)],
	["cinnabargreen", fromHex(0x61b229)],
	["forestgreen", fromHex(0x228b22)],
	["emeraldgreen", fromHex(0x00c957)],
	["limegreen", fromHex(0x32cd32)],
	["permanentgreen", fromHex(0x0ac92b)],
	["sapgreen", fromHex(0x308014)],
	["greendark", fromHex(0x006400)],
	["olivegreendark", fromHex(0x556b2f)],
	["olive", fromHex(0x3b5e2b)],
	["terreverte", fromHex(0x385e0f)],
	["dimgrey", fromHex(0x696969)],
	["slategreydark", fromHex(0x2f4f4f)],
	["lampblack", fromHex(0x2e473b)],
	["ivoryblack", fromHex(0x292421)],
	["black", fromHex(0x000000)],
	["chromeoxidegreen", fromHex(0x668014)],
	["brick", fromHex(0x9c661f)],
	["vandykebrown", fromHex(0x5e2605)],
	["sepia", fromHex(0x5e2612)],
	["sienna", fromHex(0xa0522d)],
	["saddlebrown", fromHex(0x8b4513)],
	["rawumber", fromHex(0x734a12)],
	["deepochre", fromHex(0x733d1a)],
	["brownochre", fromHex(0x87421f)],
	["burntsienna", fromHex(0x8a360f)],
	["brown", fromHex(0x802a2a)],
	["burntumber", fromHex(0x8a3324)],
	["marsorange", fromHex(0x964514)],
	["raspberry", fromHex(0x872657)],
	["maroon", fromHex(0xb03060)],
	["permanentredviolet", fromHex(0xdb2645)],
	["alizarincrimson", fromHex(0xe32636)],
	["geraniumlake", fromHex(0xe31230)],
	["indianred", fromHex(0xb0171f)],
	["firebrick", fromHex(0xb22222)],
	["englishred", fromHex(0xd43d1a)],
	["venetianred", fromHex(0xd41a1f)],
	["brownmadder", fromHex(0xdb2929)],
	["cadmiumreddeep", fromHex(0xe3170d)],
	["cadmiumredlight", fromHex(0xff030d)],
	["red", fromHex(0xff0000)],
	["orangered", fromHex(0xff4500)],
	["greenishumber", fromHex(0xff3d0d)],
	["fleshochre", fromHex(0xff5721)],
	["tomato", fromHex(0xff6347)],
	["cadmiumorange", fromHex(0xff6103)],
	["rawsienna", fromHex(0xc76114)],
	["chocolate", fromHex(0xd2691e)],
	["marsyellow", fromHex(0xe3701a)],
	["goldochre", fromHex(0xc77826)],
	["peru", fromHex(0xcd853f)],
	["goldenroddark", fromHex(0xb8860b)],
	["goldenrod", fromHex(0xdaa520)],
	["sandybrown", fromHex(0xf4a460)],
	["carrot", fromHex(0xed9121)],
	["yellowochre", fromHex(0xe38217)],
	["coral", fromHex(0xff7f50)],
	["flesh", fromHex(0xff7d40)],
	["cadmiumyellow", fromHex(0xff9912)],
	["darkorange", fromHex(0xff8c00)],
	["orange", fromHex(0xff8000)],
	["aureolineyellow", fromHex(0xffa824)],
	["naplesyellowdeep", fromHex(0xffa812)],
	["cadmiumyellowlight", fromHex(0xffb00f)],
	["peachpuff", fromHex(0xffdab9)],
	["mistyrose", fromHex(0xffe4e1)],
	["pink", fromHex(0xffc0cb)],
	["pinklight", fromHex(0xffb6c1)],
	["burlywood", fromHex(0xdeb887)],
	["corallight", fromHex(0xf08080)],
	["salmon", fromHex(0xfa8072)],
	["lightsalmon", fromHex(0xffa07a)],
	["melon", fromHex(0xe3a869)],
	["rosybrown", fromHex(0xbc8f8f)],
	["violetredpale", fromHex(0xdb7093)],
	["rosemadder", fromHex(0xe33638)],
	["madderlakedeep", fromHex(0xe32e30)],
	["deeppink", fromHex(0xff1493)],
	["orchidmedium", fromHex(0xba55d3)],
	["orchid", fromHex(0xda70d6)],
	["hotpink", fromHex(0xff69b4)],
	["purplemedium", fromHex(0x9370db)],
	["cornflower", fromHex(0x6495ed)],
	["plum", fromHex(0xdda0dd)],
	["thistle", fromHex(0xd8bfd8)],
	["dodgerblue", fromHex(0x1e90ff)],
	["slatebluemedium", fromHex(0x7b68ee)],
	["slatebluelight", fromHex(0x8470ff)],
	["magenta", fromHex(0xff00ff)],
	["bluemedium", fromHex(0x0000cd)],
	["blue", fromHex(0x0000ff)],
	["orchiddark", fromHex(0x9932cc)],
	["blueviolet", fromHex(0x8a2be2)],
	["violetdark", fromHex(0x9400d3)],
	["purple", fromHex(0xa020f0)],
	["violetred", fromHex(0xd02090)],
	["violetredmedium", fromHex(0xc71585)],
	["cobaltvioletdeep", fromHex(0x91219e)],
	["ultramarineviolet", fromHex(0x5c246e)],
	["violet", fromHex(0x8f5e99)],
	["slatebluedark", fromHex(0x483d8b)],
	["cobalt", fromHex(0x3d59ab)],
	["royalblue", fromHex(0x4169e1)],
	["slateblue", fromHex(0x6a5acd)],
	["ultramarine", fromHex(0x120a8f)],
	["navy", fromHex(0x000080)],
	["midnightblue", fromHex(0x191970)],
	["indigo", fromHex(0x2e0854)]
]);

export default hollaschNames;
