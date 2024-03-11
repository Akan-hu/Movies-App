import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Carousel from 'react-native-snap-carousel';
import {height, width} from '../../helper';
import {useNavigation} from '@react-navigation/native';

const TrendingMovies = props => {
  const {data} = props || {};
  const navigation = useNavigation();
  const handleClick = item => {
    navigation?.navigate('MovieScreen', item);
  };
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Trending</Text>

      <Carousel
        data={data}
        renderItem={({item}) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={2}
        inactiveSlideOpacity={0.8}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={styles.sliderStyle}
      />
    </View>
  );
};

export default TrendingMovies;

const MovieCard = ({item, handleClick}) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image source={{uri: item?.Poster}} style={styles.imgStyle} />
    </TouchableWithoutFeedback>
  );
};
