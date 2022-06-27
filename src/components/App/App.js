import React, { useState } from 'react';
import {Home} from '../Home/Home';
import {IntlProvider} from 'react-intl'
import { NavBar } from '../Navbar/Navbar';
import { LANGUAGES } from '../../i18n/constants';

function App() {
  const [selectedLocale, setLocale] = useState(navigator.language.split(/[-_]/)[0]);

  const onChangeLocale = (selectedLocale) => {
    return () => {
      setLocale(selectedLocale)
    }
  }

  const translatedMessages = (LANGUAGES[selectedLocale] || LANGUAGES['en']).messages;

  return (
    <IntlProvider messages={translatedMessages} locale="locale" defaultLocale="en">
      <NavBar selectedLocale={selectedLocale} onChangeLocale={onChangeLocale}/>
      <Home />
    </IntlProvider>
  );
}

export default App;
