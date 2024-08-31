import type ColorLike from "../types/ColorLike.js";
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
	names: Map<ColorLike, string>
): string {
	let [, nearestName] = names.entries().next().value as [ColorLike, string];
	let nearestSqDist = Infinity;

	for (const [otherColor, name] of names.entries()) {
		const sqDist = squaredDistance(color, otherColor);

		if (nearestSqDist < sqDist) {
			continue;
		}

		nearestName = name;
		nearestSqDist = sqDist;
	}

	return nearestName;
}
