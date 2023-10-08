import React from 'react';
import { images} from '../../constants'
import { SubHeading } from '../../components';  

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
        <SubHeading title='contact'/> 
        <h1 className='headtext__cormorant' style={{marginBottom : '3rem'}}>Find Us</h1>
        <div className='app__wrapper-content'>
          <p className='p__opensans'>Lane ends bunglow,Walcraft hale lane,Rudheath,CW9 75G</p>
          <p className='p__cormorant' style={{color:"#dcca87", margin:'2rem 0'}}>Opening Hours</p>
          <p className='p__opensans'>Mon-fri : 10:00 am to 2:00 am</p>
          <p className='p__opensans'>sat-sun : 10:00 am to 3:00 am</p>
        </div>
        <button className='custom__button' style={{marginTop:'2rem'}}> Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus"/>
    </div>
  </div>
);

export default FindUs;
