import React, {createContext, useContext, useReducer, useState} from 'react';

interface IContextProps {
  name: string;
  surname: string;
  title: string;
  message: string;
  linkedin: string;
  isDarkMode: boolean;
}

type ContextProviderProps = {
  children: string | JSX.Element | JSX.Element[];
};

const defaultValue = {
  name: 'Furkan',
  surname: 'Türkyılmaz',
  title: 'Senior React Native Developer',
  message: 'Furkan Türkyılmaz ile React Native Context API eğitimi!',
  linkedin: 'linkedin.com/furkanturkyilmaz',
  isDarkMode: false,
};

//Context Oluşturuldu.
const MainContext = createContext<IContextProps>(defaultValue);

const reducer = (state = {} as IContextProps, action: any) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {...state, isDarkMode: state.isDarkMode ? false : true};

    case 'CHANGE_TITLE':
      return {...state, title: action.title};

    default:
      return state;
  }
};

const MainContextProvider = ({children}: ContextProviderProps) => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  const [state, dispatch] = useReducer(reducer, defaultValue);

  // const changeIsDarkMode = () => {
  //   setIsDarkMode(prevState => !prevState);
  // };

  return (
    <MainContext.Provider value={[state, dispatch, {title: 'value'}]}>
      {children}
    </MainContext.Provider>
  );
};

export {useContext, MainContext, MainContextProvider};
