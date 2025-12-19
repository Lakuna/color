import type Lab from "../types/Lab.js";
import StandardIlluminant from "../utility/StandardIlluminant.js";
import type Xyz from "../types/Xyz.js";
import getReference from "../utility/getReference.js";

/**
 * Convert the given CIELAB color to a CIEXYZ color. Based on the EasyRGB pseudo-code.
 * @param color - The CIELAB color.
 * @param ref - A standard illuminant that represents the white point.
 * @returns A CIEXYZ color.
 * @public
 */
export default function labToXyz(
	color: Lab,
	ref: Xyz = getReference(StandardIlluminant.D65_2)
): Xyz {
	const i0 = (color[0] + 16) / 116;
	const i1 = i0 ** 3;
	const i2 = color[1] / 500 + i0;
	const i3 = i2 ** 3;
	const i4 = i0 - color[2] / 200;
	const i5 = i4 ** 3;

	return [
		(i3 > 0.008856 ? i3 : (i2 - 0.13793103) / 7.787) * ref[0], // `16 / 116`
		(i1 > 0.008856 ? i1 : (i0 - 0.13793103) / 7.787) * ref[1], // `16 / 116`
		(i5 > 0.008856 ? i5 : (i4 - 0.13793103) / 7.787) * ref[2] // `16 / 116`
	];
}
