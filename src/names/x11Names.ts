import type ColorLike from "../types/ColorLike.js";
import fromHex from "../utility/fromHex.js";

/**
 * `rgb.txt` from the X11 window system distribution. Most colors are too bright. Suitable for light sources, but poorly suited for surface colors.
 * @see {@link https://people.csail.mit.edu/jaffer/Color/Dictionaries#x11 | Color-Name Dictionaries}
 * @public
 */
const x11Names: Map<string, ColorLike> = new Map<string, ColorLike>([
	["dodgerblue4", fromHex(0x104e8b)],
	["skyblue4", fromHex(0x4a708b)],
	["steelblue4", fromHex(0x36648b)],
	["deepskyblue4", fromHex(0x00688b)],
	["cyan2", fromHex(0x00eeee)],
	["turquoise2", fromHex(0x00e5ee)],
	["cyan", fromHex(0x00ffff)],
	["cyan1", fromHex(0x00ffff)],
	["turquoise1", fromHex(0x00f5ff)],
	["paleturquoise1", fromHex(0xbbffff)],
	["cadetblue1", fromHex(0x98f5ff)],
	["darkslategray2", fromHex(0x8deeee)],
	["darkslategray1", fromHex(0x97ffff)],
	["lightblue1", fromHex(0xbfefff)],
	["slategray1", fromHex(0xc6e2ff)],
	["lightsteelblue1", fromHex(0xcae1ff)],
	["lavender", fromHex(0xe6e6fa)],
	["lightsteelblue2", fromHex(0xbcd2ee)],
	["slategray2", fromHex(0xb9d3ee)],
	["lightskyblue1", fromHex(0xb0e2ff)],
	["lightskyblue2", fromHex(0xa4d3ee)],
	["lightblue", fromHex(0xadd8e6)],
	["lightblue2", fromHex(0xb2dfee)],
	["powderblue", fromHex(0xb0e0e6)],
	["skyblue", fromHex(0x87ceeb)],
	["lightskyblue", fromHex(0x87cefa)],
	["skyblue1", fromHex(0x87ceff)],
	["lightblue3", fromHex(0x9ac0cd)],
	["lightsteelblue", fromHex(0xb0c4de)],
	["cadetblue2", fromHex(0x8ee5ee)],
	["darkslategray3", fromHex(0x79cdcd)],
	["darkturquoise", fromHex(0x00ced1)],
	["mediumturquoise", fromHex(0x48d1cc)],
	["cyan3", fromHex(0x00cdcd)],
	["turquoise3", fromHex(0x00c5cd)],
	["cadetblue3", fromHex(0x7ac5cd)],
	["deepskyblue", fromHex(0x00bfff)],
	["deepskyblue1", fromHex(0x00bfff)],
	["deepskyblue2", fromHex(0x00b2ee)],
	["steelblue2", fromHex(0x5cacee)],
	["steelblue1", fromHex(0x63b8ff)],
	["slategray3", fromHex(0x9fb6cd)],
	["lightsteelblue3", fromHex(0xa2b5cd)],
	["lightskyblue3", fromHex(0x8db6cd)],
	["skyblue2", fromHex(0x7ec0ee)],
	["skyblue3", fromHex(0x6ca6cd)],
	["cadetblue4", fromHex(0x53868b)],
	["lightblue4", fromHex(0x68838b)],
	["lightslategray", fromHex(0x778899)],
	["lightslategrey", fromHex(0x778899)],
	["lightskyblue4", fromHex(0x607b8b)],
	["slategray", fromHex(0x708090)],
	["slategrey", fromHex(0x708090)],
	["slategray4", fromHex(0x6c7b8b)],
	["lightsteelblue4", fromHex(0x6e7b8b)],
	["steelblue", fromHex(0x4682b4)],
	["steelblue3", fromHex(0x4f94cd)],
	["deepskyblue3", fromHex(0x009acd)],
	["cadetblue", fromHex(0x5f9ea0)],
	["turquoise4", fromHex(0x00868b)],
	["cyan4", fromHex(0x008b8b)],
	["darkcyan", fromHex(0x008b8b)],
	["springgreen3", fromHex(0x00cd66)],
	["springgreen4", fromHex(0x008b45)],
	["seagreen3", fromHex(0x43cd80)],
	["mediumseagreen", fromHex(0x3cb371)],
	["aquamarine4", fromHex(0x458b74)],
	["darkslategray4", fromHex(0x528b8b)],
	["darkseagreen4", fromHex(0x698b69)],
	["seagreen", fromHex(0x2e8b57)],
	["seagreen4", fromHex(0x2e8b57)],
	["palegreen4", fromHex(0x548b54)],
	["darkolivegreen4", fromHex(0x6e8b3d)],
	["khaki4", fromHex(0x8b864e)],
	["lightgoldenrod4", fromHex(0x8b814c)],
	["peachpuff4", fromHex(0x8b7765)],
	["navajowhite4", fromHex(0x8b795e)],
	["wheat4", fromHex(0x8b7e66)],
	["bisque4", fromHex(0x8b7d6b)],
	["antiquewhite4", fromHex(0x8b8378)],
	["seashell4", fromHex(0x8b8682)],
	["mistyrose4", fromHex(0x8b7d7b)],
	["lavenderblush4", fromHex(0x8b8386)],
	["paleturquoise4", fromHex(0x668b8b)],
	["lightcyan4", fromHex(0x7a8b8b)],
	["ivory4", fromHex(0x8b8b83)],
	["honeydew4", fromHex(0x838b83)],
	["azure4", fromHex(0x838b8b)],
	["snow4", fromHex(0x8b8989)],
	["lightyellow4", fromHex(0x8b8b7a)],
	["cornsilk4", fromHex(0x8b8878)],
	["lemonchiffon4", fromHex(0x8b8970)],
	["darkgray", fromHex(0xa9a9a9)],
	["darkgrey", fromHex(0xa9a9a9)],
	["navajowhite3", fromHex(0xcdb38b)],
	["tan", fromHex(0xd2b48c)],
	["darkkhaki", fromHex(0xbdb76b)],
	["darkseagreen", fromHex(0x8fbc8f)],
	["lightseagreen", fromHex(0x20b2aa)],
	["paleturquoise3", fromHex(0x96cdcd)],
	["aquamarine3", fromHex(0x66cdaa)],
	["mediumaquamarine", fromHex(0x66cdaa)],
	["darkseagreen3", fromHex(0x9bcd9b)],
	["khaki3", fromHex(0xcdc673)],
	["lightgoldenrod3", fromHex(0xcdbe70)],
	["navajowhite2", fromHex(0xeecfa1)],
	["wheat2", fromHex(0xeed8ae)],
	["wheat3", fromHex(0xcdba96)],
	["bisque3", fromHex(0xcdb79e)],
	["lemonchiffon3", fromHex(0xcdc9a5)],
	["antiquewhite3", fromHex(0xcdc0b0)],
	["cornsilk3", fromHex(0xcdc8b1)],
	["seashell3", fromHex(0xcdc5bf)],
	["snow3", fromHex(0xcdc9c9)],
	["lavenderblush3", fromHex(0xcdc1c5)],
	["gray", fromHex(0xbebebe)],
	["grey", fromHex(0xbebebe)],
	["honeydew3", fromHex(0xc1cdc1)],
	["lightcyan3", fromHex(0xb4cdcd)],
	["gainsboro", fromHex(0xdcdcdc)],
	["ivory3", fromHex(0xcdcdc1)],
	["lightgray", fromHex(0xd3d3d3)],
	["lightgrey", fromHex(0xd3d3d3)],
	["azure3", fromHex(0xc1cdcd)],
	["lightyellow3", fromHex(0xcdcdb4)],
	["bisque2", fromHex(0xeed5b7)],
	["cornsilk2", fromHex(0xeee8cd)],
	["lightyellow2", fromHex(0xeeeed1)],
	["blanchedalmond", fromHex(0xffebcd)],
	["bisque", fromHex(0xffe4c4)],
	["bisque1", fromHex(0xffe4c4)],
	["antiquewhite", fromHex(0xfaebd7)],
	["ivory2", fromHex(0xeeeee0)],
	["antiquewhite2", fromHex(0xeedfcc)],
	["seashell2", fromHex(0xeee5de)],
	["snow2", fromHex(0xeee9e9)],
	["lavenderblush2", fromHex(0xeee0e5)],
	["azure2", fromHex(0xe0eeee)],
	["honeydew2", fromHex(0xe0eee0)],
	["lightcyan2", fromHex(0xd1eeee)],
	["lightcyan", fromHex(0xe0ffff)],
	["lightcyan1", fromHex(0xe0ffff)],
	["honeydew", fromHex(0xf0fff0)],
	["honeydew1", fromHex(0xf0fff0)],
	["mintcream", fromHex(0xf5fffa)],
	["white", fromHex(0xffffff)],
	["floralwhite", fromHex(0xfffaf0)],
	["whitesmoke", fromHex(0xf5f5f5)],
	["aliceblue", fromHex(0xf0f8ff)],
	["azure", fromHex(0xf0ffff)],
	["azure1", fromHex(0xf0ffff)],
	["ghostwhite", fromHex(0xf8f8ff)],
	["lavenderblush", fromHex(0xfff0f5)],
	["lavenderblush1", fromHex(0xfff0f5)],
	["linen", fromHex(0xfaf0e6)],
	["seashell", fromHex(0xfff5ee)],
	["seashell1", fromHex(0xfff5ee)],
	["snow", fromHex(0xfffafa)],
	["snow1", fromHex(0xfffafa)],
	["ivory", fromHex(0xfffff0)],
	["ivory1", fromHex(0xfffff0)],
	["beige", fromHex(0xf5f5dc)],
	["oldlace", fromHex(0xfdf5e6)],
	["antiquewhite1", fromHex(0xffefdb)],
	["papayawhip", fromHex(0xffefd5)],
	["cornsilk", fromHex(0xfff8dc)],
	["cornsilk1", fromHex(0xfff8dc)],
	["lightyellow", fromHex(0xffffe0)],
	["lightyellow1", fromHex(0xffffe0)],
	["lemonchiffon", fromHex(0xfffacd)],
	["lemonchiffon1", fromHex(0xfffacd)],
	["wheat1", fromHex(0xffe7ba)],
	["lemonchiffon2", fromHex(0xeee9bf)],
	["wheat", fromHex(0xf5deb3)],
	["navajowhite", fromHex(0xffdead)],
	["navajowhite1", fromHex(0xffdead)],
	["moccasin", fromHex(0xffe4b5)],
	["palegoldenrod", fromHex(0xeee8aa)],
	["lightgoldenrodyellow", fromHex(0xfafad2)],
	["darkseagreen2", fromHex(0xb4eeb4)],
	["darkseagreen1", fromHex(0xc1ffc1)],
	["paleturquoise", fromHex(0xafeeee)],
	["paleturquoise2", fromHex(0xaeeeee)],
	["aquamarine", fromHex(0x7fffd4)],
	["aquamarine1", fromHex(0x7fffd4)],
	["turquoise", fromHex(0x40e0d0)],
	["aquamarine2", fromHex(0x76eec6)],
	["seagreen2", fromHex(0x4eee94)],
	["lightgreen", fromHex(0x90ee90)],
	["palegreen2", fromHex(0x90ee90)],
	["palegreen3", fromHex(0x7ccd7c)],
	["mediumspringgreen", fromHex(0x00fa9a)],
	["seagreen1", fromHex(0x54ff9f)],
	["palegreen", fromHex(0x98fb98)],
	["palegreen1", fromHex(0x9aff9a)],
	["springgreen", fromHex(0x00ff7f)],
	["springgreen1", fromHex(0x00ff7f)],
	["springgreen2", fromHex(0x00ee76)],
	["olivedrab2", fromHex(0xb3ee3a)],
	["green", fromHex(0x00ff00)],
	["green1", fromHex(0x00ff00)],
	["green2", fromHex(0x00ee00)],
	["chartreuse2", fromHex(0x76ee00)],
	["lawngreen", fromHex(0x7cfc00)],
	["chartreuse", fromHex(0x7fff00)],
	["chartreuse1", fromHex(0x7fff00)],
	["greenyellow", fromHex(0xadff2f)],
	["olivedrab1", fromHex(0xc0ff3e)],
	["yellow", fromHex(0xffff00)],
	["yellow1", fromHex(0xffff00)],
	["yellow2", fromHex(0xeeee00)],
	["darkolivegreen2", fromHex(0xbcee68)],
	["darkolivegreen1", fromHex(0xcaff70)],
	["khaki2", fromHex(0xeee685)],
	["khaki", fromHex(0xf0e68c)],
	["lightgoldenrod1", fromHex(0xffec8b)],
	["khaki1", fromHex(0xfff68f)],
	["gold2", fromHex(0xeec900)],
	["gold", fromHex(0xffd700)],
	["gold1", fromHex(0xffd700)],
	["lightgoldenrod", fromHex(0xeedd82)],
	["lightgoldenrod2", fromHex(0xeedc82)],
	["darkolivegreen3", fromHex(0xa2cd5a)],
	["olivedrab3", fromHex(0x9acd32)],
	["yellowgreen", fromHex(0x9acd32)],
	["yellow3", fromHex(0xcdcd00)],
	["gold3", fromHex(0xcdad00)],
	["yellow4", fromHex(0x8b8b00)],
	["olivedrab", fromHex(0x6b8e23)],
	["olivedrab4", fromHex(0x698b22)],
	["chartreuse3", fromHex(0x66cd00)],
	["forestgreen", fromHex(0x228b22)],
	["chartreuse4", fromHex(0x458b00)],
	["green4", fromHex(0x008b00)],
	["limegreen", fromHex(0x32cd32)],
	["green3", fromHex(0x00cd00)],
	["darkgreen", fromHex(0x006400)],
	["darkolivegreen", fromHex(0x556b2f)],
	["burlywood4", fromHex(0x8b7355)],
	["dimgray", fromHex(0x696969)],
	["dimgrey", fromHex(0x696969)],
	["darkslategray", fromHex(0x2f4f4f)],
	["darkslategrey", fromHex(0x2f4f4f)],
	["black", fromHex(0x000000)],
	["gold4", fromHex(0x8b7500)],
	["goldenrod4", fromHex(0x8b6914)],
	["orange4", fromHex(0x8b5a00)],
	["darkgoldenrod4", fromHex(0x8b6508)],
	["darkorange4", fromHex(0x8b4500)],
	["lightpink4", fromHex(0x8b5f65)],
	["pink4", fromHex(0x8b636c)],
	["rosybrown4", fromHex(0x8b6969)],
	["salmon4", fromHex(0x8b4c39)],
	["lightsalmon4", fromHex(0x8b5742)],
	["sienna", fromHex(0xa0522d)],
	["chocolate4", fromHex(0x8b4513)],
	["saddlebrown", fromHex(0x8b4513)],
	["sienna4", fromHex(0x8b4726)],
	["tan4", fromHex(0x8b5a2b)],
	["coral4", fromHex(0x8b3e2f)],
	["tomato4", fromHex(0x8b3626)],
	["brown4", fromHex(0x8b2323)],
	["firebrick4", fromHex(0x8b1a1a)],
	["darkred", fromHex(0x8b0000)],
	["red4", fromHex(0x8b0000)],
	["orangered4", fromHex(0x8b2500)],
	["brown", fromHex(0xa52a2a)],
	["palevioletred4", fromHex(0x8b475d)],
	["violetred4", fromHex(0x8b2252)],
	["indianred4", fromHex(0x8b3a3a)],
	["deeppink4", fromHex(0x8b0a50)],
	["maroon", fromHex(0xb03060)],
	["deeppink3", fromHex(0xcd1076)],
	["violetred3", fromHex(0xcd3278)],
	["brown3", fromHex(0xcd3333)],
	["firebrick3", fromHex(0xcd2626)],
	["firebrick", fromHex(0xb22222)],
	["orangered3", fromHex(0xcd3700)],
	["red3", fromHex(0xcd0000)],
	["red2", fromHex(0xee0000)],
	["red", fromHex(0xff0000)],
	["red1", fromHex(0xff0000)],
	["brown1", fromHex(0xff4040)],
	["firebrick2", fromHex(0xee2c2c)],
	["firebrick1", fromHex(0xff3030)],
	["orangered", fromHex(0xff4500)],
	["orangered1", fromHex(0xff4500)],
	["orangered2", fromHex(0xee4000)],
	["tomato", fromHex(0xff6347)],
	["tomato1", fromHex(0xff6347)],
	["chocolate", fromHex(0xd2691e)],
	["chocolate3", fromHex(0xcd661d)],
	["darkorange3", fromHex(0xcd6600)],
	["orange3", fromHex(0xcd8500)],
	["peru", fromHex(0xcd853f)],
	["tan3", fromHex(0xcd853f)],
	["darkgoldenrod", fromHex(0xb8860b)],
	["orange2", fromHex(0xee9a00)],
	["orange", fromHex(0xffa500)],
	["orange1", fromHex(0xffa500)],
	["darkgoldenrod2", fromHex(0xeead0e)],
	["goldenrod", fromHex(0xdaa520)],
	["goldenrod3", fromHex(0xcd9b1d)],
	["darkgoldenrod3", fromHex(0xcd950c)],
	["sandybrown", fromHex(0xf4a460)],
	["tan2", fromHex(0xee9a49)],
	["coral", fromHex(0xff7f50)],
	["sienna2", fromHex(0xee7942)],
	["sienna1", fromHex(0xff8247)],
	["chocolate2", fromHex(0xee7621)],
	["darkorange2", fromHex(0xee7600)],
	["chocolate1", fromHex(0xff7f24)],
	["darkorange", fromHex(0xff8c00)],
	["darkorange1", fromHex(0xff7f00)],
	["tan1", fromHex(0xffa54f)],
	["goldenrod2", fromHex(0xeeb422)],
	["darkgoldenrod1", fromHex(0xffb90f)],
	["goldenrod1", fromHex(0xffc125)],
	["peachpuff", fromHex(0xffdab9)],
	["peachpuff1", fromHex(0xffdab9)],
	["mistyrose", fromHex(0xffe4e1)],
	["mistyrose1", fromHex(0xffe4e1)],
	["mistyrose2", fromHex(0xeed5d2)],
	["pink", fromHex(0xffc0cb)],
	["rosybrown1", fromHex(0xffc1c1)],
	["rosybrown2", fromHex(0xeeb4b4)],
	["pink2", fromHex(0xeea9b8)],
	["lightpink", fromHex(0xffb6c1)],
	["pink1", fromHex(0xffb5c5)],
	["mistyrose3", fromHex(0xcdb7b5)],
	["burlywood", fromHex(0xdeb887)],
	["peachpuff2", fromHex(0xeecbad)],
	["burlywood2", fromHex(0xeec591)],
	["burlywood1", fromHex(0xffd39b)],
	["lightpink1", fromHex(0xffaeb9)],
	["palevioletred1", fromHex(0xff82ab)],
	["lightpink2", fromHex(0xeea2ad)],
	["palevioletred2", fromHex(0xee799f)],
	["lightcoral", fromHex(0xf08080)],
	["salmon", fromHex(0xfa8072)],
	["coral1", fromHex(0xff7256)],
	["salmon1", fromHex(0xff8c69)],
	["lightsalmon2", fromHex(0xee9572)],
	["lightsalmon", fromHex(0xffa07a)],
	["lightsalmon1", fromHex(0xffa07a)],
	["salmon2", fromHex(0xee8262)],
	["darksalmon", fromHex(0xe9967a)],
	["burlywood3", fromHex(0xcdaa7d)],
	["peachpuff3", fromHex(0xcdaf95)],
	["rosybrown3", fromHex(0xcd9b9b)],
	["lightpink3", fromHex(0xcd8c95)],
	["pink3", fromHex(0xcd919e)],
	["rosybrown", fromHex(0xbc8f8f)],
	["thistle4", fromHex(0x8b7b8b)],
	["lightsalmon3", fromHex(0xcd8162)],
	["salmon3", fromHex(0xcd7054)],
	["sienna3", fromHex(0xcd6839)],
	["coral3", fromHex(0xcd5b45)],
	["tomato3", fromHex(0xcd4f39)],
	["coral2", fromHex(0xee6a50)],
	["indianred", fromHex(0xcd5c5c)],
	["indianred3", fromHex(0xcd5555)],
	["palevioletred", fromHex(0xdb7093)],
	["palevioletred3", fromHex(0xcd6889)],
	["hotpink3", fromHex(0xcd6090)],
	["violetred2", fromHex(0xee3a8c)],
	["indianred1", fromHex(0xff6a6a)],
	["tomato2", fromHex(0xee5c42)],
	["indianred2", fromHex(0xee6363)],
	["brown2", fromHex(0xee3b3b)],
	["violetred1", fromHex(0xff3e96)],
	["deeppink", fromHex(0xff1493)],
	["deeppink1", fromHex(0xff1493)],
	["deeppink2", fromHex(0xee1289)],
	["maroon2", fromHex(0xee30a7)],
	["maroon1", fromHex(0xff34b3)],
	["mediumorchid2", fromHex(0xd15fee)],
	["mediumorchid", fromHex(0xba55d3)],
	["mediumorchid3", fromHex(0xb452cd)],
	["mediumorchid1", fromHex(0xe066ff)],
	["orchid1", fromHex(0xff83fa)],
	["violet", fromHex(0xee82ee)],
	["orchid2", fromHex(0xee7ae9)],
	["orchid", fromHex(0xda70d6)],
	["hotpink", fromHex(0xff69b4)],
	["hotpink1", fromHex(0xff6eb4)],
	["hotpink2", fromHex(0xee6aa7)],
	["orchid3", fromHex(0xcd69c9)],
	["mediumpurple", fromHex(0x9370db)],
	["mediumpurple3", fromHex(0x8968cd)],
	["mediumpurple2", fromHex(0x9f79ee)],
	["cornflowerblue", fromHex(0x6495ed)],
	["mediumpurple1", fromHex(0xab82ff)],
	["plum", fromHex(0xdda0dd)],
	["plum3", fromHex(0xcd96cd)],
	["plum1", fromHex(0xffbbff)],
	["plum2", fromHex(0xeeaeee)],
	["thistle3", fromHex(0xcdb5cd)],
	["thistle", fromHex(0xd8bfd8)],
	["thistle2", fromHex(0xeed2ee)],
	["thistle1", fromHex(0xffe1ff)],
	["dodgerblue", fromHex(0x1e90ff)],
	["dodgerblue1", fromHex(0x1e90ff)],
	["dodgerblue2", fromHex(0x1c86ee)],
	["royalblue2", fromHex(0x436eee)],
	["royalblue1", fromHex(0x4876ff)],
	["mediumslateblue", fromHex(0x7b68ee)],
	["slateblue2", fromHex(0x7a67ee)],
	["slateblue1", fromHex(0x836fff)],
	["lightslateblue", fromHex(0x8470ff)],
	["darkorchid2", fromHex(0xb23aee)],
	["darkorchid1", fromHex(0xbf3eff)],
	["magenta2", fromHex(0xee00ee)],
	["magenta", fromHex(0xff00ff)],
	["magenta1", fromHex(0xff00ff)],
	["blue3", fromHex(0x0000cd)],
	["mediumblue", fromHex(0x0000cd)],
	["blue2", fromHex(0x0000ee)],
	["blue", fromHex(0x0000ff)],
	["blue1", fromHex(0x0000ff)],
	["darkorchid", fromHex(0x9932cc)],
	["darkorchid3", fromHex(0x9a32cd)],
	["purple3", fromHex(0x7d26cd)],
	["blueviolet", fromHex(0x8a2be2)],
	["purple2", fromHex(0x912cee)],
	["darkviolet", fromHex(0x9400d3)],
	["purple", fromHex(0xa020f0)],
	["purple1", fromHex(0x9b30ff)],
	["magenta3", fromHex(0xcd00cd)],
	["violetred", fromHex(0xd02090)],
	["maroon3", fromHex(0xcd2990)],
	["mediumvioletred", fromHex(0xc71585)],
	["darkmagenta", fromHex(0x8b008b)],
	["magenta4", fromHex(0x8b008b)],
	["purple4", fromHex(0x551a8b)],
	["darkorchid4", fromHex(0x68228b)],
	["mediumorchid4", fromHex(0x7a378b)],
	["hotpink4", fromHex(0x8b3a62)],
	["maroon4", fromHex(0x8b1c62)],
	["orchid4", fromHex(0x8b4789)],
	["plum4", fromHex(0x8b668b)],
	["mediumpurple4", fromHex(0x5d478b)],
	["darkslateblue", fromHex(0x483d8b)],
	["slateblue4", fromHex(0x473c8b)],
	["royalblue4", fromHex(0x27408b)],
	["dodgerblue3", fromHex(0x1874cd)],
	["royalblue", fromHex(0x4169e1)],
	["royalblue3", fromHex(0x3a5fcd)],
	["slateblue3", fromHex(0x6959cd)],
	["slateblue", fromHex(0x6a5acd)],
	["blue4", fromHex(0x00008b)],
	["darkblue", fromHex(0x00008b)],
	["navy", fromHex(0x000080)],
	["navyblue", fromHex(0x000080)],
	["midnightblue", fromHex(0x191970)]
]);

export default x11Names;
