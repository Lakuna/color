import type Xyz from "../types/Xyz.js";
import type Yxy from "../types/Yxy.js";

// TODO

/**
 * Convert a CIEXYZ color from Yxy format to XYZ format. Based on the EasyRGB pseudo-code.
 * @param color - The CIEXYZ color in Yxy format.
 * @returns A CIEXYZ color.
 * @public
 */
export default function yxyToXyz(color: Yxy): Xyz {
	// eslint-disable-next-line prefer-destructuring
	const bY = color[0];
	// eslint-disable-next-line prefer-destructuring
	const sX = color[1];
	// eslint-disable-next-line prefer-destructuring
	const sY = color[2];

	const bX = sX * (bY / sY);
	const bZ = (1 - sX - sY) * (bY / sY);

	return [bX, bY, bZ];
}
