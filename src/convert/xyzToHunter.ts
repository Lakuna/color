import type Hunter from "../types/Hunter.js";
import StandardIlluminant from "../utility/StandardIlluminant.js";
import type Xyz from "../types/Xyz.js";
import getReference from "../utility/getReference.js";

const c0 = 175 / 198.04;
const c1 = 70 / 218.11;

/**
 * Convert the given CIEXYZ color to a Hunter Lab color. Based on the EasyRGB pseudo-code.
 * @param color - The CIEXYZ color.
 * @param ref - A standard illuminant that represents the white point. This color space was originally used with standard illuminant C.
 * @returns A Hunter Lab color.
 * @public
 */
export default function xyzToHunter(
	color: Xyz,
	ref: Xyz = getReference(StandardIlluminant.D65_2)
): Hunter & [number, number, number] {
	// eslint-disable-next-line prefer-destructuring
	const rx = ref[0];
	// eslint-disable-next-line prefer-destructuring
	const ry = ref[1];
	// eslint-disable-next-line prefer-destructuring
	const rz = ref[2];

	const i2 = color[1] / ry;
	const i3 = Math.sqrt(i2);

	return [
		100 * i3,
		c0 * (ry + rx) * ((color[0] / rx - i2) / i3),
		c1 * (ry + rz) * ((i2 - color[2] / rz) / i3)
	];
}
