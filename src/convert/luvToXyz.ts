import type Luv from "../types/Luv.js";
import StandardIlluminant from "../utility/StandardIlluminant.js";
import type Xyz from "../types/Xyz.js";
import getReference from "../utility/getReference.js";

/**
 * Convert the given CIELUV color to a CIEXYZ color. Based on the EasyRGB pseudo-code.
 * @param color - The CIELUV color.
 * @param ref - A standard illuminant that represents the white point.
 * @returns A CIEXYZ color.
 * @public
 */
export default function luvToXyz(
	color: Luv,
	ref: Xyz = getReference(StandardIlluminant.D65_2)
): Xyz {
	// eslint-disable-next-line prefer-destructuring
	const l = color[0];
	// eslint-disable-next-line prefer-destructuring
	const rx = ref[0];
	// eslint-disable-next-line prefer-destructuring
	const ry = ref[1];

	const i0 = (l + 16) / 116;
	const i1 = i0 ** 3;
	const i2 = 13 * l;
	const i3 = rx + 15 * ry + 3 * ref[2];
	const i4 = color[1] / i2 + (4 * rx) / i3;
	const i5 = color[2] / i2 + (9 * ry) / i3;
	const y = (i1 > 0.008856 ? i1 : (i0 - 0.13793103) / 7.787) * 100; // `16 / 166`
	const i6 = 9 * y;
	const x = -(i6 * i4) / ((i4 - 4) * i5 - i4 * i5);

	return [x, y, (i6 - 15 * i5 * y - i5 * x) / (3 * i5)];
}
