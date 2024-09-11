import { contrast, hexToRgb, relativeLuminance } from "../dist/index.js";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("contrast", () => {
	const black = hexToRgb(0x000000);
	const white = hexToRgb(0xffffff);

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

describe("relativeLuminance", () => {
	it("should return `relativeLuminance(fromHex(0x000000)) = 0`", () => {
		expect(relativeLuminance(hexToRgb(0x000000))).to.equal(0);
	});

	it("should return `relativeLuminance(fromHex(0x808080)) = 0.21586`", () => {
		expect(relativeLuminance(hexToRgb(0x808080))).to.be.approximately(
			0.21586,
			0.00001
		);
	});

	it("should return `relativeLuminance(fromHex(0xffffff)) = 1`", () => {
		expect(relativeLuminance(hexToRgb(0xffffff))).to.equal(1);
	});
});
