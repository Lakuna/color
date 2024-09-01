import { describe, it } from "mocha";
import bangNames from "../dist/names/bangNames.js";
import bigNames from "../dist/names/bigNames.js";
import cne2007Names from "../dist/names/cne2007Names.js";
import cneCore2007Names from "../dist/names/cneCore2007Names.js";
import crayolaNames from "../dist/names/crayolaNames.js";
import css3Names from "../dist/names/css3Names.js";
import { expect } from "chai";
import fromHex from "../dist/utility/fromHex.js";
import getName from "../dist/names/getName.js";
import hollaschNames from "../dist/names/hollaschNames.js";
import html4Names from "../dist/names/html4Names.js";
import mediumNames from "../dist/names/mediumNames.js";
import nbsAnthusNames from "../dist/names/nbsAnthusNames.js";
import nbsIsccNames from "../dist/names/nbsIsccNames.js";
import ns3Names from "../dist/names/ns3Names.js";
import ntcNames from "../dist/names/ntcNames.js";
import oldRgbNames from "../dist/names/oldRgbNames.js";
import pigmentsNames from "../dist/names/pigmentsNames.js";
import ravelingNames from "../dist/names/ravelingNames.js";
import resene2010Names from "../dist/names/resene2010Names.js";
import reseneNames from "../dist/names/reseneNames.js";
import smallNames from "../dist/names/smallNames.js";
import thomasNames from "../dist/names/thomasNames.js";
import x11Names from "../dist/names/x11Names.js";
import xkcdNames from "../dist/names/xkcdNames.js";

describe("getName", () => {
	const emerald = fromHex(0x50c878);

	it('should return Bang name "moderatespringgreen"', () => {
		expect(getName(emerald, bangNames)).to.equal("moderatespringgreen");
	});

	it('should return big name "seagreen3"', () => {
		expect(getName(emerald, bigNames)).to.equal("seagreen3");
	});

	it('should return CNE 2007 name "algae"', () => {
		expect(getName(emerald, cne2007Names)).to.equal("algae");
	});

	it('should return CNE core 2007 name "jade"', () => {
		expect(getName(emerald, cneCore2007Names)).to.equal("jade");
	});

	it('should return Crayola name "shamrock"', () => {
		expect(getName(emerald, crayolaNames)).to.equal("shamrock");
	});

	it('should return CSS3 name "mediumseagreen"', () => {
		expect(getName(emerald, css3Names)).to.equal("mediumseagreen");
	});

	it('should return Hollasch name "seagreenmedium"', () => {
		expect(getName(emerald, hollaschNames)).to.equal("seagreenmedium");
	});

	it('should return HTML4 name "lime"', () => {
		expect(getName(emerald, html4Names)).to.equal("lime");
	});

	it('should return medium name "mediumaquamarine"', () => {
		expect(getName(emerald, mediumNames)).to.equal("mediumaquamarine");
	});

	it('should return NBS Anthus name "brilliantgreen"', () => {
		expect(getName(emerald, nbsAnthusNames)).to.equal("brilliantgreen");
	});

	it('should return NBS ISCC name "brilliantgreen"', () => {
		expect(getName(emerald, nbsIsccNames)).to.equal("brilliantgreen");
	});

	it('should return NS3 name "mediumseagreen"', () => {
		expect(getName(emerald, ns3Names)).to.equal("mediumseagreen");
	});

	it('should return Name That Color name "emerald"', () => {
		expect(getName(emerald, ntcNames)).to.equal("emerald");
	});

	it('should return old RGB name "mediumaquamarine"', () => {
		expect(getName(emerald, oldRgbNames)).to.equal("mediumaquamarine");
	});

	it('should return pigments name "copperresinate"', () => {
		expect(getName(emerald, pigmentsNames)).to.equal("copperresinate");
	});

	it('should return Raveling name "seagreen3"', () => {
		expect(getName(emerald, ravelingNames)).to.equal("seagreen3");
	});

	it('should return Resene 2010 name "silvertree"', () => {
		expect(getName(emerald, resene2010Names)).to.equal("silvertree");
	});

	it('should return Resene name "oceangreen"', () => {
		expect(getName(emerald, reseneNames)).to.equal("oceangreen");
	});

	it('should return small name "aquamarine"', () => {
		expect(getName(emerald, smallNames)).to.equal("aquamarine");
	});

	it('should return Thomas name "seagreen"', () => {
		expect(getName(emerald, thomasNames)).to.equal("seagreen");
	});

	it('should return X11 name "seagreen3"', () => {
		expect(getName(emerald, x11Names)).to.equal("seagreen3");
	});

	it('should return XKCD name "darkmint"', () => {
		expect(getName(emerald, xkcdNames)).to.equal("darkmint");
	});
});
