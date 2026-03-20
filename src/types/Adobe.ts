import type { Color } from "./Color.js";

/**
 * An Adobe RGB (opRGB) representation of a color.
 * @see {@link https://en.wikipedia.org/wiki/Adobe_RGB_color_space | Adobe RGB color space}
 * @public
 */
export default interface Adobe extends Color {
	/** The red channel of this color in the range `[0x00,0xff]`. */
	// eslint-disable-next-line @typescript-eslint/naming-convention
	0: number;

	/** The green channel of this color in the range `[0x00,0xff]`. */
	// eslint-disable-next-line @typescript-eslint/naming-convention
	1: number;

	/** The blue channel of this color in the range `[0x00,0xff]`. */
	// eslint-disable-next-line @typescript-eslint/naming-convention
	2: number;
}
