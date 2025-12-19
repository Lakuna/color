import type Lab from "../types/Lab.js";
import StandardIlluminant from "../utility/StandardIlluminant.js";
import type Xyz from "../types/Xyz.js";
import getReference from "../utility/getReference.js";

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
): Lab {
	const i0 = color[0] / ref[0];
	const i1 = color[1] / ref[1];
	const i2 = color[2] / ref[2];
	const i3 = i1 > 0.008856 ? i1 ** 0.33333333 : 7.787 * i1 + 0.13793103; // `1 / 3`; `16 / 116`

	return [
		116 * i3 - 16,
		500 * ((i0 > 0.008856 ? i0 ** 0.33333333 : 7.787 * i0 + 0.13793103) - i3), // `1 / 3`; `16 / 116`
		200 * (i3 - (i2 > 0.008856 ? i2 ** 0.33333333 : 7.787 * i2 + 0.13793103)) // `1 / 3`; `16 / 116`
	];
}
