import {
	adobeToXyz,
	cmyToCmyk,
	cmyToRgb,
	cmykToCmy,
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

const emeraldRgb = hexToRgb(0x50c878);
const emeraldXyz = rgbToXyz(emeraldRgb);
const emeraldAdobe = xyzToAdobe(emeraldXyz);
const emeraldCmy = rgbToCmy(emeraldRgb);
const emeraldCmyk = cmyToCmyk(emeraldCmy);
const emeraldHsl = rgbToHsl(emeraldRgb);
const emeraldHsv = rgbToHsv(emeraldRgb);
const emeraldHunter = xyzToHunter(emeraldXyz);
const emeraldLab = xyzToLab(emeraldXyz);
const emeraldLchab = labToLch(emeraldLab);
const emeraldLuv = xyzToLuv(emeraldXyz);
const emeraldLchuv = labToLch(emeraldLuv);
const emeraldYxy = xyzToYxy(emeraldXyz);

const approximatelyEqual = (actual, expected, delta) => {
	ok(Math.abs(actual - expected) < delta);
};

void describe("adobeToXyz", () => {
	void it("should return `adobeToXyz(emeraldAdobe) = [27.351, 44.367, 24.888]`", () => {
		const [x, y, z] = adobeToXyz(emeraldAdobe);
		approximatelyEqual(x, 27.351, 0.01);
		approximatelyEqual(y, 44.367, 0.01);
		approximatelyEqual(z, 24.888, 0.01);
	});
});

void describe("cmykToCmy", () => {
	void it("should return `cmykToCmy(emeraldCmyk) = [0.68627, 0.21569, 0.52941]`", () => {
		const [c, m, y] = cmykToCmy(emeraldCmyk);
		approximatelyEqual(c, 0.68627, 0.0001);
		approximatelyEqual(m, 0.21569, 0.0001);
		approximatelyEqual(y, 0.52941, 0.0001);
	});
});

void describe("cmyToCmyk", () => {
	void it("should return `cmyToCmyk(emeraldCmy) = [0.60000, 0.00000, 0.40000, 0.21569]`", () => {
		const [c, m, y, k] = cmyToCmyk(emeraldCmy);
		approximatelyEqual(c, 0.6, 0.0001);
		approximatelyEqual(m, 0, 0.0001);
		approximatelyEqual(y, 0.4, 0.0001);
		approximatelyEqual(k, 0.21569, 0.0001);
	});
});

void describe("cmyToRgb", () => {
	void it("should return `cmyToRgb(emeraldCmy) = [80, 200, 120]`", () => {
		const [r, g, b] = cmyToRgb(emeraldCmy);
		approximatelyEqual(r, 80, 0.01);
		approximatelyEqual(g, 200, 0.01);
		approximatelyEqual(b, 120, 0.01);
	});
});

void describe("hexToRgb", () => {
	void it("should return `hexToRgb(0x50c878) = [80, 200, 120]`", () => {
		const [r, g, b] = hexToRgb(0x50c878);
		approximatelyEqual(r, 80, 0.01);
		approximatelyEqual(g, 200, 0.01);
		approximatelyEqual(b, 120, 0.01);
	});
});

void describe("hslToRgb", () => {
	void it("should return `hslToRgb(emeraldHsl) = [80, 200, 120]`", () => {
		const [r, g, b] = hslToRgb(emeraldHsl);
		approximatelyEqual(r, 80, 0.01);
		approximatelyEqual(g, 200, 0.01);
		approximatelyEqual(b, 120, 0.01);
	});
});

void describe("hsvToRgb", () => {
	void it("should return `hsvToRgb(emeraldHsv) = [80, 200, 120]`", () => {
		const [r, g, b] = hsvToRgb(emeraldHsv);
		approximatelyEqual(r, 80, 0.01);
		approximatelyEqual(g, 200, 0.01);
		approximatelyEqual(b, 120, 0.01);
	});
});

void describe("hunterToXyz", () => {
	void it("should return `hunterToXyz(emeraldHunter) = [27.351, 44.367, 24.888]`", () => {
		const [x, y, z] = hunterToXyz(emeraldHunter);
		approximatelyEqual(x, 27.351, 0.01);
		approximatelyEqual(y, 44.367, 0.01);
		approximatelyEqual(z, 24.888, 0.01);
	});
});

void describe("labToLch", () => {
	void it("should return `labToLch(emeraldLab) = [72.473, 59.515, 149.445]`", () => {
		const [l, c, h] = labToLch(emeraldLab);
		approximatelyEqual(l, 72.473, 0.01);
		approximatelyEqual(c, 59.515, 0.01);
		approximatelyEqual(h, 149.445, 0.01);
	});
});

void describe("labToXyz", () => {
	void it("should return `labToXyz(emeraldLab) = [27.351, 44.367, 24.888]`", () => {
		const [x, y, z] = labToXyz(emeraldLab);
		approximatelyEqual(x, 27.351, 0.01);
		approximatelyEqual(y, 44.367, 0.01);
		approximatelyEqual(z, 24.888, 0.01);
	});
});

void describe("lchToLab", () => {
	void it("should return `lchToLab(emeraldLchab) = [72.473, -51.250, 30.255]`", () => {
		const [l, a, b] = lchToLab(emeraldLchab);
		approximatelyEqual(l, 72.473, 0.01);
		approximatelyEqual(a, -51.25, 0.01);
		approximatelyEqual(b, 30.255, 0.01);
	});

	void it("should return `lchToLab(emeraldLchuv) = [72.473, -52.102, 48.912]`", () => {
		const [l, u, v] = lchToLab(emeraldLchuv);
		approximatelyEqual(l, 72.473, 0.01);
		approximatelyEqual(u, -52.102, 0.01);
		approximatelyEqual(v, 48.912, 0.01);
	});
});

void describe("luvToXyz", () => {
	void it("should return `luvToXyz(emeraldLuv) = [27.351, 44.367, 24.888]`", () => {
		const [x, y, z] = luvToXyz(emeraldLuv);
		approximatelyEqual(x, 27.351, 0.01);
		approximatelyEqual(y, 44.367, 0.01);
		approximatelyEqual(z, 24.888, 0.01);
	});
});

void describe("rgbToCmy", () => {
	void it("should return `rgbToCmy(emeraldRgb) = [0.68627, 0.21569, 0.52941]`", () => {
		const [c, m, y] = rgbToCmy(emeraldRgb);
		approximatelyEqual(c, 0.68627, 0.0001);
		approximatelyEqual(m, 0.21569, 0.0001);
		approximatelyEqual(y, 0.52941, 0.0001);
	});
});

void describe("rgbToHex", () => {
	void it("should return `rgbToHex(emeraldRgb) = 0x50c878`", () => {
		equal(rgbToHex(emeraldRgb), 0x50c878);
	});
});

void describe("rgbToHsl", () => {
	void it("should return `rgbToHsl(emeraldRgb) = [0.38889, 0.52174, 0.54902]`", () => {
		const [h, s, l] = rgbToHsl(emeraldRgb);
		approximatelyEqual(h, 0.38889, 0.0001);
		approximatelyEqual(s, 0.52174, 0.0001);
		approximatelyEqual(l, 0.54902, 0.0001);
	});
});

void describe("rgbToHsv", () => {
	void it("should return `rgbToHsv(emeraldRgb) = [0.38889, 0.60000, 0.78431]`", () => {
		const [h, s, v] = rgbToHsv(emeraldRgb);
		approximatelyEqual(h, 0.38889, 0.0001);
		approximatelyEqual(s, 0.6, 0.0001);
		approximatelyEqual(v, 0.78431, 0.0001);
	});
});

void describe("rgbToXyz", () => {
	void it("should return `rgbToXyz(emeraldRgb) = [27.351, 44.367, 24.888]`", () => {
		const [x, y, z] = rgbToXyz(emeraldRgb);
		approximatelyEqual(x, 27.351, 0.01);
		approximatelyEqual(y, 44.367, 0.01);
		approximatelyEqual(z, 24.888, 0.01);
	});
});

void describe("xyzToAdobe", () => {
	void it("should return `xyzToAdobe(emeraldXyz) = [128.594, 198.675, 123.736]`", () => {
		const [r, g, b] = xyzToAdobe(emeraldXyz);
		approximatelyEqual(r, 128.594, 0.1);
		approximatelyEqual(g, 198.675, 0.1);
		approximatelyEqual(b, 123.736, 0.1);
	});
});

void describe("xyzToHunter", () => {
	void it("should return `xyzToHunter(emeraldXyz) = [66.609, -40.344, 21.649]`", () => {
		const [l, a, b] = xyzToHunter(emeraldXyz);
		approximatelyEqual(l, 66.609, 0.01);
		approximatelyEqual(a, -40.344, 0.01);
		approximatelyEqual(b, 21.649, 0.01);
	});
});

void describe("xyzToLab", () => {
	void it("should return `xyzToLab(emeraldXyz) = [72.473, -51.250, 30.255]`", () => {
		const [l, a, b] = xyzToLab(emeraldXyz);
		approximatelyEqual(l, 72.473, 0.01);
		approximatelyEqual(a, -51.25, 0.01);
		approximatelyEqual(b, 30.255, 0.01);
	});
});

void describe("xyzToLuv", () => {
	void it("should return `xyzToLuv(emeraldXyz) = [72.473, -52.102, 48.912]`", () => {
		const [l, u, v] = xyzToLuv(emeraldXyz);
		approximatelyEqual(l, 72.473, 0.01);
		approximatelyEqual(u, -52.102, 0.01);
		approximatelyEqual(v, 48.912, 0.01);
	});
});

void describe("xyzToRgb", () => {
	void it("should return `xyzToRgb(emeraldXyz) = [80, 200, 120]`", () => {
		const [r, g, b] = xyzToRgb(emeraldXyz);
		approximatelyEqual(r, 80, 0.01);
		approximatelyEqual(g, 200, 0.01);
		approximatelyEqual(b, 120, 0.01);
	});
});

void describe("xyzToYxy", () => {
	void it("should return `xyzToYxy(emeraldXyz) = [44.367, 0.28311, 0.45926]`", () => {
		const [bY, sX, sY] = xyzToYxy(emeraldXyz);
		approximatelyEqual(bY, 44.367, 0.01);
		approximatelyEqual(sX, 0.28311, 0.0001);
		approximatelyEqual(sY, 0.45926, 0.0001);
	});
});

void describe("yxyToXyz", () => {
	void it("should return `yxyToXyz(emeraldYxy) = [27.351, 44.367, 24.888]`", () => {
		const [x, y, z] = yxyToXyz(emeraldYxy);
		approximatelyEqual(x, 27.351, 0.01);
		approximatelyEqual(y, 44.367, 0.01);
		approximatelyEqual(z, 24.888, 0.01);
	});
});
