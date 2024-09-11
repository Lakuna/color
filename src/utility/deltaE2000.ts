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
 * Calculates the ΔE* 2000 (also called the CIEDE2000) between two CIELAB values. Based on the EasyRGB pseudocode.
 * @param color0 - The first color.
 * @param color1 - The second color.
 * @param weight - The CIELCH weights. Defaults to all ones.
 * @returns The difference between the colors.
 * @see {@link https://en.wikipedia.org/wiki/Color_difference | Color difference}
 * @public
 */
export default function deltaE2000(
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
	// eslint-disable-next-line prefer-destructuring
	const whtH = weight[2];

	let xC1 = Math.sqrt(cieA1 * cieA1 + cieB1 * cieB1);
	let xC2 = Math.sqrt(cieA2 * cieA2 + cieB2 * cieB2);
	const xCX = (xC1 + xC2) / 2;
	const xGX = 0.5 * (1 - Math.sqrt(xCX ** 7 / (xCX ** 7 + 25 ** 7)));
	let xNN = (1 + xGX) * cieA1;
	xC1 = Math.sqrt(xNN * xNN + cieB1 * cieB1);
	const xH1 = cieLabToHue(xNN, cieB1);
	xNN = (1 + xGX) * cieA2;
	xC2 = Math.sqrt(xNN * xNN + cieB2 * cieB2);
	const xH2 = cieLabToHue(xNN, cieB2);
	let xDL = cieL2 - cieL1;
	let xDC = xC2 - xC1;
	// eslint-disable-next-line no-useless-assignment
	let xDH = 0;
	if (xC1 * xC2 === 0) {
		xDH = 0;
	} else {
		xNN = xH2 - xH1;
		if (Math.abs(xNN) <= 180) {
			xDH = xH2 - xH1;
		} else if (xNN > 180) {
			xDH = xH2 - xH1 - 360;
		} else {
			xDH = xH2 - xH1 + 360;
		}
	}

	xDH = 2 * Math.sqrt(xC1 * xC2) * Math.sin(((xDH / 2) * Math.PI) / 180);
	const xLX = (cieL1 + cieL2) / 2;
	const xCY = (xC1 + xC2) / 2;
	// eslint-disable-next-line no-useless-assignment
	let xHX = 0;
	if (xC1 * xC2 === 0) {
		xHX = xH1 + xH2;
	} else {
		xNN = Math.abs(xH1 - xH2);
		if (xNN > 180) {
			if (xH2 + xH1 < 360) {
				xHX = xH1 + xH2 + 360;
			} else {
				xHX = xH1 + xH2 - 360;
			}
		} else {
			xHX = xH1 + xH2;
		}
		xHX /= 2;
	}
	const xTX =
		1 -
		0.17 * Math.cos(((xHX - 30) * Math.PI) / 180) +
		0.24 * Math.cos((2 * xHX * Math.PI) / 180) +
		0.32 * Math.cos(((3 * xHX + 6) * Math.PI) / 180) -
		0.2 * Math.cos(((4 * xHX - 63) * Math.PI) / 180);
	const xPH = 30 * Math.exp(-((xHX - 275) / 25) * ((xHX - 275) / 25));
	const xRC = 2 * Math.sqrt(xCY ** 7 / (xCY ** 7 + 25 ** 7));
	const xSL =
		1 +
		(0.015 * ((xLX - 50) * (xLX - 50))) /
			Math.sqrt(20 + (xLX - 50) * (xLX - 50));

	const xSC = 1 + 0.045 * xCY;
	const xSH = 1 + 0.015 * xCY * xTX;
	const xRT = -Math.sin((2 * xPH * Math.PI) / 180) * xRC;
	xDL /= whtL * xSL;
	xDC /= whtC * xSC;
	xDH /= whtH * xSH;

	const deltaE00 = Math.sqrt(xDL ** 2 + xDC ** 2 + xDH ** 2 + xRT * xDC * xDH);

	return deltaE00;
}
