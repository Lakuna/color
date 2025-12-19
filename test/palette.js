import {
	analogous,
	complement,
	hexToRgb,
	hslToRgb,
	rgbToHex,
	rgbToHsl,
	splitComplement
} from "../dist/index.js";
import { describe, it } from "node:test";
import { ok } from "node:assert/strict";

const emerald = rgbToHsl(hexToRgb(0x50c878));

const approximatelyEqual = (actual, expected, delta) => {
	ok(Math.abs(actual - expected) < delta);
};

void describe("analogous", () => {
	void it("should return `analogous(emerald) = [0x64c850, 0x50c8b4]`", () => {
		const [a, b] = analogous(emerald);
		approximatelyEqual(rgbToHex(hslToRgb(a)), 0x64c850, 1);
		approximatelyEqual(rgbToHex(hslToRgb(b)), 0x50c8b4, 1);
	});
});

void describe("complement", () => {
	void it("should return `complement(emerald) = [0xc850a0]`", () => {
		approximatelyEqual(rgbToHex(hslToRgb(complement(emerald)[0])), 0xc850a0, 1);
	});

	void it("should return `complement(emerald, 2) = [0xc87850, 0x7850c8]`", () => {
		const complements = complement(emerald, 2);
		approximatelyEqual(rgbToHex(hslToRgb(complements[0])), 0x7850c8, 1);
		approximatelyEqual(rgbToHex(hslToRgb(complements[1])), 0xc87850, 1);
	});
});

void describe("splitComplement", () => {
	void it("should return `splitComplement(emerald) = [0xb450c8, 0xc85064]`", () => {
		const [a, b] = splitComplement(emerald);
		approximatelyEqual(rgbToHex(hslToRgb(a)), 0xb450c8, 1);
		approximatelyEqual(rgbToHex(hslToRgb(b)), 0xc85064, 1);
	});
});
