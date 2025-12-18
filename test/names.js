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

	void it('should return Bang name "brilliant spring green"', () => {
		equal(getNameStandard(emerald, bang), "brilliant spring green");
	});

	void it('should return CNE 2007 name "algae"', () => {
		equal(getNameStandard(emerald, cne), "algae");
	});

	void it('should return Crayola name "fern"', () => {
		equal(getNameStandard(emerald, crayola), "fern");
	});

	void it('should return Hollasch name "emerald green"', () => {
		equal(getNameStandard(emerald, hollasch), "emerald green");
	});

	void it('should return NBS ISCC name "brilliant yellowish green"', () => {
		equal(getNameStandard(emerald, nbs), "brilliant yellowish green");
	});

	void it('should return Name That Color name "emerald"', () => {
		equal(getNameStandard(emerald, ntc), "emerald");
	});

	void it('should return Resene 2010 name "de york"', () => {
		equal(getNameStandard(emerald, resene), "de york");
	});

	void it('should return The Color API name "fern"', () => {
		equal(getNameStandard(emerald, tcapi), "fern");
	});

	void it('should return X11 name "sea green 3"', () => {
		equal(getNameStandard(emerald, x11), "sea green 3");
	});

	void it('should return XKCD name "darkmint"', () => {
		equal(getNameStandard(emerald, xkcd), "dark mint");
	});
});
