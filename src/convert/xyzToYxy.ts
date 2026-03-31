import type Xyz from "../types/Xyz.js";
import type Yxy from "../types/Yxy.js";

/**
 * Convert the given CIEXYZ color to Yxy format. Based on the EasyRGB pseudo-code.
 * @param color - The CIEXYZ color.
 * @returns The CIEXYZ color in yxy format.
 * @public
 */
export default function xyzToYxy(
	color: Readonly<Xyz>
): [number, number, number] & Yxy {
	const X = color[0];

	const Y = color[1];

	const Z = color[2];

	return [Y, X / (X + Y + Z), Y / (X + Y + Z)];
}
