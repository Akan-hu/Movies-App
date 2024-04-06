import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {COLOR_WHITE, STARS_YELLOW} from '../../helper/colors';

const StarRating = ({rating, starSize = 35}) => {
  const totalStars = 5;
  const filledStars = Math.round(rating / 2);

  const emptyStars = totalStars - filledStars;

  const renderStars = (count, isFilled) => {
    const starArray = Array.from({length: count});

    return (
      <View style={styles.starContainer}>
        {starArray.map((_, index) => (
          <Image
            key={index}
            source={isFilled ? filledStarImage : emptyStarImage}
            style={{
              width: starSize,
              height: starSize,
              tintColor: isFilled ? STARS_YELLOW : COLOR_WHITE,
            }}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.ratingContainer}>
      {renderStars(filledStars, true)}
      {renderStars(emptyStars, false)}
    </View>
  );
};

const filledStarImage = require('../../assets/star_icon_filled.png');
const emptyStarImage = require('../../assets/star_icon.png');

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default StarRating;
