import {
	bangNames,
	cne2007Names,
	crayolaNames,
	hexToRgb,
	hollaschNames,
	nbsIsccNames,
	ntcNames,
	resene2010Names,
	x11Names,
	xkcdNames
} from "../dist/index.js";
import { describe, it } from "mocha";
import { expect } from "chai";
import { getNameStandard } from "../dist/names/getName.js";

describe("getNameStandard", () => {
	const emerald = hexToRgb(0x50c878);

	it('should return Bang name "brilliantspringgreen"', () => {
		expect(getNameStandard(emerald, bangNames)).to.equal(
			"brilliantspringgreen"
		);
	});

	it('should return CNE 2007 name "algae"', () => {
		expect(getNameStandard(emerald, cne2007Names)).to.equal("algae");
	});

	it('should return Crayola name "fern"', () => {
		expect(getNameStandard(emerald, crayolaNames)).to.equal("fern");
	});

	it('should return Hollasch name "emeraldgreen"', () => {
		expect(getNameStandard(emerald, hollaschNames)).to.equal("emeraldgreen");
	});

	it('should return NBS ISCC name "brilliantyellowishgreen"', () => {
		expect(getNameStandard(emerald, nbsIsccNames)).to.equal(
			"brilliantyellowishgreen"
		);
	});

	it('should return Name That Color name "emerald"', () => {
		expect(getNameStandard(emerald, ntcNames)).to.equal("emerald");
	});

	it('should return Resene 2010 name "deyork"', () => {
		expect(getNameStandard(emerald, resene2010Names)).to.equal("deyork");
	});

	it('should return X11 name "seagreen3"', () => {
		expect(getNameStandard(emerald, x11Names)).to.equal("seagreen3");
	});

	it('should return XKCD name "darkmint"', () => {
		expect(getNameStandard(emerald, xkcdNames)).to.equal("darkmint");
	});
});
