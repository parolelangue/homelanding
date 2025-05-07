import { WIDTH_MEDIUM } from '@/@core/configs';
import { useResources } from '@/@core/hooks/useResources';
import { SectionTitle } from '@/@core/styles/common';
import { Button, Divider, keyframes, Stack, styled, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import LogoShort from '../../icons/LogoShort';
import SocialFacebook from '../../icons/SocialFacebook';
import SocialInstagram from '../../icons/SocialInstagram';
import SocialLinked from '../../icons/SocialLinked';
import MainWrapper from '../sections/main-wrapper';
import LogoMainV2 from '../../icons/LogoMainV2';
import { LINKS } from '@/@core/constants/general';

const Wrap = styled('footer')(({ theme }) => ({
  width: '100%',
  backgroundColor: '#101010',
  overflow: 'hidden',
  position: 'relative',
  padding: '70px 0 100px 0',
  backgroundImage: 'url(/images/footer/footer-bg.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '.intro': {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    color: theme.palette.grey[300],
    fontWeight: 400,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    padding: '70px 0.5rem',
  },
}));

const SocialList = styled('ul')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0 1.5rem',
  listStyleType: 'none',
  li: {
    svg: {
      path: {
        transition: 'all .25s',
      },
    },
    '&:hover': {
      svg: {
        path: {
          fill: theme.palette.common.white,
          transition: 'all .25s',
        },
      },
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    marginBottom: '0.75rem',
  },
}));

const Navs = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  ul: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    listStyleType: 'none',
    li: {
      padding: '0.5rem 1rem',
      a: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: '1.5rem',
        color: theme.palette.common.white,
        position: 'relative',
        '&:after': {
          content: `''`,
          position: 'absolute',
          left: 'auto',
          right: '0',
          bottom: '-2px',
          width: '0%',
          height: '2px',
          backgroundColor: theme.palette.common.white,
          transition: 'all .25s',
        },
        '&:hover': {
          '&:after': {
            width: '100%',
            left: 0,
            right: 'auto',
            transition: 'all .25s',
          },
        },
      },
    },
  },
  '&.active': {
    ul: {
      li: {
        a: {
          color: theme.palette.grey[900],
          '&:after': {
            backgroundColor: theme.palette.common.black,
          },
        },
      },
    },
  },
  [theme.breakpoints.down('xl')]: {},
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [`@media (max-width: 1270px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    ul: {
      alignItems: 'flex-end',
      flexDirection: 'column',
    },
  },
}));

const moveToRightBottom = keyframes`
  0% {
    transform: translateX(-20px)  translateY(0);
  }
  25% {
    transform: translateX(20px) : translateY(0);
  }
      50% {
    transform: translateX(0px) translateY(0px);
  }
      75% {
    transform:translateX(20px) translateY(20px);
  }
  100% {
    transform: translateX(0px)  translateY(-20px);
  }
`;

const moveToLeftTop = keyframes`
  0% {
    transform: translateX(-20px)  translateY(0);
  }
  25% {
    transform: translateX(20px) : translateY(0);
  }
      50% {
    transform: translateX(0px) translateY(0px);
  }
      75% {
    transform:translateX(20px) translateY(-20px);
  }
  100% {
    transform: translateX(0px)  translateY(-20px);
  }
`;

const AprotechBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '500px',
  height: '500px',
  '.aprotech-box': {
    zIndex: 2,
    width: '300px',
    height: '300px',
  },
  '.shadow-1': {
    position: 'absolute',
    bottom: '0',
    left: '0',
    background: 'radial-gradient(51.74% 50.67% at 54.86% 47.16%, #002477 0%, #000 100%)',
    width: '225px',
    height: '225px',
    mixBlendMode: 'plus-lighter',
    filter: 'blur(43px)',
    animation: `${moveToLeftTop} 3s ease-in-out infinite`,
  },
  '.shadow-2': {
    position: 'absolute',
    top: '0',
    right: '0',
    background: 'radial-gradient(51.74% 50.67% at 54.86% 47.16%, #9FBCFF 0%, #000 100%)',
    width: '426.079px',
    height: '288.634px',
    mixBlendMode: 'plus-lighter',
    filter: 'blur(50px)',
    opacity: 0.6,
    animationDelay: '1s',
    animation: `${moveToRightBottom} 4s ease-in-out infinite`,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '350px',
    '.aprotech-box': {
      width: '220px',
      height: '220px',
    },
  },
}));
const AprotechCard = styled('div')(({ theme }) => ({
  padding: '1.5rem 3rem 1.5rem 1.5rem',
  backgroundColor: '#0a0a0a',
  borderRadius: '0.5rem',
  backdropFilter: 'blur(50px)',
  position: 'relative',
  '&:after': {
    content: `''`,
    position: 'absolute',
    width: 'calc(100% + 2px)',
    height: 'calc(100% + 2px)',
    zIndex: 1,
    top: '-1px',
    left: '-1px',
    borderRadius: '0.5rem',
    background: 'linear-gradient(320deg,rgba(0, 0, 0, 0) 30%, rgba(217, 217, 217, 1) 171%)',
  },
  '&:before': {
    content: `''`,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    borderRadius: '0.5rem',
    backgroundColor: '#0a0a0a',
  },
  '.section,  .divider': {
    zIndex: 3,
    position: 'relative',
  },
  '.title': {
    marginBottom: '0.325rem',
  },
  '.title, .label': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    color: theme.palette.grey[400],
    fontWeight: 400,
  },
  '.label': {
    minWidth: '90px',
  },
  '.value': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    color: theme.palette.common.white,
    fontWeight: 400,
  },
  '.link': {
    position: 'relative',
    '&:after': {
      content: `''`,
      position: 'absolute',
      left: 'auto',
      right: '0',
      bottom: '-2px',
      width: '0%',
      height: '2px',
      backgroundColor: theme.palette.common.white,
      transition: 'all .25s',
    },
    '&:hover': {
      '&:after': {
        width: '100%',
        left: 0,
        right: 'auto',
        transition: 'all .25s',
      },
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    '&:after': {
      background: 'linear-gradient(-105deg,rgba(0, 0, 0, 0) 30%, rgba(217, 217, 217, 1) 171%)',
    },
  },
}));

type FooterProps = {
  footerContent?: any;
};

const Footer = (props: FooterProps) => {
  const { t, i18n } = useTranslation('common');
  const { navLinks } = useResources();
  const theme = useTheme();

  const _onScrollToSection = (id: string) => {
    const ele = document.getElementById(id);
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const socials = [
    {
      label: 'Linked',
      Icon: SocialLinked,
      href: 'https://www.linkedin.com/company/aprotech-global',
    },
    {
      label: 'Instagram',
      Icon: SocialInstagram,
      href: 'https://www.instagram.com/aprotech.kr/',
    },
    {
      label: 'Facebook',
      Icon: SocialFacebook,
      href: 'https://www.facebook.com/aprotech.kr',
    },
  ];

  return (
    <Wrap id="contact">
      <MainWrapper sxProps={{ zIndex: 2, position: 'relative' }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-end' }}
          justifyContent="space-between"
          mb={{ xs: '1.25rem', md: '2.5rem', lg: '3.5rem' }}
        >
          <Stack
            alignItems={{ xs: 'center', md: 'flex-start' }}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
          >
            <Stack direction="row" alignItems="center" gap="0 0.5rem">
              <LogoShort />
              <Typography className="sub-title" sx={{ color: theme.palette.common.white }}>
                {t('homePage.contact')}
              </Typography>
            </Stack>
            <SectionTitle
              dangerouslySetInnerHTML={{ __html: t('homePage.greatIdeaCreativeTechnology') }}
              sx={{
                color: theme.palette.common.white,
                textTransform: 'initial !important',
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            />
          </Stack>

          <Link href={LINKS.DOCS_SITE} target="_blank" passHref>
            <Button
              variant="contained"
              sx={{
                mt: { xs: '1rem', md: '0' },
                backgroundColor: theme.palette.common.white,
                color: theme.palette.grey[900],
                '&:hover': {
                  color: theme.palette.common.white,
                  backgroundColor: theme.palette.grey[500],
                },
              }}
            >
              {t('button.techBlog')}
            </Button>
          </Link>
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems={'center'}
          justifyContent="center"
          gap={{ xs: '1rem 0', md: '0 1rem' }}
        >
          <AprotechBox>
            <img src="/images/footer/aprotech-box.png" className="aprotech-box" />
            <div className="shadow-1" />
            <div className="shadow-2" />
          </AprotechBox>
          <AprotechCard>
            <div className="section">
              <Typography className="title" variant="body1">
                {t('common.hotline')}
              </Typography>
              <Typography className="value" variant="body1">
                +82 2-2658-9004
              </Typography>
            </div>
            <Divider className="divider" sx={{ my: '1.25rem' }} />
            <div className="section">
              <Typography className="title" variant="body1">
                {t('common.address')}
              </Typography>
              <Stack direction="column" gap="0.325rem 0">
                <Stack direction="row" gap="0 0.325rem ">
                  <Typography className="label" variant="body1">
                    {t('common.korea')}:
                  </Typography>
                  <Typography className="value" variant="body1">
                    서울특별시 금천구 디지털로10길 37, 1415호 (가산동, 가산아스크타워)
                  </Typography>
                </Stack>
                <Stack direction="row" gap="0 0.325rem ">
                  <Typography className="label" variant="body1">
                    {t('common.vietnam')}:
                  </Typography>
                  <Typography className="value" variant="body1">
                    SCETPA Building, 19A Cong Hoa Street, Ward 12, Tan Binh District, HCMC, Vietnam
                  </Typography>
                </Stack>
              </Stack>
            </div>{' '}
            <Divider className="divider" sx={{ my: '1.25rem' }} />
            <div className="section">
              <Typography className="title" variant="body1">
                {t('common.email')}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap="0.325rem 0">
                <Stack direction="row" width={{ xs: '100%', md: '50%' }} gap="0 0.325rem ">
                  <Typography className="label" variant="body1">
                    {t('common.project')}:
                  </Typography>
                  <Link className="value link" href="mailto:contact@aprotech.kr">
                    contact@aprotech.kr
                  </Link>
                </Stack>
                <Stack direction="row" width={{ xs: '100%', md: '50%' }} gap="0 0.325rem ">
                  <Typography className="label" variant="body1">
                    {t('common.r&D')}:
                  </Typography>
                  <Link className="value link" href="mailto:tech@aprotech.kr">
                    tech@aprotech.kr
                  </Link>
                </Stack>
                <Stack direction="row" width={{ xs: '100%', md: '50%' }} gap="0 0.325rem ">
                  <Typography className="label" variant="body1">
                    {t('common.technology')}:
                  </Typography>
                  <Link className="value link" href="mailto:support@aprotech.kr">
                    support@aprotech.kr
                  </Link>
                </Stack>
                <Stack direction="row" width={{ xs: '100%', md: '50%' }} gap="0 0.325rem ">
                  <Typography className="label" variant="body1">
                    {t('common.help')}:
                  </Typography>
                  <Link className="value link" href="mailto:help@aprotech.kr">
                    help@aprotech.kr
                  </Link>
                </Stack>
              </Stack>
            </div>
          </AprotechCard>
        </Stack>
        <Stack
          direction={{ xs: 'row', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          mt={{ xs: '1.5rem', md: '0' }}
        >
          <LogoMainV2 />
          <Navs>
            <ul>
              {navLinks.map((nav, index) => (
                <li key={index}>
                  <Link
                    onClick={(e) => {
                      _onScrollToSection(nav.path);
                      e.preventDefault();
                    }}
                    href={nav.path}
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Navs>
        </Stack>
        <Divider sx={{ my: '2.5rem' }} />
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
        >
          <SocialList>
            {socials.map((social, index) => {
              const Icon = social.Icon;
              return (
                <li key={index}>
                  <Link href={social.href}>
                    <Icon />
                  </Link>
                </li>
              );
            })}
          </SocialList>
          <Typography className="intro" variant="body1">
            © 2025. Aprotech Inc. All rights reserved.
          </Typography>
        </Stack>
      </MainWrapper>
    </Wrap>
  );
};

export default Footer;
