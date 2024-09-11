import type Hunter from "../types/Hunter.js";
import StandardIlluminant from "./StandardIlluminant.js";
import type Xyz from "../types/Xyz.js";
import getReference from "./getReference.js";

/**
 * Convert the given Hunter Lab color to a CIEXYZ color. Based on the EasyRGB pseudo-code.
 * @param color - The Hunter Lab color.
 * @param reference - A standard illuminant that represents the white point.
 * @returns A CIEXYZ color.
 * @public
 */
export default function hunterToXyz(
	color: Hunter,
	reference: Xyz = getReference(StandardIlluminant.D65_2)
): Xyz {
	// eslint-disable-next-line prefer-destructuring
	const hunterL = color[0];
	// eslint-disable-next-line prefer-destructuring
	const hunterA = color[1];
	// eslint-disable-next-line prefer-destructuring
	const hunterB = color[2];
	// eslint-disable-next-line prefer-destructuring
	const referenceX = reference[0];
	// eslint-disable-next-line prefer-destructuring
	const referenceY = reference[1];
	// eslint-disable-next-line prefer-destructuring
	const referenceZ = reference[2];

	const varKa = (175 / 198.04) * (referenceY + referenceX);
	const varKb = (70 / 218.11) * (referenceY + referenceZ);

	const y = (hunterL / referenceY) ** 2 * 100;
	const x =
		((hunterA / varKa) * Math.sqrt(y / referenceY) + y / referenceY) *
		referenceX;
	const z =
		-((hunterB / varKb) * Math.sqrt(y / referenceY) - y / referenceY) *
		referenceZ;

	return [x, y, z];
}
