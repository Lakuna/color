import { contrast, hexToRgb, relativeLuminance } from "../dist/index.js";
import { describe, it } from "node:test";
import { equal, ok } from "node:assert/strict";

const approximatelyEqual = (actual, expected, delta) => {
	ok(Math.abs(actual - expected) < delta);
};

void describe("contrast", () => {
	const black = hexToRgb(0x000000);
	const white = hexToRgb(0xffffff);

	void it("should return `contrast(black, white) = 21`", () => {
		equal(contrast(black, white), 21);
	});

	void it("should return `contrast(white, black) = 21`", () => {
		equal(contrast(white, black), 21);
	});

	void it("should return `contrast(black, black) = 1`", () => {
		equal(contrast(black, black), 1);
	});

	void it("should return `contrast(white, white) = 1`", () => {
		equal(contrast(white, white), 1);
	});
});

void describe("relativeLuminance", () => {
	void it("should return `relativeLuminance(fromHex(0x000000)) = 0`", () => {
		equal(relativeLuminance(hexToRgb(0x000000)), 0);
	});

	void it("should return `relativeLuminance(fromHex(0x808080)) = 0.21586`", () => {
		approximatelyEqual(relativeLuminance(hexToRgb(0x808080)), 0.21586, 0.00001);
	});

	void it("should return `relativeLuminance(fromHex(0xffffff)) = 1`", () => {
		equal(relativeLuminance(hexToRgb(0xffffff)), 1);
	});
});
