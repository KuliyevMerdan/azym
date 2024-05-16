import React from 'react';

interface AppContextType {
  userCredentials: any;
  setUserCredentials: React.Dispatch<React.SetStateAction<any>>;
}

const AppContext = React.createContext({} as AppContextType);

export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;

export default AppContext;