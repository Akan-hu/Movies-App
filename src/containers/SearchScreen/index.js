import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {styles} from './styles';
import {COLOR_GRAY, COLOR_WHITE} from '../../helper/colors';
import {ChevronLeftIcon, XMarkIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import {moviesData} from '../moviesData';
const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  console.log('Movies list ', moviesData);
  const handleSearch = useCallback(value => {
    setSearchQuery(value);
    // Check if the search query is a valid year
    const isYear = /^\d{4}$/.test(value);
    if (value) {
      const query = value.toLowerCase();
      const filteredResults = moviesData.results.filter(
        movie =>
          movie.Title.toLowerCase().includes(query) ||
          (isYear && movie.Year === query),
      );
      setFilteredMovies(filteredResults);
    }
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredMovies([]);
      return;
    }
    handleSearch(searchQuery);
  }, [searchQuery, handleSearch]);

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.inputView}>
        <TouchableOpacity
          onPress={() => navigation?.navigate('HomeScreen')}
          style={styles.crossIconBack}>
          <ChevronLeftIcon size={28} color={COLOR_WHITE} />
        </TouchableOpacity>
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={COLOR_GRAY}
          style={styles.inputStyle}
          onChangeText={handleSearch}
          autoFocus={true}
          value={searchQuery}
        />
        <TouchableOpacity
          onPress={() => {
            setSearchQuery(''); // Clear the search query
            setFilteredMovies([]); // Reset filtered movies
            Keyboard.dismiss();
          }}
          style={styles.crossIcon}>
          <XMarkIcon size={25} color={COLOR_WHITE} />
        </TouchableOpacity>
      </View>
      <Text style={styles.resultText}>Results : {filteredMovies.length}</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollStyle}>
        <View style={styles.listItems}>
          {filteredMovies.map(item => {
            return (
              <TouchableOpacity
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
    </SafeAreaView>
  );
};

export default SearchScreen;
