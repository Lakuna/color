import type Luv from "../types/Luv.js";
import StandardIlluminant from "./StandardIlluminant.js";
import type Xyz from "../types/Xyz.js";
import getReference from "./getReference.js";

/**
 * Convert the given CIELUV color to a CIEXYZ color. Based on the EasyRGB pseudo-code.
 * @param color - The CIELUV color.
 * @param reference - A standard illuminant that represents the white point.
 * @returns A CIEXYZ color.
 * @public
 */
export default function luvToXyz(
	color: Luv,
	reference: Xyz = getReference(StandardIlluminant.D65_2)
): Xyz {
	// eslint-disable-next-line prefer-destructuring
	const cieL = color[0];
	// eslint-disable-next-line prefer-destructuring
	const cieU = color[1];
	// eslint-disable-next-line prefer-destructuring
	const cieV = color[2];
	// eslint-disable-next-line prefer-destructuring
	const referenceX = reference[0];
	// eslint-disable-next-line prefer-destructuring
	const referenceY = reference[1];
	// eslint-disable-next-line prefer-destructuring
	const referenceZ = reference[2];

	let varY = (cieL + 16) / 116;
	if (varY ** 3 > 0.008856) {
		varY **= 3;
	} else {
		varY = (varY - 16 / 116) / 7.787;
	}

	const refU =
		(4 * referenceX) / (referenceX + 15 * referenceY + 3 * referenceZ);
	const refV =
		(9 * referenceY) / (referenceX + 15 * referenceY + 3 * referenceZ);

	const varU = cieU / (13 * cieL) + refU;
	const varV = cieV / (13 * cieL) + refV;

	const y = varY * 100;
	const x = -(9 * y * varU) / ((varU - 4) * varV - varU * varV);
	const z = (9 * y - 15 * varV * y - varV * x) / (3 * varV);

	return [x, y, z];
}
