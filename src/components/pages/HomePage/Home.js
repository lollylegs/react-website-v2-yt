import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import {homeObjOne,homeObjThree,homeObjTwo,homeObjFour} from './Data';

function Home() {
   return (
      <>
         <HeroSection {...homeObjOne} />
         <Pricing />
         <HeroSection {...homeObjThree} />
         <HeroSection {...homeObjTwo} />
         <HeroSection {...homeObjFour} />
      </>
   )
}

export default Home;
