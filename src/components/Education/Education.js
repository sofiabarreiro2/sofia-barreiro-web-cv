import React from 'react';
import { FormattedMessage } from 'react-intl';

const educations = [
  {
    title: 'computer-engineering',
    fromMonth: 'march',
    fromYear: '2014',
    toMonth: 'may',
    toYear: '2022',
    place: 'engineering-uni-udelar'
  },
  {
    title: 'product-management',
    fromMonth: 'august',
    fromYear: 2021,
    toMonth: 'december',
    toYear: 2021,
    place: 'senpai-academy'
  }
]

export const Education = () => {
  return (
    <div className='main-section'>
      <span class="anchor" id="education"></span>
      <h2 className='mb-5'><FormattedMessage id="education" /></h2>
      <ul>
        {educations.map(edu => (
          <li className="mt-4">
            <h3><FormattedMessage id={edu.title}/>{' | '}<FormattedMessage id={edu.place}/></h3>
            <p className='mb-0'>{'('}<FormattedMessage id={edu.fromMonth}/>{` ${edu.fromYear} - `}<FormattedMessage id={edu.toMonth}/>{` ${edu.toYear})`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}