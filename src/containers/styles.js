import {StyleSheet} from 'react-native';
import {isIOS} from '../helper';
import {APP_BACKGROUND, COLOR_WHITE, YELLOW_DARK} from '../helper/colors';
import {fontSize} from '../helper/fonts';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: APP_BACKGROUND,
    flex: 1,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 6,
    marginTop: isIOS ? 0 : 20,
  },
  tilteStyle: {
    color: COLOR_WHITE,
    fontWeight: 'bold',
    letterSpacing: 2,
    ...fontSize.fontSizeExtra25Large(),
  },
  tilteStyle1: {
    letterSpacing: 2,
    color: YELLOW_DARK,
    fontWeight: 'bold',
    ...fontSize.fontSizeExtra25Large(),
  },

  scrollContainer: {
    paddingBottom: 10,
  },
});
