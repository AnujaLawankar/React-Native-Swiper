import {View, StyleSheet} from 'react-native';
import React from 'react';

import Slider from './src/components/Slider';

const App = () => {
  return (
    <View style={styles.container}>
      <Slider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
