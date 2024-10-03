import type Luv from "../types/Luv.js";
import StandardIlluminant from "./StandardIlluminant.js";
import type Xyz from "../types/Xyz.js";
import getReference from "./getReference.js";

// TODO

/**
 * Convert the given CIEXYZ color to a CIELUV color. Based on the EasyRGB pseudo-code.
 * @param color - The CIEXYZ color.
 * @param reference - A standard illuminant that represents the white point.
 * @returns A CIELUV color.
 * @public
 */
export default function xyzToLuv(
	color: Xyz,
	reference: Xyz = getReference(StandardIlluminant.D65_2)
): Luv {
	// eslint-disable-next-line prefer-destructuring
	const x = color[0];
	// eslint-disable-next-line prefer-destructuring
	const y = color[1];
	// eslint-disable-next-line prefer-destructuring
	const z = color[2];
	// eslint-disable-next-line prefer-destructuring
	const referenceX = reference[0];
	// eslint-disable-next-line prefer-destructuring
	const referenceY = reference[1];
	// eslint-disable-next-line prefer-destructuring
	const referenceZ = reference[2];

	const varU = (4 * x) / (x + 15 * y + 3 * z);
	const varV = (9 * y) / (x + 15 * y + 3 * z);

	let varY = y / 100;
	if (varY > 0.008856) {
		varY **= 1 / 3;
	} else {
		varY = 7.787 * varY + 16 / 116;
	}

	const refU =
		(4 * referenceX) / (referenceX + 15 * referenceY + 3 * referenceZ);
	const refV =
		(9 * referenceY) / (referenceX + 15 * referenceY + 3 * referenceZ);

	const cieL = 116 * varY - 16;
	const cieU = 13 * cieL * (varU - refU);
	const cieV = 13 * cieL * (varV - refV);

	return [cieL, cieU, cieV];
}
