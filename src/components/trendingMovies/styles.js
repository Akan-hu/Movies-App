import {StyleSheet} from 'react-native';
import {height, width} from '../../helper';

export const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 6,
    marginBottom: 10,
    marginTop: 8,
    fontWeight: '600',
  },
  containerStyle: {
    marginBottom: 8,
    marginTop: 8,
  },
  sliderStyle: {
    display: 'flex',
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
