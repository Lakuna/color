import {
	bang,
	cne,
	crayola,
	hexToRgb,
	hollasch,
	nbs,
	ntc,
	resene,
	tcapi,
	x11,
	xkcd
} from "../dist/index.js";
import { describe, it } from "node:test";
import { equal } from "node:assert/strict";
import { getNameStandard } from "../dist/names/getName.js";

void describe("getNameStandard", () => {
	const emerald = hexToRgb(0x50c878);

	void it('should return Bang name "brilliantspringgreen"', () => {
		equal(getNameStandard(emerald, bang), "brilliantspringgreen");
	});

	void it('should return CNE 2007 name "algae"', () => {
		equal(getNameStandard(emerald, cne), "algae");
	});

	void it('should return Crayola name "fern"', () => {
		equal(getNameStandard(emerald, crayola), "fern");
	});

	void it('should return Hollasch name "emeraldgreen"', () => {
		equal(getNameStandard(emerald, hollasch), "emeraldgreen");
	});

	void it('should return NBS ISCC name "brilliantyellowishgreen"', () => {
		equal(getNameStandard(emerald, nbs), "brilliantyellowishgreen");
	});

	void it('should return Name That Color name "emerald"', () => {
		equal(getNameStandard(emerald, ntc), "emerald");
	});

	void it('should return Resene 2010 name "deyork"', () => {
		equal(getNameStandard(emerald, resene), "deyork");
	});

	void it('should return The Color API name "Fern"', () => {
		equal(getNameStandard(emerald, tcapi), "Fern");
	});

	void it('should return X11 name "seagreen3"', () => {
		equal(getNameStandard(emerald, x11), "seagreen3");
	});

	void it('should return XKCD name "darkmint"', () => {
		equal(getNameStandard(emerald, xkcd), "darkmint");
	});
});
