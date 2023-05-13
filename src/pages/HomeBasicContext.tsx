import React, {useContext, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Switch,
  Button,
  Platform,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MainContext} from '../context/MyContext';

import axios from 'axios';

function Home(): JSX.Element {
  const {title, isDarkMode, changeTitle, changeIsDarkMode} =
    useContext(MainContext);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    padding: 25,
  };

  const baseUrl =
    Platform.OS === 'android'
      ? 'https://b9ec-95-70-175-97.eu.ngrok.io'
      : 'http://localhost:3000/';

  useEffect(() => {
    axios.get(`${baseUrl}/posts/1`).then(response => {
      console.log(response.data);
    });
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Switch onChange={() => changeIsDarkMode()} value={isDarkMode} />

        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>

        <Button
          title="Title Değiştir"
          onPress={() => changeTitle('Selamlar Context API')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;
