import type Luv from "../types/Luv.js";
import StandardIlluminant from "../utility/StandardIlluminant.js";
import type Xyz from "../types/Xyz.js";
import getReference from "../utility/getReference.js";

const c0 = 1 / 3;
const c1 = 16 / 116;

/**
 * Convert the given CIEXYZ color to a CIELUV color. Based on the EasyRGB pseudo-code.
 * @param color - The CIEXYZ color.
 * @param ref - A standard illuminant that represents the white point.
 * @returns A CIELUV color.
 * @public
 */
export default function xyzToLuv(
	color: Xyz,
	ref: Xyz = getReference(StandardIlluminant.D65_2)
): Luv & [number, number, number] {
	// eslint-disable-next-line prefer-destructuring
	const x = color[0];
	// eslint-disable-next-line prefer-destructuring
	const y = color[1];
	// eslint-disable-next-line prefer-destructuring
	const rx = ref[0];
	// eslint-disable-next-line prefer-destructuring
	const ry = ref[1];

	const i0 = x + 15 * y + 3 * color[2];
	const i1 = rx + 15 * ry + 3 * ref[2];
	const i2 = y / 100;
	const l = 116 * (i2 > 0.008856 ? i2 ** c0 : 7.787 * i2 + c1) - 16;
	const i3 = 13 * l;

	return [
		l,
		i3 * ((4 * x) / i0 - (4 * rx) / i1),
		i3 * ((9 * y) / i0 - (9 * ry) / i1)
	];
}
