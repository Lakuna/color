import type ColorLike from "../types/ColorLike.js";

/**
 * Convert a color to HSL values (also called HLS values). Based on Python's `colorsys.py`.
 * @param color - The color.
 * @returns Hue, saturation, luminance/lightness, and alpha values (each in the range `[0,1]`), in that order.
 * @public
 */
export default function toHsl(
	color: ColorLike
): [number, number, number, number] {
	// eslint-disable-next-line prefer-destructuring
	const r = color[0];
	// eslint-disable-next-line prefer-destructuring
	const g = color[1];
	// eslint-disable-next-line prefer-destructuring
	const b = color[2];
	// eslint-disable-next-line prefer-destructuring
	const a = color[3];

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);

	const sum = max + min;

	const l = sum / 2;

	if (max === min) {
		return [0, l, 0, a];
	}

	const range = max - min;

	const s = range / (l > 1 / 2 ? 2 - sum : sum);

	const rs = (max - r) / range;
	const gs = (max - g) / range;
	const bs = (max - b) / range;

	const h =
		((r === max ? bs - gs : g === max ? 2 + rs - bs : 4 + gs - rs) / 6) % 1;

	return [h, s, l, a];
}
