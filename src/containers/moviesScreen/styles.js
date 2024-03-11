import {StyleSheet} from 'react-native';
import {
  APP_BACKGROUND,
  COLOR_BLACK,
  COLOR_TRANSPARENT,
  COLOR_WHITE,
  YELLOW_DARK,
} from '../../helper/colors';
import {height, width} from '../../helper';
import {fontSize, fontFamily} from '../../helper/fonts';
export const styles = StyleSheet.create({
  scrollViewStyle: {
    backgroundColor: APP_BACKGROUND,
    flex: 1,
    paddingBottom: 20,
  },
  headerView: {
    zIndex: 2,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  tchStyle: {
    padding: 1,
    backgroundColor: YELLOW_DARK,
    borderRadius: 10,
  },
  imgStyle: {
    height: width * 1.2,
    width: width,
  },
  gradient: {
    width: width,
    height: height * 0.4,
    position: 'absolute',
    bottom: 0,
  },
  detailView: {
    marginVertical: 3,
  },
  titleStyle: {
    color: COLOR_WHITE,
    fontWeight: '600',
    ...fontSize.fontSizeExtra25Large(),
    textAlign: 'center',
    marginHorizontal: 10,
  },
  statusStyle: {
    color: COLOR_WHITE,
    textAlign: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  descriptionStyle: {
    color: COLOR_WHITE,
    marginHorizontal: 5,
    paddingVertical: 5,
    lineHeight: 20,
    ...fontSize.fontSizeMedium(),
  },
  similarView: {
    marginBottom: 10,
  },
  similarText: {
    marginTop: 10,
    color: COLOR_WHITE,
    ...fontSize.fontSizeMedium(),
    fontWeight: '600',
  },
  textDircet: {
    marginTop: 10,
    color: COLOR_WHITE,
    ...fontSize.fontSizeMedium(),
    fontWeight: '400',
  },
  ratings: {
    marginTop: 25,
    color: COLOR_WHITE,
    ...fontSize.fontSizeExtraXLarge(),
    fontWeight: '400',
    textAlign: 'center',
  },
  ratingText: {
    color: COLOR_WHITE,
    textAlign: 'center',
    marginTop: 10,
  },
});
