/**
 * A theoretical source of visible light with a published spectral power distribution that is used to provide a basis for comparing colors recorded under different lighting.
 * @see {@link https://en.wikipedia.org/wiki/Standard_illuminant | Standard illuminant}
 * @public
 */
enum StandardIlluminant {
	/** The CIE A standard illuminant with the standard (CIE 1931; 2°) observer. Used to represent average incandescent/tungsten light. */
	A_2,

	/** The CIE A standard illuminant with the supplementary (CIE 1964; 10°) observer. Used to represent average incandescent/tungsten light. */
	A_10,

	/** The CIE B standard illuminant with the standard (CIE 1931; 2°) observer. Formerly used to represent average direct sunlight at noon. */
	B_2,

	/** The CIE B standard illuminant with the supplementary (CIE 1964; 10°) observer. Formerly used to represent average direct sunlight at noon. */
	B_10,

	/** The CIE C standard illuminant with the standard (CIE 1931; 2°) observer. Formerly used to represent average daylight. */
	C_2,

	/** The CIE C standard illuminant with the supplementary (CIE 1964; 10°) observer. Formerly used to represent average daylight. */
	C_10,

	/** The CIE D50 standard illuminant with the standard (CIE 1931; 2°) observer. Used to represent ICC profile PCS. Typically used in the printing industry. */
	D50_2,

	/** The CIE D50 standard illuminant with the supplementary (CIE 1964; 10°) observer. Used to represent ICC profile PCS. Typically used in the printing industry. */
	D50_10,

	/** The CIE D55 standard illuminant with the standard (CIE 1931; 2°) observer. Used to represent mid-morning daylight. */
	D55_2,

	/** The CIE D55 standard illuminant with the supplementary (CIE 1964; 10°) observer. Used to represent mid-morning daylight. */
	D55_10,

	/** The CIE D65 standard illuminant with the standard (CIE 1931; 2°) observer. Used to represent daylight. The CIE standard, and the standard for nearly all display colorspaces and working spaces including sRGB and Adobe RGB. */
	D65_2,

	/** The CIE D65 standard illuminant with the supplementary (CIE 1964; 10°) observer. Used to represent daylight. The CIE standard, and the standard for nearly all display colorspaces and working spaces including sRGB and Adobe RGB. */
	D65_10,

	/** The CIE D75 standard illuminant with the standard (CIE 1931; 2°) observer. Used to represent North sky daylight. */
	D75_2,

	/** The CIE D75 standard illuminant with the supplementary (CIE 1964; 10°) observer. Used to represent North sky daylight. */
	D75_10,

	/** The CIE E standard illuminant with the standard (CIE 1931; 2°) observer. Used to represent equal energy lighting. */
	E_2,

	/** The CIE E standard illuminant with the supplementary (CIE 1964; 10°) observer. Used to represent equal energy lighting. */
	E_10,

	/** The CIE F1 standard illuminant with the standard (CIE 1931; 2°) observer. Used to represent daylight flourescent lamps. */
	F1_2,

	/** The CIE F1 standard illuminant with the supplementary (CIE 1964; 10°) observer. Used to represent daylight flourescent lamps. */
	F1_10,

	/** The CIE F2 standard illuminant with the standard (CIE 1931; 2°) observer. Used to represent cool flourescent lamps. */
	F2_2,

	/** The CIE F2 standard illuminant with the supplementary (CIE 1964; 10°) observer. Used to represent cool flourescent lamps. */
	F2_10,

	/** The CIE F3 standard illuminant with the standard (CIE 1931; 2°) observer. Used to represent white flourescent lamps. */
	F3_2,

	/** The CIE F3 standard illuminant with the supplementary (CIE 1964; 10°) observer. Used to represent white flourescent lamps. */
	F3_10,

	/** The CIE F4 standard illuminant with the standard (CIE 1931; 2°) observer. Used to represent warm white flourescent lamps. */
	F4_2,

	/** The CIE F4 standard illuminant with the supplementary (CIE 1964; 10°) observer. Used to represent warm white flourescent lamps. */
	F4_10,

	/** The CIE F5 standard illuminant with the standard (CIE 1931; 2°) observer. Used to represent daylight flourescent lamps. */
	F5_2,

	/** The CIE F5 standard illuminant with the supplementary (CIE 1964; 10°) observer. Used to represent daylight flourescent lamps. */
	F5_10,

	/** The CIE F6 standard illuminant with the standard (CIE 1931; 2°) observer. Used to represent lite white flourescent lamps. */
	F6_2,

	/** The CIE F6 standard illuminant with the supplementary (CIE 1964; 10°) observer. Used to represent lite white flourescent lamps. */
	F6_10,

	/** The CIE F7 standard illuminant with the standard (CIE 1931; 2°) observer. Used to represent daylight flourescent lamps (D65 simulator). */
	F7_2,

	/** The CIE F7 standard illuminant with the supplementary (CIE 1964; 10°) observer. Used to represent daylight flourescent lamps (D65 simulator). */
	F7_10,

	/** The CIE F8 standard illuminant with the standard (CIE 1931; 2°) observer. Used to represent Sylvania F40 flourescent lamps (D50 simulator). */
	F8_2,

	/** The CIE F8 standard illuminant with the supplementary (CIE 1964; 10°) observer. Used to represent Sylvania F40 flourescent lamps (D50 simulator). */
	F8_10,

	/** The CIE F9 standard illuminant with the standard (CIE 1931; 2°) observer. Used to represent cool white flourescent lamps. */
	F9_2,

	/** The CIE F9 standard illuminant with the supplementary (CIE 1964; 10°) observer. Used to represent cool white flourescent lamps. */
	F9_10,

	/** The CIE F10 standard illuminant with the standard (CIE 1931; 2°) observer. Used to represent Ultralume 50 and Philips TL85 flourescent lamps. */
	F10_2,

	/** The CIE F10 standard illuminant with the supplementary (CIE 1964; 10°) observer. Used to represent Ultralume 50 and Philips TL85 flourescent lamps. */
	F10_10,

	/** The CIE F11 standard illuminant with the standard (CIE 1931; 2°) observer. Used to represent Ultralume 40 and Philips TL84 flourescent lamps. */
	F11_2,

	/** The CIE F11 standard illuminant with the supplementary (CIE 1964; 10°) observer. Used to represent Ultralume 40 and Philips TL84 flourescent lamps. */
	F11_10,

	/** The CIE F12 standard illuminant with the standard (CIE 1931; 2°) observer. Used to represent Ultralume 30 and Philips TL83 flourescent lamps. */
	F12_2,

	/** The CIE F12 standard illuminant with the supplementary (CIE 1964; 10°) observer. Used to represent Ultralume 30 and Philips TL83 flourescent lamps. */
	F12_10
}

export default StandardIlluminant;
