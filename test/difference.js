import {
	deltaC,
	deltaCmc,
	deltaE1994,
	deltaE2000,
	deltaECie,
	deltaH,
	hexToRgb,
	rgbToXyz,
	xyzToLab
} from "../dist/index.js";
import { describe, it } from "mocha";
import { expect } from "chai";

const a = xyzToLab(rgbToXyz(hexToRgb(0x50c878)));
const b = xyzToLab(rgbToXyz(hexToRgb(0xc80815)));
const c = xyzToLab(rgbToXyz(hexToRgb(0x5078c8)));

describe("deltaC", () => {
	it("should return `deltaC(a, b) = 22.55`", () => {
		expect(deltaC(a, b)).to.be.approximately(22.55, 0.1);
	});

	it("should return `deltaC(a, c) = -12.43`", () => {
		expect(deltaC(a, c)).to.be.approximately(-12.43, 0.1);
	});

	it("should return `deltaC(b, c) = -34.98`", () => {
		expect(deltaC(b, c)).to.be.approximately(-34.98, 0.1);
	});
});

describe("deltaCmc", () => {
	it("should return `deltaCmc(a, b) = 60.75`", () => {
		expect(deltaCmc(a, b)).to.be.approximately(60.75, 0.1);
	});

	it("should return `deltaCmc(a, c) = 49.31`", () => {
		expect(deltaCmc(a, c)).to.be.approximately(49.31, 0.1);
	});

	it("should return `deltaCmc(b, c) = 68.74`", () => {
		expect(deltaCmc(b, c)).to.be.approximately(68.74, 0.1);
	});
});

describe("deltaE1994", () => {
	it("should return `deltaE1994(a, b) = 69.03`", () => {
		expect(deltaE1994(a, b)).to.be.approximately(69.03, 0.1);
	});

	it("should return `deltaE1994(a, c) = 55.80`", () => {
		expect(deltaE1994(a, c)).to.be.approximately(55.8, 0.1);
	});

	it("should return `deltaE1994(b, c) = 47.98`", () => {
		expect(deltaE1994(b, c)).to.be.approximately(47.98, 0.1);
	});
});

describe("deltaE2000", () => {
	it("should return `deltaE2000(a, b) = 75.06`", () => {
		expect(deltaE2000(a, b)).to.be.approximately(75.06, 0.1);
	});

	it("should return `deltaE2000(a, c) = 50.48`", () => {
		expect(deltaE2000(a, c)).to.be.approximately(50.48, 0.1);
	});

	it("should return `deltaE2000(b, c) = 45.46`", () => {
		expect(deltaE2000(b, c)).to.be.approximately(45.46, 0.1);
	});
});

describe("deltaECie", () => {
	it("should return `deltaECie(a, b) = 122.67`", () => {
		expect(deltaECie(a, b)).to.be.approximately(122.67, 0.1);
	});

	it("should return `deltaECie(a, c) = 100.40`", () => {
		expect(deltaECie(a, c)).to.be.approximately(100.4, 0.1);
	});

	it("should return `deltaECie(b, c) = 109.91`", () => {
		expect(deltaECie(b, c)).to.be.approximately(109.91, 0.1);
	});
});

describe("deltaH", () => {
	it("should return `deltaH(a, b) = 116.67`", () => {
		expect(deltaH(a, b)).to.be.approximately(116.67, 0.1);
	});

	it("should return `deltaH(a, c) = 97.30`", () => {
		expect(deltaH(a, c)).to.be.approximately(97.3, 0.1);
	});

	it("should return `deltaH(b, c) = 103.80`", () => {
		expect(deltaH(b, c)).to.be.approximately(103.8, 0.1);
	});
});
