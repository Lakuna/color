import type { Color } from "./Color.js";

/**
 * A CIELCh (CIEHLC or CIE-L\*Ch(ab)) representation of a color. Intended to be a perceptually uniform space. Colors are defined relative to a standard observer.
 * @see {@link https://en.wikipedia.org/wiki/CIELAB_color_space | CIELAB color space}
 * @public
 */
export default interface Lchab extends Color {
	/** The L* (luminance or perceptual brightness) value of this color in the range `[0,100]`. */
	0: number;

	/** The C* (chroma/chromaticity or relative saturation) value of this color. Forms a polar coordinate pair with h° to represent the four unique colors of human vision (red, green, blue, and yellow). */
	1: number;

	/** The h° (hue angle) value of this color. Forms a polar coordinate pair with C* to represent the four unique colors of human vision (red, green, blue, and yellow). */
	2: number;
}
