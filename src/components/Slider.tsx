import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from 'react-native-size-matters';

const iconSize = moderateScale(20);

const customDot = (
  <View
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      width: 8,
      height: 8,
      borderRadius: 4,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
    }}
  />
);

const customActiveDot = (
  <View
    style={{
      backgroundColor: '#007aff',
      width: 8,
      height: 8,
      borderRadius: 4,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
    }}
  />
);

const Slider = ({data}: any) => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={true}
      showsPagination={true}
      paginationStyle={styles.pagination}
      dot={customDot}
      activeDot={customActiveDot}>
      {data.map((item: any, index: any) => (
        <View key={index} style={styles.slide}>
          <Text style={styles.text}>
            {item.text}{' '}
            <Ionicons name={item.iconName} size={iconSize} color="white" />{' '}
            {item.extraContent}
          </Text>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  pagination: {
    bottom: 250,
  },
  slide: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    borderRadius: 20,
    margin: moderateScale(23),
    marginTop: moderateScale(260),
  },
  text: {
    margin: 5,
    color: 'white',
    fontSize: 21,
  },
});

export default Slider;
