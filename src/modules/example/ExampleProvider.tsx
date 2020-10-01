import React, { createContext } from 'react';

export interface IExampleStore{}
export const ExampleContext = createContext({});

export const ExampleProvider: React.FC = ({children}) => {

  const value: IExampleStore = {}

  return (
    <ExampleContext.Provider value={value}>
      {children}
    </ExampleContext.Provider>
  )
}
