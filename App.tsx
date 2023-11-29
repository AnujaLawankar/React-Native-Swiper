import React from 'react';
import {View, StyleSheet} from 'react-native';
import Slider from './src/components/Slider';

const App = () => {
  const sliderData = [
    {
      text: 'Press',
      iconName: 'accessibility-outline',
      extraContent: 'below to start your journey to a less stressful life.',
    },
    {
      text: 'Check out',
      iconName: 'settings-outline',
      extraContent: 'below to configure your meditation experience.',
    },
    {
      text: 'Use',
      iconName: 'help-circle-outline',
      extraContent:
        'on the top right from any screen to send us your feedback.',
    },
    {
      text: 'Tap',
      iconName: 'share-outline',
      extraContent:
        'on Exercises screen to share your Resilient Moments with others.',
    },
  ];

  return (
    <View style={styles.container}>
      <Slider data={sliderData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
