import React from 'react';
import { FormattedMessage } from 'react-intl';

const experiences = [
  {
    position: 'senior-fe-developer',
    place: 'Upwork',
    location: 'USA',
    fromMonth: 'january',
    fromYear: '2022',
    description: 'upwork-description'
  },
  {
    position: 'senior-fe-developer',
    place: 'GoDaddy',
    location: 'USA',
    fromMonth: 'april',
    fromYear: '2021',
    toMonth: 'january',
    toYear: '2022',
    description: 'godaddy-description'
  },
  {
    position: 'fe-developer',
    place: 'Bixlabs',
    location: 'Uruguay',
    fromMonth: 'february',
    fromYear: '2017',
    toMonth: 'april',
    toYear: '2021',
    description: 'bixlabs-description'
  },
  {
    position: 'wp-developer',
    place: 'Freelance',
    location: 'Uruguay',
    fromMonth: 'october',
    fromYear: '2017',
    description: 'wp-description'
  }
];

export const Experience = () => {
  return (
    <div className='main-section'>
      <span class="anchor" id="experience"></span>
      <h2 className='mb-5'><FormattedMessage id='experience'/></h2>
      <ul>
        {experiences.map(exp => (
          <li className="mt-4">
            <h3><FormattedMessage id={exp.position}/>{` | ${exp.place} (${exp.location})`}</h3>
            <p className='mb-0'>
              <FormattedMessage id={exp.fromMonth}/>{` ${exp.fromYear} - `}
              {exp.toMonth ? <><FormattedMessage id={exp.toMonth}/>{` ${exp.toYear}`}</> : <FormattedMessage id='present'/>}
            </p>
            {exp.description && <p className='mb-0'><FormattedMessage id={exp.description}/></p>}
          </li>
        ))}
      </ul>
    </div>
  );
}