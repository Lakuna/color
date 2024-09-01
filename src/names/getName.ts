import type ColorLike from "../types/ColorLike.js";
import ntcNames from "./ntcNames.js";
import squaredDistance from "../utility/squaredRgbDistance.js";

/**
 * Get the name of the nearest color in the given color name dictionary.
 * @param color - The color.
 * @param names - The color name dictionary.
 * @returns The nearest color name.
 * @public
 */
export default function getName(
	color: ColorLike,
	names: Map<string, ColorLike> = ntcNames
): string {
	let [nearestName] = names.entries().next().value as [string, ColorLike];
	let nearestSqDist = Infinity;

	for (const [name, otherColor] of names.entries()) {
		const sqDist = squaredDistance(color, otherColor);

		if (nearestSqDist < sqDist) {
			continue;
		}

		nearestName = name;
		nearestSqDist = sqDist;
	}

	return nearestName;
}
