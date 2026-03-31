import { strictEqual } from "node:assert/strict";
import { describe, it } from "node:test";

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
import { getNameStandard } from "../dist/names/getName.js";

void describe("getNameStandard", () => {
	const emerald = hexToRgb(0x50c878);

	void it('should return Bang name "brilliant spring green"', () => {
		strictEqual(getNameStandard(emerald, bang), "brilliant spring green");
	});

	void it('should return CNE 2007 name "algae"', () => {
		strictEqual(getNameStandard(emerald, cne), "algae");
	});

	void it('should return Crayola name "fern"', () => {
		strictEqual(getNameStandard(emerald, crayola), "fern");
	});

	void it('should return Hollasch name "emerald green"', () => {
		strictEqual(getNameStandard(emerald, hollasch), "emerald green");
	});

	void it('should return NBS ISCC name "brilliant yellowish green"', () => {
		strictEqual(getNameStandard(emerald, nbs), "brilliant yellowish green");
	});

	void it('should return Name That Color name "emerald"', () => {
		strictEqual(getNameStandard(emerald, ntc), "emerald");
	});

	void it('should return Resene 2010 name "de york"', () => {
		strictEqual(getNameStandard(emerald, resene), "de york");
	});

	void it('should return The Color API name "fern"', () => {
		strictEqual(getNameStandard(emerald, tcapi), "fern");
	});

	void it('should return X11 name "sea green 3"', () => {
		strictEqual(getNameStandard(emerald, x11), "sea green 3");
	});

	void it('should return XKCD name "dark mint"', () => {
		strictEqual(getNameStandard(emerald, xkcd), "dark mint");
	});
});
