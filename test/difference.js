import { deltaECie, hexToRgb, rgbToXyz, xyzToLab } from "../dist/index.js";
import { describe, it } from "mocha";
import { expect } from "chai";

const a = xyzToLab(rgbToXyz(hexToRgb(0x50c878)));
const b = xyzToLab(rgbToXyz(hexToRgb(0x42c47b)));

describe("deltaECie", () => {
	it("should return `deltaECie(a, b) = 3.8`", () => {
		expect(deltaECie(a, b)).to.be.approximately(3.8, 1);
	});
});
