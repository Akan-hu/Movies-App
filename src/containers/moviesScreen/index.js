import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Linking,
  Platform,
  ToastAndroid,
  AlertIOS,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './styles';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import {COLOR_ERROR_RED, COLOR_WHITE} from '../../helper/colors';
import LinearGradient from 'react-native-linear-gradient';
import StarRating from '../../components/ratings';
import YoutubePlayer from 'react-native-youtube-iframe';
const MoviesScreen = () => {
  const navigation = useNavigation();
  const {params: item} = useRoute();
  const [isFavorite, setIsFavorite] = useState(false);

  const youtubeVideoId = item?.videoId;
  console.log(youtubeVideoId);
  const handleWatchMovie = () => {
    if (youtubeVideoId != undefined) {
      const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeVideoId}`;
      Linking.openURL(youtubeUrl);
    } else {
      if (Platform.OS === 'android') {
        ToastAndroid.show(
          'This video is currently not available',
          ToastAndroid.SHORT,
        );
      } else {
        AlertIOS.alert('This video is currently not available');
      }
    }
  };
  return (
    <ScrollView style={styles.scrollViewStyle}>
      {/*back button and movie poster */}
      <View style={styles.headerContainer}>
        <SafeAreaView style={styles.headerView}>
          <View style={styles.topView}>
            <TouchableOpacity
              onPress={() => navigation?.goBack()}
              style={styles.tchStyle}>
              <ChevronLeftIcon size={'30'} strokeWidth={2.5} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsFavorite(!isFavorite)}
              style={styles.heartIcon}>
              <HeartIcon
                size={38}
                color={isFavorite ? COLOR_ERROR_RED : COLOR_WHITE}
              />
            </TouchableOpacity>
          </View>
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
            <Text style={styles.ratingText}>{item.imdbRating}/10</Text>
            <StarRating rating={parseFloat(item.imdbRating)} />
          </>
        )}
      </View>
      {/** watch movie you tube view */}
      <Text style={styles.watch}>Tap below to Watch Full Movie</Text>
      <View style={styles.container}>
        <View style={styles.youtubeContainer}>
          <YoutubePlayer height={300} play={false} videoId={youtubeVideoId} />

          <TouchableOpacity
            style={styles.playButton}
            onPress={handleWatchMovie}>
            <Text style={styles.playButtonText}>▶️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default MoviesScreen;
