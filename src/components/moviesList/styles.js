import {StyleSheet} from 'react-native';
import {height, width} from '../../helper';

export const styles = StyleSheet.create({
  containerStyle: {
    marginVertical: 4,
    marginHorizontal: 10,
    marginTop: 10,
  },
  titleStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  tchStyle: {
    color: '#eab308',
    fontWeight: 'bold',
    fontSize: 16,
  },

  containerStyle1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  scrollContainer: {
    // paddingHorizontal: 6,
  },
  imageStyle: {
    width: width * 0.34,
    height: height * 0.22,
    borderRadius: 20,
  },
  imageContainer: {
    marginHorizontal: 6,
  },
});
