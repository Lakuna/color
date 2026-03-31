import { ok, strictEqual } from "node:assert/strict";
import { describe, it } from "node:test";

import {
	contrast,
	hexToRgb,
	isWebSafe,
	relativeLuminance
} from "../dist/index.js";
import { approximatelyEqual } from "./shared.js";

const black = hexToRgb(0x000000);
const white = hexToRgb(0xffffff);
const emerald = hexToRgb(0x50c878);

void describe("contrast", () => {
	void it("should return `contrast(black, white) = 21`", () => {
		strictEqual(contrast(black, white), 21);
	});

	void it("should return `contrast(white, black) = 21`", () => {
		strictEqual(contrast(white, black), 21);
	});

	void it("should return `contrast(black, black) = 1`", () => {
		strictEqual(contrast(black, black), 1);
	});

	void it("should return `contrast(white, white) = 1`", () => {
		strictEqual(contrast(white, white), 1);
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
		strictEqual(relativeLuminance(black), 0);
	});

	void it("should return `relativeLuminance(hexToRgb(0x808080)) = 0.21586`", () => {
		approximatelyEqual(relativeLuminance(hexToRgb(0x808080)), 0.21586, 0.00001);
	});

	void it("should return `relativeLuminance(white) = 1`", () => {
		strictEqual(relativeLuminance(white), 1);
	});
});
