import {
	StandardIlluminant,
	adobeToXyz,
	cmyToCmyk,
	cmyToRgb,
	cmykToCmy,
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
	rgbToHsl,
	rgbToHsv,
	rgbToXyz,
	xyzToAdobe,
	xyzToHunter,
	xyzToLab,
	xyzToLuv,
	xyzToRgb,
	xyzToYxy,
	yxyToXyz
} from "../dist/index.js";
import { describe, it } from "node:test";
import { equal, ok } from "node:assert/strict";

const hex = 0x50c878;
const rgb = [0x50, 0xc8, 0x78];
const adobe = [128.594, 198.675, 123.736];
const hsl = [0.38889, 0.52174, 0.54902];
const hsv = [0.38889, 0.6, 0.78431];
// `const hsi = [0.38889, 0.4, 0.52288];` // TODO
const cmy = [0.68627, 0.21569, 0.52941];
const cmyk = [0.6, 0, 0.4, 0.21569];
const xyz = [27.351, 44.367, 24.888];
const yxy = [44.367, 0.28311, 0.45926];
const lab = [72.473, -51.25, 30.255];
const lchab = [72.473, 59.515, 149.445];
const luv = [72.473, -52.102, 48.912];
const lchuv = [72.473, 71.464, 136.809];
const hunter = [66.609, -40.344, 21.649];
const hunterC = [66.609, -43.271, 24.471];

const approximatelyEqual = (actual, expected, delta) => {
	ok(Math.abs(actual - expected) < delta);
};

const approximatelyEqualArray = (actual, expected, delta) => {
	ok(Array.isArray(actual) && Array.isArray(expected));
	for (let i = 0; i < actual.length; i++) {
		approximatelyEqual(actual[i], expected[i], delta);
	}
};

void describe("adobeToXyz", () => {
	void it("should return `adobeToXyz(adobe) = xyz`", () => {
		approximatelyEqualArray(adobeToXyz(adobe), xyz, 0.01);
	});
});

void describe("cmykToCmy", () => {
	void it("should return `cmykToCmy(cmyk) = cmy`", () => {
		approximatelyEqualArray(cmykToCmy(cmyk), cmy, 0.0001);
	});
});

void describe("cmyToCmyk", () => {
	void it("should return `cmyToCmyk(cmy) = cmyk`", () => {
		approximatelyEqualArray(cmyToCmyk(cmy), cmyk, 0.0001);
	});
});

void describe("cmyToRgb", () => {
	void it("should return `cmyToRgb(cmy) = rgb`", () => {
		approximatelyEqualArray(cmyToRgb(cmy), rgb, 1);
	});
});

void describe("hexToRgb", () => {
	void it("should return `hexToRgb(hex) = rgb`", () => {
		approximatelyEqualArray(hexToRgb(hex), rgb, 1);
	});
});

void describe("hslToRgb", () => {
	void it("should return `hslToRgb(hsl) = rgb`", () => {
		approximatelyEqualArray(hslToRgb(hsl), rgb, 1);
	});
});

void describe("hsvToRgb", () => {
	void it("should return `hsvToRgb(hsv) = rgb`", () => {
		approximatelyEqualArray(hsvToRgb(hsv), rgb, 1);
	});
});

void describe("hunterToXyz", () => {
	void it("should return `hunterToXyz(hunter) = xyz`", () => {
		approximatelyEqualArray(hunterToXyz(hunter), xyz, 0.01);
	});
});

void describe("labToLch", () => {
	void it("should return `labToLch(lab) = lchab`", () => {
		approximatelyEqualArray(labToLch(lab), lchab, 0.01);
	});

	void it("should return `labToLch(luv) = lchuv`", () => {
		approximatelyEqualArray(labToLch(luv), lchuv, 0.01);
	});
});

void describe("labToXyz", () => {
	void it("should return `labToXyz(lab) = xyz`", () => {
		approximatelyEqualArray(labToXyz(lab), xyz, 0.01);
	});
});

void describe("lchToLab", () => {
	void it("should return `lchToLab(lchab) = lab`", () => {
		approximatelyEqualArray(lchToLab(lchab), lab, 0.01);
	});

	void it("should return `lchToLab(lchuv) = luv`", () => {
		approximatelyEqualArray(lchToLab(lchuv), luv, 0.01);
	});
});

void describe("luvToXyz", () => {
	void it("should return `luvToXyz(luv) = xyz`", () => {
		approximatelyEqualArray(luvToXyz(luv), xyz, 0.01);
	});
});

void describe("rgbToCmy", () => {
	void it("should return `rgbToCmy(rgb) = cmy`", () => {
		approximatelyEqualArray(rgbToCmy(rgb), cmy, 0.0001);
	});
});

void describe("rgbToHex", () => {
	void it("should return `rgbToHex(rgb) = hex`", () => {
		equal(rgbToHex(rgb), hex);
	});
});

void describe("rgbToHsl", () => {
	void it("should return `rgbToHsl(rgb) = hsl`", () => {
		approximatelyEqualArray(rgbToHsl(rgb), hsl, 0.0001);
	});
});

void describe("rgbToHsv", () => {
	void it("should return `rgbToHsv(rgb) = hsv`", () => {
		approximatelyEqualArray(rgbToHsv(rgb), hsv, 0.0001);
	});
});

void describe("rgbToXyz", () => {
	void it("should return `rgbToXyz(rgb) = xyz`", () => {
		approximatelyEqualArray(rgbToXyz(rgb), xyz, 0.01);
	});
});

void describe("xyzToAdobe", () => {
	void it("should return `xyzToAdobe(xyz) = adobe`", () => {
		approximatelyEqualArray(xyzToAdobe(xyz), adobe, 0.01);
	});
});

void describe("xyzToHunter", () => {
	void it("should return `xyzToHunter(xyz) = hunter`", () => {
		approximatelyEqualArray(xyzToHunter(xyz), hunter, 0.01);
	});

	void it("should return `xyzToHunter(xyz, C_2) = hunterC`", () => {
		approximatelyEqualArray(
			xyzToHunter(xyz, getReference(StandardIlluminant.C_2)),
			hunterC,
			0.1
		);
	});
});

void describe("xyzToLab", () => {
	void it("should return `xyzToLab(xyz) = lab`", () => {
		approximatelyEqualArray(xyzToLab(xyz), lab, 0.01);
	});
});

void describe("xyzToLuv", () => {
	void it("should return `xyzToLuv(xyz) = luv`", () => {
		approximatelyEqualArray(xyzToLuv(xyz), luv, 0.01);
	});
});

void describe("xyzToRgb", () => {
	void it("should return `xyzToRgb(xyz) = rgb`", () => {
		approximatelyEqualArray(xyzToRgb(xyz), rgb, 1);
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
		approximatelyEqualArray(yxyToXyz(yxy), xyz, 0.01);
	});
});
