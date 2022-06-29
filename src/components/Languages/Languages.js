import React from 'react';
import { FormattedMessage } from 'react-intl';

const languages = [
  {
    name: 'spanish',
    level: 'native'
  },
  {
    name: 'english',
    level: 'advanced-c1',
    description: 'description-english'
  },
]

export const Languages = () => {
  return (
    <div className='main-section' id="languages">
      <span class="anchor" id="languages"></span>
      <h2 className='mb-5'><FormattedMessage id="languages"/></h2>
      <ul>
        {languages.map(lang => (
          <li className="mt-4">
            <h3><FormattedMessage id={lang.name}/>{' | '}<FormattedMessage id={lang.level}/></h3>
            {lang.description && <p className='mb-0'><FormattedMessage id={lang.description}/></p>}
          </li>
        ))}
      </ul>
    </div>
  );
}