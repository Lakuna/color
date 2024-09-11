import type Xyz from "../types/Xyz.js";
import type Yxy from "../types/Yxy.js";

/**
 * Convert the given CIEXYZ color to Yxy format. Based on the EasyRGB pseudo-code.
 * @param color - The CIEXYZ color.
 * @returns The CIEXYZ color in yxy format.
 * @public
 */
export default function xyzToYxy(color: Xyz): Yxy {
	// eslint-disable-next-line prefer-destructuring
	const bX = color[0];
	// eslint-disable-next-line prefer-destructuring
	const bY = color[1];
	// eslint-disable-next-line prefer-destructuring
	const bZ = color[2];

	const sX = bX / (bX + bY + bZ);
	const sY = bY / (bX + bY + bZ);

	return [bY, sX, sY];
}
