import type Hunter from "../types/Hunter.js";
import type Xyz from "../types/Xyz.js";

import getReference from "../utility/getReference.js";
import StandardIlluminant from "../utility/StandardIlluminant.js";

const c0 = 175 / 198.04;
const c1 = 70 / 218.11;

/**
 * Convert the given Hunter Lab color to a CIEXYZ color. Based on the EasyRGB pseudo-code.
 * @param color - The Hunter Lab color.
 * @param ref - A standard illuminant that represents the white point.
 * @returns A CIEXYZ color.
 * @public
 */
export default function hunterToXyz(
	color: Readonly<Hunter>,
	ref: Readonly<Xyz> = getReference(StandardIlluminant.D65_2)
): [number, number, number] & Xyz {
	const rx = ref[0];

	const ry = ref[1];

	const rz = ref[2];

	const y = (color[0] / ry) ** 2 * 100;
	const i0 = y / ry;
	const i1 = Math.sqrt(i0);

	return [
		((color[1] / (c0 * (ry + rx))) * i1 + i0) * rx,
		y,
		-((color[2] / (c1 * (ry + rz))) * i1 - i0) * rz
	];
}
