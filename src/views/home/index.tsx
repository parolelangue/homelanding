'use client';
import Flow from './contents/flow';
import HeroSection from './contents/hero';
import OurSolutionSection from './contents/our-solution';
import OurTechnologySection from './contents/our-technology';
import OrganizationSection from './contents/organization';
import ServicesSection from './contents/services';
import { Divider } from '@mui/material';
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Flow />
      <OurTechnologySection />
      <Divider sx={{ borderColor: '#e2e2e2', my: 0 }} />
      <ServicesSection />
      <OurSolutionSection />
      <OrganizationSection />
    </>
  );
};

export default HomePage;
