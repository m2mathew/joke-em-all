/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

// Internal Dependencies
import AppLogo from './components/AppLogo';
// import WarningEmoji from './components/WarningEmoji';

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
          {/* <Header /> */}
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.header}>
            <AppLogo />
          </View>
          <View style={styles.section}>
            {/* <WarningEmoji /> */}
            <View style={styles.sectionTextContainer}>
              <Text style={styles.text}>
                Beyond this portal lies hilarity.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f5f5f5',
    paddingBottom: 40,
    paddingHorizontal: 32,
    paddingTop: 96,
  },
  section: {
    backgroundColor: '#ffffff',
    // backgroundColor: '#282C34',
    paddingVertical: 40,
    paddingHorizontal: 32,
    // paddingTop: 96,
  },
  sectionTextContainer: {
    paddingVertical: 32,
  },
  text: {
    color: 'purple',
    fontSize: 32,
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
