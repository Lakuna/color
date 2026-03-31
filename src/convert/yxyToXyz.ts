import type Xyz from "../types/Xyz.js";
import type Yxy from "../types/Yxy.js";

/**
 * Convert a CIEXYZ color from Yxy format to XYZ format. Based on the EasyRGB pseudo-code.
 * @param color - The CIEXYZ color in Yxy format.
 * @returns A CIEXYZ color.
 * @public
 */
export default function yxyToXyz(
	color: Readonly<Yxy>
): [number, number, number] & Xyz {
	const Y = color[0];

	const x = color[1];

	const y = color[2];

	return [x * (Y / y), Y, (1 - x - y) * (Y / y)];
}
