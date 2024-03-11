import {StyleSheet} from 'react-native';
import {APP_BACKGROUND, COLOR_WHITE} from '../../helper/colors';
import {fontSize} from '../../helper/fonts';
import {height, width} from '../../helper';
export const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: APP_BACKGROUND,
  },
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: 2,
    marginVertical: 5,
    alignItems: 'center',
  },
  titleStyle: {
    color: COLOR_WHITE,
    fontWeight: '600',
    ...fontSize.fontSizeLarge(),
    marginHorizontal: 15,
  },
  viewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 15,
  },
  imageStyle: {
    width: width * 0.45,
    height: height * 0.25,
    borderRadius: 20,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  scrollStyle: {
    // marginBottom: 15,
    // marginTop: 10,
  },
  title: {
    color: COLOR_WHITE,
    marginHorizontal: 8,
    marginBottom: 5,
    textAlign: 'center',
  },
});
