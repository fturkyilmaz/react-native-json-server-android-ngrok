import {View, Text, Switch} from 'react-native';
import React, {useContext} from 'react';
import {MainContext} from '../context/MyContext';

export default function ThemSwitcher() {
  const [state, dispatch] = useContext(MainContext);

  const {isDarkMode} = state;

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Is Dark Mode</Text>
      <Switch
        onChange={() => dispatch({type: 'TOGGLE_THEME'})}
        value={isDarkMode}
      />
    </View>
  );
}
