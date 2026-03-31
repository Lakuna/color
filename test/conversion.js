import { strictEqual } from "node:assert/strict";
import { describe, it } from "node:test";

import {
	adobeToXyz,
	cmykToCmy,
	cmyToCmyk,
	cmyToRgb,
	getReference,
	hexToRgb,
	hslToRgb,
	hsvToRgb,
	hunterToXyz,
	labToLch,
	labToXyz,
	lchToLab,
	luvToXyz,
	rgbToCmy,
	rgbToHex,
	rgbToHsi,
	rgbToHsl,
	rgbToHsv,
	rgbToXyz,
	StandardIlluminant,
	xyzToAdobe,
	xyzToHunter,
	xyzToLab,
	xyzToLuv,
	xyzToRgb,
	xyzToYxy,
	yxyToXyz
} from "../dist/index.js";
import { approximatelyEqual, approximatelyEqualIterable } from "./shared.js";

const hex = 0x50c878; // Base
const rgb = [0x50, 0xc8, 0x78]; // Base
const adobe = [128.594, 198.675, 123.736];
const hsl = [0.38889, 0.52174, 0.54902];
const hsv = [0.38889, 0.6, 0.78431];
const hsi = [0.38889, 0.4, 0.52288];
const cmy = [0.68627, 0.21569, 0.52941];
const cmyk = [0.6, 0, 0.4, 0.21569];
const xyz = [27.351, 44.367, 24.888]; // ColorHexa: `[27.351, 44.368, 24.891]`.
const yxy = [44.367, 0.28311, 0.45926]; // ColorHexa: `[44.368, 0.283, 0.459]`.
const lab = [72.473, -51.25, 30.255]; // ColorHexa: `[72.474, -51.25, 30.251]`.
const lchab = [72.473, 59.515, 149.445]; // ColorHexa: `[72.474, 59.512, 149.448]`.
const luv = [72.473, -52.102, 48.912]; // ColorHexa: `[72.474, -52.103, 48.908]`.
const lchuv = [72.473, 71.464, 136.809];
const hunter = [66.609, -40.344, 21.649]; // EasyRGB
const hunterC = [66.609, -43.271, 24.471]; // ColorHexa

void describe("adobeToXyz", () => {
	void it("should return `adobeToXyz(adobe) = xyz`", () => {
		approximatelyEqualIterable(adobeToXyz(adobe), xyz, 0.01);
	});
});

void describe("cmykToCmy", () => {
	void it("should return `cmykToCmy(cmyk) = cmy`", () => {
		approximatelyEqualIterable(cmykToCmy(cmyk), cmy, 0.0001);
	});
});

void describe("cmyToCmyk", () => {
	void it("should return `cmyToCmyk(cmy) = cmyk`", () => {
		approximatelyEqualIterable(cmyToCmyk(cmy), cmyk, 0.0001);
	});
});

void describe("cmyToRgb", () => {
	void it("should return `cmyToRgb(cmy) = rgb`", () => {
		approximatelyEqualIterable(cmyToRgb(cmy), rgb, 1);
	});
});

void describe("hexToRgb", () => {
	void it("should return `hexToRgb(hex) = rgb`", () => {
		approximatelyEqualIterable(hexToRgb(hex), rgb, 1);
	});
});

void describe("hslToRgb", () => {
	void it("should return `hslToRgb(hsl) = rgb`", () => {
		approximatelyEqualIterable(hslToRgb(hsl), rgb, 1);
	});
});

void describe("hsvToRgb", () => {
	void it("should return `hsvToRgb(hsv) = rgb`", () => {
		approximatelyEqualIterable(hsvToRgb(hsv), rgb, 1);
	});
});

void describe("hunterToXyz", () => {
	void it("should return `hunterToXyz(hunter) = xyz`", () => {
		approximatelyEqualIterable(hunterToXyz(hunter), xyz, 0.01);
	});
});

void describe("labToLch", () => {
	void it("should return `labToLch(lab) = lchab`", () => {
		approximatelyEqualIterable(labToLch(lab), lchab, 0.01);
	});

	void it("should return `labToLch(luv) = lchuv`", () => {
		approximatelyEqualIterable(labToLch(luv), lchuv, 0.01);
	});
});

void describe("labToXyz", () => {
	void it("should return `labToXyz(lab) = xyz`", () => {
		approximatelyEqualIterable(labToXyz(lab), xyz, 0.01);
	});
});

void describe("lchToLab", () => {
	void it("should return `lchToLab(lchab) = lab`", () => {
		approximatelyEqualIterable(lchToLab(lchab), lab, 0.01);
	});

	void it("should return `lchToLab(lchuv) = luv`", () => {
		approximatelyEqualIterable(lchToLab(lchuv), luv, 0.01);
	});
});

void describe("luvToXyz", () => {
	void it("should return `luvToXyz(luv) = xyz`", () => {
		approximatelyEqualIterable(luvToXyz(luv), xyz, 0.01);
	});
});

void describe("rgbToCmy", () => {
	void it("should return `rgbToCmy(rgb) = cmy`", () => {
		approximatelyEqualIterable(rgbToCmy(rgb), cmy, 0.0001);
	});
});

void describe("rgbToHex", () => {
	void it("should return `rgbToHex(rgb) = hex`", () => {
		strictEqual(rgbToHex(rgb), hex);
	});
});

void describe("rgbToHsi", () => {
	void it("should return `rgbToHsi(rgb) = hsi`", () => {
		approximatelyEqualIterable(rgbToHsi(rgb), hsi, 0.0001);
	});
});

void describe("rgbToHsl", () => {
	void it("should return `rgbToHsl(rgb) = hsl`", () => {
		approximatelyEqualIterable(rgbToHsl(rgb), hsl, 0.0001);
	});
});

void describe("rgbToHsv", () => {
	void it("should return `rgbToHsv(rgb) = hsv`", () => {
		approximatelyEqualIterable(rgbToHsv(rgb), hsv, 0.0001);
	});
});

void describe("rgbToXyz", () => {
	void it("should return `rgbToXyz(rgb) = xyz`", () => {
		approximatelyEqualIterable(rgbToXyz(rgb), xyz, 0.01);
	});
});

void describe("xyzToAdobe", () => {
	void it("should return `xyzToAdobe(xyz) = adobe`", () => {
		approximatelyEqualIterable(xyzToAdobe(xyz), adobe, 0.01);
	});
});

void describe("xyzToHunter", () => {
	void it("should return `xyzToHunter(xyz) = hunter`", () => {
		approximatelyEqualIterable(xyzToHunter(xyz), hunter, 0.01);
	});

	void it("should return `xyzToHunter(xyz, C_2) = hunterC`", () => {
		approximatelyEqualIterable(
			xyzToHunter(xyz, getReference(StandardIlluminant.C_2)),
			hunterC,
			0.1
		);
	});
});

void describe("xyzToLab", () => {
	void it("should return `xyzToLab(xyz) = lab`", () => {
		approximatelyEqualIterable(xyzToLab(xyz), lab, 0.01);
	});
});

void describe("xyzToLuv", () => {
	void it("should return `xyzToLuv(xyz) = luv`", () => {
		approximatelyEqualIterable(xyzToLuv(xyz), luv, 0.01);
	});
});

void describe("xyzToRgb", () => {
	void it("should return `xyzToRgb(xyz) = rgb`", () => {
		approximatelyEqualIterable(xyzToRgb(xyz), rgb, 1);
	});
});

void describe("xyzToYxy", () => {
	void it("should return `xyzToYxy(xyz) = yxy`", () => {
		const [bY, sX, sY] = xyzToYxy(xyz);
		approximatelyEqual(bY, yxy[0], 0.01);
		approximatelyEqual(sX, yxy[1], 0.0001);
		approximatelyEqual(sY, yxy[2], 0.0001);
	});
});

void describe("yxyToXyz", () => {
	void it("should return `yxyToXyz(yxy) = xyz`", () => {
		approximatelyEqualIterable(yxyToXyz(yxy), xyz, 0.01);
	});
});
