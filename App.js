/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import LoginScreen from './src/screen/login';

const App = () => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <LoginScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
