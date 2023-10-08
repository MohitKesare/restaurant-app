import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title='NewsLetter'/>
      <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
      <p className='p__opensansd'>nd never miss latest updates</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type='text' placeholder="enter your email address"/>
      <button className='custom__button'> Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
