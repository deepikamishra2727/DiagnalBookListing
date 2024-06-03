/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Navigator from './src/Routes';

const App = () => {

  return (
    <View style={styles.container} >
      <Navigator />
    </View>     
  
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

export default App;
