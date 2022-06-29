import React from 'react';
import Image from 'react-bootstrap/Image'
import AngularIcon from '../../assets/angular.png'
import ReactIcon from '../../assets/react.png'
import NodeIcon from '../../assets/node.svg'
import VueIcon from '../../assets/vue.png'
import JavascriptIcon from '../../assets/javascript.png'
import { FormattedMessage } from 'react-intl';
import './_about.scss';

const IMAGE_HEIGHT = 140;
const logos = [JavascriptIcon, ReactIcon, VueIcon, AngularIcon, NodeIcon];


export const About = () => {
  return (
    <div className='main-section'>
      <p className='about-description'>
        <FormattedMessage id='about-description-1'/><br/>
        <FormattedMessage id='about-description-2'/><b><FormattedMessage id='about-description-2-tech'/></b><br/>
        <FormattedMessage id='about-description-3'/><br/>
      </p>
      <div className='mt-5 d-flex flex-wrap justify-content-around justify-content-lg-between'>
        {logos.map(logoSrc => (
          <Image height={IMAGE_HEIGHT} src={logoSrc} className="py-2"></Image>
        ))}
      </div>
    </div>
  );
}