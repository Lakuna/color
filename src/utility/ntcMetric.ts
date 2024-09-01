import type ColorLike from "../types/ColorLike.js";
import squaredHslDistance from "./squaredHslDistance.js";
import squaredRgbDistance from "./squaredRgbDistance.js";

/**
 * The metric for color similarity used by Name That Color.
 * @param a - The first color.
 * @param b - The second color.
 * @returns The similarity between the colors.
 * @see {@link https://en.wikipedia.org/wiki/Euclidean_distance | Euclidean distance}
 * @see {@link https://en.wikipedia.org/wiki/Color_difference | Color difference}
 * @public
 */
export default function ntcMetric(a: ColorLike, b: ColorLike): number {
	return squaredRgbDistance(a, b) + 2 * squaredHslDistance(a, b);
}
