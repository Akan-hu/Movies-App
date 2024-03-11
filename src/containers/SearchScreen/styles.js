import {StyleSheet} from 'react-native';
import {APP_BACKGROUND, COLOR_GRAY, COLOR_WHITE} from '../../helper/colors';
import {height, width} from '../../helper';

export const styles = StyleSheet.create({
  safeView: {
    backgroundColor: APP_BACKGROUND,
    flex: 1,
  },
  inputView: {
    marginHorizontal: 10,
    marginVertical: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: COLOR_GRAY,
    borderWidth: 2,
    borderRadius: 15,
  },
  inputStyle: {
    flex: 1,
    marginVertical: 10,
    paddingLeft: 10,
    color: COLOR_WHITE,
  },
  crossIcon: {
    backgroundColor: COLOR_GRAY,
    borderRadius: 20,
    marginEnd: 10,
  },
  scrollStyle: {
    marginVertical: 8,
  },
  resultText: {
    color: COLOR_WHITE,
    marginLeft: 10,
    marginTop: 8,
  },
  listItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    justifyContent: 'center',
  },
  imageStyle: {
    width: width * 0.44,
    height: height * 0.25,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  title: {
    color: COLOR_WHITE,
    marginHorizontal: 8,
    marginBottom: 8,
    textAlign: 'center',
  },
  crossIconBack: {
    marginStart: 5,
  },
});
