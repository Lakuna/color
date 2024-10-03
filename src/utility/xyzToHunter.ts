import type Hunter from "../types/Hunter.js";
import StandardIlluminant from "./StandardIlluminant.js";
import type Xyz from "../types/Xyz.js";
import getReference from "./getReference.js";

// TODO

/**
 * Convert the given CIEXYZ color to a Hunter Lab color. Based on the EasyRGB pseudo-code.
 * @param color - The CIEXYZ color.
 * @param reference - A standard illuminant that represents the white point.
 * @returns A Hunter Lab color.
 * @public
 */
export default function xyzToHunter(
	color: Xyz,
	reference: Xyz = getReference(StandardIlluminant.D65_2)
): Hunter {
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

	const varKa = (175 / 198.04) * (referenceY + referenceX);
	const varKb = (70 / 218.11) * (referenceY + referenceZ);

	const hunterL = 100 * Math.sqrt(y / referenceY);
	const hunterA =
		varKa * ((x / referenceX - y / referenceY) / Math.sqrt(y / referenceY));
	const hunterB =
		varKb * ((y / referenceY - z / referenceZ) / Math.sqrt(y / referenceY));

	return [hunterL, hunterA, hunterB];
}
