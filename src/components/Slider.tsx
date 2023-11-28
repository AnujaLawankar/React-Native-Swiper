import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
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

const Slider = () => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={true}
      showsPagination={true} // Show pagination dots
      paginationStyle={styles.pagination} // Customize pagination container style
      dot={customDot} // Customize inactive dot
      activeDot={customActiveDot} // Customize active dot
    >
      <View style={styles.slide1}>
        <Text style={styles.text}>
          Press{' '}
          <Ionicons
            name="accessibility-outline"
            size={iconSize}
            color="white"
          />{' '}
          below to start your journey to a less stressful life.
        </Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>
          Check out{' '}
          <Ionicons name="settings-outline" size={iconSize} color="white" />{' '}
          below to configure your meditation experience.
        </Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>
          Use{' '}
          <Ionicons name="help-circle-outline" size={iconSize} color="white" />{' '}
          on the top right from any screen to send us your feedback.
        </Text>
      </View>
      <View style={styles.slide4}>
        <Text style={styles.text}>
          Tap <Ionicons name="share-outline" size={iconSize} color="white" /> on
          Exercises screen to share your Resilient Moments with others.
        </Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  pagination: {
    bottom: 250, // Adjust the bottom spacing for pagination
  },
  slide1: {
    flex: 0.3,
    marginTop: moderateScale(260),
    margin: moderateScale(23),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    borderRadius: 20,
  },
  slide2: {
    flex: 0.3,
    marginTop: moderateScale(260),
    margin: moderateScale(23),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    borderRadius: 20,
  },
  slide3: {
    flex: 0.3,
    marginTop: moderateScale(260),
    margin: moderateScale(23),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    borderRadius: 20,
  },
  slide4: {
    flex: 0.3,
    marginTop: moderateScale(260),
    margin: moderateScale(23),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    borderRadius: 20,
  },
  text: {
    margin: 5,
    color: 'white',
    fontSize: 21,
  },
});

export default Slider;
