import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LANGUAGES } from '../../i18n/constants';
import { Translate as TranslateIcon } from 'react-bootstrap-icons';

export const LocaleSelector = ({ selectedLocale, onChangeLocale }) => {
  const title = (
    <>
      <TranslateIcon className="mr-2"/>
      {LANGUAGES[selectedLocale].title}
    </>
  );

  return (
    <NavDropdown title={title} bg="dark" variant="dark">
      {Object.keys(LANGUAGES).map(locale => {
        const language = LANGUAGES[locale];
        return (
          <NavDropdown.Item onClick={onChangeLocale(locale)}>{language.title}</NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
}