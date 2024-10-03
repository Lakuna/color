import type Rgb from "../types/Rgb.js";
import relativeLuminance from "./relativeLuminance.js";

/**
 * Calculate the contrast ratio between two sRGB colors. This is useful for ensuring that Web Content Accessibility Guidelines (WCAG) are met. For everything to meet WCAG 2.2 at level AAA, this value should be at least 7.
 * @param color0 - The first sRGB color.
 * @param color1 - The second sRGB color.
 * @returns The contrast ratio between the colors (a value `v` such that the contrast ratio between the colors is `v` to one).
 * @see {@link https://www.w3.org/WAI/GL/wiki/Contrast_ratio | Contrast ratio}
 * @see {@link https://www.w3.org/WAI/standards-guidelines/wcag/ | WCAG 2 Overview}
 * @public
 */
export default function contrast(color0: Rgb, color1: Rgb): number {
	// Intermediate values.
	const i0 = relativeLuminance(color0);
	const i1 = relativeLuminance(color1);

	return i0 > i1 ? (i0 + 0.05) / (i1 + 0.05) : (i1 + 0.05) / (i0 + 0.05);
}
