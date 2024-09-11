import type Lab from "../types/Lab.js";
import type Lch from "../types/Lch.js";

/**
 * Convert CIELAB data to hue data.
 * @param varA - An input CIELAB value.
 * @param varB - An input CIELAB value.
 * @returns A CIELCh hue (h°) value.
 * @internal
 */
const cieLabToHue = (varA: number, varB: number): number => {
	let varBias = 0;
	if (varA >= 0 && varB === 0) {
		return 0;
	}
	if (varA < 0 && varB === 0) {
		return 180;
	}
	if (varA === 0 && varB > 0) {
		return 90;
	}
	if (varA === 0 && varB < 0) {
		return 270;
	}
	if (varA > 0 && varB > 0) {
		varBias = 0;
	}
	if (varA < 0) {
		varBias = 180;
	}
	if (varA > 0 && varB < 0) {
		varBias = 360;
	}
	return (Math.atan(varB / varA) * 180) / Math.PI + varBias;
};

/**
 * Calculates the ΔCMC between two CIELAB values. Based on the EasyRGB pseudocode.
 * @param color0 - The first color.
 * @param color1 - The second color.
 * @param weight - The CIELCH weights. Defaults to all ones.
 * @returns The difference between the colors.
 * @see {@link https://en.wikipedia.org/wiki/Color_difference | Color difference}
 * @public
 */
export default function deltaCmc(
	color0: Lab,
	color1: Lab,
	weight: Lch = [1, 1, 1]
): number {
	// eslint-disable-next-line prefer-destructuring
	const cieL1 = color0[0];
	// eslint-disable-next-line prefer-destructuring
	const cieA1 = color0[1];
	// eslint-disable-next-line prefer-destructuring
	const cieB1 = color0[2];
	// eslint-disable-next-line prefer-destructuring
	const cieL2 = color1[0];
	// eslint-disable-next-line prefer-destructuring
	const cieA2 = color1[1];
	// eslint-disable-next-line prefer-destructuring
	const cieB2 = color1[2];
	// eslint-disable-next-line prefer-destructuring
	const whtL = weight[0];
	// eslint-disable-next-line prefer-destructuring
	const whtC = weight[1];

	const xC1 = Math.sqrt(cieA1 ** 2 + cieB1 ** 2);
	const xC2 = Math.sqrt(cieA2 ** 2 + cieB2 ** 2);
	const xff = Math.sqrt(xC1 ** 4 / (xC1 ** 4 + 1900));
	const xH1 = cieLabToHue(cieA1, cieB1);

	// eslint-disable-next-line no-useless-assignment
	let xTT = 0;
	if (xH1 < 164 || xH1 > 345) {
		xTT = 0.36 + Math.abs(0.4 * Math.cos(((35 + xH1) * Math.PI) / 180));
	} else {
		xTT = 0.56 + Math.abs(0.2 * Math.cos(((168 + xH1) * Math.PI) / 180));
	}

	// eslint-disable-next-line no-useless-assignment
	let xSL = 0;
	if (cieL1 < 16) {
		xSL = 0.511;
	} else {
		xSL = (0.040975 * cieL1) / (1 + 0.01765 * cieL1);
	}

	let xSC = (0.0638 * xC1) / (1 + 0.0131 * xC1) + 0.638;
	let xSH = (xff * xTT + 1 - xff) * xSC;
	const xDH = Math.sqrt(
		(cieA2 - cieA1) ** 2 + (cieB2 - cieB1) ** 2 - (xC2 - xC1) ** 2
	);
	xSL = (cieL2 - cieL1) / (whtL * xSL);
	xSC = (xC2 - xC1) / (whtC * xSC);
	xSH = xDH / xSH;

	const deltaCmc2 = Math.sqrt(xSL ** 2 + xSC ** 2 + xSH ** 2);

	return deltaCmc2;
}
