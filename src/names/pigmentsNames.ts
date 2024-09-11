import type Rgb from "../types/Rgb.js";
import fromHex from "../utility/hexToRgb.js";

/**
 * Pigments through the Ages. All non-white pigments are fairly dark. Insufficient variety of distinct colors for computer use.
 * @see {@link https://people.csail.mit.edu/jaffer/Color/Dictionaries#pigments | Color-Name Dictionaries}
 * @public
 */
const pigmentsNames: Map<string, Rgb> = new Map<string, Rgb>([
	["carbonblack", fromHex(0x111519)],
	["boneblack", fromHex(0x1b2023)],
	["redochre", fromHex(0x331905)],
	["umber", fromHex(0x331905)],
	["indigo", fromHex(0x0d2131)],
	["cobaltblue", fromHex(0x06395e)],
	["prussianblue", fromHex(0x024579)],
	["smalt", fromHex(0x20356d)],
	["ultramarine", fromHex(0x015089)],
	["azurite", fromHex(0x205072)],
	["egyptianblue", fromHex(0x005f94)],
	["ceruleanblue", fromHex(0x2a7096)],
	["greenearth", fromHex(0x485e4d)],
	["emeraldgreen", fromHex(0x3c7d41)],
	["viridian", fromHex(0x217c50)],
	["titaniumwhite", fromHex(0xf1f6f0)],
	["leadwhite", fromHex(0xfbfbfb)],
	["limewhite", fromHex(0xebf2ea)],
	["zincwhite", fromHex(0xebf2ea)],
	["cobaltgreen", fromHex(0x5e8d62)],
	["verdigris", fromHex(0x719b6d)],
	["malachite", fromHex(0x7a9f64)],
	["yellowochre", fromHex(0xcc9550)],
	["leadtinyellow", fromHex(0xfefd1c)],
	["lemonyellow", fromHex(0xfefd1c)],
	["naplesyellow", fromHex(0xfaba21)],
	["cobaltyellow", fromHex(0xf2b625)],
	["orpiment", fromHex(0xf2b639)],
	["chromeyellow", fromHex(0xe2b11b)],
	["copperresinate", fromHex(0x378638)],
	["redlead", fromHex(0xc53823)],
	["chromeorange", fromHex(0xac210a)],
	["vermilion", fromHex(0xc32608)],
	["madder", fromHex(0xb31c2e)],
	["cadmiumyellowred", fromHex(0xfd4002)],
	["realgar", fromHex(0xfc7e0d)],
	["indianyellow", fromHex(0xfe991a)],
	["carmine", fromHex(0xa6374a)],
	["cobaltviolet", fromHex(0x773a74)],
	["vandykebrown", fromHex(0x603b2a)]
]);

export default pigmentsNames;
