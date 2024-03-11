import {Dimensions, Platform} from 'react-native';

export const isIOS = Platform.OS === 'ios';
export var {width, height} = Dimensions.get('window');
import moment from 'moment';
export const getFullDatewithShortMonth = (__date, fromIsExpired = false) => {
  const _date = fromIsExpired ? __date?.slice(0, -1) : __date;
  const newDate = _date ? new Date(_date) : new Date();
  const getDate = newDate?.getDate();
  const getMonth = _date ? moment(_date).format('MMM') : newDate?.getMonth();
  const getFullYear = newDate?.getFullYear();
  return getDate + ' ' + getMonth + ' ' + getFullYear;
};
export const BLOCKBUSTERS = 'Blockbusters';
export const TOPRATED = 'Top Rated';
export const UPCOMING_MOVIES = 'Upcoming Movies';
