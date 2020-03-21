import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import Logo from '../components/Logo';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  let { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.mainContent}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <Text style={styles.paragraph}>Official WHO App for COVID-19</Text>
        <Text style={styles.paragraph}>
          Learn how to protect yourself and your community. Find medical
          resources to help.
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigate('Home')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  mainContent: {
    padding: 30,
  },
  logo: {
    width: '60%',
    alignSelf: 'center',
    aspectRatio: 1,
    alignItems: 'center',
    marginBottom: 40,
  },
  paragraph: {
    marginVertical: 15,
    fontSize: 17,
  },
  button: {
    margin: 30,
    padding: 20,
    backgroundColor: '#008dc9',
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
