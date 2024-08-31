import { describe, it } from "mocha";
import contrast from "../dist/utility/contrast.js";
import { expect } from "chai";
import fromHex from "../dist/utility/fromHex.js";
import luminance from "../dist/utility/luminance.js";

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

describe("luminance", () => {
	it("should return `luminance(fromHex(0x000000)) = 0`", () => {
		expect(luminance(fromHex(0x000000))).to.equal(0);
	});

	it("should return `luminance(fromHex(0x808080)) = 0.21586`", () => {
		expect(luminance(fromHex(0x808080))).to.be.approximately(0.21586, 0.000001);
	});

	it("should return `luminance(fromHex(0xffffff)) = 1`", () => {
		expect(luminance(fromHex(0xffffff))).to.equal(1);
	});
});
