import React, {createContext, useContext, useReducer, useState} from 'react';

const defaultValue = {
  name: 'Furkan',
  surname: 'Türkyılmaz',
  title: 'Senior React Native Developer',
  message: 'Furkan Türkyılmaz ile React Native Context API eğitimi!',
  linkedin: 'linkedin.com/furkanturkyilmaz',
  isDarkMode: false,
};

//Context Oluşturuldu.
const MainContext = createContext(defaultValue);

const MainContextProvider = ({children}: any) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [title, setTitle] = useState('Senior React Native Developer');

  const changeIsDarkMode = () => {
    setIsDarkMode(prevState => !prevState);
  };

  const changeTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  return (
    <MainContext.Provider
      value={{title: title, isDarkMode, changeIsDarkMode, changeTitle}}>
      {children}
    </MainContext.Provider>
  );
};

export {useContext, MainContext, MainContextProvider};
