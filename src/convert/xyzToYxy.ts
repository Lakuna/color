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
	const X = color[0];
	// eslint-disable-next-line prefer-destructuring
	const Y = color[1];
	// eslint-disable-next-line prefer-destructuring
	const Z = color[2];

	return [Y, X / (X + Y + Z), Y / (X + Y + Z)];
}
