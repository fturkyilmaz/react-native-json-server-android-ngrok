import React, {useContext} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Switch,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MainContext} from '../context/MyContext';

type SectionProps = PropsWithChildren<{
  title?: string;
  isDarkMode?: boolean;
}>;

function Home(): JSX.Element {
  const [state, dispatch, customvalue] = useContext(MainContext);

  console.log('customvalue', customvalue);

  const {isDarkMode} = state;

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    padding: 25,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Switch
          onChange={() => dispatch({type: 'TOGGLE_THEME'})}
          value={isDarkMode}
        />

        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {state.title}
        </Text>

        <Button
          title="Title Değiştir"
          onPress={() =>
            dispatch({
              type: 'CHANGE_TITLE',
              title: 'Yeni Title bu!',
            })
          }
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
