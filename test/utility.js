import { describe, it } from "mocha";
import contrast from "../dist/utility/contrast.js";
import { expect } from "chai";
import fromHex from "../dist/utility/fromHex.js";
import fromHsl from "../dist/utility/fromHsl.js";
import luminance from "../dist/utility/luminance.js";
import toHsl from "../dist/utility/toHsl.js";

describe("contrast", () => {
	const black = fromHex(0x000000);
	const white = fromHex(0xffffff);

	it("should return `contrast(black, white) = 21`", () => {
		expect(contrast(black, white)).to.equal(21);
	});

	it("should return `contrast(white, black) = 21`", () => {
		expect(contrast(white, black)).to.equal(21);
	});

	it("should return `contrast(black, black) = 1`", () => {
		expect(contrast(black, black)).to.equal(1);
	});

	it("should return `contrast(white, white) = 1`", () => {
		expect(contrast(white, white)).to.equal(1);
	});
});

describe("fromHex", () => {
	it("should return `fromHex(0xff0000) = [1, 0, 0, 1]`", () => {
		expect(fromHex(0xff0000)).to.have.ordered.members([1, 0, 0, 1]);
	});

	it("should return `fromHex(0x00ff00) = [0, 1, 0, 1]`", () => {
		expect(fromHex(0x00ff00)).to.have.ordered.members([0, 1, 0, 1]);
	});

	it("should return `fromHex(0x0000ff) = [0, 0, 1, 1]`", () => {
		expect(fromHex(0x0000ff)).to.have.ordered.members([0, 0, 1, 1]);
	});

	it("should return `fromHex(0x000000) = [0, 0, 0, 1]`", () => {
		expect(fromHex(0x000000)).to.have.ordered.members([0, 0, 0, 1]);
	});

	it("should return `fromHex(0xffffff) = [1, 1, 1, 1]`", () => {
		expect(fromHex(0xffffff)).to.have.ordered.members([1, 1, 1, 1]);
	});
});

describe("fromHsl", () => {
	it("should return `fromHsl(0, 0, 0, 1) = [0, 0, 0, 1]", () => {
		expect(fromHsl(0, 0, 0, 1)).to.have.ordered.members([0, 0, 0, 1]);
	});

	it("should return `fromHsl(0.389, 0.522, 0.549, 1) = [0.314, 0.784, 0.471, 1]", () => {
		const [r, g, b, a] = fromHsl(0.389, 0.522, 0.549, 1);
		expect(r).to.be.approximately(0.314, 0.001);
		expect(g).to.be.approximately(0.784, 0.001);
		expect(b).to.be.approximately(0.471, 0.001);
		expect(a).to.equal(1);
	});
});

describe("luminance", () => {
	it("should return `luminance(fromHex(0x000000)) = 0`", () => {
		expect(luminance(fromHex(0x000000))).to.equal(0);
	});

	it("should return `luminance(fromHex(0x808080)) = 0.21586`", () => {
		expect(luminance(fromHex(0x808080))).to.be.approximately(0.21586, 0.00001);
	});

	it("should return `luminance(fromHex(0xffffff)) = 1`", () => {
		expect(luminance(fromHex(0xffffff))).to.equal(1);
	});
});

describe("toHsl", () => {
	it("should return `toHsl(fromHex(0x50c878)) = [0.389, 0.522, 0.549, 1]", () => {
		const [h, s, l, a] = toHsl(fromHex(0x50c878));
		expect(h).to.be.approximately(140 / 360, 0.001);
		expect(s).to.be.approximately(52.2 / 100, 0.001);
		expect(l).to.be.approximately(54.9 / 100, 0.001);
		expect(a).to.equal(100 / 100);
	});
});
