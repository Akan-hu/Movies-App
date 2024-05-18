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
        layoutCardOffset={9}
        inactiveSlideOpacity={0.8}
        sliderWidth={width}
        itemWidth={width * 0.62}
        inactiveSlideShift={0}
        slideStyle={styles.sliderStyle}
        useScrollView={true}
        loop={true} // Enable looping
        autoplay={true} // Enable autoplay
        autoplayDelay={500} // Adjust as needed
        autoplayInterval={3000} // Increase interval to allow smooth transitions
        loopClonesPerSide={data.length}
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
