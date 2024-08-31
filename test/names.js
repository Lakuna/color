import { describe, it } from "mocha";
import bangNames from "../dist/names/bangNames.js";
import css3Names from "../dist/names/css3Names.js";
import { expect } from "chai";
import fromHex from "../dist/utility/fromHex.js";
import getName from "../dist/names/getName.js";
import html4Names from "../dist/names/html4Names.js";
import oldRgbNames from "../dist/names/oldRgbNames.js";
import ravelingNames from "../dist/names/ravelingNames.js";
import thomasNames from "../dist/names/thomasNames.js";
import x11Names from "../dist/names/x11Names.js";

describe("getName", () => {
	const emerald = fromHex(0x50c878);

	it('should return Bang name "brilliant bluish green"', () => {
		expect(getName(emerald, bangNames)).to.equal("brilliant bluish green");
	});

	it('should return CSS3 name "medium sea green"', () => {
		expect(getName(emerald, css3Names)).to.equal("medium sea green");
	});

	it('should return HTML4 name "gray"', () => {
		expect(getName(emerald, html4Names)).to.equal("gray");
	});

	it('should return old RGB name "medium aquamarine"', () => {
		expect(getName(emerald, oldRgbNames)).to.equal("medium aquamarine");
	});

	it('should return Raveling name "sea green 3"', () => {
		expect(getName(emerald, ravelingNames)).to.equal("sea green 3");
	});

	it('should return Thomas name "sea green"', () => {
		expect(getName(emerald, thomasNames)).to.equal("sea green");
	});

	it('should return X11 name "sea green 3"', () => {
		expect(getName(emerald, x11Names)).to.equal("sea green 3");
	});
});
