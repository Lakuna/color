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
import { describe, it } from "mocha";
import { expect } from "chai";

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

describe("adobeToXyz", () => {
	it("should return `adobeToXyz(emeraldAdobe) = [27.351, 44.367, 24.888]`", () => {
		const [x, y, z] = adobeToXyz(emeraldAdobe);
		expect(x).to.be.approximately(27.351, 0.01);
		expect(y).to.be.approximately(44.367, 0.01);
		expect(z).to.be.approximately(24.888, 0.01);
	});
});

describe("cmykToCmy", () => {
	it("should return `cmykToCmy(emeraldCmyk) = [0.68627, 0.21569, 0.52941]`", () => {
		const [c, m, y] = cmykToCmy(emeraldCmyk);
		expect(c).to.be.approximately(0.68627, 0.0001);
		expect(m).to.be.approximately(0.21569, 0.0001);
		expect(y).to.be.approximately(0.52941, 0.0001);
	});
});

describe("cmyToCmyk", () => {
	it("should return `cmyToCmyk(emeraldCmy) = [0.60000, 0.00000, 0.40000, 0.21569]`", () => {
		const [c, m, y, k] = cmyToCmyk(emeraldCmy);
		expect(c).to.be.approximately(0.6, 0.0001);
		expect(m).to.be.approximately(0, 0.0001);
		expect(y).to.be.approximately(0.4, 0.0001);
		expect(k).to.be.approximately(0.21569, 0.0001);
	});
});

describe("cmyToRgb", () => {
	it("should return `cmyToRgb(emeraldCmy) = [80, 200, 120]`", () => {
		const [r, g, b] = cmyToRgb(emeraldCmy);
		expect(r).to.be.approximately(80, 0.01);
		expect(g).to.be.approximately(200, 0.01);
		expect(b).to.be.approximately(120, 0.01);
	});
});

describe("hexToRgb", () => {
	it("should return `hexToRgb(0x50c878) = [80, 200, 120]`", () => {
		const [r, g, b] = hexToRgb(0x50c878);
		expect(r).to.be.approximately(80, 0.01);
		expect(g).to.be.approximately(200, 0.01);
		expect(b).to.be.approximately(120, 0.01);
	});
});

describe("hslToRgb", () => {
	it("should return `hslToRgb(emeraldHsl) = [80, 200, 120]`", () => {
		const [r, g, b] = hslToRgb(emeraldHsl);
		expect(r).to.be.approximately(80, 0.01);
		expect(g).to.be.approximately(200, 0.01);
		expect(b).to.be.approximately(120, 0.01);
	});
});

describe("hsvToRgb", () => {
	it("should return `hsvToRgb(emeraldHsv) = [80, 200, 120]`", () => {
		const [r, g, b] = hsvToRgb(emeraldHsv);
		expect(r).to.be.approximately(80, 0.01);
		expect(g).to.be.approximately(200, 0.01);
		expect(b).to.be.approximately(120, 0.01);
	});
});

describe("hunterToXyz", () => {
	it("should return `hunterToXyz(emeraldHunter) = [27.351, 44.367, 24.888]`", () => {
		const [x, y, z] = hunterToXyz(emeraldHunter);
		expect(x).to.be.approximately(27.351, 0.01);
		expect(y).to.be.approximately(44.367, 0.01);
		expect(z).to.be.approximately(24.888, 0.01);
	});
});

describe("labToLch", () => {
	it("should return `labToLch(emeraldLab) = [72.473, 59.515, 149.445]`", () => {
		const [l, c, h] = labToLch(emeraldLab);
		expect(l).to.be.approximately(72.473, 0.01);
		expect(c).to.be.approximately(59.515, 0.01);
		expect(h).to.be.approximately(149.445, 0.01);
	});
});

describe("labToXyz", () => {
	it("should return `labToXyz(emeraldLab) = [27.351, 44.367, 24.888]`", () => {
		const [x, y, z] = labToXyz(emeraldLab);
		expect(x).to.be.approximately(27.351, 0.01);
		expect(y).to.be.approximately(44.367, 0.01);
		expect(z).to.be.approximately(24.888, 0.01);
	});
});

describe("lchToLab", () => {
	it("should return `lchToLab(emeraldLchab) = [72.473, -51.250, 30.255]`", () => {
		const [l, a, b] = lchToLab(emeraldLchab);
		expect(l).to.be.approximately(72.473, 0.01);
		expect(a).to.be.approximately(-51.25, 0.01);
		expect(b).to.be.approximately(30.255, 0.01);
	});

	it("should return `lchToLab(emeraldLchuv) = [72.473, -52.102, 48.912]`", () => {
		const [l, u, v] = lchToLab(emeraldLchuv);
		expect(l).to.be.approximately(72.473, 0.01);
		expect(u).to.be.approximately(-52.102, 0.01);
		expect(v).to.be.approximately(48.912, 0.01);
	});
});

describe("luvToXyz", () => {
	it("should return `luvToXyz(emeraldLuv) = [27.351, 44.367, 24.888]`", () => {
		const [x, y, z] = luvToXyz(emeraldLuv);
		expect(x).to.be.approximately(27.351, 0.01);
		expect(y).to.be.approximately(44.367, 0.01);
		expect(z).to.be.approximately(24.888, 0.01);
	});
});

describe("rgbToCmy", () => {
	it("should return `rgbToCmy(emeraldRgb) = [0.68627, 0.21569, 0.52941]`", () => {
		const [c, m, y] = rgbToCmy(emeraldRgb);
		expect(c).to.be.approximately(0.68627, 0.0001);
		expect(m).to.be.approximately(0.21569, 0.0001);
		expect(y).to.be.approximately(0.52941, 0.0001);
	});
});

describe("rgbToHsl", () => {
	it("should return `rgbToHsl(emeraldRgb) = [0.38889, 0.52174, 0.54902]`", () => {
		const [h, s, l] = rgbToHsl(emeraldRgb);
		expect(h).to.be.approximately(0.38889, 0.0001);
		expect(s).to.be.approximately(0.52174, 0.0001);
		expect(l).to.be.approximately(0.54902, 0.0001);
	});
});

describe("rgbToHsv", () => {
	it("should return `rgbToHsv(emeraldRgb) = [0.38889, 0.60000, 0.78431]`", () => {
		const [h, s, v] = rgbToHsv(emeraldRgb);
		expect(h).to.be.approximately(0.38889, 0.0001);
		expect(s).to.be.approximately(0.6, 0.0001);
		expect(v).to.be.approximately(0.78431, 0.0001);
	});
});

describe("rgbToXyz", () => {
	it("should return `rgbToXyz(emeraldRgb) = [27.351, 44.367, 24.888]`", () => {
		const [x, y, z] = rgbToXyz(emeraldRgb);
		expect(x).to.be.approximately(27.351, 0.01);
		expect(y).to.be.approximately(44.367, 0.01);
		expect(z).to.be.approximately(24.888, 0.01);
	});
});

describe("xyzToAdobe", () => {
	it("should return `xyzToAdobe(emeraldXyz) = [128.594, 198.675, 123.736]`", () => {
		const [r, g, b] = xyzToAdobe(emeraldXyz);
		expect(r).to.be.approximately(128.594, 0.1);
		expect(g).to.be.approximately(198.675, 0.1);
		expect(b).to.be.approximately(123.736, 0.1);
	});
});

describe("xyzToHunter", () => {
	it("should return `xyzToHunter(emeraldXyz) = [66.609, -40.344, 21.649]`", () => {
		const [l, a, b] = xyzToHunter(emeraldXyz);
		expect(l).to.be.approximately(66.609, 0.01);
		expect(a).to.be.approximately(-40.344, 0.01);
		expect(b).to.be.approximately(21.649, 0.01);
	});
});

describe("xyzToLab", () => {
	it("should return `xyzToLab(emeraldXyz) = [72.473, -51.250, 30.255]`", () => {
		const [l, a, b] = xyzToLab(emeraldXyz);
		expect(l).to.be.approximately(72.473, 0.01);
		expect(a).to.be.approximately(-51.25, 0.01);
		expect(b).to.be.approximately(30.255, 0.01);
	});
});

describe("xyzToLuv", () => {
	it("should return `xyzToLuv(emeraldXyz) = [72.473, -52.102, 48.912]`", () => {
		const [l, u, v] = xyzToLuv(emeraldXyz);
		expect(l).to.be.approximately(72.473, 0.01);
		expect(u).to.be.approximately(-52.102, 0.01);
		expect(v).to.be.approximately(48.912, 0.01);
	});
});

describe("xyzToRgb", () => {
	it("should return `xyzToRgb(emeraldXyz) = [80, 200, 120]`", () => {
		const [r, g, b] = xyzToRgb(emeraldXyz);
		expect(r).to.be.approximately(80, 0.01);
		expect(g).to.be.approximately(200, 0.01);
		expect(b).to.be.approximately(120, 0.01);
	});
});

describe("xyzToYxy", () => {
	it("should return `xyzToYxy(emeraldXyz) = [44.367, 0.28311, 0.45926]`", () => {
		const [bY, sX, sY] = xyzToYxy(emeraldXyz);
		expect(bY).to.be.approximately(44.367, 0.01);
		expect(sX).to.be.approximately(0.28311, 0.0001);
		expect(sY).to.be.approximately(0.45926, 0.0001);
	});
});

describe("yxyToXyz", () => {
	it("should return `yxyToXyz(emeraldYxy) = [27.351, 44.367, 24.888]`", () => {
		const [x, y, z] = yxyToXyz(emeraldYxy);
		expect(x).to.be.approximately(27.351, 0.01);
		expect(y).to.be.approximately(44.367, 0.01);
		expect(z).to.be.approximately(24.888, 0.01);
	});
});
