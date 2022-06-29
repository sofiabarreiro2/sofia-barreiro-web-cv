import React from 'react';
import Image from 'react-bootstrap/Image'
import profileImg from '../../assets/profile.png';
import { FormattedMessage } from 'react-intl';
import './_title.scss';

export const Title = () => {
  return (
    <div className='main-section row d-flex justify-content-between'>
      <div className='col-12 col-lg-4 my-3 d-flex justify-content-center justify-content-lg-start'>
        <Image roundedCircle src={profileImg} width={'100%'} className="profile-img"/>
      </div>
      <div className='col-12 col-lg-7 d-flex flex-column justify-content-center align-items-center align-items-lg-start my-3 name-container'>
        <h1 className='text-align-center'>Sofía Barreiro</h1>
        <h3 className='text-align-center'><FormattedMessage id='senior-fe-developer'/></h3>
        <p className='text-align-center'>Montevideo, Uruguay</p>
      </div>
    </div>
  );
}