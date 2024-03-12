import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {styles} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {BLOCKBUSTERS} from '../../helper';
import {moviesData} from '../../containers/moviesData';

const AllMovies = () => {
  const params = useRoute();
  const {title} = params?.params;
  const navigation = useNavigation();
  const topRatedData = moviesData.results?.filter(
    movie => movie.imdbRating > 8,
  );
  return (
    <View style={styles.viewContainer}>
      <View>
        <SafeAreaView style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <ChevronLeftIcon size={'28'} strokeWidth={2.5} color={'white'} />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>{title}</Text>
        </SafeAreaView>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollStyle}>
        <View style={styles.viewStyle}>
          {title === BLOCKBUSTERS
            ? moviesData?.results?.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => navigation?.push('MovieScreen', item)}>
                    <View style={styles.imageContainer}>
                      <Image
                        source={{uri: item?.Poster}}
                        style={styles.imageStyle}
                      />
                      <Text style={styles.title}>
                        {item?.Title?.length > 20
                          ? item.Title?.slice(0, 20) + '...'
                          : item.Title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })
            : topRatedData?.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => navigation?.push('MovieScreen', item)}>
                    <View style={styles.imageContainer}>
                      <Image
                        source={{uri: item?.Poster}}
                        style={styles.imageStyle}
                      />
                      <Text style={styles.title}>
                        {item?.Title?.length > 20
                          ? item.Title?.slice(0, 20) + '...'
                          : item.Title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
        </View>
      </ScrollView>
    </View>
  );
};

export default AllMovies;
