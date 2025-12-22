import {
	contrast,
	hexToRgb,
	isWebSafe,
	relativeLuminance
} from "../dist/index.js";
import { describe, it } from "node:test";
import { equal, ok } from "node:assert/strict";

const black = hexToRgb(0x000000);
const white = hexToRgb(0xffffff);
const emerald = hexToRgb(0x50c878);

const approximatelyEqual = (actual, expected, delta) => {
	ok(Math.abs(actual - expected) < delta);
};

void describe("contrast", () => {
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

void describe("isWebSafe", () => {
	void it("should return `isWebSafe(black) = true`", () => {
		ok(isWebSafe(black));
	});

	void it("should return `isWebSafe(white) = true`", () => {
		ok(isWebSafe(white));
	});

	void it("should return `isWebSafe(emerald) = false`", () => {
		ok(!isWebSafe(emerald));
	});
});

void describe("relativeLuminance", () => {
	void it("should return `relativeLuminance(black) = 0`", () => {
		equal(relativeLuminance(black), 0);
	});

	void it("should return `relativeLuminance(hexToRgb(0x808080)) = 0.21586`", () => {
		approximatelyEqual(relativeLuminance(hexToRgb(0x808080)), 0.21586, 0.00001);
	});

	void it("should return `relativeLuminance(white) = 1`", () => {
		equal(relativeLuminance(white), 1);
	});
});
