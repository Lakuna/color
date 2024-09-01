import type ColorLike from "../types/ColorLike.js";

/**
 * The piecewise function that is used internally for calculating HSL values.
 * @param m1 - A combination of the saturation and luminance/lightness values.
 * @param m2 - A combination of the saturation and luminance/lightness values.
 * @param h - The hue value.
 * @returns The piecewise value.
 * @internal
 */
const piecewise = (m1: number, m2: number, h: number) => {
	const h2 = h % 1;

	if (h2 < 60 / 360) {
		return m1 + (m2 - m1) * h2 * 6;
	}

	if (h2 < 180 / 360) {
		return m2;
	}

	if (h2 < 240 / 360) {
		return m1 + (m2 - m1) * (240 / 360 - h2) * 6;
	}

	return m1;
};

/**
 * Create a color-like object from the given hue, saturation, luminance/lightness, and alpha values. Based on Python's `colorsys.py`.
 * @param h - The hue (position in the spectrum) channel value in the range `[0,1]`.
 * @param s - The saturation (purity) channel value in the range `[0,1]`.
 * @param l - The luminance/lightness channel value in the range `[0,1]`.
 * @param a - The alpha channel value in the range `[0,1]`.
 * @returns A color-like object.
 * @public
 */
export default function fromHsl(
	h: number,
	s: number,
	l: number,
	a = 1
): Float32Array & ColorLike {
	if (s === 0) {
		return new Float32Array([l, l, l, a]) as Float32Array & ColorLike;
	}

	const m2 = l > 1 / 2 ? l + s - l * s : l * (1 + s);
	const m1 = 2 * l - m2;
	return new Float32Array([
		piecewise(m1, m2, h + 120 / 360),
		piecewise(m1, m2, h),
		piecewise(m1, m2, h - 120 / 360),
		a
	]) as Float32Array & ColorLike;
}
