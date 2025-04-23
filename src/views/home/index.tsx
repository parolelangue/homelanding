import { IMainContent } from '@/@core/types/home';
import AboutSection from './contents/about';
import ContactSection from './contents/contact';
import HeroSection from './contents/hero';
import NewSection from './contents/news';
import Advertisement from '@/@core/components/advertisement';
import cookieHelper from '@/@core/utils/cookie';
import { CookieStorageKeys } from '@/@core/constants/general';
import OurTechnologySection from './contents/our-technology';
import OurSolutionSection from './contents/our-solution';
import Flow from './contents/flow';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <OurTechnologySection />
      <OurSolutionSection />
      <Flow />
      {/* <HeroSection index={data?.index || []} banners={data?.bnnr || []} />
      <AboutSection />
      <BoardTradingSection data={data?.cis || []} />
      <InstallationSection />
      <NewSection />
      <ContactSection /> */}
    </>
  );
};

export default HomePage;
