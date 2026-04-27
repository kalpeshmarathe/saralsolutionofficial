import React from 'react';
import Hero from '../components/Hero';
import Courses from '../components/Courses';
import { WhyUs, Marquee } from '../components/TrustSections';
import { HowItWorks, Faq } from '../components/InteractiveSections';
import { Blog, CtaBanner } from '../components/FooterSections';
import SocialProof from '../components/SocialProof';

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <Courses />
      <WhyUs />
      <HowItWorks />
      <SocialProof />
      <Faq />
      <Blog />
      <CtaBanner />
    </>
  );
};

export default Home;
