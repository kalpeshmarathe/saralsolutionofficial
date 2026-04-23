import React from 'react';
import Hero from '../components/Hero';
import DsaSheet from '../components/DsaSheet';
import { WhyUs } from '../components/TrustSections';
import { HowItWorks, Faq } from '../components/InteractiveSections';
import { Blog, CtaBanner } from '../components/FooterSections';

const Home = () => {
  return (
    <>
      <Hero />
      <DsaSheet />
      <WhyUs />
      <HowItWorks />
      <Faq />
      <Blog />
      <CtaBanner />
    </>
  );
};

export default Home;
