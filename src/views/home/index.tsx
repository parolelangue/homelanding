'use client';
import gsap from 'gsap';
import Flow from './contents/flow';
import HeroSection from './contents/hero';
import OurSolutionSection from './contents/our-solution';
import OurTechnologySection from './contents/our-technology';
import OrganizationSection from './contents/organization';
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Flow />
      <OurTechnologySection />
      <OurSolutionSection />
      <OrganizationSection />
    </>
  );
};

export default HomePage;
