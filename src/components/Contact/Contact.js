import React from 'react';
import './_contact.scss';
import { FormattedMessage } from 'react-intl';

export const Contact = () => {
  return (
    <div className='main-section contact-section mt-5'>
      <span class="anchor" id="contact"></span>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2><FormattedMessage id="contact"/></h2>
        <h4> LinkedIn: <a href="https://www.linkedin.com/in/sofia-barreiro" target="_blank" rel="noopener noreferrer">sofia-barreiro</a> </h4>
        <h4><FormattedMessage id="email" />: sofiacbarreiro@gmail.com </h4>
      </div>
    </div>
  );
}