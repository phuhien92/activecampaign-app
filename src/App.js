import './App.css';
import React from "react";
import ContactContainer from './containers/ContactContainer';
import { AppProvider } from './context';

export default function App() {
  return (
    <AppProvider>
      <ContactContainer />
    </AppProvider>
  );
}
