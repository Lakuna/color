import type ColorLike from "../types/ColorLike.js";
import fromHex from "../utility/fromHex.js";

/**
 * XKCD Color Name Survey. Better than the Color Naming Experiment and X11 for surface colors, but many of its colors will not print faithfully.
 * @see {@link https://people.csail.mit.edu/jaffer/Color/Dictionaries#xkcd | Color-Name Dictionaries}
 * @public
 */
const xkcdNames: Map<string, ColorLike> = new Map<string, ColorLike>([
	["dark", fromHex(0x1b2431)],
	["darkbluegrey", fromHex(0x1f3b4d)],
	["windowsblue", fromHex(0x3778bf)],
	["bluish", fromHex(0x2976bb)],
	["flatblue", fromHex(0x3c73a8)],
	["niceblue", fromHex(0x107ab0)],
	["peacockblue", fromHex(0x016795)],
	["prussianblue", fromHex(0x004577)],
	["deepseablue", fromHex(0x015482)],
	["lightnavy", fromHex(0x155084)],
	["lightnavyblue", fromHex(0x2e5a88)],
	["darkslateblue", fromHex(0x214761)],
	["darkgreyblue", fromHex(0x29465b)],
	["slategrey", fromHex(0x59656d)],
	["slate", fromHex(0x516572)],
	["metallicblue", fromHex(0x4f738e)],
	["cadetblue", fromHex(0x4e7496)],
	["stormyblue", fromHex(0x507b9c)],
	["dullblue", fromHex(0x49759c)],
	["mutedblue", fromHex(0x3b719f)],
	["denim", fromHex(0x3b638c)],
	["uglyblue", fromHex(0x31668a)],
	["seablue", fromHex(0x047495)],
	["oceanblue", fromHex(0x03719c)],
	["darkaqua", fromHex(0x05696b)],
	["darkaquamarine", fromHex(0x017371)],
	["deepturquoise", fromHex(0x017374)],
	["deepaqua", fromHex(0x08787f)],
	["ocean", fromHex(0x017b92)],
	["petrol", fromHex(0x005f6a)],
	["deepteal", fromHex(0x00555a)],
	["darkteal", fromHex(0x014d4e)],
	["brightcyan", fromHex(0x41fdfe)],
	["cyan", fromHex(0x00ffff)],
	["brightlightblue", fromHex(0x26f7fd)],
	["brightaqua", fromHex(0x0bf9ea)],
	["brightturquoise", fromHex(0x0ffef9)],
	["lightcyan", fromHex(0xacfffc)],
	["robinseggblue", fromHex(0x98eff9)],
	["robineggblue", fromHex(0x8af1fe)],
	["lightskyblue", fromHex(0xc6fcff)],
	["paleskyblue", fromHex(0xbdf6fe)],
	["babyblue", fromHex(0xa2cffe)],
	["powderblue", fromHex(0xb1d1fc)],
	["lightblue", fromHex(0x7bc8f6)],
	["lightbluegrey", fromHex(0xb7c9e2)],
	["sky", fromHex(0x82cafc)],
	["brightskyblue", fromHex(0x02ccfe)],
	["neonblue", fromHex(0x04d9ff)],
	["aquablue", fromHex(0x02d8e9)],
	["robinsegg", fromHex(0x6dedfd)],
	["turquoiseblue", fromHex(0x06b1c4)],
	["skyblue", fromHex(0x75bbfd)],
	["carolinablue", fromHex(0x8ab8fe)],
	["lightgreyblue", fromHex(0x9dbcd4)],
	["bluegrey", fromHex(0x85a3b2)],
	["blueygrey", fromHex(0x89a0b0)],
	["fadedblue", fromHex(0x658cbb)],
	["bluishgrey", fromHex(0x748b97)],
	["dirtyblue", fromHex(0x3f829d)],
	["greyblue", fromHex(0x647d8e)],
	["steel", fromHex(0x738595)],
	["steelgrey", fromHex(0x6f828a)],
	["battleshipgrey", fromHex(0x6b7c85)],
	["slateblue", fromHex(0x5b7c99)],
	["steelblue", fromHex(0x5a7d9a)],
	["greyishblue", fromHex(0x5e819d)],
	["offblue", fromHex(0x5684ae)],
	["dustyblue", fromHex(0x5a86ad)],
	["coolblue", fromHex(0x4984b8)],
	["azure", fromHex(0x069af3)],
	["cerulean", fromHex(0x0485d1)],
	["waterblue", fromHex(0x0e87cc)],
	["tealblue", fromHex(0x01889f)],
	["darkcyan", fromHex(0x0a888a)],
	["greenishblue", fromHex(0x0b8b87)],
	["emerald", fromHex(0x01a049)],
	["greenish", fromHex(0x40a368)],
	["kelleygreen", fromHex(0x009337)],
	["midgreen", fromHex(0x50a747)],
	["darkpastelgreen", fromHex(0x56ae57)],
	["mediumgreen", fromHex(0x39ad48)],
	["shamrock", fromHex(0x01b44c)],
	["coolgreen", fromHex(0x33b864)],
	["darkmint", fromHex(0x48c072)],
	["seaweed", fromHex(0x18d17b)],
	["darkmintgreen", fromHex(0x20c073)],
	["algaegreen", fromHex(0x21c36f)],
	["jadegreen", fromHex(0x2baf6a)],
	["seaweedgreen", fromHex(0x35ad6b)],
	["greenteal", fromHex(0x0cb577)],
	["darkseafoamgreen", fromHex(0x3eaf76)],
	["darkseafoam", fromHex(0x1fb57a)],
	["blueygreen", fromHex(0x2bb179)],
	["greenishteal", fromHex(0x32bf84)],
	["greenblue", fromHex(0x01c08d)],
	["turquoise", fromHex(0x06c2ac)],
	["tealish", fromHex(0x24bca8)],
	["jade", fromHex(0x1fa774)],
	["tealgreen", fromHex(0x25a36f)],
	["bluishgreen", fromHex(0x10a674)],
	["teal", fromHex(0x029386)],
	["dustyteal", fromHex(0x4c9085)],
	["sea", fromHex(0x3c9992)],
	["greyteal", fromHex(0x5e9b8a)],
	["dullteal", fromHex(0x5f9e8f)],
	["bluegreen", fromHex(0x0f9b8e)],
	["oceangreen", fromHex(0x3d9973)],
	["greenygrey", fromHex(0x7ea07a)],
	["slategreen", fromHex(0x658d6d)],
	["viridian", fromHex(0x1e9167)],
	["lightforestgreen", fromHex(0x4f9153)],
	["flatgreen", fromHex(0x699d4c)],
	["offgreen", fromHex(0x6ba353)],
	["mutedgreen", fromHex(0x5fa052)],
	["ferngreen", fromHex(0x548d44)],
	["mossgreen", fromHex(0x658b38)],
	["swamp", fromHex(0x698339)],
	["khakigreen", fromHex(0x728639)],
	["moss", fromHex(0x769958)],
	["drabgreen", fromHex(0x749551)],
	["darksage", fromHex(0x598556)],
	["camo", fromHex(0x7f8f4e)],
	["drab", fromHex(0x828344)],
	["darkkhaki", fromHex(0x9b8f55)],
	["darkbeige", fromHex(0xac9362)],
	["darksand", fromHex(0xa88f59)],
	["brownishgrey", fromHex(0x86775f)],
	["browngrey", fromHex(0x8d8468)],
	["mediumgrey", fromHex(0x7d7f7c)],
	["greengrey", fromHex(0x77926f)],
	["greyishteal", fromHex(0x719f91)],
	["grey", fromHex(0x929591)],
	["warmgrey", fromHex(0x978a84)],
	["stone", fromHex(0xada587)],
	["bland", fromHex(0xafa88b)],
	["greyish", fromHex(0xa8a495)],
	["cement", fromHex(0xa5a391)],
	["coolgrey", fromHex(0x95a3a6)],
	["greygreen", fromHex(0x86a17d)],
	["greenishgrey", fromHex(0x96ae8d)],
	["toupe", fromHex(0xc7ac7d)],
	["putty", fromHex(0xbeae8a)],
	["taupe", fromHex(0xb9a281)],
	["dust", fromHex(0xb2996e)],
	["sandybrown", fromHex(0xc4a661)],
	["desert", fromHex(0xccad60)],
	["tan", fromHex(0xd1b26f)],
	["sandstone", fromHex(0xc9ae74)],
	["khaki", fromHex(0xaaa662)],
	["lichen", fromHex(0x8fb67b)],
	["sage", fromHex(0x87ae73)],
	["sagegreen", fromHex(0x88b378)],
	["fadedgreen", fromHex(0x7bb274)],
	["dustygreen", fromHex(0x76a973)],
	["dullgreen", fromHex(0x74a662)],
	["lightolive", fromHex(0xacbf69)],
	["tangreen", fromHex(0xa9be70)],
	["fern", fromHex(0x63a950)],
	["asparagus", fromHex(0x77ab56)],
	["boringgreen", fromHex(0x63b365)],
	["algae", fromHex(0x54ac68)],
	["softgreen", fromHex(0x6fc276)],
	["greyishgreen", fromHex(0x82a67d)],
	["tea", fromHex(0x65ab7c)],
	["greenyblue", fromHex(0x42b395)],
	["topaz", fromHex(0x13bbaf)],
	["seafoamblue", fromHex(0x78d1b6)],
	["paleteal", fromHex(0x82cbb2)],
	["lightteal", fromHex(0x90e4c1)],
	["hospitalgreen", fromHex(0x9be5aa)],
	["paleolivegreen", fromHex(0xb1d27b)],
	["lightmossgreen", fromHex(0xa6c875)],
	["lightgreygreen", fromHex(0xb7e1a1)],
	["greenishbeige", fromHex(0xc9d179)],
	["paleolive", fromHex(0xb9cc81)],
	["greenishtan", fromHex(0xbccb7a)],
	["sand", fromHex(0xe2ca76)],
	["beige", fromHex(0xe6daa6)],
	["verylightbrown", fromHex(0xd3b683)],
	["silver", fromHex(0xc5c9c7)],
	["lightgrey", fromHex(0xd8dcd6)],
	["ice", fromHex(0xd6fffa)],
	["paleblue", fromHex(0xd0fefe)],
	["reallylightblue", fromHex(0xd4ffff)],
	["verylightblue", fromHex(0xd5ffff)],
	["verypaleblue", fromHex(0xd6fffe)],
	["lightlightblue", fromHex(0xcafffb)],
	["iceblue", fromHex(0xd7fffe)],
	["white", fromHex(0xffffff)],
	["palegrey", fromHex(0xfdfdfe)],
	["verylightpink", fromHex(0xfff4f2)],
	["offwhite", fromHex(0xffffe4)],
	["pale", fromHex(0xfff9d0)],
	["palepeach", fromHex(0xffe5ad)],
	["lighttan", fromHex(0xfbeeac)],
	["darkcream", fromHex(0xfff39a)],
	["buff", fromHex(0xfef69e)],
	["parchment", fromHex(0xfefcaf)],
	["creme", fromHex(0xffffb6)],
	["lightbeige", fromHex(0xfffeb6)],
	["lightkhaki", fromHex(0xe6f2a2)],
	["ecru", fromHex(0xfeffca)],
	["ivory", fromHex(0xffffcb)],
	["eggshell", fromHex(0xfffcc4)],
	["cream", fromHex(0xffffc2)],
	["palegreen", fromHex(0xc7fdb5)],
	["verylightgreen", fromHex(0xd1ffbd)],
	["verypalegreen", fromHex(0xcffdbc)],
	["lightsage", fromHex(0xbcecac)],
	["palelightgreen", fromHex(0xb1fc99)],
	["celery", fromHex(0xc1fd95)],
	["teagreen", fromHex(0xbdf8a3)],
	["lightpastelgreen", fromHex(0xb2fba5)],
	["lightmintgreen", fromHex(0xa6fbb2)],
	["lightseafoamgreen", fromHex(0xa7ffb5)],
	["celadon", fromHex(0xbefdb7)],
	["washedoutgreen", fromHex(0xbcf5a6)],
	["lightmint", fromHex(0xb6ffbb)],
	["lightseafoam", fromHex(0xa0febf)],
	["lightlightgreen", fromHex(0xc8ffb0)],
	["paleturquoise", fromHex(0xa5fbd5)],
	["tiffanyblue", fromHex(0x7bf2da)],
	["lightaqua", fromHex(0x8cffdb)],
	["paleaqua", fromHex(0xb8ffeb)],
	["duckeggblue", fromHex(0xc3fbf4)],
	["palecyan", fromHex(0xb7fffa)],
	["eggshellblue", fromHex(0xc4fff7)],
	["lightturquoise", fromHex(0x7ef4cc)],
	["lightaquamarine", fromHex(0x7bfdc7)],
	["brightteal", fromHex(0x01f9c6)],
	["aqua", fromHex(0x13eac9)],
	["aquamarine", fromHex(0x2ee8bb)],
	["aquagreen", fromHex(0x12e193)],
	["weirdgreen", fromHex(0x3ae57f)],
	["tealishgreen", fromHex(0x0cdc73)],
	["turquoisegreen", fromHex(0x04f489)],
	["mintygreen", fromHex(0x0bf77d)],
	["wintergreen", fromHex(0x20f986)],
	["brightseagreen", fromHex(0x05ffa6)],
	["greenishturquoise", fromHex(0x00fbb0)],
	["lightbluishgreen", fromHex(0x76fda8)],
	["lightgreenblue", fromHex(0x56fca2)],
	["seagreen", fromHex(0x53fca1)],
	["greenishcyan", fromHex(0x2afeb7)],
	["lightgreenishblue", fromHex(0x63f7b4)],
	["lightbluegreen", fromHex(0x7efbb3)],
	["lightseagreen", fromHex(0x98f6b0)],
	["seafoamgreen", fromHex(0x7af9ab)],
	["seafoam", fromHex(0x80f9ad)],
	["foamgreen", fromHex(0x90fda9)],
	["mint", fromHex(0x9ffeb0)],
	["babygreen", fromHex(0x8cff9e)],
	["mintgreen", fromHex(0x8fff9f)],
	["pastelgreen", fromHex(0xb0ff9d)],
	["springgreen", fromHex(0xa9f971)],
	["lightlime", fromHex(0xaefd6c)],
	["keylime", fromHex(0xaeff6e)],
	["lightgrassgreen", fromHex(0x9af764)],
	["palelimegreen", fromHex(0xb1ff65)],
	["lightlimegreen", fromHex(0xb9ff66)],
	["lightgreen", fromHex(0x76ff7b)],
	["eastergreen", fromHex(0x8cfd7e)],
	["brightlightgreen", fromHex(0x2dfe54)],
	["lightbrightgreen", fromHex(0x53fe5c)],
	["lightneongreen", fromHex(0x4efd54)],
	["lightergreen", fromHex(0x75fd63)],
	["spearmint", fromHex(0x1ef876)],
	["lightishgreen", fromHex(0x61e160)],
	["freshgreen", fromHex(0x69d84f)],
	["kiwigreen", fromHex(0x8ee53f)],
	["toxicgreen", fromHex(0x61de2a)],
	["greenapple", fromHex(0x5edc1f)],
	["kiwi", fromHex(0x9cef43)],
	["vibrantgreen", fromHex(0x0add08)],
	["brightgreen", fromHex(0x01ff07)],
	["fluorescentgreen", fromHex(0x08ff08)],
	["flurogreen", fromHex(0x0aff02)],
	["neongreen", fromHex(0x0cff0c)],
	["electricgreen", fromHex(0x21fc0d)],
	["highlightergreen", fromHex(0x1bfc06)],
	["vividgreen", fromHex(0x2fef10)],
	["poisongreen", fromHex(0x40fd14)],
	["radioactivegreen", fromHex(0x2cfa1f)],
	["brightlimegreen", fromHex(0x65fe08)],
	["brightlime", fromHex(0x87fd05)],
	["hotgreen", fromHex(0x25ff29)],
	["acidgreen", fromHex(0x8ffe09)],
	["limegreen", fromHex(0x89fe05)],
	["brightyellowgreen", fromHex(0x9dff00)],
	["electriclime", fromHex(0xa8ff04)],
	["lime", fromHex(0xaaff32)],
	["chartreuse", fromHex(0xc1f80a)],
	["lemonlime", fromHex(0xbffe28)],
	["lemongreen", fromHex(0xadf802)],
	["yellowgreen", fromHex(0xbbf90f)],
	["brightyellow", fromHex(0xfffd01)],
	["yellow", fromHex(0xffff14)],
	["lemonyellow", fromHex(0xfdff38)],
	["sunshineyellow", fromHex(0xfffd37)],
	["canaryyellow", fromHex(0xfffe40)],
	["greenishyellow", fromHex(0xcdfd02)],
	["neonyellow", fromHex(0xcfff04)],
	["limeyellow", fromHex(0xd0fe1d)],
	["greenyyellow", fromHex(0xc6f808)],
	["yellowygreen", fromHex(0xbff128)],
	["offyellow", fromHex(0xf1f33f)],
	["bananayellow", fromHex(0xfafe4b)],
	["lemon", fromHex(0xfdff52)],
	["canary", fromHex(0xfdff63)],
	["pear", fromHex(0xcbf85f)],
	["palelime", fromHex(0xbefd73)],
	["lightpeagreen", fromHex(0xc4fe82)],
	["lightyellowgreen", fromHex(0xccfd7f)],
	["pistachio", fromHex(0xc0fa8b)],
	["lightyellowishgreen", fromHex(0xc2ff89)],
	["pastelyellow", fromHex(0xfffe71)],
	["lightyellow", fromHex(0xfffe7a)],
	["banana", fromHex(0xffff7e)],
	["butter", fromHex(0xffff81)],
	["fadedyellow", fromHex(0xfeff7f)],
	["paleyellow", fromHex(0xffff84)],
	["straw", fromHex(0xfcf679)],
	["yellowishtan", fromHex(0xfcfc81)],
	["custard", fromHex(0xfffd78)],
	["butteryellow", fromHex(0xfffd74)],
	["yellowish", fromHex(0xfaee66)],
	["sandyyellow", fromHex(0xfdee73)],
	["manilla", fromHex(0xfffa86)],
	["wheat", fromHex(0xfbdd7e)],
	["yellowtan", fromHex(0xffe36e)],
	["sandyellow", fromHex(0xfce166)],
	["palegold", fromHex(0xfdde6c)],
	["lightgold", fromHex(0xfddc5c)],
	["sunnyyellow", fromHex(0xfff917)],
	["sunyellow", fromHex(0xffdf22)],
	["dandelion", fromHex(0xfedf08)],
	["sunfloweryellow", fromHex(0xffda03)],
	["pissyellow", fromHex(0xddd618)],
	["uglyyellow", fromHex(0xd0c101)],
	["mustardyellow", fromHex(0xd2bd0a)],
	["vomityellow", fromHex(0xc7c10c)],
	["dirtyyellow", fromHex(0xcdc50a)],
	["lightmustard", fromHex(0xf7d560)],
	["maize", fromHex(0xf4d054)],
	["sandy", fromHex(0xf1da7a)],
	["dullyellow", fromHex(0xeedc5b)],
	["slimegreen", fromHex(0x99cc04)],
	["babypukegreen", fromHex(0xb6c406)],
	["bile", fromHex(0xb5c306)],
	["greenyellow", fromHex(0xb5ce08)],
	["sicklyyellow", fromHex(0xd0e429)],
	["yellowishgreen", fromHex(0xb0dd16)],
	["brightolive", fromHex(0x9cbb04)],
	["mustardgreen", fromHex(0xa8b504)],
	["snot", fromHex(0xacbb0d)],
	["grossgreen", fromHex(0xa0bf16)],
	["snotgreen", fromHex(0x9dc100)],
	["darklime", fromHex(0x84b701)],
	["leaf", fromHex(0x71aa34)],
	["nastygreen", fromHex(0x70b23f)],
	["turtlegreen", fromHex(0x75b84f)],
	["booger", fromHex(0x9bb53c)],
	["lightolivegreen", fromHex(0xa4be5c)],
	["avocado", fromHex(0x90b134)],
	["ickygreen", fromHex(0x8fae22)],
	["avocadogreen", fromHex(0x87a922)],
	["peasoupgreen", fromHex(0x94a617)],
	["vomitgreen", fromHex(0x89a203)],
	["peagreen", fromHex(0x8eab12)],
	["barfgreen", fromHex(0x94ac02)],
	["boogergreen", fromHex(0x96b403)],
	["sicklygreen", fromHex(0x94b21c)],
	["pukegreen", fromHex(0x9aae07)],
	["sickgreen", fromHex(0x9db92c)],
	["pea", fromHex(0xa4bf20)],
	["puke", fromHex(0xa5a502)],
	["vomit", fromHex(0xa2a415)],
	["yellowbrown", fromHex(0xb79400)],
	["ocher", fromHex(0xbf9b0c)],
	["brownyellow", fromHex(0xb29705)],
	["gold", fromHex(0xdbb40c)],
	["darkyellow", fromHex(0xd5b60a)],
	["mustard", fromHex(0xceb301)],
	["brownishyellow", fromHex(0xc9b003)],
	["burntyellow", fromHex(0xd5ab09)],
	["pukeyellow", fromHex(0xc2be0e)],
	["oliveyellow", fromHex(0xc2b709)],
	["muddyyellow", fromHex(0xbfac05)],
	["yellowishbrown", fromHex(0x9b7a01)],
	["babypoop", fromHex(0x937c00)],
	["diarrhea", fromHex(0x9f8303)],
	["darkgold", fromHex(0xb59410)],
	["babypoo", fromHex(0xab9004)],
	["babyshitbrown", fromHex(0xad900d)],
	["darkmustard", fromHex(0xa88905)],
	["yellowybrown", fromHex(0xae8b0c)],
	["hazel", fromHex(0x8e7618)],
	["pukebrown", fromHex(0x947706)],
	["shitgreen", fromHex(0x758000)],
	["babypoopgreen", fromHex(0x8f9805)],
	["peasoup", fromHex(0x929901)],
	["darkyellowgreen", fromHex(0x728f02)],
	["uglygreen", fromHex(0x7a9703)],
	["babyshitgreen", fromHex(0x889717)],
	["swampgreen", fromHex(0x748500)],
	["mossygreen", fromHex(0x638b27)],
	["sapgreen", fromHex(0x5c8b15)],
	["kermitgreen", fromHex(0x5cb200)],
	["green", fromHex(0x15b01a)],
	["froggreen", fromHex(0x58bc08)],
	["applegreen", fromHex(0x76cd26)],
	["darklimegreen", fromHex(0x7ebd01)],
	["apple", fromHex(0x6ecb3c)],
	["leafygreen", fromHex(0x51b73b)],
	["grass", fromHex(0x5cac2d)],
	["grassgreen", fromHex(0x3f9b0b)],
	["leafgreen", fromHex(0x5ca904)],
	["grassygreen", fromHex(0x419c03)],
	["lawngreen", fromHex(0x4da409)],
	["truegreen", fromHex(0x089404)],
	["emeraldgreen", fromHex(0x028f1e)],
	["irishgreen", fromHex(0x019529)],
	["kellygreen", fromHex(0x02ab2e)],
	["shamrockgreen", fromHex(0x02c14d)],
	["darkgrassgreen", fromHex(0x388004)],
	["treegreen", fromHex(0x2a7e19)],
	["junglegreen", fromHex(0x048243)],
	["evergreen", fromHex(0x05472a)],
	["pinegreen", fromHex(0x0a481e)],
	["darkbluegreen", fromHex(0x005249)],
	["darkturquoise", fromHex(0x045c5a)],
	["pine", fromHex(0x2b5d34)],
	["spruce", fromHex(0x0a5f38)],
	["darkgreenblue", fromHex(0x1f6357)],
	["darkseagreen", fromHex(0x11875d)],
	["darkishgreen", fromHex(0x287c37)],
	["dirtygreen", fromHex(0x667e2c)],
	["camouflagegreen", fromHex(0x4b6113)],
	["deepgreen", fromHex(0x02590f)],
	["racinggreen", fromHex(0x014600)],
	["forest", fromHex(0x0b5509)],
	["bottlegreen", fromHex(0x044a05)],
	["britishracinggreen", fromHex(0x05480d)],
	["forestgreen", fromHex(0x06470c)],
	["darkgreen", fromHex(0x054907)],
	["navygreen", fromHex(0x35530a)],
	["armygreen", fromHex(0x4b5d16)],
	["darkolivegreen", fromHex(0x3c4d03)],
	["greenbrown", fromHex(0x544e03)],
	["olivebrown", fromHex(0x645403)],
	["mud", fromHex(0x735c12)],
	["greenishbrown", fromHex(0x696112)],
	["camogreen", fromHex(0x526525)],
	["muddygreen", fromHex(0x657432)],
	["olivedrab", fromHex(0x6f7632)],
	["militarygreen", fromHex(0x667c3e)],
	["greybrown", fromHex(0x7f7053)],
	["greyishbrown", fromHex(0x7a6a4f)],
	["gunmetal", fromHex(0x536267)],
	["charcoalgrey", fromHex(0x3c4142)],
	["darkgrey", fromHex(0x363737)],
	["charcoal", fromHex(0x343837)],
	["darkforestgreen", fromHex(0x002d04)],
	["black", fromHex(0x000000)],
	["almostblack", fromHex(0x070d0d)],
	["verydarkgreen", fromHex(0x062e03)],
	["forrestgreen", fromHex(0x154406)],
	["huntergreen", fromHex(0x0b4008)],
	["darkolive", fromHex(0x373e02)],
	["olivegreen", fromHex(0x677a04)],
	["mudgreen", fromHex(0x606602)],
	["brownishgreen", fromHex(0x6a6e09)],
	["murkygreen", fromHex(0x6c7a0e)],
	["olive", fromHex(0x6e750e)],
	["poopgreen", fromHex(0x6f7c00)],
	["brownygreen", fromHex(0x6f6c0a)],
	["browngreen", fromHex(0x706c11)],
	["uglybrown", fromHex(0x7d7103)],
	["poo", fromHex(0x8f7303)],
	["greenybrown", fromHex(0x696006)],
	["shitbrown", fromHex(0x7b5804)],
	["poopbrown", fromHex(0x7a5901)],
	["poobrown", fromHex(0x885f01)],
	["shit", fromHex(0x7f5f00)],
	["poop", fromHex(0x7f5e00)],
	["muddybrown", fromHex(0x886806)],
	["rawsienna", fromHex(0x9a6200)],
	["rawumber", fromHex(0xa75e09)],
	["warmbrown", fromHex(0x964e02)],
	["burntumber", fromHex(0xa0450e)],
	["sienna", fromHex(0xa9561e)],
	["orangishbrown", fromHex(0xb25f03)],
	["orangeybrown", fromHex(0xb16002)],
	["cinnamon", fromHex(0xac4f06)],
	["burntsiena", fromHex(0xb75203)],
	["burntsienna", fromHex(0xb04e0f)],
	["rustorange", fromHex(0xc45508)],
	["burntorange", fromHex(0xc04e01)],
	["brickorange", fromHex(0xc14a09)],
	["rust", fromHex(0xa83c09)],
	["russet", fromHex(0xa13905)],
	["darkorange", fromHex(0xc65102)],
	["burntred", fromHex(0x9f2305)],
	["auburn", fromHex(0x9a3001)],
	["chocolate", fromHex(0x3d1c02)],
	["chocolatebrown", fromHex(0x411900)],
	["reddybrown", fromHex(0x6e1005)],
	["blood", fromHex(0x770001)],
	["verydarkbrown", fromHex(0x1d0200)],
	["deepbrown", fromHex(0x410200)],
	["darkmaroon", fromHex(0x3c0008)],
	["mahogany", fromHex(0x4a0100)],
	["driedblood", fromHex(0x4b0101)],
	["merlot", fromHex(0x730039)],
	["claret", fromHex(0x680018)],
	["maroon", fromHex(0x650021)],
	["burgundy", fromHex(0x610023)],
	["darkbrown", fromHex(0x341c02)],
	["purplebrown", fromHex(0x673a3f)],
	["purplishbrown", fromHex(0x6b4247)],
	["brownishpurple", fromHex(0x76424e)],
	["darktaupe", fromHex(0x7f684e)],
	["earth", fromHex(0xa2653e)],
	["dullbrown", fromHex(0x876e4b)],
	["cocoa", fromHex(0x875f42)],
	["dirtbrown", fromHex(0x836539)],
	["dirt", fromHex(0x8a6e45)],
	["sepia", fromHex(0x985e2b)],
	["milkchocolate", fromHex(0x7f4e1e)],
	["mediumbrown", fromHex(0x7f5112)],
	["mudbrown", fromHex(0x60460f)],
	["brown", fromHex(0x653700)],
	["rustbrown", fromHex(0x8b3103)],
	["redbrown", fromHex(0x8b2e16)],
	["chestnut", fromHex(0x742802)],
	["reddishbrown", fromHex(0x7f2b0a)],
	["indianred", fromHex(0x850e04)],
	["darkred", fromHex(0x840000)],
	["brickred", fromHex(0x8f1402)],
	["brownred", fromHex(0x922b05)],
	["brownishred", fromHex(0x9e3623)],
	["brick", fromHex(0xa03623)],
	["dullred", fromHex(0xbb3f3f)],
	["dustyred", fromHex(0xb9484e)],
	["lightmaroon", fromHex(0xa24857)],
	["darkrose", fromHex(0xb5485d)],
	["darkmauve", fromHex(0x874c62)],
	["lightburgundy", fromHex(0xa8415b)],
	["winered", fromHex(0x7b0323)],
	["bordeaux", fromHex(0x7b002c)],
	["redpurple", fromHex(0x820747)],
	["wine", fromHex(0x80013f)],
	["redwine", fromHex(0x8c0034)],
	["violetred", fromHex(0xa50055)],
	["raspberry", fromHex(0xb00149)],
	["cranberry", fromHex(0x9e003a)],
	["berry", fromHex(0x990f4b)],
	["purplered", fromHex(0x990147)],
	["mulberry", fromHex(0x920a4e)],
	["reddishpurple", fromHex(0x910951)],
	["darkmagenta", fromHex(0x960056)],
	["darkfuchsia", fromHex(0x9d0759)],
	["deeppink", fromHex(0xcb0162)],
	["darkpink", fromHex(0xcb416b)],
	["deeprose", fromHex(0xc74767)],
	["purplishred", fromHex(0xb0054b)],
	["rosered", fromHex(0xbe013c)],
	["lipstickred", fromHex(0xc0022f)],
	["ruby", fromHex(0xca0147)],
	["lipstick", fromHex(0xd5174e)],
	["reddish", fromHex(0xc44240)],
	["cherry", fromHex(0xcf0234)],
	["scarlet", fromHex(0xbe0119)],
	["carmine", fromHex(0x9d0216)],
	["bloodred", fromHex(0x980002)],
	["crimson", fromHex(0x8c000f)],
	["rouge", fromHex(0xab1239)],
	["cerise", fromHex(0xde0c62)],
	["darkhotpink", fromHex(0xd90166)],
	["deepred", fromHex(0x9a0200)],
	["darkishred", fromHex(0xa90308)],
	["rustred", fromHex(0xaa2704)],
	["rustyred", fromHex(0xaf2f0d)],
	["red", fromHex(0xe50000)],
	["fireenginered", fromHex(0xfe0002)],
	["brightred", fromHex(0xff000d)],
	["cherryred", fromHex(0xf7022a)],
	["orangeyred", fromHex(0xfa4224)],
	["tomato", fromHex(0xef4026)],
	["vermillion", fromHex(0xf4320c)],
	["tomatored", fromHex(0xec2d01)],
	["orangishred", fromHex(0xf43605)],
	["redorange", fromHex(0xfd3c06)],
	["orangered", fromHex(0xfe420f)],
	["reddishorange", fromHex(0xf8481c)],
	["bloodorange", fromHex(0xfe4b03)],
	["brightorange", fromHex(0xff5b00)],
	["deeporange", fromHex(0xdc4d01)],
	["pinkishorange", fromHex(0xff724c)],
	["rustyorange", fromHex(0xcd5909)],
	["copper", fromHex(0xb66325)],
	["brownishorange", fromHex(0xcb7723)],
	["pumpkin", fromHex(0xe17701)],
	["brownyorange", fromHex(0xca6b02)],
	["orangebrown", fromHex(0xbe6400)],
	["brownorange", fromHex(0xb96902)],
	["umber", fromHex(0xb26400)],
	["dirtyorange", fromHex(0xc87606)],
	["caramel", fromHex(0xaf6f09)],
	["ochre", fromHex(0xbf9005)],
	["mustardbrown", fromHex(0xac7e04)],
	["bronze", fromHex(0xa87900)],
	["goldenbrown", fromHex(0xb27a01)],
	["squash", fromHex(0xf2ab15)],
	["yellowochre", fromHex(0xcb9d06)],
	["ocre", fromHex(0xc69c04)],
	["dullorange", fromHex(0xd8863b)],
	["dustyorange", fromHex(0xf0833a)],
	["fadedorange", fromHex(0xf0944d)],
	["pastelorange", fromHex(0xff964f)],
	["orangeish", fromHex(0xfd8d49)],
	["orangish", fromHex(0xfc824a)],
	["tangerine", fromHex(0xff9408)],
	["orange", fromHex(0xf97306)],
	["pumpkinorange", fromHex(0xfb7d07)],
	["lightorange", fromHex(0xfdaa48)],
	["butterscotch", fromHex(0xfdb147)],
	["apricot", fromHex(0xffb16d)],
	["paleorange", fromHex(0xffa756)],
	["macaroniandcheese", fromHex(0xefb435)],
	["goldenrod", fromHex(0xf9bc08)],
	["golden", fromHex(0xf5bf03)],
	["marigold", fromHex(0xfcc006)],
	["orangeyyellow", fromHex(0xfdb915)],
	["mango", fromHex(0xffa62b)],
	["yellowishorange", fromHex(0xffab0f)],
	["orangeyellow", fromHex(0xffad01)],
	["yelloworange", fromHex(0xfcb001)],
	["amber", fromHex(0xfeb308)],
	["saffron", fromHex(0xfeb209)],
	["sunflower", fromHex(0xffc512)],
	["goldenyellow", fromHex(0xfec615)],
	["lightpeach", fromHex(0xffd8b1)],
	["lightpink", fromHex(0xffd1df)],
	["palepink", fromHex(0xffcfdc)],
	["palerose", fromHex(0xfdc1c5)],
	["lightrose", fromHex(0xffc5cb)],
	["peach", fromHex(0xffb07c)],
	["palesalmon", fromHex(0xffb19a)],
	["lightsalmon", fromHex(0xfea993)],
	["babypink", fromHex(0xffb7ce)],
	["pastelpink", fromHex(0xffbacd)],
	["softpink", fromHex(0xfdb0c0)],
	["powderpink", fromHex(0xffb2d0)],
	["pinky", fromHex(0xfc86aa)],
	["rosa", fromHex(0xfe86a4)],
	["pigpink", fromHex(0xe78ea5)],
	["dustypink", fromHex(0xd58a94)],
	["dullpink", fromHex(0xd5869d)],
	["blushpink", fromHex(0xfe828c)],
	["rosepink", fromHex(0xf7879a)],
	["melon", fromHex(0xff7855)],
	["darkpeach", fromHex(0xde7e5d)],
	["peachypink", fromHex(0xff9a8a)],
	["blush", fromHex(0xf29e8e)],
	["pinkishtan", fromHex(0xd99b82)],
	["sandbrown", fromHex(0xcba560)],
	["camel", fromHex(0xc69f59)],
	["fawn", fromHex(0xcfaf7b)],
	["pinkishgrey", fromHex(0xc8aca9)],
	["fadedpink", fromHex(0xde9dac)],
	["greyishpink", fromHex(0xc88d94)],
	["lightmauve", fromHex(0xc292a1)],
	["greypink", fromHex(0xc3909b)],
	["mushroom", fromHex(0xba9e88)],
	["brownishpink", fromHex(0xc27e79)],
	["pinkishbrown", fromHex(0xb17261)],
	["brownish", fromHex(0x9c6d57)],
	["mauve", fromHex(0xae7181)],
	["reddishgrey", fromHex(0x997570)],
	["mocha", fromHex(0x9d7651)],
	["puce", fromHex(0xa57e52)],
	["palebrown", fromHex(0xb1916e)],
	["darktan", fromHex(0xaf884a)],
	["coffee", fromHex(0xa6814c)],
	["lightbrown", fromHex(0xad8150)],
	["tanbrown", fromHex(0xab7e4c)],
	["claybrown", fromHex(0xb2713d)],
	["leather", fromHex(0xac7434)],
	["clay", fromHex(0xb66a50)],
	["adobe", fromHex(0xbd6c48)],
	["terracota", fromHex(0xcb6843)],
	["terracotta", fromHex(0xc9643b)],
	["darksalmon", fromHex(0xc85a53)],
	["darkcoral", fromHex(0xcf524e)],
	["rose", fromHex(0xcf6275)],
	["duskyrose", fromHex(0xba6873)],
	["dustyrose", fromHex(0xc0737a)],
	["dirtypink", fromHex(0xca7b80)],
	["pinkish", fromHex(0xd46a7e)],
	["mutedpink", fromHex(0xd1768f)],
	["duskypink", fromHex(0xcc7a8b)],
	["oldpink", fromHex(0xc77986)],
	["oldrose", fromHex(0xc87f89)],
	["uglypink", fromHex(0xcd7584)],
	["darkishpink", fromHex(0xda467d)],
	["warmpink", fromHex(0xfb5581)],
	["mediumpink", fromHex(0xf36196)],
	["rosypink", fromHex(0xf6688e)],
	["carnationpink", fromHex(0xff7fa7)],
	["carnation", fromHex(0xfd798f)],
	["salmonpink", fromHex(0xfe7b7c)],
	["salmon", fromHex(0xff796c)],
	["orangepink", fromHex(0xff6f52)],
	["coral", fromHex(0xfc5a50)],
	["palered", fromHex(0xd9544d)],
	["pastelred", fromHex(0xdb5856)],
	["fadedred", fromHex(0xd3494e)],
	["coralpink", fromHex(0xff6163)],
	["watermelon", fromHex(0xfd4659)],
	["lightred", fromHex(0xff474c)],
	["grapefruit", fromHex(0xfd5956)],
	["strawberry", fromHex(0xfb2943)],
	["neonred", fromHex(0xff073a)],
	["pinkishred", fromHex(0xf10c45)],
	["pinkyred", fromHex(0xfc2647)],
	["lightishred", fromHex(0xfe2f4a)],
	["redpink", fromHex(0xfa2a55)],
	["reddishpink", fromHex(0xfe2c54)],
	["pinkred", fromHex(0xf5054f)],
	["strongpink", fromHex(0xff0789)],
	["electricpink", fromHex(0xff0490)],
	["hotpink", fromHex(0xff028d)],
	["neonpink", fromHex(0xfe019a)],
	["shockingpink", fromHex(0xfe02a2)],
	["barbiepink", fromHex(0xfe46a5)],
	["brightpink", fromHex(0xfe01b1)],
	["candypink", fromHex(0xff63e9)],
	["violetpink", fromHex(0xfb5ffc)],
	["lightmagenta", fromHex(0xfa5ff7)],
	["pinkpurple", fromHex(0xef1de7)],
	["brightmagenta", fromHex(0xff08e8)],
	["fuchsia", fromHex(0xed0dd9)],
	["hotmagenta", fromHex(0xf504c9)],
	["purplepink", fromHex(0xd725de)],
	["pinkishpurple", fromHex(0xd648d7)],
	["purpleypink", fromHex(0xc83cb9)],
	["pinkypurple", fromHex(0xc94cbe)],
	["purpleishpink", fromHex(0xdf4ec8)],
	["lightpurple", fromHex(0xbf77f6)],
	["purplypink", fromHex(0xf075e6)],
	["pink", fromHex(0xff81c0)],
	["bubblegum", fromHex(0xff6cb5)],
	["bubblegumpink", fromHex(0xff69af)],
	["palemagenta", fromHex(0xd767ad)],
	["purplishpink", fromHex(0xce5dae)],
	["orchid", fromHex(0xc875c4)],
	["wisteria", fromHex(0xa87dc2)],
	["softpurple", fromHex(0xa66fb5)],
	["darklilac", fromHex(0x9c6da5)],
	["amethyst", fromHex(0x9b5fc0)],
	["lavenderblue", fromHex(0x8b88f8)],
	["deeplilac", fromHex(0x966ebd)],
	["perrywinkle", fromHex(0x8f8ce7)],
	["softblue", fromHex(0x6488ea)],
	["darkskyblue", fromHex(0x448ee4)],
	["purpleygrey", fromHex(0x947e94)],
	["greyishpurple", fromHex(0x887191)],
	["fadedpurple", fromHex(0x916e99)],
	["heather", fromHex(0xa484ac)],
	["dustylavender", fromHex(0xac86a8)],
	["periwinkleblue", fromHex(0x8f99fb)],
	["lilac", fromHex(0xcea2fd)],
	["pastelpurple", fromHex(0xcaa0ff)],
	["babypurple", fromHex(0xca9bf7)],
	["lavender", fromHex(0xc79fef)],
	["liliac", fromHex(0xc48efd)],
	["palepurple", fromHex(0xb790d4)],
	["lavenderpink", fromHex(0xdd85d7)],
	["lightlavendar", fromHex(0xefc0fe)],
	["paleviolet", fromHex(0xceaefa)],
	["lightviolet", fromHex(0xd6b4fc)],
	["pastelblue", fromHex(0xa2bffe)],
	["lightperiwinkle", fromHex(0xc1c6fc)],
	["lightlavender", fromHex(0xdfc5fe)],
	["palelilac", fromHex(0xe4cbff)],
	["palelavender", fromHex(0xeecffe)],
	["lightlilac", fromHex(0xedc8ff)],
	["verylightpurple", fromHex(0xf6cefc)],
	["palemauve", fromHex(0xfed0fc)],
	["dodgerblue", fromHex(0x3e82fc)],
	["lightishblue", fromHex(0x3d7afd)],
	["clearblue", fromHex(0x247afd)],
	["deepskyblue", fromHex(0x0d75f8)],
	["periwinkle", fromHex(0x8e82fe)],
	["cornflower", fromHex(0x6a79f7)],
	["lighturple", fromHex(0xb36ff6)],
	["easterpurple", fromHex(0xc071fe)],
	["lightishpurple", fromHex(0xa552e6)],
	["lighterpurple", fromHex(0xa55af4)],
	["brightlilac", fromHex(0xc95efb)],
	["brightlavender", fromHex(0xc760ff)],
	["heliotrope", fromHex(0xd94ff5)],
	["hotpurple", fromHex(0xcb00f5)],
	["brightviolet", fromHex(0xad0afd)],
	["vividpurple", fromHex(0x9900fa)],
	["purplishblue", fromHex(0x601ef9)],
	["purpleishblue", fromHex(0x6140ef)],
	["purpleyblue", fromHex(0x5f34e7)],
	["lightroyalblue", fromHex(0x3a2efe)],
	["vividblue", fromHex(0x152eff)],
	["richblue", fromHex(0x021bf9)],
	["vibrantblue", fromHex(0x0339f8)],
	["trueblue", fromHex(0x010fcc)],
	["ultramarineblue", fromHex(0x1805db)],
	["pureblue", fromHex(0x0203e2)],
	["strongblue", fromHex(0x0c06f7)],
	["primaryblue", fromHex(0x0804f9)],
	["purplyblue", fromHex(0x661aee)],
	["blueviolet", fromHex(0x5d06e9)],
	["bluepurple", fromHex(0x5a06ef)],
	["violetblue", fromHex(0x510ac9)],
	["indigoblue", fromHex(0x3a18b1)],
	["blurple", fromHex(0x5539cc)],
	["purpleblue", fromHex(0x5d21d0)],
	["burple", fromHex(0x6832e3)],
	["bluishpurple", fromHex(0x703be7)],
	["purpley", fromHex(0x8756e4)],
	["vibrantpurple", fromHex(0xad03de)],
	["violet", fromHex(0x9a0eea)],
	["electricpurple", fromHex(0xaa23ff)],
	["neonpurple", fromHex(0xbc13fe)],
	["brightpurple", fromHex(0xbe03fd)],
	["magenta", fromHex(0xc20078)],
	["deepmagenta", fromHex(0xa0025c)],
	["redviolet", fromHex(0x9e0168)],
	["purple", fromHex(0x7e1e9c)],
	["purply", fromHex(0x983fb2)],
	["warmpurple", fromHex(0x952e8f)],
	["barneypurple", fromHex(0xa00498)],
	["barney", fromHex(0xac1db8)],
	["uglypurple", fromHex(0xa442a0)],
	["mediumpurple", fromHex(0x9e43a2)],
	["deeplavender", fromHex(0x8d5eb7)],
	["iris", fromHex(0x6258c4)],
	["darkishpurple", fromHex(0x751973)],
	["velvet", fromHex(0x750851)],
	["grape", fromHex(0x6c3461)],
	["bruise", fromHex(0x7e4071)],
	["lighteggplant", fromHex(0x894585)],
	["purpleish", fromHex(0x98568d)],
	["purplish", fromHex(0x94568c)],
	["lightplum", fromHex(0x9d5783)],
	["dullpurple", fromHex(0x84597e)],
	["duskypurple", fromHex(0x895b7b)],
	["dustypurple", fromHex(0x825f87)],
	["mutedpurple", fromHex(0x805b87)],
	["darklavender", fromHex(0x856798)],
	["greypurple", fromHex(0x826d8c)],
	["purplegrey", fromHex(0x866f85)],
	["purplishgrey", fromHex(0x7a687f)],
	["dirtypurple", fromHex(0x734a65)],
	["dusk", fromHex(0x4e5481)],
	["duskblue", fromHex(0x26538d)],
	["twilight", fromHex(0x4e518b)],
	["twilightblue", fromHex(0x0a437a)],
	["darkishblue", fromHex(0x014182)],
	["blueberry", fromHex(0x464196)],
	["cobalt", fromHex(0x1e488f)],
	["duskyblue", fromHex(0x475f94)],
	["denimblue", fromHex(0x3b5b92)],
	["frenchblue", fromHex(0x436bad)],
	["midblue", fromHex(0x276ab3)],
	["mediumblue", fromHex(0x2c6fbb)],
	["cornflowerblue", fromHex(0x5170d7)],
	["ceruleanblue", fromHex(0x056eee)],
	["electricblue", fromHex(0x0652ff)],
	["darkperiwinkle", fromHex(0x665fd1)],
	["lightindigo", fromHex(0x6d5acf)],
	["brightblue", fromHex(0x0165fc)],
	["azul", fromHex(0x1d5dec)],
	["warmblue", fromHex(0x4b57db)],
	["blueypurple", fromHex(0x6241c7)],
	["blueblue", fromHex(0x2242c7)],
	["bluewithahintofpurple", fromHex(0x533cc6)],
	["sapphire", fromHex(0x2138ab)],
	["blue", fromHex(0x0343df)],
	["royal", fromHex(0x0c1793)],
	["indigo", fromHex(0x380282)],
	["deepblue", fromHex(0x040273)],
	["darkroyalblue", fromHex(0x02066f)],
	["midnightblue", fromHex(0x020035)],
	["navyblue", fromHex(0x001146)],
	["marine", fromHex(0x042e60)],
	["marineblue", fromHex(0x01386a)],
	["verydarkblue", fromHex(0x000133)],
	["darknavyblue", fromHex(0x00022e)],
	["midnight", fromHex(0x03012d)],
	["darknavy", fromHex(0x000435)],
	["navy", fromHex(0x01153e)],
	["darkplum", fromHex(0x3f012c)],
	["eggplant", fromHex(0x380835)],
	["aubergine", fromHex(0x3d0734)],
	["midnightpurple", fromHex(0x280137)],
	["darkpurple", fromHex(0x35063e)],
	["verydarkpurple", fromHex(0x2a0134)],
	["darkviolet", fromHex(0x34013f)],
	["deeppurple", fromHex(0x36013f)],
	["plum", fromHex(0x580f41)],
	["grapepurple", fromHex(0x5d1451)],
	["deepviolet", fromHex(0x490648)],
	["eggplantpurple", fromHex(0x430541)],
	["plumpurple", fromHex(0x4e0550)],
	["royalpurple", fromHex(0x4b006e)],
	["darkindigo", fromHex(0x1f0954)],
	["darkblue", fromHex(0x030764)],
	["nightblue", fromHex(0x040348)],
	["richpurple", fromHex(0x720058)],
	["cobaltblue", fromHex(0x030aa7)],
	["ultramarine", fromHex(0x2000b1)],
	["royalblue", fromHex(0x0504aa)]
]);

export default xkcdNames;
