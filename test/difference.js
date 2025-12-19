import {
	deltaC,
	deltaCmc,
	deltaE00,
	deltaE76,
	deltaE94,
	deltaH,
	hexToRgb,
	rgbToXyz,
	xyzToLab
} from "../dist/index.js";
import { describe, it } from "node:test";
import { ok } from "node:assert/strict";

const a = xyzToLab(rgbToXyz(hexToRgb(0x50c878)));
const b = xyzToLab(rgbToXyz(hexToRgb(0xc80815)));
const c = xyzToLab(rgbToXyz(hexToRgb(0x5078c8)));

const approximatelyEqual = (actual, expected, delta) => {
	ok(Math.abs(actual - expected) < delta);
};

void describe("deltaC", () => {
	void it("should return `deltaC(a, b) = 22.55`", () => {
		approximatelyEqual(deltaC(a, b), 22.55, 0.01);
	});

	void it("should return `deltaC(a, c) = -12.43`", () => {
		approximatelyEqual(deltaC(a, c), -12.43, 0.01);
	});

	void it("should return `deltaC(b, c) = -34.98`", () => {
		approximatelyEqual(deltaC(b, c), -34.98, 0.01);
	});
});

void describe("deltaCmc", () => {
	void it("should return `deltaCmc(a, b) = 60.75`", () => {
		approximatelyEqual(deltaCmc(a, b), 60.75, 0.01);
	});

	void it("should return `deltaCmc(a, c) = 49.31`", () => {
		approximatelyEqual(deltaCmc(a, c), 49.31, 0.01);
	});

	void it("should return `deltaCmc(b, c) = 68.74`", () => {
		approximatelyEqual(deltaCmc(b, c), 68.74, 0.01);
	});
});

void describe("deltaE94", () => {
	void it("should return `deltaE94(a, b) = 69.03`", () => {
		approximatelyEqual(deltaE94(a, b), 69.03, 0.01);
	});

	void it("should return `deltaE94(a, c) = 55.80`", () => {
		approximatelyEqual(deltaE94(a, c), 55.8, 0.01);
	});

	void it("should return `deltaE94(b, c) = 47.98`", () => {
		approximatelyEqual(deltaE94(b, c), 47.98, 0.01);
	});
});

void describe("deltaE00", () => {
	void it("should return `deltaE00(a, b) = 75.06`", () => {
		approximatelyEqual(deltaE00(a, b), 75.06, 0.01);
	});

	void it("should return `deltaE00(a, c) = 50.48`", () => {
		approximatelyEqual(deltaE00(a, c), 50.48, 0.01);
	});

	void it("should return `deltaE00(b, c) = 45.46`", () => {
		approximatelyEqual(deltaE00(b, c), 45.46, 0.01);
	});
});

void describe("deltaE76", () => {
	void it("should return `deltaE76(a, b) = 122.67`", () => {
		approximatelyEqual(deltaE76(a, b), 122.67, 0.01);
	});

	void it("should return `deltaE76(a, c) = 100.40`", () => {
		approximatelyEqual(deltaE76(a, c), 100.4, 0.01);
	});

	void it("should return `deltaE76(b, c) = 109.91`", () => {
		approximatelyEqual(deltaE76(b, c), 109.91, 0.01);
	});
});

void describe("deltaH", () => {
	void it("should return `deltaH(a, b) = 116.67`", () => {
		approximatelyEqual(deltaH(a, b), 116.67, 0.01);
	});

	void it("should return `deltaH(a, c) = 97.30`", () => {
		approximatelyEqual(deltaH(a, c), 97.3, 0.01);
	});

	void it("should return `deltaH(b, c) = 103.80`", () => {
		approximatelyEqual(deltaH(b, c), 103.8, 0.01);
	});
});
