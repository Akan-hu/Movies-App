import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './styles';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import {COLOR_ERROR_RED, COLOR_WHITE} from '../../helper/colors';
import LinearGradient from 'react-native-linear-gradient';
import MoviesList from '../../components/moviesList';
import StarRating from '../../components/ratings';
const MoviesScreen = () => {
  const navigation = useNavigation();
  const {params: item} = useRoute();
  const [isFavorite, setIsFavorite] = useState(false);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4]);
  console.log('item.imdbRating', item.imdbRating);

  useEffect(() => {}, [item]);
  return (
    <ScrollView style={styles.scrollViewStyle}>
      {/*back button and movie poster */}
      <View style={styles.headerContainer}>
        <SafeAreaView style={styles.headerView}>
          <TouchableOpacity
            onPress={() => navigation?.goBack()}
            style={styles.tchStyle}>
            <ChevronLeftIcon size={'28'} strokeWidth={2.5} color={'white'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsFavorite(!isFavorite)}
            style={styles.heartIcon}>
            <HeartIcon
              size={35}
              color={isFavorite ? COLOR_ERROR_RED : COLOR_WHITE}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={{uri: item?.Poster}}
            style={styles.imgStyle}
            resizeMode={'stretch'}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.3)', 'rgba(23,23,23,1)']}
            style={styles.gradient}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
          />
        </View>
      </View>
      {/** movie details */}
      <View style={styles.detailView}>
        {/** title */}
        <Text style={styles.titleStyle}>{item?.Title}</Text>
        {/** status, release, runtime*/}
        <Text style={styles.statusStyle}>
          Released • {item?.Released} •{' '}
          {item?.Runtime ? item?.Runtime : '130 min'}
        </Text>
        <Text style={styles.statusStyle}>{item?.Genre}</Text>
        {/** Description */}
        <Text style={styles.descriptionStyle}>{item?.Plot}</Text>
      </View>
      <View style={styles.similarView}>
        <Text style={styles.similarText}>
          Directed By : <Text style={styles.textDircet}>{item.Director}</Text>
        </Text>
        <Text style={styles.similarText}>
          Actors : <Text style={styles.textDircet}>{item.Actors}</Text>
        </Text>
        {item.imdbRating !== 'N/A' && (
          <>
            <Text style={styles.ratings}>IMDB Ratings</Text>

            <StarRating rating={parseFloat(item.imdbRating)} />
          </>
        )}
        <Text style={styles.ratingText}>{item.imdbRating}/10</Text>
      </View>
    </ScrollView>
  );
};

export default MoviesScreen;
