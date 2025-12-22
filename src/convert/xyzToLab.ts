import type Lab from "../types/Lab.js";
import StandardIlluminant from "../utility/StandardIlluminant.js";
import type Xyz from "../types/Xyz.js";
import getReference from "../utility/getReference.js";

const c0 = 1 / 3;
const c1 = 16 / 116;
const c2 = 0.008856;
const c3 = 7.787;

/**
 * Convert the given CIEXYZ color to a CIELAB color. Based on the EasyRGB pseudo-code.
 * @param color - The CIEXYZ color.
 * @param ref - A standard illuminant that represents the white point.
 * @returns A CIELAB color.
 * @public
 */
export default function xyzToLab(
	color: Xyz,
	ref: Xyz = getReference(StandardIlluminant.D65_2)
): Lab & [number, number, number] {
	const i0 = color[0] / ref[0];
	const i1 = color[1] / ref[1];
	const i2 = color[2] / ref[2];
	const i3 = i1 > c2 ? i1 ** c0 : c3 * i1 + c1;

	return [
		116 * i3 - 16,
		500 * ((i0 > c2 ? i0 ** c0 : c3 * i0 + c1) - i3),
		200 * (i3 - (i2 > c2 ? i2 ** c0 : c3 * i2 + c1))
	];
}
