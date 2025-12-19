import type { Color } from "./Color.js";

/**
 * A CIELUV (CIE 1976 L\*,u\*,v\* or CIE-L\*uv) representation of a color. Intended to be a perceptually uniform space. Derived from CIEXYZ. Colors are defined relative to a standard observer. Compared to CIELAB, CIELUV is considered better for emissive, self-illuminated colors (such as those on a monitor).
 * @see {@link https://en.wikipedia.org/wiki/CIELUV | CIELUV}
 * @public
 */
export default interface Luv extends Color {
	/** The L* (perceptual brightness) value of this color in the range `[0,100]`. */
	0: number;

	/** The u* value of this color. Forms a Cartesian coordinate pair with v* to represent the four unique colors of human vision (red, green, blue, and yellow). */
	1: number;

	/** The v* value of this color. Forms a Cartesian coordinate pair with u* to represent the four unique colors of human vision (red, green, blue, and yellow). */
	2: number;
}
