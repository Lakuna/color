import type Hsl from "../types/Hsl.js";
import type Rgb from "../types/Rgb.js";

/**
 * Converts the given hue data to RGB data.
 * @param v1 - The first piecewise value.
 * @param b - The second piecewise value.
 * @param c - The third piecewise value.
 * @returns The piecewise result.
 * @internal
 */
const hueToRgb = (v1: number, v2: number, vH: number): number => {
	if (vH < 0) {
		// eslint-disable-next-line no-param-reassign
		vH += 1;
	}
	if (vH > 1) {
		// eslint-disable-next-line no-param-reassign
		vH -= 1;
	}
	if (6 * vH < 1) {
		return v1 + (v2 - v1) * 6 * vH;
	}
	if (2 * vH < 1) {
		return v2;
	}
	if (3 * vH < 2) {
		return v1 + (v2 - v1) * (2 / 3 - vH) * 6;
	}
	return v1;
};

/**
 * Convert the given HSL color to an sRGB color. Based on the EasyRGB pseudo-code.
 * @param color - The HSL color.
 * @returns An sRGB color.
 * @public
 */
export default function hslToRgb(color: Hsl): Rgb {
	// eslint-disable-next-line prefer-destructuring
	const h = color[0];
	// eslint-disable-next-line prefer-destructuring
	const s = color[1];
	// eslint-disable-next-line prefer-destructuring
	const l = color[2];

	// eslint-disable-next-line no-useless-assignment
	let r = 0;
	// eslint-disable-next-line no-useless-assignment
	let g = 0;
	// eslint-disable-next-line no-useless-assignment
	let b = 0;
	if (s === 0) {
		r = l * 255;
		g = l * 255;
		b = l * 255;
	} else {
		// eslint-disable-next-line no-useless-assignment
		let var2 = 0;
		if (l < 0.5) {
			var2 = l * (1 + s);
		} else {
			var2 = l + s - s * l;
		}

		const var1 = 2 * l - var2;

		r = 255 * hueToRgb(var1, var2, h + 1 / 3);
		g = 255 * hueToRgb(var1, var2, h);
		b = 255 * hueToRgb(var1, var2, h - 1 / 3);
	}

	return [r, g, b];
}
