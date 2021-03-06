/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

// Internal Dependencies
import AppLogo from './components/AppLogo';
import Separator from './components/Separator';
import getRandomButtonTitle from './utils/get-random-button-title';

// Component Definition
const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.header}>
            <AppLogo />
          </View>
          <Separator />
          <View style={styles.section}>
            <View style={styles.sectionTextContainer}>
              <Text style={styles.text}>
                Beyond this portal lies hilarity.
              </Text>
            </View>
            <TouchableOpacity
              accessibilityLabel="Pick a random joke."
              onPress={() => Alert.alert('hello')}
            >
              <Text
                style={styles.button}
              >
                {getRandomButtonTitle()}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lavender',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#f5f5f5',
    paddingBottom: 40,
    paddingHorizontal: 32,
    paddingTop: 96,
  },
  section: {
    backgroundColor: '#ffffff',
    paddingVertical: 40,
    paddingHorizontal: 32,
  },
  sectionTextContainer: {
    paddingVertical: 32,
  },
  text: {
    color: 'purple',
    fontSize: 32,
    paddingBottom: 32,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
