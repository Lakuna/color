import StandardIlluminant from "./StandardIlluminant.js";
import type Xyz from "../types/Xyz.js";

/**
 * Get an XYZ (tristimulus) reference value of a perfect reflecting diffuser, scaled such that the white point has a Y value of 100.
 * @param standardIlluminant - The standard illuminant and observer pair.
 * @returns An XYZ (tristimulus) reference value of a perfect reflecting diffuser.
 */
export default function getReference(
	standardIlluminant: StandardIlluminant
): Xyz & [number, number, number] {
	switch (standardIlluminant) {
		case StandardIlluminant.A_10:
			return [111.144, 100, 35.2];
		case StandardIlluminant.A_2:
			return [109.85, 100, 35.585];
		case StandardIlluminant.B_10:
			return [99.178, 100, 84.3493];
		case StandardIlluminant.B_2:
			return [99.0927, 100, 85.313];
		case StandardIlluminant.C_10:
			return [97.285, 100, 116.145];
		case StandardIlluminant.C_2:
			return [98.074, 100, 118.232];
		case StandardIlluminant.D50_10:
			return [96.72, 100, 81.427];
		case StandardIlluminant.D50_2:
			return [96.422, 100, 82.521];
		case StandardIlluminant.D55_10:
			return [95.799, 100, 90.926];
		case StandardIlluminant.D55_2:
			return [95.682, 100, 92.149];
		case StandardIlluminant.D65_10:
			return [94.811, 100, 107.304];
		case StandardIlluminant.D65_2:
			return [95.047, 100, 108.883];
		case StandardIlluminant.D75_10:
			return [94.416, 100, 120.641];
		case StandardIlluminant.D75_2:
			return [94.972, 100, 122.638];
		case StandardIlluminant.E_10:
		case StandardIlluminant.E_2:
			return [100, 100, 100];
		case StandardIlluminant.F1_10:
			return [94.791, 100, 103.191];
		case StandardIlluminant.F1_2:
			return [92.834, 100, 103.665];
		case StandardIlluminant.F2_10:
			return [103.28, 100, 69.026];
		case StandardIlluminant.F2_2:
			return [99.187, 100, 67.395];
		case StandardIlluminant.F3_10:
			return [108.968, 100, 51.965];
		case StandardIlluminant.F3_2:
			return [103.754, 100, 49.861];
		case StandardIlluminant.F4_10:
			return [114.961, 100, 40.963];
		case StandardIlluminant.F4_2:
			return [109.147, 100, 38.813];
		case StandardIlluminant.F5_10:
			return [93.369, 100, 98.636];
		case StandardIlluminant.F5_2:
			return [90.872, 100, 98.723];
		case StandardIlluminant.F6_10:
			return [102.148, 100, 62.074];
		case StandardIlluminant.F6_2:
			return [97.309, 100, 60.191];
		case StandardIlluminant.F7_10:
			return [95.792, 100, 107.687];
		case StandardIlluminant.F7_2:
			return [95.044, 100, 108.755];
		case StandardIlluminant.F8_10:
			return [97.115, 100, 81.135];
		case StandardIlluminant.F8_2:
			return [96.413, 100, 82.333];
		case StandardIlluminant.F9_10:
			return [102.116, 100, 67.826];
		case StandardIlluminant.F9_2:
			return [100.365, 100, 67.868];
		case StandardIlluminant.F10_10:
			return [99.001, 100, 83.134];
		case StandardIlluminant.F10_2:
			return [96.174, 100, 81.712];
		case StandardIlluminant.F11_10:
			return [103.866, 100, 65.627];
		case StandardIlluminant.F11_2:
			return [100.966, 100, 64.37];
		case StandardIlluminant.F12_10:
			return [111.428, 100, 40.353];
		case StandardIlluminant.F12_2:
			return [108.046, 100, 39.228];
		default:
			throw new RangeError("Unknown enumeration value.");
	}
}
