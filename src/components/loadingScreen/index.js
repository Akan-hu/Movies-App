import {View, Text} from 'react-native';
import React from 'react';
import {style} from './styles';
import * as Progress from 'react-native-progress';
import {YELLOW_DARK} from '../../helper/colors';

const LoadingScreen = () => {
  return (
    <View style={style.containerStyle}>
      <Progress.CircleSnail thickness={8} size={80} color={YELLOW_DARK} />
    </View>
  );
};

export default LoadingScreen;
