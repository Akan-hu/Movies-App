import {StyleSheet} from 'react-native';
import {height, width} from '../../helper';

export const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 15,
    fontWeight: '600',
  },
  containerStyle: {
    marginBottom: 15,
    marginTop: 8,
  },
  sliderStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStl: {
    color: 'white',
  },
  imgStyle: {
    width: width * 0.6,
    height: height * 0.4,
    borderRadius: 30,
  },
});
