import type Lab from "../types/Lab.js";
import StandardIlluminant from "./StandardIlluminant.js";
import type Xyz from "../types/Xyz.js";
import getReference from "./getReference.js";

// TODO

/**
 * Convert the given CIEXYZ color to a CIELAB color. Based on the EasyRGB pseudo-code.
 * @param color - The CIEXYZ color.
 * @param reference - A standard illuminant that represents the white point.
 * @returns A CIELAB color.
 * @public
 */
export default function xyzToLab(
	color: Xyz,
	reference: Xyz = getReference(StandardIlluminant.D65_2)
): Lab {
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

	let varX = x / referenceX;
	let varY = y / referenceY;
	let varZ = z / referenceZ;

	if (varX > 0.008856) {
		varX **= 1 / 3;
	} else {
		varX = 7.787 * varX + 16 / 116;
	}
	if (varY > 0.008856) {
		varY **= 1 / 3;
	} else {
		varY = 7.787 * varY + 16 / 116;
	}
	if (varZ > 0.008856) {
		varZ **= 1 / 3;
	} else {
		varZ = 7.787 * varZ + 16 / 116;
	}

	const cieL = 116 * varY - 16;
	const cieA = 500 * (varX - varY);
	const cieB = 200 * (varY - varZ);

	return [cieL, cieA, cieB];
}
