import './App.css';
import React, { useState } from 'react';
import {Home} from './Home/Home';
import {IntlProvider} from 'react-intl'
import en_messages from './i18n/en.json';
import es_messages from './i18n/es.json';

const messages = {
  'en': en_messages,
  'es': es_messages,
}

function App() {
  const [locale, setLocale] = useState(navigator.language.split(/[-_]/)[0]);

  const changeLocale = (locale) => {
    return () => {
      setLocale(locale)
    }
  }
  return (
    <IntlProvider messages={messages[locale] || messages['en']} locale="locale" defaultLocale="en">
      <button onClick={changeLocale('en')}>Change to english</button>
      <button onClick={changeLocale('es')}>Change to spanish</button>
      <Home />
    </IntlProvider>
  );
}

export default App;
