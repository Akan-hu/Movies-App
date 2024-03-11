import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import TrendingMovies from '../components/trendingMovies';
import MoviesList from '../components/moviesList';
import LoadingScreen from '../components/loadingScreen';
import {moviesData} from './moviesData';
import moment from 'moment';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {BLOCKBUSTERS, TOPRATED, UPCOMING_MOVIES} from '../helper';
const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const topRatedData = moviesData.results?.filter(
    movie => movie.imdbRating > 8,
  );
  const slicedTopRatedData = topRatedData?.slice(0, 6);
  const trendingMovies = moviesData.results?.filter(
    movie => movie.Year >= 2023,
  );

  const today = moment();
  const upcoming = moviesData.results?.filter(movie => {
    const releasedDate = moment(movie.Released, 'DD MMM YYYY');

    // Compare the dates
    return releasedDate.isAfter(today);
  });
  const slicedData = moviesData?.results.slice(0, 10);
  useEffect(() => {
    if (isFocused) {
      console.log('first');
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }
  }, [isFocused]);
  console.log('slicedData', slicedTopRatedData);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="light" />
        <View style={styles.container2}>
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color={'white'} />
          <Text style={styles.tilteStyle1}>
            M<Text style={styles.tilteStyle}>ovies</Text>
          </Text>
          <TouchableOpacity onPress={() => navigation?.navigate('Search')}>
            <MagnifyingGlassIcon size={30} strokeWidth={'2'} color={'white'} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>
          {/** Trending movies carousel */}
          <TrendingMovies data={trendingMovies} />
          {/** Blockbusters Movies */}
          <MoviesList
            title={BLOCKBUSTERS}
            movieData={slicedData}
            isBlockBuster={true}
          />
          {/** Top Rated Movies */}
          <MoviesList title={TOPRATED} movieData={slicedTopRatedData} />
          {/** Upcoming movies */}
          <MoviesList
            title={UPCOMING_MOVIES}
            movieData={upcoming}
            isSeeAllNeed={false}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;
