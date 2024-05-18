import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {ALL_MOVIES} from '../../navigations/constants';

const MoviesList = ({title, isSeeAllNeed = true, movieData}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerStyle}>
      <View style={styles.containerStyle1}>
        <Text style={styles.titleStyle}>{title}</Text>
        {isSeeAllNeed ? (
          <TouchableOpacity
            onPress={() =>
              navigation?.navigate(ALL_MOVIES, {
                title: title,
              })
            }>
            <Text style={styles.tchStyle}>See All</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {movieData?.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation?.push('MovieScreen', item)}>
              <View style={styles.imageContainer}>
                <Image source={{uri: item?.Poster}} style={styles.imageStyle} />
                <Text style={styles.movieTitle}></Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MoviesList;
