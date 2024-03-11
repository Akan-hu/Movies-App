/**
 * Font Family
 */

const fontBold = 'Jost-Bold';
const fontRegular = 'Jost-Regular';
const fontMedium = 'Jost-Medium';
const fontSemiBold = 'Jost-SemiBold';
const fontExtraBold = 'Jost-ExtraBold';
const fontRegularitalic = 'Jost-Italic';

export default {
  /**
   * font-weight==> 400
   * @returns
   */
  fontFamilyRegular: () => ({
    fontFamily: fontRegular,
  }),

  /**
   * font-weight==> 500
   * @returns
   */
  fontFamilyMedium: () => ({
    fontFamily: fontMedium,
  }),

  /**
   * font-weight==> 600
   * @returns
   */
  fontSemiBold: () => ({
    fontFamily: fontSemiBold,
  }),

  /**
   * font-weight==> 700
   * @returns
   */
  fontFamilyBold: () => ({
    fontFamily: fontBold,
  }),

  /**
   * font-weight==> 800
   * @returns
   */
  fontFamilyExtraBold: () => ({
    fontFamily: fontExtraBold,
  }),

  fontFamilyRegularItalic: () => ({
    fontFamily: fontRegularitalic,
  }),
};
