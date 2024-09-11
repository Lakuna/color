import type Lab from "../types/Lab.js";
import StandardIlluminant from "./StandardIlluminant.js";
import type Xyz from "../types/Xyz.js";
import getReference from "./getReference.js";

/**
 * Convert the given CIELAB color to a CIEXYZ color. Based on the EasyRGB pseudo-code.
 * @param color - The CIELAB color.
 * @param reference - A standard illuminant that represents the white point.
 * @returns A CIEXYZ color.
 * @public
 */
export default function labToXyz(
	color: Lab,
	reference: Xyz = getReference(StandardIlluminant.D65_2)
): Xyz {
	// eslint-disable-next-line prefer-destructuring
	const cieL = color[0];
	// eslint-disable-next-line prefer-destructuring
	const cieA = color[1];
	// eslint-disable-next-line prefer-destructuring
	const cieB = color[2];
	// eslint-disable-next-line prefer-destructuring
	const referenceX = reference[0];
	// eslint-disable-next-line prefer-destructuring
	const referenceY = reference[1];
	// eslint-disable-next-line prefer-destructuring
	const referenceZ = reference[2];

	let varY = (cieL + 16) / 116;
	let varX = cieA / 500 + varY;
	let varZ = varY - cieB / 200;

	if (varY ** 3 > 0.008856) {
		varY **= 3;
	} else {
		varY = (varY - 16 / 116) / 7.787;
	}
	if (varX ** 3 > 0.008856) {
		varX **= 3;
	} else {
		varX = (varX - 16 / 116) / 7.787;
	}
	if (varZ ** 3 > 0.008856) {
		varZ **= 3;
	} else {
		varZ = (varZ - 16 / 116) / 7.787;
	}

	const x = varX * referenceX;
	const y = varY * referenceY;
	const z = varZ * referenceZ;

	return [x, y, z];
}
