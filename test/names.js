import {
	bang,
	cne,
	crayola,
	hexToRgb,
	hollasch,
	nbs,
	ntc,
	resene,
	x11,
	xkcd
} from "../dist/index.js";
import { describe, it } from "mocha";
import { expect } from "chai";
import { getNameStandard } from "../dist/names/getName.js";

describe("getNameStandard", () => {
	const emerald = hexToRgb(0x50c878);

	it('should return Bang name "brilliantspringgreen"', () => {
		expect(getNameStandard(emerald, bang)).to.equal("brilliantspringgreen");
	});

	it('should return CNE 2007 name "algae"', () => {
		expect(getNameStandard(emerald, cne)).to.equal("algae");
	});

	it('should return Crayola name "fern"', () => {
		expect(getNameStandard(emerald, crayola)).to.equal("fern");
	});

	it('should return Hollasch name "emeraldgreen"', () => {
		expect(getNameStandard(emerald, hollasch)).to.equal("emeraldgreen");
	});

	it('should return NBS ISCC name "brilliantyellowishgreen"', () => {
		expect(getNameStandard(emerald, nbs)).to.equal("brilliantyellowishgreen");
	});

	it('should return Name That Color name "emerald"', () => {
		expect(getNameStandard(emerald, ntc)).to.equal("emerald");
	});

	it('should return Resene 2010 name "deyork"', () => {
		expect(getNameStandard(emerald, resene)).to.equal("deyork");
	});

	it('should return X11 name "seagreen3"', () => {
		expect(getNameStandard(emerald, x11)).to.equal("seagreen3");
	});

	it('should return XKCD name "darkmint"', () => {
		expect(getNameStandard(emerald, xkcd)).to.equal("darkmint");
	});
});
