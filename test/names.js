import {
	bangNames,
	bigNames,
	cne2007Names,
	cneCore2007Names,
	crayolaNames,
	css3Names,
	hexToRgb,
	hollaschNames,
	html4Names,
	mediumNames,
	nbsAnthusNames,
	nbsIsccNames,
	ns3Names,
	ntcNames,
	oldRgbNames,
	pigmentsNames,
	ravelingNames,
	resene2010Names,
	reseneNames,
	smallNames,
	thomasNames,
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

	it('should return big name "seagreen3"', () => {
		expect(getNameStandard(emerald, bigNames)).to.equal("seagreen3");
	});

	it('should return CNE 2007 name "algae"', () => {
		expect(getNameStandard(emerald, cne2007Names)).to.equal("algae");
	});

	it('should return CNE core 2007 name "jade"', () => {
		expect(getNameStandard(emerald, cneCore2007Names)).to.equal("jade");
	});

	it('should return Crayola name "fern"', () => {
		expect(getNameStandard(emerald, crayolaNames)).to.equal("fern");
	});

	it('should return CSS3 name "mediumseagreen"', () => {
		expect(getNameStandard(emerald, css3Names)).to.equal("mediumseagreen");
	});

	it('should return Hollasch name "emeraldgreen"', () => {
		expect(getNameStandard(emerald, hollaschNames)).to.equal("emeraldgreen");
	});

	it('should return HTML4 name "lime"', () => {
		expect(getNameStandard(emerald, html4Names)).to.equal("lime");
	});

	it('should return medium name "aquamarine"', () => {
		expect(getNameStandard(emerald, mediumNames)).to.equal("aquamarine");
	});

	it('should return NBS Anthus name "brilliantgreen"', () => {
		expect(getNameStandard(emerald, nbsAnthusNames)).to.equal("brilliantgreen");
	});

	it('should return NBS ISCC name "brilliantyellowishgreen"', () => {
		expect(getNameStandard(emerald, nbsIsccNames)).to.equal(
			"brilliantyellowishgreen"
		);
	});

	it('should return NS3 name "mediumseagreen"', () => {
		expect(getNameStandard(emerald, ns3Names)).to.equal("mediumseagreen");
	});

	it('should return Name That Color name "emerald"', () => {
		expect(getNameStandard(emerald, ntcNames)).to.equal("emerald");
	});

	it('should return old RGB name "mediumaquamarine"', () => {
		expect(getNameStandard(emerald, oldRgbNames)).to.equal("mediumaquamarine");
	});

	it('should return pigments name "malachite"', () => {
		expect(getNameStandard(emerald, pigmentsNames)).to.equal("malachite");
	});

	it('should return Raveling name "seagreen3"', () => {
		expect(getNameStandard(emerald, ravelingNames)).to.equal("seagreen3");
	});

	it('should return Resene 2010 name "deyork"', () => {
		expect(getNameStandard(emerald, resene2010Names)).to.equal("deyork");
	});

	it('should return Resene name "deyork"', () => {
		expect(getNameStandard(emerald, reseneNames)).to.equal("deyork");
	});

	it('should return small name "aquamarine"', () => {
		expect(getNameStandard(emerald, smallNames)).to.equal("aquamarine");
	});

	it('should return Thomas name "forestgreen"', () => {
		expect(getNameStandard(emerald, thomasNames)).to.equal("forestgreen");
	});

	it('should return X11 name "seagreen3"', () => {
		expect(getNameStandard(emerald, x11Names)).to.equal("seagreen3");
	});

	it('should return XKCD name "darkmint"', () => {
		expect(getNameStandard(emerald, xkcdNames)).to.equal("darkmint");
	});
});
