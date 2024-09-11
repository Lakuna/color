import type { Color } from "../types/Color.js";
import type Rgb from "../types/Rgb.js";
import deltaE2000 from "../utility/deltaE2000.js";
import ntcNames from "./ntcNames.js";
import rgbToXyz from "../utility/rgbToXyz.js";
import xyzToLab from "../utility/xyzToLab.js";

/**
 * Get the name of the nearest color in the given color name dictionary.
 * @param color - The color.
 * @param names - The color name dictionary.
 * @param diff - The function for comparing the difference between colors.
 * @returns The nearest color name.
 * @public
 */
export default function getName<T extends Color>(
	color: T,
	names: Map<string, T>,
	diff: (a: T, b: T) => number
): string {
	let [nearestName] = names.entries().next().value as [string, T];
	let nearestDiff = Infinity;

	for (const [name, otherColor] of names.entries()) {
		const currentDiff = diff(color, otherColor);

		if (nearestDiff < currentDiff) {
			continue;
		}

		nearestName = name;
		nearestDiff = currentDiff;
	}

	return nearestName;
}

/**
 * Get the name of the nearest color in the given sRGB color name dictionary using the ΔE* 2000 difference function in CIELCh(ab) space with the D65/2° standard illuminator-observer pair.
 * @param color - The color.
 * @param names - The sRGB color name dictionary. Defaults to Name That Color.
 * @returns The nearest color name.
 * @public
 */
export const getNameStandard = (
	color: Rgb,
	names: Map<string, Rgb> = ntcNames
): string =>
	getName(color, names, (a, b) =>
		deltaE2000(xyzToLab(rgbToXyz(a)), xyzToLab(rgbToXyz(b)))
	);
