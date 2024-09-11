import type { Color } from "./Color.js";

/**
 * A CIELAB (L*a*b*) representation of a color. Intended to be a perceptually uniform space. Derived from CIEXYZ. Colors are defined relative to a standard observer. Compared to CIELUV, CIELAB is considered better for reflective surface colors.
 * @see {@link https://en.wikipedia.org/wiki/CIELAB_color_space | CIELAB color space}
 * @public
 */
export default interface Lab extends Color {
	/** The L* (perceptual brightness) value of this color in the range `[0,100]`. */
	0: number;

	/** The a* value of this color. Forms a Cartesian coordinate pair with b* to represent the four unique colors of human vision (red, green, blue, and yellow). */
	1: number;

	/** The b* value of this color. Forms a Cartesian coordinate pair with a* to represent the four unique colors of human vision (red, green, blue, and yellow). */
	2: number;
}
